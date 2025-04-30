'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import { ContactForm, CreatorRequest } from '@prisma/client';
import { CreatorRequestWithUser } from '@/lib/queries/creatorsRequest';
import { CreatorRequestActionButton } from './ActionBTN';





export const RequestColumns : ColumnDef<ContactForm>[] = [


  {
    accessorKey: 'ID',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex font-medium capitalize">
       <p>{id}</p>
        </div>
        )
    }
  },

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
         Full Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.fullName; 
      return (

        <div className="flex font-medium capitalize">
      <p>{name}</p>
     </div>

      );
    }
  },
  
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        User Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const email = row.original.email;
      return (

        <div className="flex font-medium capitalize">
       <p>{email}</p>
        </div>

      );
    }
  },


  {
    accessorKey: 'subject ',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Subject
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const role = row.original.subject;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{role}</p>
        </div>

      );
    }
  },

  {
    accessorKey: 'Request Department',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       Request Department
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const Department = row.original.department;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
          {Department}
        </div>

      );
    }
  },
  {
    accessorKey: 'Request Message',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       Request Message
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const Message = row.original.message;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
          {Message}
        </div>

      );
    }
  },

 

 



//   {
//     id:'actions',
//     cell: ({ row }) => {
//         const id = row.original.id;
//         const status = row.original.status;
//         const userID = row.original.userId
//         return (
//         <CreatorRequestActionButton requestId={id} currentStatus= {status}  userId={userID}/>
//         )

//       }
// }
];



