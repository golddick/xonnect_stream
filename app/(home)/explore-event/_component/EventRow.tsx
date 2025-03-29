

'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Schedule, User } from '@prisma/client';
import EventCard from './EventCard';

interface StreamVideosProps {
  data: (Schedule & { user: User })[];
}

const EventRow = ({ data }: StreamVideosProps) => {
  const [visible, setVisible] = useState(3);
  const [showMore, setShowMore] = useState(false);

  // Conditional rendering: If no data, show the "No data" message
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p>No data available</p>
      </div>
    );
  }

  const handleShowMore = () => {
    if (showMore) {
      // If currently showing more, revert to showing only 5 items
      setVisible(3);
    } else {
      setVisible(data.length);
    }
    // Toggle the showMore state
    setShowMore((prev) => !prev);
  };

  // Only show the "Show More" button if there are more items to display
  const shouldShowButton = data.length > 3;

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 px-4 mb-4 items-center ">
        {data.slice(0, visible).map((item, index) => (
          <EventCard
            streamName={item.title}
            description={item.description || 'No description'}
            thumbNailImg={item.thumbnailImage || '/assets/xc.jpg'}
            isLive={item.isLive}
            id={item.id}
            key={item.id}
            date={item.eventDateTime}
            price={item.amount || 0}
            creatorName={item.user.username}
          />
        ))}
      </div>

      {/* Only show the button if there are more items to display */}
      {shouldShowButton && (
        <Button
          className="border-b rounded-lg goldText"
          onClick={handleShowMore}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

export default EventRow;