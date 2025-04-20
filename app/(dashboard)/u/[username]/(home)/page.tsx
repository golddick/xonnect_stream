import React from "react";


import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";
import { currentUser } from "@clerk/nextjs/server";

export default async function CreatorPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const externalUser = await currentUser();
  const user = await getUserByUsername(username);


  if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="  w-full ">
    <StreamPlayer user={user} stream={user.stream} isFollowing={true}  schedule={user.schedules} 
    userId={externalUser?.id || user.externalUserId}  externalUserName={externalUser?.username || 'custom_name'} externalUserEmail={externalUser?.emailAddresses[0].emailAddress}
    />
    </div>
  );
}
 