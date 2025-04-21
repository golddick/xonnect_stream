'use client'

import React from 'react'
import { usePathname } from "next/navigation";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeaderProps {
    label: string
}

const StreamHeader = ({label}:HeaderProps) => {
    const routes = [
        {
            id: 1,
            label: 'Home',
            href: '/',
        },
        {
            id: 2,
            label: 'Premium',
            href: '/premium',
        },
    ];

    const pathname = usePathname();

    return (
        <div className=' flex items-center justify-between px-2 '>
            <h2 className=' text-white text-lg'>{label} </h2>
            <div className='flex items-center gap-2 justify-end  lg:mr-10'>
                {/* {routes.map(route => (
                    <Button
                        asChild
                        variant='link'
                        className={cn('flex w-auto text-muted-foreground', "justify-start", route.href === pathname && 'text-[#b28228]')}
                        key={route.id}
                    >
                        <Link href={route.href}>
                            <p>{route.label}</p>
                        </Link>
                    </Button>
                ))} */}
                <span className=' cursor-pointer  animate-pulse  rounded-md p-2 flex items-center'><p className=' text-red-700'>X</p>ONNECT</span>
                {/* <div className=' relative  size-10 cursor-pointer  animate-pulse'>
                <Image src='/assets/xsb.png ' fill  className=' rounded-lg shadow-md shadow-neutral-500  absolute' alt='logo'  />
                </div> */}
            </div>
        </div>
    );
}

export default StreamHeader;



