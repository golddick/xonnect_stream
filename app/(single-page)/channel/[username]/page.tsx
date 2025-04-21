import React from "react";


import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";
import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";
import { Eventplayer } from "../../_component/Eventplayer";

export default async function CreatorPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(username);
   const externalUser = await currentUser();

  if (!user || !user.stream) notFound();

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) notFound();

  return (
    <div className=" w-full h-full  bg-black">
    <Eventplayer user={user} stream={user.stream} isFollowing={isFollowing}  schedule={user.schedules}
        userId={externalUser?.id }  externalUserName={externalUser?.username || 'custom_name'} externalUserEmail={externalUser?.emailAddresses[0].emailAddress}
    />
    </div>
  );
}
