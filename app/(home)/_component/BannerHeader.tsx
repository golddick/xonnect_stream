import { PlayCircle } from 'lucide-react'
import React from 'react'

interface HeroSectionProps {
  Header:string
  H1:string
  Desc:string
}

const BannerHeader = ({Header, H1, Desc}:HeroSectionProps) => {
  return (
    <section className="pt-20 pb-16 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-6">{Header}</div>
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-6">{H1}</h1> */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {Desc}
          </p>
        </div>
      </section>
  )
}

export default BannerHeader
