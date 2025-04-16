'use client'

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Star } from "lucide-react";
import { Button } from '@/components/ui/button';
// import { snakeCaseToTitleCase } from '@/lib/utils';
import { ActionBTN } from './ActionBTN';
import Image from 'next/image';
import { Partner } from '@prisma/client';



export const PartnerColumns : ColumnDef<Partner>[] = [

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Company Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.companyName; 
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
        Company Email
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
    accessorKey: 'number',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Company Number
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const number = row.original.phone;
      return (
        <div className="flex font-medium capitalize">
       <p>{number}</p>
        </div>
        )
    }
  },

  {
    accessorKey: 'industry',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Company Industry
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const industry = row.original.industry;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{industry}</p>
        </div>

      );
    }
  },
  {
    accessorKey: 'site',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       Company website
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const site = row.original.website;
      return (

        <div className="flex items-center gap-x-2 text-sm font-medium capitalize">
       <p>{site || 'www.xonnect.co'}</p>
        </div>

      );
    }
  },

  {
    accessorKey: 'status',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
       partnership status
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
        return (
        <ActionBTN partnerID={id} currentStatus= {status}/>
        )

      }
}
];



