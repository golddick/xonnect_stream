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
import { toast } from "sonner";

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
  userId:string | undefined;
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
  
    // Get the current time
    const currentTime = new Date();
  
    // Filter out past schedules (only keep upcoming schedules)
    const upcomingSchedules = schedules.filter(
      (schedule) => new Date(schedule.eventDateTime).getTime() > currentTime.getTime()
    );
  
    // If no upcoming schedules exist, return null
    if (upcomingSchedules.length === 0) return null;
  
    // Sort upcoming schedules by the start time (ascending)
    upcomingSchedules.sort(
      (a, b) => new Date(a.eventDateTime).getTime() - new Date(b.eventDateTime).getTime()
    );
  
    // The first schedule in the sorted list is the closest upcoming schedule
    return upcomingSchedules[0];
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


  return <div className="aspect-video border-b group relative h-[calc(100vh-100px)] w-full">{content}</div>;

}


export function VideoSkeleton() { 
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
}
