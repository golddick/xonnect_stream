// import React from "react";
// import Link from "next/link";
// import { User } from "@prisma/client";

// import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
// import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
// import { Skeleton } from "@/components/ui/skeleton";

// export function ResultCard({
//   data,
// }: {
//   data: {
//     user: User;
//     isLive: boolean;
//     name: string;
//     thumbnailUrl: string | null;
//   };
// }) {
//   return (
//     <Link href={`/${data.user.username}/stream`}>
//       <div className="h-full w-full space-y-4">
//         <Thumbnail
//           src={data.thumbnailUrl}
//           fallback={data.user.imageUrl}
//           isLive={data.isLive}
//           username={data.user.username}
//         />
//         <div className="flex gap-x-3">
          // <UserAvatar
          //   username={data.user.username}
          //   imageUrl={data.user.imageUrl}
          //   isLive={data.isLive}
          // />
//           <div className="flex flex-col text-sm overflow-hidden">
//             <p className="truncate font-semibold hover:text-blue-500">
//               {data.name}
//             </p>
//             <p className="text-muted-foreground">{data.user.username}</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }









import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { LiveBadge } from '@/components/live-badge';
import { User } from '@prisma/client';
import { ThumbnailSkeleton } from '@/components/thumbnail';
import { UserAvatar, UserAvatarSkeleton } from '@/components/user-avatar';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultCardProps {

    data: {
      user: User;
      isLive: boolean;
      name: string;
      thumbnailUrl: string | null;
    };
    index:number
}

const ResultCard = ({data, index}: ResultCardProps) => {
  const href = `/${data.user.username}/stream`;
  const profileLink = `/Creator/23344`;

  // Array of background colors
  const backgroundColors = ['bg-red-600', 'bg-[#b28228]'];

  // Determine the background color based on the index
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
  <Link href={href}>
        <div className={`group aspect-video relative rounded-xl cursor-pointer ${backgroundColor}`}>
      <div className='rounded-xl absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'/>

      {/* Thumbnail container */}
      <div className='w-full h-[300px] relative object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md'>
        <div className='w-full h-full absolute rounded-xl overflow-hidden'>
          {
            data.thumbnailUrl ? (

              <Image src={data.thumbnailUrl } alt='img' fill className='flex ' />
            ): (
             
              <Image src={'/assets/xsb.png' } alt='img' fill className='flex' />
            )
          }
          <div className='flex flex-col gap-2 z-50 absolute w-full h-full'>
            <div className='relative w-full h-full'>
              {data.isLive && (
                <div className='absolute top-2 left-2'>
                  <LiveBadge />
                </div>
              )}

              {/* Stream info */}
              <div className='flex absolute bottom-0 w-full items-center gap-2 px-2 py-2 bg-black bg-opacity-50 backdrop-blur-md'>
                  <UserAvatar
                    username={data.user.username}
                    imageUrl={data.user.imageUrl}
                    isLive={data.isLive}
                  />
                <div className='flex flex-col w-full'>
                    <h2 className='capitalize hover:text-[#b28228]' style={{ fontSize: '15px' }}>{data.name}</h2>
                  <p className='text-muted-foreground capitalize max-w-[200px] max-h-[20px] truncate' style={{ fontSize: '12px' }}>{data.user.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default ResultCard;


export function ResultCardSkeleton() {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}