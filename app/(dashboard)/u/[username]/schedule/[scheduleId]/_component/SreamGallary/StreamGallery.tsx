

'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import { ScheduleFileUpload } from '@prisma/client';

interface StreamGalleryProps {
  fileUpload: ScheduleFileUpload[] ;
  scheduleID: string; 
}

const StreamGallery = ({fileUpload,scheduleID}:StreamGalleryProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
        <section className="relative h-full w-full text-white mb-5">

      {fileUpload?.length > 0 ? (
        <div className="container gap-4">
          {/* Navigation */}
          <nav className="mb-4 flex-wrap w-full">
            <ul className="flex gap-4 flex-1 flex-wrap items-center">
              {fileUpload.map((imageUrl, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      swiper?.slideTo(index);
                    }}
                    className="relative block h-20 w-20 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={imageUrl.ImageURL}
                      alt={`file-${index}`}
                      width={100}
                      height={100}
                      className="block h-full w-full object-cover border-[red] border-2 rounded-2xl"
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
            onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
            className="h-96 w-full rounded-lg lg:w-[500px] lg:h-[500px] md:w-[400px]"
          >
            {fileUpload.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={imageUrl.ImageURL}
                    alt={`file-${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ): (
        <div>no img</div>
      )}
    </section>
  )
}

export default StreamGallery

