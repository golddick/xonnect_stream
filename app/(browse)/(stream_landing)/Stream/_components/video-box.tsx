'use client'; 

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import DashBoardVideoCard from './DashBoardVideoCard';
import BannerCard from './BannerCard';
import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer';
import Image from 'next/image';




export default function VideoBox() {
  // Create refs for custom navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className=" md:max-w-screen-sm lg:max-w-screen-lg mx-auto  p-2 gap-4 items-center  max-w-[400px] flex">
      {/* Custom Previous Button */}
      <div
        ref={prevRef}
        className={`cursor-pointer  ${
          isBeginning ? 'opacity-35 cursor-not-allowed' : ''
        }`}
      >
        <Button  variant={'ghost'} size={'icon'}>
            <ArrowLeftCircle className=' size-6'/>
        </Button>
      </div>

      {/* Swiper Component */}
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        className="w-full"
        onInit={(swiper) => {
          // Override Swiper's navigation buttons with custom refs
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();

           // Set initial states for isBeginning and isEnd
           setIsBeginning(swiper.isBeginning);
           setIsEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}

      >
        {/* <SwiperSlide>
            <DashBoardVideoCard isLive img={'/assets/woman.jpeg'} video=''/>
        </SwiperSlide> */}
        <SwiperSlide>
            <VideoPlayer/>
        </SwiperSlide>
        <SwiperSlide >
        <div className="flex items-center justify-center w-[200px] h-[200px] relative m-auto">
          <Image
            src={'/assets/xb.png'}
            alt="LOGO"
            fill
            className="object-contain "
          />
        </div>
</SwiperSlide>
      </Swiper>

      {/* Custom Next Button */}
      <div
        ref={nextRef}
        className={`cursor-pointer ${
          isEnd ? 'opacity-35 cursor-not-allowed' : ''
        }`}
      >
       <Button  variant={'ghost'} size={'icon'}>
            <ArrowRightCircle className=' size-6'/>
        </Button>
      </div>
    </div>
  );
}