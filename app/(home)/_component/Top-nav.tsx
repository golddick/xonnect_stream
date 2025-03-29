import Image from 'next/image'
import React from 'react'
import { MobileNav } from './mobileNav'
import { HomeNavActions } from './TopNavAction'
import LargeScreenNav from './largeScreenNav'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import { HomeActions } from './TopNavAction'

export const Top_nav = () => {


  return (
    <nav className="flex items-center justify-between bg-transparent fixed top-0 z-50 w-full p-4 text-white text-[20px]">
      <div className="items-center gap-2 w-[50px] h-[50px] relative hidden md:flex animate-pulse rounded-lg overflow-hidden shadow-md shadow-neutral-600">
        <Image src='/assets/xsb.png' alt='Logo' fill className='absolute'/>
      </div>
      <MobileNav/>
     <LargeScreenNav/>

      <div className='flex items-center gap-2'>
        
        <HomeNavActions/>
      </div>
    </nav> 
  )
}