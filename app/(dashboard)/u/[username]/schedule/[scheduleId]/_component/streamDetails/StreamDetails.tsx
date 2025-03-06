import { Button } from '@/components/ui/button'
import { Schedule } from '@prisma/client';
import React from 'react'

interface Props {
 
  data: Schedule;
}


const StreamDetails = ({data}:Props) => {


  return (
    <div className='w-full  '>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 relative px-4 '>

            <div className='flex flex-col space-y-3 w-full shadow-[gold] shadow-md p-4 rounded-lg'>

           

            <ul>
                <li>
                    <span className=' text-neutral-600 font-bold'>Title:</span> <i  className=' text-[15px] '> {data.title}</i>
                </li>
                <li>
                    <span className=' text-neutral-600 font-bold'>Address:</span>
                    <i  className=' text-[15px] '> {data.address}</i>
                </li>
                <li>
                    <span className=' text-neutral-600 font-bold'>Price:</span>
                    {
                        data.isFree === false ? (
                            <i  className=' text-[15px] '>N{data.amount}</i>
                        ):
                        (
                            <i  className=' text-[15px] '>Free</i>
                        )
                    }
                </li>
                <li>
                    <span className=' text-neutral-600 font-bold'>Description:</span> <i  className=' text-[15px] '>{data.description}</i>
                </li>
            </ul>
            </div>

            <div className='flex flex-col space-y-3 w-full shadow-[red] shadow-md p-4 rounded-lg'>
            <ul>

                <li>
                    <span className=' text-neutral-600 font-bold'>Organizer:</span> <i  className=' text-[15px] '> {data.organizers}</i>
                </li>

                <li>
                    <span className=' text-neutral-600 font-bold'>Organizer Email:</span> <i  className=' text-[15px] '>{data.orgEmail}</i>
                </li>

                <li>
                    <span className=' text-neutral-600 font-bold'>Artists:</span> <i  className=' text-[15px] '>{data.artists}</i>
                </li>
                
                

                <li>
                    <span className=' text-neutral-600 font-bold'>Date & Time:</span> <i className='text-[15px]'>{data.eventDateTime.toLocaleString()}</i>
                </li>

            </ul>
            </div>

        </div>

      
    </div>
  )
}

export default StreamDetails