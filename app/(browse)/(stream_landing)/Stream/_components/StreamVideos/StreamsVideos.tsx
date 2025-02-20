'use client'


import Image from 'next/image';
import React, { useState } from 'react';
import StreamVideoCard from './StreamVideoCard';
import { Button } from '@/components/ui/button';

interface StreamData {
  id: number;
  streamName: string;
  description: string;
  thumbNailImg: string;
  isLive:boolean
}

interface StreamVideosProps {
  data: StreamData[];
}

const StreamVideos = ({ data }: StreamVideosProps) => {

  const [visible, setVisible] = useState(4);
  const [showMore, setShowMore] = useState(false);

  const ShowMore = () => {
    setShowMore((prev) => !prev); // Toggle showMore state
    setVisible((prev) => (showMore ? 4 : prev + 4)); // If currently showing more, reset to 4; otherwise, add 4
};

  console.log(data)

  return (
    <div className='flex flex-col items-center justify-center'>

  <div className='  w-full h-auto  items-center justify-center rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4  px-4  mb-4'>
     
  {data.slice(0, visible).map((item, index) => (
  <StreamVideoCard
    streamName={item.streamName}
    description={item.description}
    thumbNailImg={item.thumbNailImg}
    isLive={item.isLive}
    key={item.id}
    index={index} // Pass `true` for the first item
  />
))}

 </div>

 <Button className='border-b rounded-lg goldText' variant='ghost' onClick={ShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
            </Button>

    </div>
 

  );
};

export default StreamVideos;
