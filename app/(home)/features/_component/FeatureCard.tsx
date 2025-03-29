import React from 'react'

interface FeatureCardProps {
    svg: React.ReactNode
    title: string
    description: string
}

const FeatureCard = ({svg, title, description}:FeatureCardProps) => {
  return (
    <div className="bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-3 hover:border-red-200">
    {svg}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">
     {description}
    </p>
    <div className="mt-4 w-1/3 h-1 bg-red-600 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
</div>
  )
}

export default FeatureCard
