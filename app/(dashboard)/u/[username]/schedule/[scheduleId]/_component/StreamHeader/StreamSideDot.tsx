// import React from 'react'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
//   // import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Link from 'next/link';
// import { MoreVertical, Trash } from 'lucide-react';
// import { Button } from '@/components/ui/button';

  
//   interface SideDotProps {
//     scheduleID:string
//     creator:boolean
//   }

// const StreamHeaderSideDot = ({scheduleID, creator}:SideDotProps) => {

 


//   return (
//     <div className='h-[10px] w-[10px] flex items-center '>
//         <DropdownMenu>
//   <DropdownMenuTrigger className='flex focus:outline-none'><MoreVertical/></DropdownMenuTrigger>
//   <DropdownMenuContent>
 
//     <DropdownMenuItem>Report</DropdownMenuItem>
//     <DropdownMenuItem>Share </DropdownMenuItem>
//     {
//       creator && (
//         <Button >
//           <span>Delete</span>
//         </Button>
//       )
//     }


//   </DropdownMenuContent>
// </DropdownMenu>

//     </div>
//   )
// }

// export default StreamHeaderSideDot

'use client'

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteScheduledStream } from '@/actions/schedule';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


interface SideDotProps {
  scheduleID: string;
  creator: boolean;
}

const StreamHeaderSideDot = ({ scheduleID, creator }: SideDotProps) => {
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
        router.push('/u/xonnet/schedule');
      } catch (error) {
        toast.error('Failed to delete the stream. Please try again.');
        console.error('Error deleting stream:', error);
      } finally {
        setIsDeleting(false); // Reset deleting state
      }
    }
  };

  return (
    <div className="h-[10px] w-[10px] flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex focus:outline-none">
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Report</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
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
