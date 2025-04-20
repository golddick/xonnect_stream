import { getStreams } from '@/lib/feed-service';
import { getLiveStreams } from '@/lib/stream-service';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const LiveComponent  = async () => {

    const liveStreams = await getStreams();

     console.log(liveStreams, 'data  li jj')

    // if (!liveStreams || liveStreams.length === 0) {
    //     return null;
    // }

  return (
    
     <section className="py-12 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-red-900 text-white overflow-hidden">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex items-center mb-8">
                                <div className="flex-shrink-0 h-4 w-4 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                                <h2 className="text-3xl font-bold">Live Now</h2>
                            </div>
    
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {liveStreams.map((result, index) => (
                            
                            <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-red-500/30">
                            <div className="relative">
                               <div className=' relative  w-full h-60'>
                               <Image
                                    fill
                                    src= {result.thumbnailUrl || '/assets/xc.jpg' }
                                    alt="IMG"
                                    className=" absolute object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                               </div>
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-1 animate-pulse">
                                    <span className="h-2 w-2 bg-white rounded-full inline-block"></span>
                                    <span>LIVE</span>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                                    14,382 watching
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{result.name}</h3>
                                    <Link href={`/channel/${result.user.username}`}>
                                        <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
                                        Join Now
                                        </button>
                                    </Link>
                                    {/* <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
                                        Join Now
                                    </button> */}
                                </div>
                                <p className="text-gray-300 mb-4">
                                    {result.user.bio}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Started 3 hours ago</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>Virtual Event</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                               
    
                        
                            </div>
                        </div>
                    </section>
  )
}

export default LiveComponent
