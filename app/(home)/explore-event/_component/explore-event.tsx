import Image from "next/image"
import React from "react"
import BannerHeader from "../../_component/BannerHeader"
import LiveComponent from "./LiveComponent"
import ScheduledEvent from "./ScheduledEvent"

export const EventExplore = () => {
    const img = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    const tittle = 'Explore Event'
    const header = 'Revolutionizing Live Streaming'
    const subText = '  Discover and join the hottest live events streaming on XONNECT. From music festivals to gaming tournaments, we have it all.'
   
    return (
        <div id="xonnect">
            <div className="w-full bg-white font-sans">
                {/* About Us Section Header */}
              
              <BannerHeader H1='Creator Events & Streams' Header=' PLATFORM EVENT' Desc='Discover and join live events from your favorite content creators.'/>

                {/* Live Events Section */}
               <LiveComponent/>


                {/* Upcoming Events Section */}
                <section className="py-16 px-4 sm:px-8 bg-white text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 animate-fadeIn">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Upcoming Events</h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Secure your spot for these exclusive upcoming streams before tickets sell out
                            </p>
                        </div>

                            <ScheduledEvent type="upcoming"/>
                 
                       
                    </div>
                </section>

                {/* Past Events Section */}
                <section className="py-16 px-4 sm:px-8 bg-gray-50 text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 animate-fadeIn">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Past Events</h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
                            <p>catch up with extended higlight from the event </p>
                        </div>
                        <ScheduledEvent type="past"/>
                    </div>
                </section>


                <section className="py-16 px-4 sm:px-8 bg-white text-black">
                <h2 className="text-2xl font-bold mb-6">Featured Creators</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="text-center">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-3 relative">
                        <Image 
                        fill
                        src={`/assets/woman.jpeg`} 
                        alt={`Creator`} 
                        className="w-full h-full object-cover absolute"
                        />
                    </div>
                    <h3 className="font-semibold mb-1">Creator Name</h3>
                    <p className="text-sm text-gray-600">Content Category</p>
                    </div>
                ))}
                </div>
                </section>
            </div>
        </div>
    )
}














// 'use client'





// // pages/events.js
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { Calendar, Clock, User, MapPin, ChevronRight, Video } from 'lucide-react';
// import BannerHeader from '../../_component/BannerHeader';

// export const EventExplore = () => {
//   const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
//   const [events, setEvents] = useState<{
//     upcoming: Array<any>;
//     past: Array<any>;
//   }>({
//     upcoming: [],
//     past: []
//   });
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate fetching events
//   useEffect(() => {
//     // In a real app, you would fetch from an API
//     const fetchEvents = async () => {
//       try {
//         // Simulated API data
//         const mockData = {
//           upcoming: [
//             {
//               id: 1,
//               title: "Web Development Masterclass",
//               creatorName: "Jane Developer",
//               creatorImage: "/api/placeholder/48/48",
//               date: "2025-04-20T19:00:00",
//               duration: 120,
//               location: "Online",
//               description: "Learn advanced web development techniques from industry experts.",
//               thumbnail: "/api/placeholder/400/225",
//               registeredCount: 143
//             },
//             {
//               id: 2,
//               title: "Gaming Stream: New Release Gameplay",
//               creatorName: "GameMaster Pro",
//               creatorImage: "/api/placeholder/48/48",
//               date: "2025-04-15T20:00:00",
//               duration: 180,
//               location: "Online",
//               description: "First look at the newest game release with live commentary and Q&A.",
//               thumbnail: "/api/placeholder/400/225",
//               registeredCount: 256
//             },
//             {
//               id: 3,
//               title: "Creative Design Workshop",
//               creatorName: "Design Guru",
//               creatorImage: "/api/placeholder/48/48",
//               date: "2025-04-25T18:00:00",
//               duration: 90,
//               location: "Online",
//               description: "Explore creative design principles and practical applications.",
//               thumbnail: "/api/placeholder/400/225",
//               registeredCount: 87
//             }
//           ],
//           past: [
//             {
//               id: 4,
//               title: "Introduction to AI and Machine Learning",
//               creatorName: "Tech Expert",
//               creatorImage: "/api/placeholder/48/48",
//               date: "2025-04-01T19:00:00",
//               duration: 120,
//               location: "Online",
//               description: "Understanding the basics of AI and practical applications.",
//               thumbnail: "/api/placeholder/400/225",
//               viewCount: 1245
//             },
//             {
//               id: 5,
//               title: "Digital Marketing Strategies",
//               creatorName: "Marketing Pro",
//               creatorImage: "/api/placeholder/48/48",
//               date: "2025-03-25T18:00:00",
//               duration: 90,
//               location: "Online",
//               description: "Learn effective digital marketing tactics for 2025.",
//               thumbnail: "/api/placeholder/400/225",
//               viewCount: 987
//             }
//           ]
//         };
        
