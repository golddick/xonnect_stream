import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useUserName } from "@/hooks/use-get-username"
import Link from "next/link"

interface ScheduleCardProps {
    id:string
    title:string
    amount:number
    address:string
}



export function ScheduleCard({id,title,address,amount}:ScheduleCardProps) {

    const username = useUserName()

    const href = `/u/${username}/schedule/${id}`

  return (
    <Link href={href} key={id}>
        <HoverCard  >
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
    </Link>
    
  )
}
