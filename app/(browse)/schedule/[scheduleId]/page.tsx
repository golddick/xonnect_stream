


import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { Comment, CommentLike, Reply, Schedule, User } from '@prisma/client';
import {  getAvailablePhysicalSlots, getComments, getScheduleById } from '@/lib/schedule-service';
import ScheduledStreamPage from '@/app/(single-page)/Event/_component/EventDetails';
import FormattedComment from '@/lib/type';

interface Props {
    params: {
      scheduleId: string;
    };
  } 

const page = async ({params}:Props) => {

     const externalUser = await currentUser();
        
      
       const data = await getScheduleById( params?.scheduleId);
       const comments = await getComments(params?.scheduleId)
       const availableSlots = await getAvailablePhysicalSlots(params?.scheduleId)

       console.log(comments, 'cmm')
       console.log(data, 'ppl')
       const schedules = data?.user.schedules
       const following = data?.user.following?.map(f => f.followingId) || [];
       const folowers = data?.user.followedBy?.map(fb => fb.followerId) || [];


  return (
    <>
    {/* <ScheduledStreamPage
     data={data as (Schedule & { user?: User }) | null} 
    comments={eventComment || ''} 
    scheduledEvent={schedules as Schedule[] | null | undefined} following={following} followers={folowers} userId={externalUser?.id} selfEmail={externalUser?.emailAddresses[0].emailAddress} selfName={externalUser?.username } /> */}


    <ScheduledStreamPage
      data={
        data as (Schedule & {
          user?: User;
          comments?: (Comment & {
            user?: User;
            replies?: (Reply & {
              user?: User;
            })[];
            likes?: CommentLike[];
          })[];
        }) | null
      }
      scheduledEvent={schedules as Schedule[]}
      availableSlots={availableSlots}
      following={following}
      followers={folowers}
      userId={externalUser?.id}
      selfEmail={externalUser?.emailAddresses[0].emailAddress}
      selfName={externalUser?.username}
    />

    </>
  )
}

export default page
