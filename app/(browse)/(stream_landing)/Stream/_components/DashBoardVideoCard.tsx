
// import React from 'react'
// import Image from 'next/image'
// import { LiveBadge } from '@/components/live-badge'

// interface ThumbnailCardProps {
//   isLive: boolean
//   img: string
//   video?: string
// }

// const DashBoardVideoCard = ({ isLive, img, video }: ThumbnailCardProps) => {
//   return (
//     <div
//       className='h-[200px] lg:h-[400px] md:h-[300px] w-full border-[#b28228] border-b-2 overflow-hidden cursor-pointer relative'
//       style={{
//         backgroundImage: `url(${img})`, // Set the background image dynamically
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Apply blur to the background */}
//       <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0'></div>

//       {/* Centered video or image */}
//       <div className='absolute inset-0 flex items-center justify-center z-10'>
//         {video ? (
//           <video className='w-[300px] md:w-[500px] lg:w-[600px] h-auto' controls>
//             <source src={video} type='video/mp4' />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <Image src={img} alt='placeholder' width={300} height={200} className='w-[300px] md:w-[500px] lg:w-[600px] lg:h-[400px] h-auto' />
//         )}
//       </div>

//       {/* Live badge */}
//       {isLive && (
//         <div className='absolute top-4 left-2 z-20'>
//           <LiveBadge />
//         </div>
//       )}
//     </div>
//   )
// }

// export default DashBoardVideoCard


import React from 'react'
import Image from 'next/image'
import { LiveBadge } from '@/components/live-badge'

interface ThumbnailCardProps {
  isLive: boolean
  img: string
  video?: string
}

const DashBoardVideoCard = ({ isLive, img, video }: ThumbnailCardProps) => {
  // Check if the video is a YouTube URL
  const isYouTubeVideo = video && video.includes('youtube.com') || video?.includes('youtu.be');

  return (
    <div
      className='h-[400px] lg:h-[700px] md:h-[500px] w-full border-[red] border-b-2 overflow-hidden cursor-pointer relative'
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Apply blur to the background */}
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0'></div>

      {/* Centered video or image */}
      <div className='absolute inset-0 flex items-center justify-center z-10 w-full'>
        {isYouTubeVideo ? (
          // Render YouTube iframe if it's a YouTube URL
          <iframe
            className='w-[300px] md:w-[600px] h-[300px] md:h-[400px] lg:w-[900px] lg:h-[500px] '
            src={`https://www.youtube.com/embed/${video?.split('v=')[1]?.split('&')[0]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : video ? (
          // Render the video tag if it's not a YouTube URL
          <video className='w-[300px] md:w-[500px] lg:w-[600px] md:h-[400px] h-[300px]' controls>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Render image if no video URL is provided
          <Image src={img} alt='placeholder' width={300} height={200} className='w-[300px] md:w-[500px] lg:w-[600px] lg:h-[400px] h-auto' />
        )}
      </div>

      {/* Live badge */}
      {isLive && (
        <div className='absolute top-4 left-2 z-20'>
          <LiveBadge />
        </div>
      )}
    </div>
  )
}

export default DashBoardVideoCard
