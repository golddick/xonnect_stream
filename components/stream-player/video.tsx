"use client";

import React from "react";
import { ConnectionState, Track } from "livekit-client";
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react";

import { Skeleton } from "@/components/ui/skeleton";

import { OfflineVideo } from "./offline-video";
import { LoadingVideo } from "./loading-video";
import { LiveVideo } from "./live-video";
import { Schedule, User } from "@prisma/client";

export function Video({
  hostName,
  hostIdentity,
  userId,
  streamId,
  schedule,
  externalUserName,
  externalUserEmail,
}: {
  hostName: string;
  hostIdentity: string;
  userId:string;
  streamId:string;
  schedule: (Schedule & { user: User })[]
  externalUserName: string
  externalUserEmail: string
}) {
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity === hostIdentity);



   // Function to find the schedule closest to the current time
   const getClosestSchedule = (schedules: (Schedule & { user: User })[]) => {
    if (schedules.length === 0) return null;

    // Get the current time or use a stream-specific time
    const currentTime = new Date();

    // Sort schedules by the start time (ascending)
    schedules.sort((a, b) => new Date(a.eventDateTime).getTime() - new Date(b.eventDateTime).getTime());

    // Find the schedule closest to the current time
    let closestSchedule = schedules[0];
    let closestDiff = Math.abs(new Date(schedules[0].eventDateTime).getTime() - currentTime.getTime());

    schedules.forEach((schedule) => {
      const diff = Math.abs(new Date(schedule.eventDateTime).getTime() - currentTime.getTime());
      if (diff < closestDiff) {
        closestDiff = diff;
        closestSchedule = schedule;
      }
    });

    return closestSchedule;
  };

  // Get the closest schedule from the array
  const closestSchedule = getClosestSchedule(schedule);


  let content;

  if (!participant && connectionState === ConnectionState.Connected) {
    content = <OfflineVideo username={hostName} />;
  } else if (!participant || tracks.length === 0) {
    content = <LoadingVideo label={connectionState} />;
  } else {
    content = <LiveVideo participant={participant} userId={userId} streamId={streamId} 
     hostIdentity={hostIdentity}  scheduleId={closestSchedule?.id} data={closestSchedule}
    externalUserName={externalUserName} externalUserEmail={externalUserEmail}
    />;
  }


  return <div className="aspect-video border-b group relative h-[calc(100vh-200px)] w-full">{content}</div>;

}


export function VideoSkeleton() { 
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
}
