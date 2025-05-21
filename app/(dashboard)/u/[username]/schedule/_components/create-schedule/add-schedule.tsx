

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ScheduleForm from "./StreamForm"
import { Hint } from "@/components/hint"
import { Plus } from "lucide-react"

export function AddSchedule() {
  return (
    <Dialog>
      <DialogTrigger >
      <Hint label="Create Upcoming Event" asChild>
        <Button variant={'ghost'}  className=" shadow-md shadow-neutral-600  rounded-lg">
        <Plus/>
        </Button>
      </Hint>
      </DialogTrigger>
      <DialogContent className=" w-[90%] md:w-[425px] lg:w-[700px] bg-gray-800 h-[500px] overflow-scroll hidden-scrollbar">
        <DialogHeader>
          <DialogTitle>Schedule Event</DialogTitle>
          <DialogDescription>
            Schedule and event to go live on your channel
          </DialogDescription>
        </DialogHeader>
        <ScheduleForm/>
      </DialogContent>
    </Dialog>
  )
}
