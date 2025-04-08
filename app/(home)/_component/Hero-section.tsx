import { PlayCircle } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section className=" h-[calc(100vh-50px)] relative  py-20 md:py-32 ">
    <div className="absolute inset-0 bg-[url('/assets/bgr.jpg')] bg-cover bg-center opacity-10 animate-pulse "/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/100"/>
    <div className="relative z-10 max-w-7xl mx-auto text-center mt-5  md:pt-20 p-4 md:px-8 w-full">
        <h1 className="text-white text-4xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeIn">Watch What You Want<br/><span className="text-red-700">Pay When You Watch</span></h1>
        <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">Access thousands of live events, exclusive shows, and premium content.<br/> No subscriptions , No commitments <br/> simply pay for what you want to watch .</p>

    </div>
</section>
  )
}

export default HeroSection
