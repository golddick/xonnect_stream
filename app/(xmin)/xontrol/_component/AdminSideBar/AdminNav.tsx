'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const navItems = [
    { label: 'Dashboard', href: '/xontrol' },
    { label: 'Partners', href: '/xontrol/partners' },
    { label: 'Creators ', href: '/xontrol/creator-requests' },
    { label: 'Events', href: '/xontrol/events' },
  ];

const AdminNav = () => {

    const pathname = usePathname();
  return (
    <nav className="mt-4 flex flex-col space-y-4 px-6">
    {navItems.map(({ label, href }) => {
      const isActive = pathname === href;
      // const isActive = pathname.startsWith(href);
      return (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium ${
            isActive ? 'text-red-700' : 'text-muted-foreground text-[20px]'
          } hover:text-gold transition-colors`}
        >

          {label}
        </Link>
      );
    })}
  </nav>
  )
}

export default AdminNav
