'use client'

import { useEffect, useState } from 'react'

import { Computer, Banknote, PlaySquareIcon, BookOpenCheck, FactoryIcon, BikeIcon } from 'lucide-react'
import { getPartnersByIndustry } from '@/lib/partners'

// Mapping enum type to icons
const industryIcons: Record<string, JSX.Element> = {
  TECHNOLOGY: <Computer />,
  FINANCE: <Banknote />,
  ENTERTAINMENT: <PlaySquareIcon />,
  EDUCATION: <BookOpenCheck />,
  MANUFACTURING: <FactoryIcon />,
  LOGISTICS: <BikeIcon />,
}

export default function PartnerCategoriesSection() {
  const [categories, setCategories] = useState<
    { name: string; type: string; count: number; partners: any[] }[]
  >([])

  useEffect(() => {
    const fetch = async () => {
      const res = await getPartnersByIndustry()
      setCategories(
        res.map((item) => ({
          ...item,
          name: item.type, // Assuming 'type' can be used as 'name'
        }))
      )
    }

    fetch()
  }, [])

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-black mb-6 border-l-4 border-red-600 pl-3">
        Partner Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 transition-all duration-300 hover:border-red-300 hover:bg-red-50 group"
          >
            <div className="flex items-start">
              <span className="text-4xl text-gray-400 group-hover:text-red-700 mr-4">
                {industryIcons[item.type] || <Computer />}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-gray-600">{item.count} partners</p>
                <a
                  href={`/partners/${item.type.toLowerCase()}`}
                  className="text-red-700 group-hover:underline flex items-center mt-3"
                >
                  View partners
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
