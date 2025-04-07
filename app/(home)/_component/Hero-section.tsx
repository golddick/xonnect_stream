import { PlayCircle } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="min-h-screen relative py-32 ">
    <div className="absolute inset-0 bg-[url('/assets/woman.jpeg')] bg-cover bg-center opacity-10 animate-pulse "/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"/>
    <div className="relative z-10 max-w-7xl mx-auto text-center mt-5  md:pt-20 p-4 md:px-8 w-full">
        <h1 className="text-white text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeIn">Watch What You Want<br/><span className="text-red-500">Pay When You Watch</span></h1>
        <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">Access thousands of live events, exclusive shows, and premium content. No subscriptions, no commitments - simply pay for what you want to watch and enjoy.</p>

        <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-white text-lg">Live Events</span>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-white text-lg">Exclusive Content</span>
                <span className="material-symbols-outlined text-red-500">verified</span>
            </div>
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-white text-lg">HD Streaming</span>
                <span className="material-symbols-outlined text-red-500">hd</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default HeroSection
