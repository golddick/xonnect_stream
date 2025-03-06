import React from 'react'
import { ScheduleCalender } from './_components/ScheduleCalender'
import {  getSchedulesByUserID } from '@/lib/schedule-service';
import { getSelf } from '@/lib/auth-service';



const page = async() => {
   const data = await getSchedulesByUserID();
   
  
  return (
    <div className=' h-full w-full'>
      <ScheduleCalender data={data}/>
    </div>
  )
}

export default page

