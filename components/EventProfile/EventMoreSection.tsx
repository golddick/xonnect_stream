import { EditSchedule } from '@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/edit-schedule/edit-schedule';
import { AddGallery } from '@/app/(dashboard)/u/[username]/schedule/[scheduleId]/_component/StreamGallary/AddGallery';
import StreamHeaderSideDot from '@/app/(home)/_component/StreamSideDot';
import { Schedule, ScheduleFileUpload, User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

interface Props {
    data: (Schedule & { user?: User })
    userId:string | undefined
    fileUpload: ScheduleFileUpload[]
}

const EventMoreSection = ({data, userId, fileUpload}:Props) => {


    const creator = userId && data.user?.externalUserId === userId;


  return (
    <div className="p-5 bg-gray-50 border-t border-gray-200">
    <div className="flex justify-between items-center">
        <Link href={`/channel/${data.user?.username}`}>
        <button className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors transform hover:scale-105 duration-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
            </svg>
            Watch Stream
        </button>
        </Link>

        <div className="flex space-x-2 items-center  mr-5">
           {
            creator && (
                 <div className='flex gap-2 items-center'>
                <EditSchedule data={data} />
                <AddGallery fileUpload={fileUpload} scheduleID={data.id} />
            </div>
            )
           }
            <StreamHeaderSideDot scheduleID={data.id} creator={!!creator} creatorUsername={data.user?.username} />
        </div>
    </div>
</div>
  )
}

export default EventMoreSection
