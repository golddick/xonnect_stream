
import StreamProfileCard from '@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/StreamProfileCard';
import { ScheduleEventProfile } from '@/components/EventProfile/ScheduleEventProfile';
import { getSelf } from '@/lib/auth-service';
import { isBlockedByUser } from '@/lib/block-service';
import { isFollowingUser } from '@/lib/follow-service';
import { getScheduleById } from '@/lib/schedule-service';
import { currentUser } from '@clerk/nextjs/server';
import { Loader } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'


interface Props {
  params: {
    scheduleId: string;
  };
}

const page = async ({params}:Props) => {
 const externalUser = await currentUser();
    // const self = await getSelf();
  
   const data = await getScheduleById( params?.scheduleId);

   if (!data) {
    <Loader className=' animate-spin'/>
    return
   } 

  return (
    <div className=' bg-black h-full'>

     {/* <StreamProfileCard data={data} fileUpload={data.fileUploads} userId={ externalUser?.id } selfEmail={externalUser?.emailAddresses[0].emailAddress} selfName={externalUser?.username }/> */}
    <ScheduleEventProfile   data={data} fileUpload={data?.fileUploads || []} userId={ externalUser?.id } selfEmail={externalUser?.emailAddresses[0].emailAddress} selfName={externalUser?.username } />
</div>
  )
}

export default page