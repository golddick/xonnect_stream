import React from 'react'
import { ScheduleCalender } from './_components/ScheduleCalender'

const page = () => {
  const data = [
    {
      id: "1e8490f2-abbc-4b28-8db5-54bbf1aee1cd",
      title: "Morning Yoga Session",
      address: "123 Wellness Street, Yoga City",
      description: "A beginner-friendly yoga session to start the day.",
      eventDateTime: new Date("2025-02-18T08:00:00.000Z"),
      amount: 25.0,
      isFree: false,
      thumbnailImage: "https://example.com/path/to/yoga-session.jpg",
      thumbnailVideo: null,
      artists: "Jane Doe, John Smith",
      organizers: "Wellness Club",
      userId: "2f91b1ec-1234-5678-9abc-abcdef123456",
      streamId: null,
      subscribers: [],
      createdAt: new Date("2025-02-01T09:00:00.000Z"),
      updatedAt: new Date("2025-02-01T09:00:00.000Z"),
    },
    {
      id: "27c5e68f-1c34-4978-b95d-acef5f1c3b33",
      title: "Tech Conference Keynote",
      address: "456 Innovation Blvd, Tech Hub",
      description: "Keynote speech on the future of AI and its implications.",
      eventDateTime: new Date("2025-03-05T10:00:00.000Z"),
      amount: 100.0,
      isFree: false,
      thumbnailImage: "https://example.com/path/to/keynote.jpg",
      thumbnailVideo: "https://example.com/path/to/keynote.mp4",
      artists: "Dr. Alice Johnson",
      organizers: "Tech Innovators Group",
      userId: "3c91a2ec-2234-5678-9def-ghijk1234567",
      streamId: "stream123",
      subscribers: [
        {
          id: "payment1",
          userId: "subscriber1",
          scheduleId: "27c5e68f-1c34-4978-b95d-acef5f1c3b33",
          amount: 100.0,
          createdAt: new Date("2025-02-15T12:00:00.000Z"),
          updatedAt: new Date("2025-02-15T12:00:00.000Z"),
        },
      ],
      createdAt: new Date("2025-02-02T09:00:00.000Z"),
      updatedAt: new Date("2025-02-02T09:00:00.000Z"),
    },
  ];
  
  
  return (
    <div className=' h-full w-full'>
      <ScheduleCalender data={data}/>
    </div>
  )
}

export default page

