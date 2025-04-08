'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
       <div className="items-center gap-2 w-[40px] h-[40px] relative flex shadow-md shadow-neutral-600 md:hidden animate-pulse rounded-lg overflow-hidden">
        <Image src='/assets/xsb.png' alt='Logo' fill className='absolute rounded-lg'/>
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className="w-[300px]">
        <SheetHeader>
          <SheetTitle>XONNECT</SheetTitle>
          <SheetDescription>
           Your OnDemand streaming platform
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-10 w-full items-start">

          <SheetClose asChild>
            <Link href="/" className="w-full h-full">
              <Button 
                variant={'link'} 
                className={`w-full font-bold items-start flex justify-start ${
                  pathname === "/" ? "border-r-2 border-red-700" : ""
                }`}
              >
                <span className="text-start items-start flex">Home</span>
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/about-us" className="w-full">
              <Button 
                variant={'link'} 
                className={`w-full font-bold items-start flex justify-start ${
                  pathname === "/about-us" ? "border-r-2 border-red-700 font-bold" : ""
                }`}
              >
                About
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/explore-event" className="w-full">
              <Button 
                variant={'link'} 
                className={`w-full font-bold items-start flex justify-start ${
                  pathname === "/explore-event" ? "border-r-2 border-red-700 font-bold" : ""
                }`}
              >
                 Event
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/pricing" className="w-full">
              <Button 
                variant={'link'} 
                className={`w-full font-bold items-start flex justify-start ${
                  pathname === "/pricing" ? "border-r-2 border-red-700 font-bold" : ""
                }`}
              >
                Pricing
              </Button>
            </Link>
          </SheetClose>

          {/* <SheetClose asChild>
            <Link href="/features" className="w-full">
              <Button 
                variant={'link'} 
                className={`w-full font-bold items-start flex justify-start ${
                  pathname === "/features" ? "border-r-2 border-red-600 font-bold" : ""
                }`}
              >
                Features
              </Button>
            </Link>
          </SheetClose> */}

        </div>
      </SheetContent>
    </Sheet>
  )
}