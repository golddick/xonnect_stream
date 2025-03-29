

import React from 'react';
import { getSchedules } from '@/lib/schedule-service';
import EventRow from './EventRow';

interface AllStreamProps {
  type: 'upcoming' | 'past'; // Add a `type` prop to specify the filter
}

const ScheduledEvent = async ({  type }: AllStreamProps) => {
  let data;
  try {
    data = await getSchedules();
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return <div>Error loading schedules. Please try again later.</div>;
  }

  const currentDate = new Date();

  // Filter events based on the `type` prop
  const filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.eventDateTime);
    if (type === 'upcoming') {
      return eventDate > currentDate; // Keep upcoming events
    } else if (type === 'past') {
      return eventDate <= currentDate; // Keep past events
    }
    return true; // Default to no filtering if `type` is invalid
  });

  if (filteredEvents.length === 0) {
    return (
      <div className="justify-center w-full h-auto flex flex-col gap-4">
        <p className="text-center text-gray-500">
          {type === 'upcoming' ? 'No upcoming events found.' : 'No past events found.'}
        </p>
      </div>
    );
  }

  return (
    <div className="justify-center w-full h-auto flex flex-col gap-4 ">
        <EventRow data={filteredEvents}/>
    </div>
  );
};

export default ScheduledEvent;