'use client'

import { getApprovedPartners } from '@/lib/Adminpartners';
import Image from 'next/image';
import { useEffect, useState } from 'react'


export default function ApprovedPartnersSection() {
  const [partners, setPartners] = useState<{ companyName: string; logo?: string }[]>([])

  useEffect(() => {
    const fetch = async () => {
      const result = await getApprovedPartners()
      setPartners(result.map(partner => ({
        companyName: partner.companyName,
        logo: partner.logo || undefined,
      })))
    }

    fetch()
  }, [])

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-black mb-4 border-l-4 border-red-700 pl-3">
        Our Partners
      </h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  items-center justify-center gap-5">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
          >
            <div className="h-20 flex items-center justify-center mb-3 w-full relative bg-red-500">
              <Image
                src={partner.logo || '/assets/xc.jpg'}
                alt={`logo`}
                fill
                className="  absolute object-cover"
              />
            </div>
            <h3 className="text-center font-medium text-gray-800 capitalize">{partner.companyName}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
