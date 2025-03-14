// 'use client'

import React, { useEffect, useState } from 'react'
import StreamVideoCard from './StreamVideoCard'
import StreamDetails from './streamDetails/StreamDetails'
import StreamHeader from './StreamHeader/StreamHeader'
import DashBoardVideoCard from '@/app/(browse)/(stream_landing)/Stream/_components/DashBoardVideoCard'
import { Schedule, ScheduleFileUpload } from '@prisma/client'
import { getScheduleById } from '@/lib/schedule-service'
import { useParams } from 'next/navigation'
import StreamGallery from './SreamGallary/StreamGallery'


interface Props {
  data: Schedule  | null;
  userId:string 
  selfName:string 
  selfEmail:string  | null
  fileUpload: ScheduleFileUpload []
}

const StreamProfileCard = ({data, userId, fileUpload, selfName, selfEmail}:Props) => {


  if (!data) { 
    // Handle null or undefined data
    return <div>No data available</div>; 
}

    const Img = 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg'
    
    
  return (
    <div className='space-y-2 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar h-auto bg-black gap-4 '>
        <DashBoardVideoCard img={data.thumbnailImage || Img} video={data.thumbnailVideo || ''} isLive={data.isLive} />
        <StreamHeader  data={data} userId={userId} selfName={selfName} selfEmail={selfEmail} fileUpload={fileUpload} />
      <StreamDetails  data={data}/>
      <div className=' grid grid-cols-1 lg:grid-cols-2 pt-5'>
      <StreamGallery fileUpload={fileUpload} scheduleID={data.id}  />
      <div>
        
        

      </div>
      </div>


    </div>
  )
}

export default StreamProfileCard