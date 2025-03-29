

import React from 'react'
import Image from 'next/image'


interface EventVideoPreviewProps {
  img: string;
  video: string | null;
}

const EventVideoPreview = ({ img , video }: EventVideoPreviewProps) => {
  
  const youtubeVideoId = video?.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)?.[1]

  return (
    <div className="bg-black rounded-lg overflow-hidden relative aspect-video mb-4">
        {/* <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0'></div> */}
        
        <div className='absolute inset-0 flex items-center justify-center z-10 w-full'>
          {youtubeVideoId ? (
            <iframe
              className='w-[300px] md:w-[600px] h-[300px] md:h-[400px] lg:w-[900px] lg:h-[500px]'
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          ) : video ? (
            <video 
              className='w-[300px] md:w-[500px] lg:w-[600px] md:h-[400px] h-[300px]' 
              controls
            >
              <source src={video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className=' relative w-full h-full'>
                <Image 
              src={img }
              alt='Event preview'
              fill
              className=' absolute'
            />
            </div>
           
          )}
        </div>

  
    </div>
  )
}

export default EventVideoPreview