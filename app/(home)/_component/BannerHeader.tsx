// import { PlayCircle } from 'lucide-react'
// import React from 'react'

// interface HeroSectionProps {
//   Header:string
//   H1:string
//   Desc:string
// }

// const BannerHeader = ({Header, H1, Desc}:HeroSectionProps) => {
//   return (
//     <section className="pt-20 pb-16 bg-gray-50 text-black">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-6">{Header}</div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">{H1}</h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             {Desc}
//           </p>
//         </div>
//       </section>
//   )
// }

// export default BannerHeader


'use client'

import { Zap, Users, DollarSign } from 'lucide-react'
import React, { useState, useEffect } from 'react'

interface HeroSectionProps {
  Header: string
  H1: string
  Desc: string
}

const BannerHeader = ({ H1, Header, Desc }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative bg-black text-white overflow-hidden h-[300px] md:h-[300px] lg:h-[400px] flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.15) 0%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 1) 50%)`
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
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            {Header}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{H1}</h1>
          <p className="text-gray-300 text-base md:text-lg">{Desc}</p>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}

export default BannerHeader
