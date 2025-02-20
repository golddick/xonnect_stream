'use client'

import React, { useState } from 'react'
import { format, getDay, parse, startOfWeek, addMonths, subMonths} from 'date-fns'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { enUS} from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css';  
import { Schedule } from '@prisma/client'
import { ScheduleCard } from './ScheduleCard'
import { CustomToolbar } from './custom-toolbar'



const locales = {
    'en-US': enUS,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

interface ScheduleStreamCalenderProps {
    data: Schedule[]
}

export const ScheduleCalender = ({data}:ScheduleStreamCalenderProps) => {
    const [value, setValue] = useState( 
        data.length > 0 ? new Date(data[0].eventDateTime) : new Date()
    )

    const events = data.map((stream) => ({
        start: new Date(stream.eventDateTime),
        end: new Date(stream.eventDateTime),
        title: stream.title,
        amount: stream.amount,
        address: stream.address,
        scheduleId: stream.id,
    }))



    const handleNavigate = (action: 'PREV' | "NEXT" | "TODAY") => {
        if (action === 'PREV') {
            setValue(subMonths(value, 1));
        }else if (action === 'NEXT') {
            setValue(addMonths(value, 1))
        }else if (action === 'TODAY') {
            setValue(new Date())
        }
    }
  return (
    <div className=' bg-black h-full p-4'>
    <Calendar
      localizer={localizer}
      events={events}
      date={value}
      views={['month']}
      defaultView='month'
      toolbar
      showAllEvents
      style={{border:'red'}}
      className=' border-none'
      max={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      formats={{
        weekdayFormat:(date, culture, localizer) => localizer?.format(date, "EEE", culture) ?? ''
      }}
      components={{
        eventWrapper: ({ event}) => (
            <ScheduleCard
            id={event.scheduleId}
            title={event.title}
            amount={event.amount}
            address={event.address}

              />
        ),
        toolbar: () => (
            <CustomToolbar 
            date={value}
            handleNavigate={handleNavigate}
            />
        )
      }}
    />



    {/* <Calendar
      localizer={localizer}
      events={events}
      date={value}
      views={['month']}
      defaultView='month'
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      toolbar
      showAllEvents
    /> */}
  </div>
  )
}

