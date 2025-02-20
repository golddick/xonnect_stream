import React from 'react'
import StreamVideos from './StreamsVideos';
import StreamHeader from './StreamHeader';


interface AllStreamProps{
  label:string
}




const AllStream = ({label}:AllStreamProps) => {

    const data = [
        {
          id: 1,
          streamName: 'LIVEKIT',
          description: 'LIVEKIT streaming live',
          thumbNailImg: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
          isLive:false
        },
        {
          id: 2,
          streamName: 'stream',
          description: 'lets streaming live',
          thumbNailImg: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
          isLive:false
        },
        {
          id: 3,
          streamName: 'xonnet',
          description: 'xonnet streaming live',
          thumbNailImg: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
          isLive:true
        },
        {
          id: 4,
          streamName: 'omo',
          description: 'omo streaming live',
          thumbNailImg: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
          isLive:false
        },
        {
          id: 6,
          streamName: 'LIVEKIT',
          description: 'LIVEKIT streaming live',
          thumbNailImg: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
          isLive:true
        },
        {
          id: 7,
          streamName: 'last',
          description: 'last streaming live form an unknown location join in to catch up to the vybes',
          thumbNailImg: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
          isLive:true
        },

      ];

  return (
    <div className='  justify-center w-full h-auto  flex flex-col gap-4'>
      <StreamHeader label={label}/>
        <StreamVideos data={data} />
    </div>
  )
}

export default AllStream