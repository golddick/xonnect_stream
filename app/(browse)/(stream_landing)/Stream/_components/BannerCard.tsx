

import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer'
import Image from 'next/image'
import React from 'react'

const BannerCard = () => {


  const ThumbnailVideo = 'https://www.shutterstock.com/shutterstock/videos/3443839767/preview/stock-footage-motion-timelapse-pov-shot-from-modern-dubai-metro-running-alongside-the-sheikh-zayed-road-at-night.webm'


  return (
    <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr]  lg:grid-cols-[2fr_1fr] gap-4 w-full h-[200px] md:h-[300px] lg:h-[400px]  '>


        <div className='w-full h-full relative '>
        <VideoPlayer />
        </div>

        <div className='w-full h-full   hidden md:block'>


            <div className='w-full h-full '>
            <div className='flex items-center gap-4'>
                {/* <UserIcon isLive={false} isLoggedIN/> */}
                img
                <div className='flex flex-col gap-'>
                    <span className='flex  capitalize goldText' style={{fontFamily:'initial', fontSize:'20px'}}>jonn man</span>
                    <p className=' text-muted-foreground' style={{fontFamily:'initial', fontSize:'15px'}}>jiggy live in lagos beach</p>
                </div>
            </div> 

              <div className='w-full md:h-[340px] lg:h-[340px]'>
              {/* <MessagesBox/> */}
              message
              </div>
            </div>


        </div>
    </div>
  )
}

export default BannerCard