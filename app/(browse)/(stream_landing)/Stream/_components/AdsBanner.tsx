'use client'

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide , } from 'swiper/react';
import type { Swiper as SwiperType ,} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';


const AdsBanner = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const {collapsed} = useSidebar((state) => state)

    const Ads = [
        {id: 1,
        AdsName:'LIVEKIT',
        },
        {id: 2,
        AdsName:'YOUTUBE',
        },
        {id: 3,
        AdsName:'STRESSLESS',
        },
        {id: 4,
        AdsName:'XONNET',
        },
        {id: 5,
        AdsName:'BRAVEMACK',
        },
        {id: 6,
          AdsName:'GOLDICK',
        },
    ]

  return (
      <div className={cn('flex  w-[90%]  lg:w-[100%] h-[35px] Container  items-center justify-center rounded-lg m-auto ', collapsed && 'lg:w-[90vw] m-auto')}>

 
       
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper: SwiperType) => setSwiper(swiper)}   
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }} 
        loop
        breakpoints={{ 
         
            300: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            750: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 40
            },
        }}
        className="  lg:w-[100%]    h-full flex items-center  justify-evenly"

       
      >
       {Ads.map((item) => (
         <SwiperSlide className='w-auto  h-full flex items-center justify-center ' key={item.id}>
            <p className=' font-mono goldText flex text-start  truncate  items-center w-auto h-full' style={{fontSize:'15px'}}>{item.AdsName}.</p>
     </SwiperSlide>

       ))}
      </Swiper>
    </div>
  )
}

export default AdsBanner



