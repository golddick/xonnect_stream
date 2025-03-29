


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Hint } from "@/components/hint"
import { GalleryHorizontal, Plus } from "lucide-react"
import { getScheduleById } from "@/lib/schedule-service"
import { Schedule, ScheduleFileUpload } from "@prisma/client"
import GalleryFileUploader from "./FileUploader"


interface AddGallaryProps {
  fileUpload: ScheduleFileUpload[];
   scheduleID:string
}

export async function AddGallery({fileUpload, scheduleID}:AddGallaryProps) {


  return (
    <Popover>
      <PopoverTrigger >
      <Hint label="Add Gallery"  asChild>
        <Button variant="outline" size={'icon'} className=" mr-0  shadow-neutral-500 shadow-md">
            <GalleryHorizontal className="flex "/>
            {/* <span className=" hidden md:block">Gallery</span> */}
        </Button>
        </Hint>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-[80%]  mx-0 lg:w-[400px] bg-neutral-900">
        <div className="w-full">
        <GalleryFileUploader fileUpload={fileUpload} scheduleID={scheduleID}/>
       
        </div>
      </PopoverContent>
    </Popover>
  )
}
