


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Hint } from "@/components/hint"
import { Plus } from "lucide-react"
import { getScheduleById } from "@/lib/schedule-service"
import { Schedule } from "@prisma/client"
import EditScheduleForm from "./edit-schedule-form"

interface EditScheduleProps {
  data: Schedule | null
}

export async function EditSchedule({data}:EditScheduleProps) {


  return (
    <Popover>
      <PopoverTrigger >
      <Hint label="Edit Event"  asChild>
        <Button variant="outline" size={'icon'} className=" mr-0  shadow-neutral-500 shadow-md">
            <Plus className="flex md:hidden"/>
            <span className=" hidden md:block">Edit</span>
        </Button>
        </Hint>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-[80%]  mx-0 lg:w-full bg-neutral-900">
        <div className="grid gap-4">
        <EditScheduleForm schedule={data}  />
       
        </div>
      </PopoverContent>
    </Popover>
  )
}
