import React from 'react'
import Image from 'next/image'
import IMG from '../../public/assets/woman.jpeg'
// import LiveBadge from '../Badge/LiveBadge'

interface ThumbnailCardProps {
    isLive: boolean
    img:string 
}

const StreamThumbnailCard = ({isLive, img}:ThumbnailCardProps) => {
  console.log(img)
  return (
    <div className='group aspect-video relative rounded-md cursor-pointer'>
    <div className='rounded-md absolute inset-0 bg-[#b28228] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'/>
    <Image
            src={img}
            fill
            alt='Thumbnail'
            className='object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md'

            />
  {/* {isLive && (
            <div className='absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform'>
                <LiveBadge/>
            </div>
        )} */}
</div>
  )
}

export default StreamThumbnailCard