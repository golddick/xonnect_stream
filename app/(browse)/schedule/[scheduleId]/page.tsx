import StreamProfileCard from '@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/StreamProfileCard';
import { getSelf } from '@/lib/auth-service';
import { isBlockedByUser } from '@/lib/block-service';
import { isFollowingUser } from '@/lib/follow-service';
import { getScheduleById } from '@/lib/schedule-service';
import { currentUser } from '@clerk/nextjs/server';
import { notFound } from 'next/navigation';
import React from 'react'


interface Props {
  params: {
    scheduleId: string;
  };
}

const page = async ({params}:Props) => {
 const externalUser = await currentUser();
    const self = await getSelf();
  
   const data = await getScheduleById( params?.scheduleId);
  return (
    <div className=' bg-black h-full'>
    {data && <StreamProfileCard data={data} fileUpload={data.fileUploads} userId={ externalUser?.id || self.externalUserId} selfEmail={externalUser?.emailAddresses[0].emailAddress || self.email} selfName={externalUser?.username || self.username}/>}
</div>
  )
}

export default page