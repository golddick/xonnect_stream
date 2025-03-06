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
         <StreamProfileCard fileUpload={data?.fileUploads || []}  data={data} userId={self?.id} />
    </div>
  )
}

export default page