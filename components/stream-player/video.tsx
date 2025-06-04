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
import { ReviewForm } from "../ReviewForm";

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

const [wasLive, setWasLive] = React.useState(false);
const [showReview, setShowReview] = React.useState(false);

   // Function to find the schedule closest to the current time

  const getActiveOrUpcomingSchedule = (schedules: (Schedule & { user: User })[]) => {
  if (schedules.length === 0) return null;

  const now = new Date();

  const isToday = (date: Date) =>
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  // Filter schedules for today
  const todaysSchedules = schedules.filter(sch => isToday(new Date(sch.eventDateTime)));

  if (todaysSchedules.length === 0) return null;

  // 1. Find live streams (started and isLive === true)
  const liveStreams = todaysSchedules.filter(
    sch => new Date(sch.eventDateTime).getTime() <= now.getTime() && sch.isLive
  );

  if (liveStreams.length > 0) {
    // If multiple live, pick the one started most recently
    liveStreams.sort((a, b) => new Date(b.eventDateTime).getTime() - new Date(a.eventDateTime).getTime());
    return liveStreams[0];
  }

  // 2. If no live streams, find upcoming ones (not started yet)
  const upcomingStreams = todaysSchedules.filter(
    sch => new Date(sch.eventDateTime).getTime() > now.getTime()
  );

  if (upcomingStreams.length > 0) {
    // Pick the earliest upcoming
    upcomingStreams.sort((a, b) => new Date(a.eventDateTime).getTime() - new Date(b.eventDateTime).getTime());
    return upcomingStreams[0];
  }

  // 3. If no live or upcoming streams, return null
  return null;
};



  // Get the closest schedule from the array
  const closestSchedule = getActiveOrUpcomingSchedule(schedule);



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

  // When participant becomes live
React.useEffect(() => {
  if (participant && connectionState === ConnectionState.Connected) {
    setWasLive(true); // they went live at some point
    setShowReview(false); // reset if they come back
  }

  // When they disconnect after being live, show review
  if (!participant && connectionState === ConnectionState.Connected && wasLive) {
    const timeout = setTimeout(() => {
      setShowReview(true);
    }, 3000); // small delay to avoid flakiness
    return () => clearTimeout(timeout);
  }
}, [participant, connectionState, wasLive]);


  // return <div className="aspect-video  group relative  h-[500px] lg:h-[calc(100vh-100px)] border-red-700 border-b-2 w-full">{content}</div>;

  return (
  <div className="aspect-video group relative h-[500px] lg:h-[calc(100vh-300px)] border-red-700 border-b-2 w-full">
    {content}
    {showReview && (
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-20">
        <ReviewForm streamId={streamId} userId={userId} />
      </div>
    )}
  </div>
);


}


export function VideoSkeleton() { 
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
}
