
import { getStreams, getTopStreams } from "@/lib/feed-service";
import React from "react"
import SponsorCard from "./Stream/_components/ads-card/sponsor-card";
import TopLiveSTream from "./Stream/_components/StreamRow/TopLiveSTream";
import AllStream from "./Stream/_components/StreamVideos/AllStream";
import { Results } from "./Stream/_components/results";
import { Button } from "@/components/ui/button";



export default async function StreamExplore() {

    const stream = await getTopStreams();

    return (
        <div id="xonnect">
       
            <div className="w-full bg-gradient-to-b from-black-900 via-black-950 to-red-900 relative overflow-hidden  border-none">
              
                    <SponsorCard/> 
                <div className="relative z-10 p-4  md:p-8">
 

                    <div className="mb-8 flex flex-col space-y-6">
                        <div className="flex gap-1 overflow-x-auto pb-2 mb-6 flex-wrap ">
                            <button className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                                All Streams
                            </button>
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Sports
                            </button>
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Music
                            </button>
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Gaming
                            </button>
                           
                        </div>
                        <h2 className="text-white text-xl font-bold mb-4">Top Channel</h2>
                       <TopLiveSTream data={stream}/>


                        <AllStream label="Coming Up" type='upcoming'/>

                     {/* Second Ad Banner */}
                    <div className="w-full  bg-gradient-to-b from-[black]  via-[#f52626bb] to-[black] rounded-lg ">
                    <div
                        className="flex flex-col gap-y-5 w-full h-full p-4 bg-[#000] bg-opacity-70  bg-clip-padding  backdrop-filter backdrop--blur__safari backdrop-blur-3xl"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">XONNECT Gaming Championship</h3>
                            <p className="text-gray-300 text-sm">Watch the biggest gaming event of the year. Exclusive coverage only on XONNECT.</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                            {/* <button className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-2 rounded-full text-sm font-medium">
                                Watch Now
                            </button> */}
                            <Button>
                            Watch Now
                            </Button>
                            </div>
                        </div>
                        </div>
                    </div>

                        <AllStream label="Past Event" type='past'/>
                        
                    </div>
                </div>
                 {/* Feature Promotion Banner */}
                {/* <div className="container mx-auto px-4 mb-8">
                    <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Xonnect Mobile App Coming Soon</h3>
                        <p className="text-gray-200 mb-4 md:mb-0">
                        Access exclusive features like music community, video reels, and more on our upcoming mobile app.
                        </p>
                    </div>
                    <button className="bg-white text-red-700 hover:bg-gray-100 py-2 px-6 rounded-lg font-medium">
                        Join Waitlist
                    </button>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

// 'use client'


// // pages/explore.js
// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function StreamExplore() {
//   const [activeTab, setActiveTab] = useState('all');
//   const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

//   return (
//     <div className="min-h-screen bg-black text-white">
  

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-6">
//         {/* Featured Banner Ad */}
//         <div className="relative bg-gradient-to-r from-red-900 to-gray-900 rounded-lg overflow-hidden mb-8">
//           <div className="absolute top-0 right-0 bg-red-600 text-xs font-bold px-2 py-1">
//             SPONSORED
//           </div>
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/3">
//               <div className="relative h-64 w-full">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30" />
//                 <img 
//                   src="/api/placeholder/600/400" 
//                   alt="Premium Event" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="md:w-2/3 p-6">
//               <div className="flex items-center mb-2">
//                 <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mr-3">
//                   PREMIUM
//                 </span>
//                 <span className="text-gray-300 text-sm">TONIGHT 8PM</span>
//               </div>
//               <h2 className="text-3xl font-bold mb-2">Global Music Awards Live Stream</h2>
//               <p className="text-gray-300 mb-4">
//                 Watch the exclusive live stream of the Global Music Awards featuring top artists. Don't miss special performances and behind-the-scenes content.
//               </p>
//               <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-200">
//                 Get Premium Access
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stream Category Filters */}
//         <div className="flex overflow-x-auto mb-8 pb-2 no-scrollbar">
//           <button 
//             className={`px-5 py-2 rounded-full mr-2 whitespace-nowrap ${activeCategoryFilter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
//             onClick={() => setActiveCategoryFilter('all')}
//           >
//             All Streams
//           </button>
//           <button 
//             className={`px-5 py-2 rounded-full mr-2 whitespace-nowrap ${activeCategoryFilter === 'sports' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
//             onClick={() => setActiveCategoryFilter('sports')}
//           >
//             Sports
//           </button>
//           <button 
//             className={`px-5 py-2 rounded-full mr-2 whitespace-nowrap ${activeCategoryFilter === 'music' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
//             onClick={() => setActiveCategoryFilter('music')}
//           >
//             Music
//           </button>
//           <button 
//             className={`px-5 py-2 rounded-full mr-2 whitespace-nowrap ${activeCategoryFilter === 'gaming' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
//             onClick={() => setActiveCategoryFilter('gaming')}
//           >
//             Gaming
//           </button>
//           <button 
//             className={`px-5 py-2 rounded-full mr-2 whitespace-nowrap ${activeCategoryFilter === 'entertainment' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
//             onClick={() => setActiveCategoryFilter('entertainment')}
//           >
//             Entertainment
//           </button>
//           <button 
//             className={`px-5 py-2 rounded-full mr-2 whitespace-nowrap ${activeCategoryFilter === 'education' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
//             onClick={() => setActiveCategoryFilter('education')}
//           >
//             Education
//           </button>
//         </div>

//         {/* Live Now Section */}
//         <section className="mb-12">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold flex items-center">
//               <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2 animate-pulse"></span>
//               Live Now
//             </h2>
//             <Link href="/live">
//               <span className="text-red-600 hover:text-red-500 cursor-pointer text-sm">View All</span>
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {/* Live Stream Card 1 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden transition duration-200 hover:transform hover:scale-105">
//               <div className="relative">
//                 <img src="/api/placeholder/400/225" alt="Live Stream" className="w-full h-48 object-cover" />
//                 <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                   LIVE
//                 </div>
//                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                   1.2K watching
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex mb-2">
//                   <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-2">
//                     G
//                   </div>
//                   <div>
//                     <h3 className="font-bold">6ixx's stream</h3>
//                     <p className="text-sm text-gray-400">6ixx</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-xs text-gray-400">Gaming</span>
//                   <span className="text-xs font-bold text-red-600">$5.99</span>
//                 </div>
//               </div>
//             </div>

//             {/* Live Stream Card 2 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden transition duration-200 hover:transform hover:scale-105">
//               <div className="relative">
//                 <img src="/api/placeholder/400/225" alt="Live Stream" className="w-full h-48 object-cover" />
//                 <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                   LIVE
//                 </div>
//                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                   3.5K watching
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex mb-2">
//                   <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
//                     D
//                   </div>
//                   <div>
//                     <h3 className="font-bold">lampard's stream</h3>
//                     <p className="text-sm text-gray-400">lampard</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-xs text-gray-400">Music</span>
//                   <span className="text-xs font-bold text-red-600">$9.99</span>
//                 </div>
//               </div>
//             </div>

//             {/* Live Stream Card 3 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden transition duration-200 hover:transform hover:scale-105">
//               <div className="relative">
//                 <img src="/api/placeholder/400/225" alt="Live Stream" className="w-full h-48 object-cover" />
//                 <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                   LIVE
//                 </div>
//                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                   852 watching
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex mb-2">
//                   <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
//                     T
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Tech Talks Live</h3>
//                     <p className="text-sm text-gray-400">techguru</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-xs text-gray-400">Education</span>
//                   <span className="text-xs font-bold text-red-600">$7.99</span>
//                 </div>
//               </div>
//             </div>

//             {/* Live Stream Card 4 */}
//             <div className="bg-gray-900 rounded-lg overflow-hidden transition duration-200 hover:transform hover:scale-105">
//               <div className="relative">
//                 <img src="/api/placeholder/400/225" alt="Live Stream" className="w-full h-48 object-cover" />
//                 <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                   LIVE
//                 </div>
//                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                   2.1K watching
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex mb-2">
//                   <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
//                     S
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Sports Highlights</h3>
//                     <p className="text-sm text-gray-400">sportsfan</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-xs text-gray-400">Sports</span>
//                   <span className="text-xs font-bold text-red-600">$12.99</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Mid-page Ad Banner */}
//         <div className="mb-12 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-4">
//           <div className="flex items-center justify-between">
//             <div className="flex-1">
//               <p className="text-xs text-gray-400 mb-1">ADVERTISEMENT</p>
//               <h3 className="text-xl font-bold mb-2">Upgrade to XONNECT Premium</h3>
//               <p className="text-gray-300 mb-4">Get unlimited access to all exclusive content. No ads, premium quality, and early access to events.</p>
//               <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-200">
//                 Get 30% Off Today
//               </button>
//             </div>
//             <div className="hidden md:block">
//               <div className="bg-black p-2 rounded-lg">
//                 <svg className="w-32 h-32 text-red-600" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
//                   <path d="M10 7.5v9l6-4.5-6-4.5z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stream Tabs */}
//         <div className="mb-6">
//           <div className="flex border-b border-gray-800 mb-6">
//             <button 
//               className={`py-3 px-6 font-medium ${activeTab === 'all' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
//               onClick={() => setActiveTab('all')}
//             >
//               All
//             </button>
//             <button 
//               className={`py-3 px-6 font-medium ${activeTab === 'upcoming' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
//               onClick={() => setActiveTab('upcoming')}
//             >
//               Upcoming
//             </button>
//             <button 
//               className={`py-3 px-6 font-medium ${activeTab === 'past' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
//               onClick={() => setActiveTab('past')}
//             >
//               Past
//             </button>
//             <button 
//               className={`py-3 px-6 font-medium ${activeTab === 'trending' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
//               onClick={() => setActiveTab('trending')}
//             >
//               Trending
//             </button>
//           </div>
          
//           {/* All Streams Section */}
//           {activeTab === 'all' && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//               {/* Stream Card 1 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     PREMIUM
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Championship Boxing Match</h3>
//                   <p className="text-sm text-gray-400 mb-2">The biggest fight of the year live exclusively on XONNECT</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Sports</span>
//                     <span className="text-xs font-bold text-red-600">$24.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Apr 25, 9:00 PM</div>
//                 </div>
//               </div>

//               {/* Stream Card 2 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
//                     PAST
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Electronic Music Festival</h3>
//                   <p className="text-sm text-gray-400 mb-2">Featuring top DJs and incredible light shows</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Music</span>
//                     <span className="text-xs font-bold text-red-600">$14.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Streamed on Apr 10</div>
//                 </div>
//               </div>

//               {/* Stream Card 3 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     UPCOMING
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Pro Gaming Championship</h3>
//                   <p className="text-sm text-gray-400 mb-2">Watch the finals of the biggest eSports event</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Gaming</span>
//                     <span className="text-xs font-bold text-red-600">$19.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Apr 29, 7:00 PM</div>
//                 </div>
//               </div>

//               {/* Stream Card 4 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     LIVE
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Comedy Special: Night of Laughs</h3>
//                   <p className="text-sm text-gray-400 mb-2">Top comedians deliver non-stop laughs</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Entertainment</span>
//                     <span className="text-xs font-bold text-red-600">$8.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Streaming now</div>
//                 </div>
//               </div>

//               {/* Stream Card 5 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     UPCOMING
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Fashion Week Exclusive</h3>
//                   <p className="text-sm text-gray-400 mb-2">Get front row access to the hottest fashion show</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Lifestyle</span>
//                     <span className="text-xs font-bold text-red-600">$12.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">May 5, 6:00 PM</div>
//                 </div>
//               </div>

//               {/* Stream Card 6 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
//                     PAST
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">AI Workshop: Future of Tech</h3>
//                   <p className="text-sm text-gray-400 mb-2">Learn about cutting-edge AI developments</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Education</span>
//                     <span className="text-xs font-bold text-red-600">$15.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Streamed on Apr 12</div>
//                 </div>
//               </div>

//               {/* Stream Card 7 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     LIVE
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Basketball Playoffs</h3>
//                   <p className="text-sm text-gray-400 mb-2">Catch the intense playoff action live</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Sports</span>
//                     <span className="text-xs font-bold text-red-600">$16.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Streaming now</div>
//                 </div>
//               </div>

//               {/* Stream Card 8 */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Stream Thumbnail" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     UPCOMING
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Underground Hip-Hop Concert</h3>
//                   <p className="text-sm text-gray-400 mb-2">Rising stars perform their latest hits</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Music</span>
//                     <span className="text-xs font-bold text-red-600">$9.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">May 2, 8:00 PM</div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Upcoming Events Section */}
//           {activeTab === 'upcoming' && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//               {/* Upcoming Event Cards */}
//               {/* Similar structure as above but with only upcoming events */}
//               <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-200">
//                 <div className="relative">
//                   <img src="/api/placeholder/400/225" alt="Upcoming Event" className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
//                     UPCOMING
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold mb-1">Pro Gaming Championship</h3>
//                   <p className="text-sm text-gray-400 mb-2">Watch the finals of the biggest eSports event</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-400">Gaming</span>
//                     <span className="text-xs font-bold text-red-600">$19.99</span>
//                   </div>
//                   <div className="mt-3 text-xs text-gray-400">Apr 29, 7:00 PM</div>
//                 </div>
//               </div>
//           </div>
//           )}
//           </div>
//           </main>
//           </div>
//   )}