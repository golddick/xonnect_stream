// import React from 'react'

// interface ScheduleCardProps {
//     id:string
//     title:string
//     amount:number
//     address:string
// }

// export const ScheduleCard = ({id, title, address, amount}:ScheduleCardProps) => {
//   return (
//     <div className='from-[red] font-medium to-[black]  bg-gradient-to-br rounded-lg'>ScheduleCard</div>
//   )
// }


import { Banknote, CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface ScheduleCardProps {
    id:string
    title:string
    amount:number
    address:string
}

export function ScheduleCard({id,title,address,amount}:ScheduleCardProps) {
  return (
    <HoverCard key={id} >
      <HoverCardTrigger asChild className=" ">
       <div className="w-full h-full rounded-md p-2 truncate from-[red] to-[black] bg-gradient-to-br">
        {title}
       </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 from-[black] to-[black] bg-gradient-to-br z-auto text-white">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-gold">{title}</h4>
            <p className="text-sm">
             {address}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
