import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  // import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
import { EllipsisVertical } from 'lucide-react';
  
//   interface SideDotProps {
//     isLoggedIN:boolean
//   }

const StreamHeaderSideDot = () => {

 


  return (
    <div className='h-[10px] w-[10px] flex items-center '>
        <DropdownMenu>
  <DropdownMenuTrigger className='flex focus:outline-none'><EllipsisVertical/></DropdownMenuTrigger>
  <DropdownMenuContent>
 
    <DropdownMenuItem>Report</DropdownMenuItem>
    <DropdownMenuItem>Share </DropdownMenuItem>


  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default StreamHeaderSideDot