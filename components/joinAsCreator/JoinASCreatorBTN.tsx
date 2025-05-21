
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
import { CreatorAgreement } from "./creatorAgreement"
import { User } from "@prisma/client"

interface Props{
    tittle?:string
}



export function  JoinASCreatorBTN ({tittle}:Props) {

    

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" text-white">
            {tittle || ' Join as Creator'}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full lg:w-[700px] bg-white text-black p-0  h-[90%]  my-auto  overflow-scroll hidden-scrollbar">
        <CreatorAgreement/>
      </DialogContent>
    </Dialog>
  )
}
