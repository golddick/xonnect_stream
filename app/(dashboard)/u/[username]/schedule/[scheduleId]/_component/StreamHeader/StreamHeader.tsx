
'use client'

import { BadgeCheck, VerifiedIcon } from 'lucide-react'
import React from 'react'
import StreamHeaderSideDot from '../../../../../../../(home)/_component/StreamSideDot'
import { UserAvatar } from '@/components/user-avatar'
import { Button } from '@/components/ui/button'
import { Schedule as PrismaSchedule, ScheduleFileUpload, User } from '@prisma/client'
import { getSelf } from '@/lib/auth-service'
import { EditSchedule } from '../edit-schedule/edit-schedule'
import { AddGallery } from '../StreamGallary/AddGallery'
import { Actions } from '@/components/stream-player/actions'
import Link from 'next/link'
import { SchedulePurchaseBTN } from '@/components/purchaseBTN/SchedulePurchaseBTN'

interface Schedule extends PrismaSchedule {
  user?: User;
}

interface Props {
  data: Schedule;
  userId: string | undefined
  selfName: string | undefined | null
  selfEmail: string | null | undefined
  fileUpload: ScheduleFileUpload[]
}

const StreamHeader = ({ data, userId, fileUpload, selfName, selfEmail }: Props) => {
  const creator = userId && data.user?.externalUserId === userId;

  return (
    <div>
      <div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex w-full items-center gap-4 lg:gap-2 px-2'>
            <UserAvatar
              imageUrl={data.user?.imageUrl || data.thumbnailImage || '/assets/xsw.png'}
              username={data.user?.username || data.title}
              size='lg'
              isLive={data.isLive}
              showBadge
            />
            <div>
              <div className='flex items-center gap-2'>
                <h2 className="text-[15px] md:text-lg font-semibold">
                  {data.user?.username}&apos;s channel
                </h2>
                <BadgeCheck className="text-gold size-4" />
              </div>
              <Link href={`/channel/${data.user?.username}`}>
                channel link
              </Link>
            </div>
          </div>

          <div className='flex w-full items-center justify-end pr-4 gap-2'>
            <div className='flex items-center'>
              {creator ? (
                <div className='flex gap-2 items-center'>
                  <EditSchedule data={data} />
                  <AddGallery fileUpload={fileUpload} scheduleID={data.id} />
                </div>
              ) : data.amount && data.amount > 0 ? ( 
                <div className='flex gap-2 items-center'>
                  <SchedulePurchaseBTN 
                    data={data} 
                    selfName={selfName} 
                    selfEmail={selfEmail} 
                    userId={userId} 
                  />
                </div>
              ) : null}
            </div>

            <div className='justify-end'>
              <StreamHeaderSideDot scheduleID={data.id} creator={!!creator}  creatorUsername={data.user?.username}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StreamHeader


