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
  userId:string;
  streamId: string; 
  hostIdentity: string; 
  data: Schedule | null;
  scheduleId: string | undefined

  externalUserName: string
  externalUserEmail: string
}

export function LiveVideo({ participant, streamId, userId , hostIdentity, scheduleId, data, externalUserEmail, externalUserName}: LiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(0);
  const [hasPaid, setHasPaid] = useState(false); // State to track payment status

  // Check if the user has paid for the stream
  useEffect(() => {
    if (userId && streamId && scheduleId) {
      checkIfUserPurchased(userId, scheduleId,streamId )
        .then((paid) => {
          if (!paid) {
            toast.error("You must purchase the stream to watch it.");
          }
          setHasPaid(paid);
        })
        .catch((error) => {
          console.error("Error checking payment status:", error);
          toast.error("Failed to verify payment status.");
        });
    }
  }, [userId, streamId, scheduleId]);

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

  // If the user hasn't paid, show a message instead of the video
  if (!hasPaid) {
    return (
      <div className="flex h-full w-[80%] mx-auto items-center justify-center bg-neutral-900 text-white gap-4 rounded-2xl">
        <p>You must purchase the stream to watch it. alot happeing </p>
        {userId}
        <NotPurchased data={data} userId={userId}    externalUserName={externalUserName} externalUserEmail={externalUserEmail}/>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="relative h-full flex">
      <video ref={videoRef} width="100%" />
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
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


