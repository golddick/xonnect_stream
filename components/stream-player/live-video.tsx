"use client";

import React, { useEffect, useRef, useState } from "react";
import { Participant, Track } from "livekit-client";
import { useTracks } from "@livekit/components-react";
import { useEventListener } from "usehooks-ts";
import { toast } from "sonner";
import { FullscreenControl } from "./fullscreen-control";
import { VolumeControl } from "./volume-control"; 
import { checkIfUserPurchased } from "@/actions/payment";
import { Schedule } from "@prisma/client";
import NotPurchased from "../NotPurchased/NotPurchased";
import { useRouter } from "next/navigation";

interface LiveVideoProps {
  participant: Participant;
  userId: string | undefined;
  streamId: string;
  hostIdentity: string;
  data: Schedule | null;
  scheduleId: string | undefined;
  externalUserName: string;
  externalUserEmail: string;
}

export function LiveVideo({
  participant,
  streamId,
  userId,
  hostIdentity,
  scheduleId,
  data,
  externalUserEmail,
  externalUserName,
}: LiveVideoProps) {
  // Refs and state hooks
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(0);
  const [hasPaid, setHasPaid] = useState(false);
  const [isFreeStream, setIsFreeStream] = useState(false);

  // Hooks must be called unconditionally at the top
  const router = useRouter();
  const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone]);
  useEventListener("fullscreenchange", handleFullscreenChange, wrapperRef);

  // Authentication check
  useEffect(() => {
    if (!userId) {
      toast.error("You must be logged in to access this stream.");
      router.push("/sign-in");
    }
  }, [userId, router]);

  // Free stream check
  useEffect(() => {
    if (data?.isFree === true) {
      setIsFreeStream(true);
      setHasPaid(true);
    } else {
      setIsFreeStream(false);
      setHasPaid(false);
    }
  }, [data?.isFree]);

  // Payment verification
  useEffect(() => {
    if (!userId || isFreeStream || !streamId || !scheduleId) return;

    const verifyPayment = async () => {
      try {
        const paid = await checkIfUserPurchased(userId, scheduleId, streamId);
        if (!paid && data?.isFree === false) {
          toast.error("You must purchase the stream to watch it.");
        }
        setHasPaid(paid);
      } catch (error) {
        console.error("Error checking payment status:", error);
        toast.error("Failed to verify payment status.");
      }
    };

    verifyPayment();
  }, [userId, isFreeStream, streamId, scheduleId, data?.isFree]);

  // Track attachment
  useEffect(() => {
    tracks.forEach((track) => {
      if (track.participant.identity === participant.identity && videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });
  }, [tracks, participant.identity]);

  // Volume initialization
  useEffect(() => {
    onVolumeChange(50);
  }, []);

  // Control handlers
  const onVolumeChange = (value: number) => {
    setVolume(+value);
    if (videoRef?.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = +value * 0.01;
    }
  };

  const toggleMute = () => {
    const isMuted = volume === 0;
    setVolume(isMuted ? 50 : 0);
    if (videoRef?.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else if (wrapperRef?.current) {
      wrapperRef.current.requestFullscreen();
    }
  };

  function handleFullscreenChange() {
    setIsFullscreen(document.fullscreenElement !== null);
  }

  // Conditional returns AFTER all hooks
  if (!userId) return null;

  if (!isFreeStream && !hasPaid) {
    return (
      <div className="overflow-scroll hidden-scrollbar flex h-full w-full md:w-[80%] m-auto items-center justify-center text-white gap-4 rounded-2xl">
        <NotPurchased
          data={data}
          userId={userId}
          externalUserName={externalUserName}
          externalUserEmail={externalUserEmail}
        />
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="relative h-full flex">
      <video ref={videoRef} width="100%" />
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
        <div className="absolute left-0 bg-black shadow-md shadow-[red] rounded-lg px-4 p-2">
          <span className=" capitalize">{data?.title}</span>
        </div>
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-gradient-to-r from-neutral-900 px-4">
          <VolumeControl
            onChange={onVolumeChange}
            value={volume}
            onToggle={toggleMute}
          />
          <FullscreenControl
            isFullscreen={isFullscreen}
            onToggle={toggleFullscreen}
          />
        </div>
      </div>
    </div>
  );
}