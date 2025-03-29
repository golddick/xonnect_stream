'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import StreamVideoCard from './StreamVideoCard';
import { Button } from '@/components/ui/button';
import { Schedule, User } from '@prisma/client';

interface StreamVideosProps {
  data: (Schedule & { user: User })[];
}

const StreamVideos = ({ data }: StreamVideosProps) => {
  const [visible, setVisible] = useState(5);
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
      setVisible(5);
    } else {
      setVisible(data.length);
    }
    // Toggle the showMore state
    setShowMore((prev) => !prev);
  };

  // Only show the "Show More" button if there are more items to display
  const shouldShowButton = data.length > 5;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-auto items-center justify-center rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 px-4 mb-4">
        {data.slice(0, visible).map((item, index) => (
          <StreamVideoCard
            streamName={item.title}
            description={item.description || 'No description'}
            thumbNailImg={item.thumbnailImage || '/assets/xc.jpg'}
            isLive={item.isLive}
            id={item.id}
            key={item.id}
            index={index}
            dp={item.user.imageUrl}
            creatorName={item.user.username}
          />
        ))}
      </div>

      {/* Only show the button if there are more items to display */}
      {shouldShowButton && (
        <Button
          className="border-b rounded-lg goldText"
          variant="ghost"
          onClick={handleShowMore}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

export default StreamVideos;