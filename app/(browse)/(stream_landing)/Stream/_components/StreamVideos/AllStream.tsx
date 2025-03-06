import React from 'react'
import StreamVideos from './StreamsVideos';
import StreamHeader from './StreamHeader';
import { getSchedules } from '@/lib/schedule-service';


interface AllStreamProps{
  label:string
}




const AllStream = async ({label, }:AllStreamProps) => {

  const data = await getSchedules();


  console.log(data,'data data')

  return (
    <div className='  justify-center w-full h-auto  flex flex-col gap-4'>
      <StreamHeader label={label}/>
        <StreamVideos data={data} />
    </div>
  )
}

export default AllStream