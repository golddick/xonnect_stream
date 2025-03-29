


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

import { Hint } from "@/components/hint"
import { Plus, Settings } from "lucide-react"
import EditScheduleForm from "./edit-schedule-form"
import { Schedule } from "@prisma/client"

interface EditScheduleProps {
  data: Schedule | null
}

export function EditSchedule({data}:EditScheduleProps) {
  return (
    <Dialog>
      <DialogTrigger >
      <Hint label="Edit Event" asChild>
        <Button variant={'ghost'}  className=" shadow-md shadow-neutral-600  rounded-lg text-black">
        <Settings/>
        </Button>
      </Hint>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[500px] overflow-scroll hidden-scrollbar">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Edit  event to go live on your channel
          </DialogDescription>
        </DialogHeader>
        <EditScheduleForm schedule={data}  />
      </DialogContent>
    </Dialog>
  )
}

