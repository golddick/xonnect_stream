import React from "react";
import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";
import { StreamPlayer } from "@/components/stream-player";
import { currentUser } from "@clerk/nextjs/server";
import { toast } from "sonner";

interface UserPageProps {
  params: { username: string };
}

export async function generateMetadata({
  params: { username },
}: UserPageProps) {
  return {
    title: username,
  };
}

export default async function UserPage({
  params: { username },
}: UserPageProps) {

  const user = await getUserByUsername(username);
   const externalUser = await currentUser();

   console.log(externalUser, 'externalUser')


  if (!user || !user.stream) notFound();

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) notFound();

  return (
    <StreamPlayer user={user} isFollowing={isFollowing} stream={user.stream}  schedule={user.schedules}
    userId={externalUser?.id}  externalUserName={externalUser?.username || 'custom_name'} externalUserEmail={externalUser?.emailAddresses[0].emailAddress}
    />
  );
}
