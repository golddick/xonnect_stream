import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { Schedule, User } from '@prisma/client';
import ScheduledStreamPage from '../_component/EventDetails';
import { getAvailablePhysicalSlots, getScheduleById } from '@/lib/schedule-service';

interface Props {
    params: {
      eventID: string;
    };
  }

const page = async ({params}:Props) => {

     const externalUser = await currentUser();
        
      
       const data = await getScheduleById( params?.eventID);
      const availableSlots = await getAvailablePhysicalSlots(params?.eventID)

       const schedules = data?.user.schedules
       const following = data?.user.following?.map(f => f.followingId) || [];
       const folowers = data?.user.followedBy?.map(fb => fb.followerId) || [];


  return (
    <>
    <ScheduledStreamPage availableSlots={availableSlots} data={data as (Schedule & { user?: User }) | null} scheduledEvent={schedules as Schedule[] | null | undefined}  following={following} followers={folowers} userId={externalUser?.id} selfEmail={externalUser?.emailAddresses[0].emailAddress} selfName={externalUser?.username } />

    </>
  )
}

export default page
