import React from 'react'
import Image from 'next/image'
import { LiveBadge } from '@/components/live-badge'
// import DashBoardUserIcon from './userIcon/UserIcon'


interface ThumbnailCardProps {
    isLive: boolean
    img?:any 
}

const DashBoardVideoCard = ({isLive, img}:ThumbnailCardProps) => {
  console.log(img)

  const ThumbnailVideo = 'https://www.shutterstock.com/shutterstock/videos/3443839767/preview/stock-footage-motion-timelapse-pov-shot-from-modern-dubai-metro-running-alongside-the-sheikh-zayed-road-at-night.webm'


  return (


<div className='h-[200px] lg:h-[400px] md:h-[300px] w-full border-[#b28228] border-b-2 overflow-hidden cursor-pointer relative bg-cover bg-center'   style={{ backgroundImage: `url(${img})` }} >
  {/* Centered video tag */}
  <div className='absolute inset-0 flex items-center justify-center '>
    <video className='w-[300px] h-auto  ' controls>
      <source src={ThumbnailVideo} type='video/mp4'  />
      Your browser does not support the video tag.
    </video>
  </div>

  {isLive && (
    <div className='absolute top-4 left-2'>
      <LiveBadge />
    </div>
  )}
</div>
  )
}

export default DashBoardVideoCard

