
"use client";

import React from "react";
import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Schedule, User } from "@prisma/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChatToggle } from "@/components/stream-player/chat-toggle";
import { Video } from "@/components/stream-player/video";
import { Header } from "@/components/stream-player/header";
import { Chat } from "@/components/stream-player/chat";
import CreatorInfoCard from "./CreatorInfoCard";

type CustomStream = {
  id: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  thumbnailUrl: string | null;
  name: string;
  
};


type CustomUser = {
  id: string;
  username: string;
  bio: string | null;
  instagram: string | null;
  youtube: string | null;
  twitter: string | null;
  stream: CustomStream | null;
  imageUrl: string;
  _count: { 
    followedBy: number;
  };
};

export function Eventplayer({
  user,
  stream,
  userId,
  isFollowing,
  schedule,
  externalUserName, 
  externalUserEmail,
}: {
  user: CustomUser;
  userId:string | undefined;
  stream: CustomStream;
  isFollowing: boolean;
  schedule:  (Schedule & { user: User })[]
  externalUserName: string
  externalUserEmail: string | undefined

}) {
  const { identity, name, token } = useViewerToken(user.id);
  const { collapsed } = useChatSidebar((state) => state);
  const  route = useRouter()
  if (!token || !identity || !name) {
    return <StreamPlayerSkeleton />;
  }


  return (
    <>
      {collapsed && (
        <div className="flex fixed top-10 lg:top-[100px] right-2 z-50 ">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6  h-auto",
          collapsed && "lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10  bg-black">
          <Video hostName={user.username} hostIdentity={user.id} userId={userId}  streamId={stream.id}    schedule={schedule} externalUserName={externalUserName} externalUserEmail={externalUserEmail || ''}/>
          {/* <Header
            imageUrl={user.imageUrl}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollowing}
            name={stream.name}
            viewerIdentity={identity}
          /> */}

          <CreatorInfoCard 
           image={user.imageUrl}
           name={user.username}
           isVerified= {true}
           username={`${user.username} streaming channel`}
           bio={user.bio || ''}
           followers={user._count.followedBy}
           instagram={user.instagram || ''}
           youtube={user.youtube || ''}
           twitter={user.twitter || ''}
           hostIdentity={user.id}
           viewerIdentity={identity}
           isFollowing={isFollowing}
          />
         
          {/* <About_Tab
           hostName={user.username}
           hostIdentity={user.id}
           viewerIdentity={identity}
           bio={user.bio}
           instagram={user.instagram}
           youtube={user.youtube}
           twitter={user.twitter}
           followedByCount={user._count.followedBy}
           schedule={schedule}
          />
           <InfoCard
            hostIdentity={user.id}
            viewerIdentity={identity}
            name={stream.name}
            thumbnailUrl={stream.thumbnailUrl}
          /> */}
          
        </div>
        <div className={cn(" hidden lg:block", collapsed && "lg:hidden")}>
          <Chat
            viewerName={name}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollowing}
            isChatEnabled={stream.isChatEnabled}
            isChatDelayed={stream.isChatDelayed}
            isChatFollowersOnly={stream.isChatFollowersOnly}
          />
        </div>
      </LiveKitRoom>
    </>
  );
}

export function StreamPlayerSkeleton() {
  return (
   <div className="flex flex-col gap-3 h-[500px] items-center justify-center">
   <Loader className=" animate-spin"/>
   </div>
  );
}


