
import StreamProfileCard from '@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/StreamProfileCard';
import { ScheduleEventProfile } from '@/components/EventProfile/ScheduleEventProfile';
import { getSelf } from '@/lib/auth-service';
import { getScheduleById } from '@/lib/schedule-service';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'


interface Props {
  params: {
    scheduleId: string;
  };
}

const page = async ({params}:Props) => {
 const externalUser = await currentUser();
    
  
   const data = await getScheduleById( params?.scheduleId);
  return (
    <div className=' w-full'>
         <ScheduleEventProfile   data={data} fileUpload={data?.fileUploads || []} userId={ externalUser?.id } selfEmail={externalUser?.emailAddresses[0].emailAddress} selfName={externalUser?.username } />
    </div>
  ) 
}

export default page