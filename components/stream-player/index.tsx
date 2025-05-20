"use client";

import React from "react";
import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";

import { ChatToggle } from "./chat-toggle";
import { InfoCard } from "./info-card";
import { AboutCard } from "./about-card";
import { Video, VideoSkeleton } from "./video";
import { Chat, ChatSkeleton } from "./chat";
import { Header, HeaderSkeleton } from "./header";
import { Skeleton } from "../ui/skeleton";
import { Loader } from "lucide-react";
import { About_Tab } from "./about-info-cad";
import { Schedule, User } from "@prisma/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

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

export function StreamPlayer({
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
  const [showInfo, setShowInfo] = React.useState(false);
  const [showMobileChat, setShowMobileChat] = React.useState(false);

  const  route = useRouter()
  if (!token || !identity || !name) {
    return <StreamPlayerSkeleton />;
  }


  return (
    <>
      {collapsed && (
        <div className="hidden lg:block fixed top-[100px] right-2 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid bg-black relative grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
          collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10 bg-black ">
          <Video hostName={user.username} hostIdentity={user.id} userId={userId}  streamId={stream.id}    schedule={schedule} externalUserName={externalUserName} externalUserEmail={externalUserEmail || ''}/>
          {/* <Header
            imageUrl={user.imageUrl}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollowing}
            name={stream.name}
            viewerIdentity={identity}
          /> */}
          <div className="flex justify-start px-4 pt-2 ">
          <Button
            onClick={() => setShowInfo((prev) => !prev)}
            className="text-white bg-black hover:bg-gray-700 px-3 py-1 rounded text-sm transition"
          >
            {showInfo ? "Hide Info" : "Show Info"}
          </Button>
        </div>

         
        {showInfo && (
          < div className="flex flex-col gap-4 lg:container p-4 lg:p-0">
            <About_Tab
              hostName={user.username}
              hostIdentity={user.id}
              viewerIdentity={identity}
              bio={user.bio}
              instagram={user.instagram}
              youtube={user.youtube}
              twitter={user.twitter}
              followedByCount={user._count.followedBy}
              schedule={schedule}
              imageUrl={user.imageUrl}
              isFollowing={isFollowing}
            />
            <InfoCard
              hostIdentity={user.id}
              viewerIdentity={identity}
              name={stream.name}
              thumbnailUrl={stream.thumbnailUrl}
            />
          </div>
        )}

          
        </div>
        {/* <div className={cn('hidden lg:block', collapsed && 'hidden')}> */}
        <div className={cn('col-span-1  hidden  fixed right-0 w-[300px] h-full  ', collapsed && 'hidden  md:hidden', !collapsed && 'lg:block ') }>
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

