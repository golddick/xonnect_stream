  
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
import ShareBTN from "../share/ShareBTN"
  
  export function DotEllipse() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button size={'sm'}  variant={'ghost'}  className=" ">
        <BsThreeDotsVertical  />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {/* <DropdownMenuItem>
              <span>Report Channel</span>
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <ShareBTN/>
          </DropdownMenuGroup>
        
        
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  