import React from "react";


import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";
import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";

export default async function CreatorPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(username);

  if (!user || !user.stream) notFound();

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) notFound();

  return (
    <div className=" w-full mx-auto px-4  md:px-10 rounded-2xl h-full">
    <StreamPlayer user={user} stream={user.stream} isFollowing={true}  schedule={user.schedules}/>
    </div>
  );
}
