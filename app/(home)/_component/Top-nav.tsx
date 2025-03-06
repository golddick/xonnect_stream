import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Top_nav = () => {
  return (
       <nav className="flex items-center justify-between bg-black fixed top-0 z-50 w-full p-4 ">
              <div className="flex items-center gap-2">
               <Image src='/assets/xb.png' alt='Logo'  width={200} height={20} className=' '/>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#home">Home</Link>
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button     className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[red] font-medium to-[black]">
                <Link href="/Stream">Stream</Link>
              </Button>
    </nav> 
  )
}
