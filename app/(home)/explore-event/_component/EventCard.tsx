import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventCardProps {
  streamName: string;
  creatorName: string;
  description: string;
  thumbNailImg: string;
  date: Date;
  id: string;
  isLive: boolean;
  price: number;
}

const EventCard = ({
  thumbNailImg,
  streamName,
  description,
  date,
  price,
  isLive,
  id
}: EventCardProps) => {
  const calculateDaysRemaining = (eventDate: Date): string => {
    const today = new Date();
    const todayMidnight = new Date(today.setHours(0, 0, 0, 0));
    const eventDateCopy = new Date(eventDate);
    const eventDateMidnight = new Date(eventDateCopy.setHours(0, 0, 0, 0));
    
    const timeDiff = eventDateMidnight.getTime() - todayMidnight.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff < 0) return 'EXPIRED';
    if (daysDiff === 0) return 'TODAY';
    return `IN ${daysDiff} DAY${daysDiff > 1 ? 'S' : ''}`;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const daysRemaining = calculateDaysRemaining(new Date(date));
  const isExpired = daysRemaining === 'EXPIRED';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 animate-fadeInUp border border-gray-200 w-full">
      <div className="relative h-48 overflow-hidden">
        <div className='relative w-full h-full'>
          <Image
            fill
            src={thumbNailImg}
            alt={`${streamName} thumbnail`}
            className={`absolute object-cover object-center ${
              !isExpired && 'group-hover:scale-110'
            } transition-transform duration-700`}
            priority
          />
          {isExpired && (
            <div className="absolute inset-0 bg-black/40" />
          )}
        </div>
        
       {
        isExpired ? (
          <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            CATCH UP
          </div>
        ) : (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            {daysRemaining}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300  text-black">
          {streamName}
        </h3>
        
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{formatDate(new Date(date))}</span>
        </div>
        
          <ScrollArea className="h-full  mb-2">
            <p className="text-gray-600 text-sm mb-4 max-h-10 ">
              {description}
            </p>
            </ScrollArea>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-bold">
            {price > 0 ? `₦${price.toFixed(2)}` : 'FREE'}
          </span>
          <div className="flex items-center">
            <Link href={`/Event/${id}`}>
              <Button size={'icon'} className='p-2'>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;