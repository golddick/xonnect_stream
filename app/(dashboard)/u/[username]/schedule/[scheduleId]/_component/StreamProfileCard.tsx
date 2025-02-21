'use client'

import React from 'react'
import StreamVideoCard from './StreamVideoCard'
import StreamDetails from './streamDetails/StreamDetails'
import { StreamHeader } from './StreamHeader/StreamHeader'

const StreamProfileCard = () => {
    const Img = 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg'
    const ThumbnailVideo = 'https://www.shutterstock.com/shutterstock/videos/3443839767/preview/stock-footage-motion-timelapse-pov-shot-from-modern-dubai-metro-running-alongside-the-sheikh-zayed-road-at-night.webm'

  return (
    <div className='space-y-2 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar h-full bg-black'>
        <StreamVideoCard img={Img} video={ThumbnailVideo} isLive={true} />
        <StreamHeader/>
      <StreamDetails/>


    </div>
  )
}

export default StreamProfileCard