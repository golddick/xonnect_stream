'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import { CreatorRequest } from '@prisma/client';
import { CreatorRequestWithUser } from '@/lib/queries/creatorsRequest';
import { CreatorRequestActionButton } from './ActionBTN';





export const RequestColumns : ColumnDef<CreatorRequestWithUser>[] = [


  {
    accessorKey: 'ID',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        User ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const id = row.original.userId;
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
         Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.user.username; 
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
      const email = row.original.user.email;
      return (

        <div className="flex font-medium capitalize">
       <p>{email}</p>
        </div>

      );
    }
  },


  {
    accessorKey: 'User Role ',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       User Role
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const role = row.original.user.role;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{role}</p>
        </div>

      );
    }
  },

  {
    accessorKey: 'Request status',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       Request status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
          <Badge variant={status}>{status}</Badge>
        </div>

      );
    }
  },

 

 



  {
    id:'actions',
    cell: ({ row }) => {
        const id = row.original.id;
        const status = row.original.status;
        const userID = row.original.userId
        return (
        <CreatorRequestActionButton requestId={id} currentStatus= {status}  userId={userID}/>
        )

      }
}
];



