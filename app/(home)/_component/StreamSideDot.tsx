
'use client'

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GripVertical, MoreVertical, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteScheduledStream } from '@/actions/schedule';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Hint } from '@/components/hint';
import ShareBTN from '@/components/share/ShareBTN';


interface SideDotProps {
  scheduleID: string;
  creator: boolean;
  creatorUsername:string | undefined
}

const StreamHeaderSideDot = ({ scheduleID, creator, creatorUsername }: SideDotProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  // Function to handle delete action
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this stream?')) {
      setIsDeleting(true); 

      try {
       
        const response = await deleteScheduledStream(scheduleID);
        toast.success(response.message); // Show success message

        // Optionally, redirect or update the UI to reflect the deletion
        router.push(`/u/${creatorUsername}/schedule`);
      } catch (error) {
        toast.error('Failed to delete the stream. Please try again.');
        console.error('Error deleting stream:', error);
      } finally {
        setIsDeleting(false); // Reset deleting state
      }
    } 
  };

  return (
    <div className=" flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex focus:outline-none ">
           <Hint label="More" asChild>
            <Button variant={'ghost'} size={'icon'}  className=" shadow-md shadow-neutral-600  rounded-lg ">
            <GripVertical />
            </Button>
          </Hint>
         
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuItem>Report</DropdownMenuItem> */}
          <ShareBTN/>
          {creator && (
            <Button
              onClick={handleDelete}
              disabled={isDeleting}
              variant="destructive"
            >
              <Trash className="mr-2" />
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default StreamHeaderSideDot;
