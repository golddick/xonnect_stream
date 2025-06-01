
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
    { icon: Users, text: "Creator Community" },
    { icon: DollarSign, text: "Pay On Demand" }
  ]

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-black to-black transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.15) 0%,  rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 1) 100%)`
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
