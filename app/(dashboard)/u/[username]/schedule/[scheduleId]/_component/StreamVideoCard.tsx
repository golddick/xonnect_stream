import React from 'react'
import Image from 'next/image'
import { LiveBadge } from '@/components/live-badge'


interface ThumbnailCardProps {
    isLive: boolean
    img:string 
    video:string 
}

const StreamVideoCard = ({isLive, img, video}:ThumbnailCardProps) => {
  console.log(img)

 
  return (

<div className='h-[200px] lg:h-[400px] md:h-[300px] w-full border-[#b28228] border-b-2 overflow-hidden cursor-pointer relative bg-cover bg-center'>
  {
    isLive ? (
      <div>
         <video className='w-full  lg:w-full h-[200px] lg:h-[400px] md:h-[300px] md:w-full' controls>
      <source src={video} type='video/mp4'  />
      Your browser does not support the video tag.
    </video>
      </div>
    ):(
      <div className='h-[200px] lg:h-[400px] md:h-[300px] w-full border-[#b28228] border-b-2 overflow-hidden cursor-pointer relative bg-cover bg-center'   style={{ backgroundImage: `url(${img})` }} >
  {/* Centered video tag */}
  <div className='absolute inset-0 flex items-center justify-center '>
    <video className='w-[300px] h-auto  lg:w-[500px] lg:h-[300px] md:h[200px] md:w-[400px]' controls>
      <source src={video} type='video/mp4'  />
      Your browser does not support the video tag.
    </video>
  </div>


</div>
    )
  }

{isLive && (
    <div className='absolute top-4 left-2'>
      <LiveBadge />
    </div>
  )}

</div>

  )
}

export default StreamVideoCard