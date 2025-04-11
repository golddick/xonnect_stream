import { Stream, User } from '@prisma/client'
import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsRecord } from 'react-icons/bs';

interface TopLiveSTreamProps{
       data: {
          user: User;
          isLive: boolean;
          name: string;
          thumbnailUrl: string | null;
        }[]
}

const TopLiveSTream = ({data}:TopLiveSTreamProps) => {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 mb-8">
    {data.map((stream, index) => (
        <div
            key={index}
            className="bg-black/20 rounded-xl overflow-hidden border-none shadow-md shadow-red-700/25  group hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-800/10"
        >
            <div className="relative">
                <div className=' relative w-full h-[100px]'>
                <Image
                    src={stream.thumbnailUrl || '/assets/xc.jpg'}
                    alt={stream.name}
                    fill
                    className="  absolute object-cover transition-transform duration-700 group-hover:scale-105  "
                />
                </div>
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                    {stream.isLive && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <span className="material-symbols-outlined text-sm mr-1">
                                <BsRecord/>
                            </span>
                            LIVE
                        </span>
                    )}  
                </div>
                <Link href={`/${stream.user.username}/stream`}>
             
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600/80 w-14 h-14 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-white text-3xl">
                        <Play/>
                    </span>
                </button>
                </Link>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <div className=' relative w-10 h-10 '>
                    <Image
                        src={stream.user.imageUrl}
                        alt="Host"
                        fill
                        className=" absolute object-cover rounded-full border-2 border-red-500"
                    />
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold line-clamp-1">
                            {stream.name}
                        </h3>
                        <p className="text-white/60 text-xs">{stream.user.username}</p>
                    </div>
                </div>

            </div>
        </div>
    ))}
</div>
  )
}

export default TopLiveSTream
