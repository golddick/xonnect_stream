// import React from 'react';
// import StreamHeader from './StreamHeader';
// import { getSchedules } from '@/lib/schedule-service';
// import StreamVideos from './StreamsVideos';

// interface AllStreamProps {
//   label: string;
// }

// const AllStream = async ({ label }: AllStreamProps) => {
//   // Fetch all schedules
//   const data = await getSchedules();

//   // Get the current date and time
//   const currentDate = new Date();

//   // Filter schedules to include only upcoming events
//   const upcomingEvents = data.filter((event) => {
//     const eventDate = new Date(event.eventDateTime); 
//     return eventDate > currentDate; 
//   });

//   console.log(upcomingEvents, 'Upcoming Events');

//   return (
//     <div className="justify-center w-full h-auto flex flex-col gap-4">
//       <StreamHeader label={label} />
//       <StreamVideos data={upcomingEvents} />
//     </div>
//   );
// };

// export default AllStream;



import React from 'react';
import StreamHeader from './StreamHeader';
import { getSchedules } from '@/lib/schedule-service';
import StreamVideos from './StreamsVideos';

interface AllStreamProps {
  label: string;
  type: 'upcoming' | 'past'; // Add a `type` prop to specify the filter
}

const AllStream = async ({ label, type }: AllStreamProps) => {
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
        <StreamHeader label={label} />
        <p className="text-center text-gray-500">
          {type === 'upcoming' ? 'No upcoming events found.' : 'No past events found.'}
        </p>
      </div>
    );
  }

  return (
    <div className="justify-center w-full h-auto flex flex-col gap-4">
      <StreamHeader label={label} />
      <StreamVideos data={filteredEvents} />
    </div>
  );
};

export default AllStream;