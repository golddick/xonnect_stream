

import React, { useEffect, useState } from 'react'
import { getScheduleById } from '@/lib/schedule-service';
import { Schedule } from '@prisma/client';
import { redirect, useParams } from 'next/navigation';
import { getSelf } from '@/lib/auth-service';
import { currentUser } from '@clerk/nextjs/server';
import { Loader } from 'lucide-react';
import StreamProfileCard from './_component/StreamProfileCard';


interface Props {
  params: {
    scheduleId: string;
  };
}
const page = async ({params}:Props) => {

  const self = await getSelf();
   const externalUser = await currentUser();


 const data = await getScheduleById( params?.scheduleId);

 if (!data) {
  <Loader className=' animate-spin'/>
  return
 }

  
  return (
    <div className=' bg-black h-full'>
       <StreamProfileCard data={data} fileUpload={data.fileUploads} userId={ externalUser?.id || self.externalUserId} selfEmail={externalUser?.emailAddresses[0].emailAddress || self.email} selfName={externalUser?.username || self.username}/>
    </div>
  )
}

export default page