//         setEvents(mockData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   // Format date
//   const formatDate = (dateString: string) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' } as Intl.DateTimeFormatOptions;
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="min-h-screen bg-white text-black">
   

//       <BannerHeader H1='Creator Events & Streams' Header=' PLATFORM EVENT' Desc='Discover and join live events from your favorite content creators.'/>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-10">
//         {/* Tabs */}
//         <div className="flex border-b border-gray-200 mb-10">
//           <button 
//             className={`pb-4 px-6 font-medium text-lg ${activeTab === 'upcoming' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-black'}`}
//             onClick={() => setActiveTab('upcoming')}
//           >
//             Upcoming Events
//           </button>
//           <button 
//             className={`pb-4 px-6 font-medium text-lg ${activeTab === 'past' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-black'}`}
//             onClick={() => setActiveTab('past')}
//           >
//             Past Events
//           </button>
//         </div>

//         {/* Events Grid */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="text-xl text-gray-600">Loading events...</div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {events[activeTab].length > 0 ? (
//               events[activeTab].map(event => (
//                 <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
//                   <div className="relative">
//                     <img 
//                       src={event.thumbnail} 
//                       alt={event.title} 
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute top-3 right-3 bg-red-600 text-white py-1 px-3 rounded-full flex items-center">
//                       <Video size={16} className="mr-1" />
//                       <span className="text-sm font-medium">Live Stream</span>
//                     </div>
//                   </div>
                  
//                   <div className="p-5">
//                     <div className="flex items-center mb-3">
//                       <img 
//                         src={event.creatorImage} 
//                         alt={event.creatorName} 
//                         className="w-8 h-8 rounded-full mr-2" 
//                       />
//                       <span className="text-sm font-medium">{event.creatorName}</span>
//                     </div>
                    
//                     <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    
//                     <div className="flex items-center text-gray-600 mb-2">
//                       <Calendar size={16} className="mr-2" />
//                       <span className="text-sm">{formatDate(event.date)}</span>
//                     </div>
                    
//                     <div className="flex items-center text-gray-600 mb-3">
//                       <Clock size={16} className="mr-2" />
//                       <span className="text-sm">{event.duration} minutes</span>
//                     </div>
                    
//                     <p className="text-gray-700 mb-4">{event.description}</p>
                    
//                     <div className="flex justify-between items-center">
//                       {activeTab === 'upcoming' ? (
//                         <>
//                           <span className="text-sm text-gray-600">{event.registeredCount} registered</span>
//                           <Link 
//                             href={`/events/${event.id}`} 
//                             className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md inline-flex items-center"
//                           >
//                             Register
//                             <ChevronRight size={16} className="ml-1" />
//                           </Link>
//                         </>
//                       ) : (
//                         <>
//                           <span className="text-sm text-gray-600">{event.viewCount} views</span>
//                           <Link 
//                             href={`/events/${event.id}`} 
//                             className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md inline-flex items-center"
//                           >
//                             Watch Recording
//                             <ChevronRight size={16} className="ml-1" />
//                           </Link>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center py-12">
//                 <p className="text-xl text-gray-600">No {activeTab} events found.</p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Featured Creators Section */}
//         <section className="mt-16">
//           <h2 className="text-2xl font-bold mb-6">Featured Creators</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[1, 2, 3, 4].map((id) => (
//               <div key={id} className="text-center">
//                 <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-3">
//                   <img 
//                     src={`/api/placeholder/96/96`} 
//                     alt={`Creator ${id}`} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="font-semibold mb-1">Creator Name</h3>
//                 <p className="text-sm text-gray-600">Content Category</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Banner */}
//         <section className="mt-16 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-bold mb-2">Are you a creator?</h2>
//               <p className="mb-4 md:mb-0">Host your own events and connect with your audience</p>
//             </div>
//             <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg">
//               Join as Creator
//             </button>
//           </div>
//         </section>
//       </main>

    
//     </div>
//   );
// }