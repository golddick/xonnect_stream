
"use client";

import React, { useState } from "react";
import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Schedule, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChatToggle } from "@/components/stream-player/chat-toggle";
import { Video } from "@/components/stream-player/video";
import { Header } from "@/components/stream-player/header";
import { Chat } from "@/components/stream-player/chat";
import CreatorInfoCard from "./CreatorInfoCard";
import { Button } from "@/components/ui/button";

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
  userId: string | undefined;
  stream: CustomStream;
  isFollowing: boolean;
  schedule: (Schedule & { user: User })[];
  externalUserName: string;
  externalUserEmail: string | undefined;
}) {
  const { identity, name, token } = useViewerToken(user.id);
  const { collapsed } = useChatSidebar((state) => state);
  const [showFullChat, setShowFullChat] = useState(false); // Toggle for mobile chat

  const route = useRouter();

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
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6  h-auto relative bg-black",
          collapsed && "lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10  ">
          <Video
            hostName={user.username}
            hostIdentity={user.id}
            userId={userId}
            streamId={stream.id}
            schedule={schedule}
            externalUserName={externalUserName}
            externalUserEmail={externalUserEmail || ""}
          />

          {/* Toggle button */}
          <div className="flex  lg:hidden px-4 mt-4 justify-end">
            <Button
              onClick={() => setShowFullChat((prev) => !prev)}
              className=" text-white px-3 py-1 rounded text-sm "
            >
              {showFullChat ? "Hide Chat" : "Show Chat"}
            </Button>
          </div>

          {/* Mobile Chat Toggle */}
            {showFullChat && (
          <div className="flex  lg:hidden mt-4 w-full h-[500px]">
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
            ) }

          <CreatorInfoCard
            image={user.imageUrl}
            name={user.username}
            isVerified={true}
            username={`${user.username} streaming channel`}
            bio={user.bio || ""}
            followers={user._count.followedBy}
            socialLinks={{
              instagram: user.instagram || "",
              youtube: user.youtube || "",
              twitter: user.twitter || "",
            }}
            hostIdentity={user.id}
            viewerIdentity={identity}
            isFollowing={isFollowing}
          />
        </div>

        {/* Desktop Chat */}
        <div className={cn("hidden fixed right-0 w-[300px] h-full lg:block", collapsed && "lg:hidden")}>
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
      <Loader className="animate-spin" />
    </div>
  );
}
