import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Plus } from "lucide-react"
import ScheduleForm from "./create-schedule/StreamForm"

export function AddSchedule() {
  return (
    <Popover>
      <PopoverTrigger >
        <Hint label="Create Upcoming Event" asChild>
        <Button variant="outline" size={'icon'} className=" mr-0  shadow-neutral-500 shadow-md">
            <Plus/>
        </Button>
        </Hint>
      </PopoverTrigger>
      <PopoverContent className="w-80 lg:w-[400px] bg-zinc-900  h-[700px] overflow-scroll hidden-scrollbar ">
        <ScheduleForm/>
      </PopoverContent>
    </Popover>
  )
}
