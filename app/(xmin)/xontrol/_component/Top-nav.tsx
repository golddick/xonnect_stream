import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import { Button } from '@/components/ui/button'


export const AdminNav = () => {


  return (
    <nav className="flex items-center justify-between bg-black fixed top-0 z-40 w-full p-4 text-white text-[20px]">
      <div className="items-center gap-2 w-[40px] h-[40px] relative flex animate-pulse rounded-lg overflow-hidden shadow-md shadow-neutral-600">
        <Link href={'/'}>
        <Image src='/assets/xsb.png' alt='Logo' fill className='absolute'/>
        </Link>
      </div>

      <div className='flex items-center gap-2'>
        
    admin
      </div>
    </nav> 
  )
}