



import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { LiveBadge } from '@/components/live-badge';
import { UserAvatar } from '@/components/user-avatar';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StreamItemProps {
  streamName: string;
  creatorName: string;
  description: string;
  thumbNailImg: string;
  dp: string;
  id: string
  isLive: boolean;
  index: number; 
}

const StreamVideoCard = ({ streamName, description, thumbNailImg, isLive, index, id, dp, creatorName }: StreamItemProps) => {

  const ScheduleProfile = `/schedule/${id}`;

 

  const backgroundColors = ['bg-red-600', 'bg-[#b28228]'];


  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    // <div className={`group aspect-video relative rounded-lg cursor-pointer ${backgroundColor}`}>

    //   <div className='rounded-xl absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'/>

    //   <div className='w-full h-[200px] relative object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md group-hover:zoom-in-50'>
    //     <Link href={ScheduleProfile}>
      
    //     <div className='w-full h-full absolute rounded-lg overflow-hidden'>
    //       <Image src={thumbNailImg} alt='img' fill className='flex' />

    //       <div className='flex flex-col gap-2 z-50 absolute w-full h-full'>
    //         <div className='relative w-full h-full'>
    //           {isLive && (
    //             <div className='absolute top-2 left-2'>
    //               <LiveBadge />
    //             </div>
    //           )}

    //           <div className='flex absolute bottom-0 w-full items-center gap-2 px-2 py-2 bg-black bg-opacity-50 backdrop-blur-md'>
    //               <UserAvatar isLive={false}  imageUrl={dp} username={creatorName}/>
    //             <div className='flex flex-col w-full'>
                 
    //                 <h2 className='capitalize hover:text-[#b28228]' style={{ fontSize: '13px' }}>{streamName}</h2>
                 
    //               <p className='text-muted-foreground capitalize max-w-[200px] max-h-[20px] truncate' style={{ fontSize: '10px' }}>{creatorName}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </Link>
    //   </div>
    // </div>


         <div
              key={index}
              className="bg-black/20 rounded-xl overflow-hidden border border-white/5 group hover:border-red-500/30 transition-all duration-300"
          >
              <div className="relative">
                <div className=' relative w-full h-36'>
                <Image
                      src={thumbNailImg}
                      alt={streamName}
                      fill
                      className=" absolute object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
              </div>
              <div className="p-3 flex items-center w-full justify-between">
                <div>
                <h3 className="text-white font-semibold text-sm line-clamp-1">
                      {streamName}
                  </h3>
                  <p className="text-white/60 text-xs">{creatorName}</p>
                  
                </div>
                  <div>
                    <Link href={ScheduleProfile}>
                   
                    <Button size={'icon'}>
                      <ArrowRight/>
                    </Button>
                    </Link>
                  </div>
              </div>
          </div>
  );
};

export default StreamVideoCard;