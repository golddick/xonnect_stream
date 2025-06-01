

import React from 'react';
import { getSchedules } from '@/lib/schedule-service';
import EventRow from './EventRow';
import NoEventsFound from './NoEvent';

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
          {type === 'upcoming' ? <NoEventsFound type='upcoming'  /> : <NoEventsFound type='past' />}
        </p>
      </div>
    );
  }

  return (
    <div className="justify-center w-full h-auto flex flex-col gap-4 ">
      
      {
        type === 'upcoming' ? (
          <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Upcoming Events</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
              Secure your spot for these exclusive upcoming streams before tickets sell out
          </p>
      </div>
        ) : (
           <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Past Events</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
            <p>catch up with extended higlight from the event </p>
        </div>
        )
      }

        <EventRow data={filteredEvents}/>
    </div>
  );
};

export default ScheduledEvent;