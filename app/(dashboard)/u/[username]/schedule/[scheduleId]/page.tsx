

import React, { useEffect, useState } from 'react'
import StreamProfileCard from './_component/StreamProfileCard'
import { getScheduleById } from '@/lib/schedule-service';
import { Schedule } from '@prisma/client';
import { redirect, useParams } from 'next/navigation';
import { getSelf } from '@/lib/auth-service';


interface Props {
  params: {
    scheduleId: string;
  };
}
const page = async ({params}:Props) => {

  const self = await getSelf();


 const data = await getScheduleById( params?.scheduleId);


 console.log(self.email,self.username, 'self first')


  
  return (
    <div className=' bg-black h-full'>
        {data && <StreamProfileCard data={data} fileUpload={data.fileUploads} userId={self.id}  selfName={self.username} selfEmail={self.email}/>}
    </div>
  )
}

export default page

