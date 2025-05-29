// import { PlayCircle } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// const HeroSection = () => {
//   return (
//     <section className=" h-auto lg:h-[600px]  relative px-5  py-20 md:py-32  bg-black text-white">
//     <div className="absolute inset-0 bg-[url('/assets/bgr.jpg')] bg-cover bg-center opacity-10 animate-pulse "/>
//     <div className="absolute"/>
//     {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"/> */}
//     {/* <div className="relative z-10 max-w-7xl mx-auto text-center mt-5  md:pt-20 p-4 md:px-8 w-full">
//         <h1 className="text-white text-4xl lg:text-8xl font-bold mb-8 leading-tight animate-fadeIn">Watch What You Want<br/><span className="text-red-700">Pay When You Watch</span></h1>
//         <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">Access thousands of live events, exclusive shows, and premium content.<br/> No subscriptions , No commitments <br/> simply pay for what you want to watch .</p>

//     </div> */}

//  <div className="max-w-4xl mx-auto text-center  lg:mt-10">
//             {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8"> Create, Connect & Monetize with <span className=' text-red-700'>x</span>onnect </h1>
//             <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
//               The all-in-one platform for creators to share live streams, exclusive music, merchandise, stories, posts, and build vibrant communities around their content.
//             </p> */}

//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8"> Create, Connect & Monetize with <span className=' text-red-700'>x</span>onnect </h1>

//             <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
//               <span className='text-red-700'>x</span>onnect connect creators with audiences through premium live streaming and exclusive content. No subscriptions required — pay only for what you watch.
//             </p>


            
//             {/* <div className="mt-8 relative">
//               <div className="bg-transparent rounded-2xl shadow-2xl overflow-hidden">
//                 <div className="relative w-full h-96">
//                   <Image
//                     src="/assets/xc.jpg" 
//                     alt="Xonnect Platform Preview" 
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-20 h-20 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110">
//                       <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M4 4v12l12-6z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>


// </section>
//   )
// }

// export default HeroSection





'use client'




import { PlayCircle, Zap, Users, DollarSign, ArrowRight } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    interface MousePosition {
      x: number
      y: number
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    { icon: Zap, text: "Exclusive Content" },
    { icon: Users, text: " Community" },
    { icon: DollarSign, text: "Pay Per View" }
  ]

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-purple-900/20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.15) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(147, 51, 234, 0.1) 100%)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Main Headline */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Create, Connect &
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent relative">
                Monetize
                <div className="absolute -inset-2 bg-red-600/20 blur-xl -z-10 animate-pulse" />
              </span>
              <br />
                <p className='text-[25px] mt-5'>with</p>
                 <span className="text-red-700 font-extrabold">x</span>onnect
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The revolutionary platform connecting creators with audiences through 
              <span className="text-red-400 font-semibold"> premium live streaming</span> and 
              <span className="text-red-400 font-semibold"> exclusive content</span>.
              <br />
              <span className="text-white/80">No subscriptions. No commitments. Pay only for what you watch.</span>
            </p>
          </div>

          {/* Feature Pills */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 hover:border-red-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <feature.icon className="w-5 h-5 text-red-700 group-hover:text-red-300 transition-colors" />
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

      

       
        </div>

     
      </div>

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection
