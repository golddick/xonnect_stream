

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
}

const StreamGallery = ({fileUpload}:StreamGalleryProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    //     <section className="relative h-full w-full text-white mb-5">

    //   {fileUpload?.length > 0 ? (
    //     <div className="container gap-4">
    //       {/* Navigation */}
    //       <nav className="mb-4 flex-wrap w-full">
    //         <ul className="flex gap-4 flex-1 flex-wrap items-center">
    //           {fileUpload.map((imageUrl, index) => (
    //             <li key={index}>
    //               <button
    //                 onClick={() => {
    //                   swiper?.slideTo(index);
    //                 }}
    //                 className="relative block h-20 w-20 overflow-hidden rounded-lg"
    //               >
    //                 <Image
    //                   src={imageUrl.ImageURL}
    //                   alt={`file-${index}`}
    //                   width={100}
    //                   height={100}
    //                   className="block h-full w-full object-cover border-[red] border-2 rounded-2xl"
    //                 />
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>

    //       {/* Main slides */}
    //       <Swiper
    //         spaceBetween={5}
    //         thumbs={{ swiper: thumbsSwiper }}
    //         onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
    //         className="h-96 w-full rounded-lg lg:w-[500px] lg:h-[500px] md:w-[400px]"
    //       >
    //         {fileUpload.map((imageUrl, index) => (
    //           <SwiperSlide key={index}>
    //             <div className="relative h-full w-full">
    //               <Image
    //                 src={imageUrl.ImageURL}
    //                 alt={`file-${index}`}
    //                 layout="fill"
    //                 objectFit="cover"
    //                 className="object-cover"
    //               />
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   ): (
    //     <div>no img</div>
    //   )}
    // </section>
    <>
    {/* {fileUpload?.length > 0 && (
      <div>
        <section className="py-16 px-4 sm:px-8 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Event Gallery</h2>
                        <p className="text-gray-600 mb-10 max-w-3xl">
                            Explore highlights from previous rock festivals and get a preview of what to expect from
                            this year's incredible lineup
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72">
                                <img
                                    src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Concert crowd"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Crowd Atmosphere</h3>
                                        <p className="text-white/80 text-sm">Rock Festival 2022</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72">
                                <img
                                    src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Stage performance"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Main Stage Performance</h3>
                                        <p className="text-white/80 text-sm">Midnight Riders</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72">
                                <img
                                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Concert lights"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Light Show</h3>
                                        <p className="text-white/80 text-sm">Electric Pulse Performance</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72">
                                <img
                                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Backstage"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Backstage Moments</h3>
                                        <p className="text-white/80 text-sm">Exclusive Access</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72">
                                <img
                                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Drummer"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Drummer Close-up</h3>
                                        <p className="text-white/80 text-sm">The Echoes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72">
                                <img
                                    src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Festival atmosphere"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Festival Atmosphere</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
      </div>
    )} */}

{fileUpload?.length > 0 && (
        <div className=' w-full flex flex-col space-y-4 justify-start items-start '>
          <section className="py-16 px-4 sm:px-8 bg-black w-full">
            <div className="max-w-6xl  w-full mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Event Gallery</h2>
              <p className="text-gray-600 mb-10 max-w-3xl">
                Explore highlights from previous rock festivals and get a preview of what to expect from
                this year&apos;s incredible lineup
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fileUpload.map((file, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-72"
                  >
                    <div className=' relative w-full h-full '>
                    <Image
                      src={file.ImageURL}
                      fill
                      alt={`Event image ${index + 1}`}
                      className=" absolute object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      {/* <div className="p-6">
                        <h3 className="text-white font-bold text-xl">{file. || `Image ${index + 1}`}</h3>
                        <p className="text-white/80 text-sm">{file.description || 'Rock Festival'}</p>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default StreamGallery

