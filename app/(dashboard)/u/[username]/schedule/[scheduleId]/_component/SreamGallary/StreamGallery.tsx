'use client'

import { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { TestImg } from './TestImg';


import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';


export default function StreamGallery() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null); // explicitly typing swiper state

  const [showNavigation, setShowNavigation] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='relative  h-full w-full text-white  mb-5'>
      <div className='container gap-4'>
     
        {/* navigation */}
        <nav className='mb-4 flex-wrap w-full'>
          <ul className='flex gap-4 flex-1 flex-wrap items-center'>
            {TestImg.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper?.slideTo(index);
                  }}
                  className='relative block h-20 w-20 overflow-hidden rounded-lg'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    objectFit='cover'
                    className='block h-full w-full object-cover'
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main slides */}
        <Swiper
          spaceBetween={5}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={(swiper: SwiperType) => setSwiper(swiper)} 
          className='h-96 w-full rounded-lg lg:w-[500px] lg:h-[500px]  md:w-[400px] '
        >
          {TestImg.map((image, index) => (
            <SwiperSlide key={index}>
              <div className=''>
                <Image
                   src={image.src}
                   alt={image.alt}
                    fill
                />
              </div>

          
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

