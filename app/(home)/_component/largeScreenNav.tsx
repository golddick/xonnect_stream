'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LargeScreenNav = () => {

      const pathname = usePathname()
    
      // Function to determine active link style
      const getLinkClass = (path: string) => {
        return pathname === path 
          ? 'font-bold border-b-2 border-red-600 pb-1 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg' 
          : 'hover:opacity-80 transition-opacity bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-black/60'
    }

  return (
    <nav className="hidden space-x-6 text-[15px] text-white md:flex items-center">
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/about-us" className={getLinkClass('/about-us')}>About</Link>
        <Link href="/explore-event" className={getLinkClass('/explore-event')}> Event</Link>
        <Link href="/pricing" className={getLinkClass('/pricing')}>Pricing</Link>
        <Link href="/features" className={getLinkClass('/features')}>Features</Link>
      </nav>
  )
}

export default LargeScreenNav
