
'use client'



import DashBoardVideoCard from "@/app/(browse)/(stream_landing)/Stream/_components/DashBoardVideoCard";
import { Schedule, ScheduleFileUpload } from "@prisma/client";
import React from "react"
import StreamHeader from "./StreamHeader/StreamHeader";
import StreamDetails from "./streamDetails/StreamDetails";
import StreamGallery from "./StreamGallary/StreamGallery";

interface Props {
  data: Schedule  | null;
  userId:string | undefined
  selfName:string | undefined | null
  selfEmail:string  | null | undefined
  fileUpload: ScheduleFileUpload []
}


const StreamProfileCard  = ({data, userId, fileUpload, selfName, selfEmail}:Props) => {
  if (!data) { 
   return
}
 const Img = 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg'
    return (
        <div className="h-full">
            <div className="w-full bg-black space-y-4 font-sans">
                {/* Banner Section */}
                <DashBoardVideoCard img={data.thumbnailImage || Img} video={data.thumbnailVideo || ''} isLive={data.isLive} />

                {/* Header Section */}
                <StreamHeader  data={data} userId={userId} selfName={selfName} selfEmail={selfEmail} fileUpload={fileUpload} />
                {/* Stream Details Section */}
               <StreamDetails data={data}/>

                {/* Image Gallery Section */}
                <StreamGallery fileUpload={fileUpload}/>
            </div>
        </div>
    )
}

export default StreamProfileCard