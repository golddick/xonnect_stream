

import { Schedule, User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface Props {
    data: (Schedule & { user?: User })
}

const EventDetails = ({ data }: Props) => {
    // Convert artists string to array
    const artistsArray = data.artists?.split(',') || []

    return (
        <div className="w-full md:w-1/2 p-5">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600 relative">
                    <Image
                        src={data.user?.imageUrl || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'}
                        alt="Organizer Avatar"
                        fill
                        className="absolute object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-black">Organized by</h3>
                    <p className="text-red-900">{data?.organizers || data.user?.username}</p>
                    <div className="flex gap-2 mt-1">
                        <span className="inline-block bg-gray-100 px-2 py-0.5 text-xs rounded text-gold">
                            Verified
                        </span>
                        <span className="inline-block bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
                            Top Organizer
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center text-gray-600 text-sm mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
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
                <span>
                    {data.eventDateTime?.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    }) || 'Date to be announced'}
                </span>
            </div>

            <div className="flex items-center text-gray-600 text-sm mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <span>Virtual Event • Live on {data.user?.username}&apos;s channel</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <span>Physical Address • Live at {data.address}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {/* {data.description?.split(' ').slice(0, 3).join(' ').replace(/[.,]/g, '') && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">
                        {data.description?.split(' ').slice(0, 3).join(' ').replace(/[.,]/g, '')}
                    </span>
                )} */}
                 <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer">
                    Live Concert
                </span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors cursor-pointer">
                    HD Stream
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors cursor-pointer">
                    Interactive
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-6">
                {data.description}
            </p>

            <h4 className="font-bold text-lg mb-3 text-black">
                Participating Artists
            </h4>
            <div className="flex -space-x-3 mb-4 gap-6">
                {artistsArray.length > 0 ? (
                    artistsArray.map((artist, index) => (
                        <span 
                            key={index}
                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full hover:bg-purple-200 transition-colors cursor-pointer mx-1 flex justify-center items-center "
                        >
                            {artist.trim()}
                        </span>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No artists announced yet</p>
                )}
            </div>
        </div>
    )
}

export default EventDetails