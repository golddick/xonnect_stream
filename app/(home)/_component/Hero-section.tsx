import { PlayCircle } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="min-h-screen relative py-32 ">
    <div className="absolute inset-0 bg-[url('/assets/woman.jpeg')] bg-cover bg-center opacity-10 animate-pulse "/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"/>
    <div className="relative z-10 max-w-7xl mx-auto text-center mt-5  md:pt-20 p-4 md:px-8 w-full">
        <h1 className="text-white text-8xl font-bold mb-8 leading-tight animate-fadeIn">Watch What You Want<br/><span className="text-red-500">Pay When You Watch</span></h1>
        <p className="text-white/90 text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">Access thousands of live events, exclusive shows, and premium content. No subscriptions, no commitments - simply pay for what you want to watch.</p>
        <div className="flex justify-center flex-col md:flex-row gap-2">
            <button className="bg-red-600 text-white px-12 py-5 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50 text-lg font-semibold flex items-center gap-2">
               <PlayCircle/>
                Start Watching
            </button>
            <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white hover:text-red-900 transition-all duration-300 transform hover:scale-105 text-lg font-semibold flex items-center gap-2">
               Become Creator
            </button>
        </div>
        <div className="flex justify-center mt-16 gap-8 flex-wrap">
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
