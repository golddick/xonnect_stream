  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Hint } from "../hint"
import { BsThreeDotsVertical } from "react-icons/bs"
  
  export function DotEllipse() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button size={'icon'}  variant={'ghost'}  className=" shadow-md shadow-neutral-500  size-6 text-white">
        <BsThreeDotsVertical  />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Report Channel</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Share Link</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        
        
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  