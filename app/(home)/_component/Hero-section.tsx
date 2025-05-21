import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className=" h-auto lg:h-[600px]  relative px-5  py-20 md:py-32  bg-black text-white">
    <div className="absolute inset-0 bg-[url('/assets/bgr.jpg')] bg-cover bg-center opacity-10 animate-pulse "/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/100"/>
    {/* <div className="relative z-10 max-w-7xl mx-auto text-center mt-5  md:pt-20 p-4 md:px-8 w-full">
        <h1 className="text-white text-4xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeIn">Watch What You Want<br/><span className="text-red-700">Pay When You Watch</span></h1>
        <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">Access thousands of live events, exclusive shows, and premium content.<br/> No subscriptions , No commitments <br/> simply pay for what you want to watch .</p>

    </div> */}

 <div className="max-w-4xl mx-auto text-center  lg:mt-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8"> Create, Connect & Monetize with <span className=' text-red-700'>X</span>onnect </h1>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              The all-in-one platform for creators to share live streams, exclusive music, merchandise, stories, posts, and build vibrant communities around their content.
            </p>
            
            {/* <div className="mt-8 relative">
              <div className="bg-transparent rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative w-full h-96">
                  <Image
                    src="/assets/xc.jpg" 
                    alt="Xonnect Platform Preview" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4v12l12-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>


</section>
  )
}

export default HeroSection
