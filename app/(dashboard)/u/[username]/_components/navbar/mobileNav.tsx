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
import { Menu, MenuSquare } from "lucide-react"
import { Navigation } from "../sidebar/navigation"
import { Actions } from "./actions"
import { Wrapper } from "../sidebar/wrapper"
import { Toggle } from "../sidebar/toggle"
import Image from "next/image"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet >
      <SheetTrigger asChild className=" md:hidden">
        <Button variant="outline" size={'icon'} className=" shadow-neutral-500 shadow-lg rounded-lg overflow-hidden">
           <div className=' relative  size-10 cursor-pointer  animate-pulse'>
           <Image src='/assets/xsb.png' alt='Logo' fill className='absolute'/>
            </div>
        </Button>
      </SheetTrigger>
      <SheetContent className=" bg-black flex flex-col justify-between w-[200px]" side={'left'}>
        <Navigation/>
      </SheetContent>
    </Sheet>
  )
}  
