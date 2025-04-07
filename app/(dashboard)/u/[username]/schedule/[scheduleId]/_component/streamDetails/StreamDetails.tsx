import { Button } from '@/components/ui/button'
import { Schedule } from '@prisma/client';
import React from 'react'

interface Props {
 
  data: Schedule;
}


const StreamDetails = ({data}:Props) => {

    const isVisible = true

  return (
 
 <>
        <section className="w-full relative isolate py-8">         
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 relative px-4">
                {/* First Card  */}
                <div className="flex flex-col space-y-3 w-full shadow-red-600 p-4 rounded-lg bg-black text-white backdrop-blur-sm border border-red-950">
                    <ul className="space-y-3">
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Title:</span> 
                            <span className="text-[15px] ml-2">{data.title}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Category:</span> 
                            <span className="text-[15px] ml-2">{data.category}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Address:</span>
                            <span className="text-[15px] ml-2">{data.address}</span>
                        </li>
                        
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Price:</span>
                            {data.isFree === false ? (
                                <span className="text-[15px] ml-2">N{data.amount}</span>
                            ) : (
                                <span className="text-[15px] ml-2">Free</span>
                            )}
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold">Description:</span> 
                            <span className="text-[15px] ml-2">{data.description}</span>
                        </li>
                    </ul>
                </div>

                {/* Second Card  */}
                <div className="flex flex-col space-y-3 w-full shadow-red-950 p-4 rounded-lg bg-black text-white backdrop-blur-sm border border-red-500/20">
                    <ul className="space-y-3">
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Organizer:</span> 
                            <span className="text-[15px] ml-2">{data.organizers}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Tags:</span> 
                            <span className="text-[15px] ml-2">{data.tags}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Organizer Email:</span> 
                            <span className="text-[15px] ml-2">{data.orgEmail}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Artists:</span> 
                            <span className="text-[15px] ml-2">{data.artists}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Date & Time:</span> 
                            <span className="text-[15px] ml-2">{data.eventDateTime.toLocaleString()}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </section>

    </>
  )
}

export default StreamDetails