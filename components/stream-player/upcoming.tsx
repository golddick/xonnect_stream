import StreamVideos from '@/app/(browse)/(stream_landing)/Stream/_components/StreamVideos/StreamsVideos'
import { Schedule, User } from '@prisma/client'
import React from 'react'

interface Props {
  data: (Schedule & { user: User })[]
}

export const UpcomingStream = ({data}:Props) => {
   
    return (
    <div>
        {/* <StreamVideos /> */}
      
        <StreamVideos data={data} />
    </div>
  )
}
