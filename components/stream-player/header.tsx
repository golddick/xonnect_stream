"use client";

import React from "react";
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react";
import { BadgeCheck, UserIcon } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { VerifiedMark } from "@/components/verified-mark";
import { Skeleton } from "@/components/ui/skeleton";

import { Actions, ActionsSkeleton } from "./actions";
import { Button } from "../ui/button";
import { Hint } from "../hint";
import { DotEllipse } from "./dot-ellipse";
import { Badge } from "../ui/badge";


export function Header({
  hostIdentity,
  hostName,
  imageUrl,
  isFollowing,
  name,
  viewerIdentity,
}: {
  imageUrl: string;
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
  name: string;
}) {
  const participants = useParticipants();
  const participant = useRemoteParticipant(hostIdentity);

  const isLive = !!participant;
  const participantCount = participants.length - 1;

  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = hostAsViewer === viewerIdentity;

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4 radial--gradient">
         <div
        className="flex 
         justify-between
          items-center 
      gap-y-5
       w-full 
       h-full 
       bg-[#000] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
      >

   
      <div className="flex items-center gap-x-3 py-4">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size='default'
          isLive={isLive}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className=" text-[15px] md:text-lg font-semibold truncate">{name}</h2>
            <BadgeCheck  className="text-gold size-4"/>
          </div>
          {isLive ? (
            <div className="font-semibold flex gap-x-1 items-center text-xs text-rose-500">
              <UserIcon className="h-4 w-4" />
              <p>
                {participantCount}{" "}
                {participantCount === 1 ? "viewer" : "viewers"}
              </p>
            </div>
          ) : (
            <Badge  className="font-semibold text-xs text-muted-foreground bg-black hover:text-gold shadow-md shadow-neutral-500">
              Offline
            </Badge>
          )}
        </div>
      </div>

            <div className="flex items-center gap-3">
          {/* <StreamPurchaseBTN data={data} selfName={selfName} selfEmail={selfEmail} userId={userId} /> */}
            <Actions
            hostIdentity={hostIdentity}
            isFollowing={isFollowing}
            isHost={isHost}
          />

         <DotEllipse/>
            </div>
    </div>
    </div>
  );
}

export function HeaderSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4 ">
      <div className="flex items-center gap-x-2">
        <UserAvatarSkeleton size="lg" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <ActionsSkeleton />
    </div>
  );
}
