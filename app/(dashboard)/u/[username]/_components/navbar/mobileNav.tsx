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

export function MobileNav() {
  return (
    <Sheet >
      <SheetTrigger asChild className=" md:hidden">
        <Button variant="outline" size={'icon'} className=" shadow-neutral-500 shadow-lg">
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=" bg-black flex flex-col justify-between w-[200px]" side={'left'}>
        <Navigation/>
        {/* <SheetFooter className=" w-full ">
          <SheetClose asChild>
          <Actions />
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
