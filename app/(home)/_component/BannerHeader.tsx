import Image from 'next/image'
import React from 'react'

interface BannerHeaderProps{
    img: string;
    title: string;
    header: string;
    subText: string;
}

const BannerHeader = ({img,title,header,subText}:BannerHeaderProps) => {
  return (
    <header className="relative h-[600px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
    <div className=" relative  w-full h-full ">
    <Image
        className=" absolute  object-cover object-center"
        fill
        src={img}
        alt="Concert venue background"
    />
    </div>
    
   
    <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
        <div className="bg-black/50 p-6 rounded-xl backdrop-blur-sm max-w-3xl">
            <p className="text-red-600 uppercase font-bold tracking-wider mb-2">{title}</p>
            <header className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight animate-fadeInDown">
               {header}
            </header>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto animate-fadeInUp">
               {subText}
            </p>
        </div>
    </div>
</header>
  )
}

export default BannerHeader
