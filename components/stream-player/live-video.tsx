
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

interface LiveVideoProps {
  participant: Participant;
  userId: string;
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(0);
  const [hasPaid, setHasPaid] = useState(false); // State to track payment status
  const [isFreeStream, setIsFreeStream] = useState(false); // State to check if the stream is free

  // Check if the stream is free
  useEffect(() => {
    if (data?.isFree === true) {
      setIsFreeStream(true);
      setHasPaid(true); // Allow access if the stream is free
    }
  }, [data]);

  // Check if the user has paid for the stream (only if the stream is not free)
  useEffect(() => {
    if (!isFreeStream && userId && streamId && scheduleId) {
      checkIfUserPurchased(userId, scheduleId, streamId)
        .then((paid) => {
          if (!paid &&  data?.isFree === false) {
            toast.error("You must purchase the stream to watch it.");
          }
          setHasPaid(paid);
        })
        .catch((error) => {
          console.error("Error checking payment status:", error);
          toast.error("Failed to verify payment status.");
        });
    }
  }, [isFreeStream, userId, streamId, scheduleId]);

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

  useEffect(() => {
    onVolumeChange(0);
  }, []);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else if (wrapperRef?.current) {
      wrapperRef.current.requestFullscreen();
    }
  };

  const handleFullscreenChange = () => {
    const isCurrentlyFullscreen = document.fullscreenElement !== null;
    setIsFullscreen(isCurrentlyFullscreen);
  };

  useEventListener("fullscreenchange", handleFullscreenChange, wrapperRef);

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant.identity)
    .forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });

  // If the stream is not free and the user hasn't paid, show a message instead of the video
  if (!isFreeStream && !hasPaid) {
    return (
      <div className="flex h-auto w-full md:w-[80%] m-auto items-center justify-center text-white gap-4 rounded-2xl ">
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
        <div className=" absolute left-0 bg-black shadow-md shadow-[red] rounded-lg px-4 p-2">
          <span>{data?.title}</span>
        </div>
        <div className="absolute right-0 lg:hidden w-[10%] mr-0 bg-transparent">
          <span>myyygs</span>
          <span>myyygs</span>
          <span>myyygs</span>
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