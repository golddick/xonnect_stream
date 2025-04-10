


// 'use client'





// // pages/explore.js
// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';

// // Mock data for streams
// const streams = [
//   {
//     id: 1,
//     title: "Live Music Session",
//     creator: "musicLover",
//     thumbnail: "/thumbnails/music-session.jpg",
//     category: "Music",
//     viewers: 1245,
//     premium: true,
//   },
//   {
//     id: 2,
//     title: "Gaming Tournament Finals",
//     creator: "gameMaster",
//     thumbnail: "/thumbnails/tournament.jpg",
//     category: "Gaming",
//     viewers: 3651,
//   },
//   {
//     id: 3,
//     title: "Artist Showcase",
//     creator: "creativeMinds",
//     thumbnail: "/thumbnails/artist.jpg",
//     category: "Entertainment",
//     viewers: 890,
//   },
//   {
//     id: 4,
//     title: "Cooking with Chef Alex",
//     creator: "foodieDelight",
//     thumbnail: "/thumbnails/cooking.jpg",
//     category: "Lifestyle",
//     viewers: 745,
//   },
//   {
//     id: 5,
//     title: "Indie Band Live",
//     creator: "indieVibe",
//     thumbnail: "/thumbnails/indie-band.jpg",
//     category: "Music",
//     viewers: 1845,
//     trending: true,
//   },
//   {
//     id: 6,
//     title: "Strategy Game Championship",
//     creator: "strategist",
//     thumbnail: "/thumbnails/strategy-game.jpg",
//     category: "Gaming",
//     viewers: 2178,
//     trending: true,
//   },
//   {
//     id: 7,
//     title: "Comedy Hour",
//     creator: "laughFactory",
//     thumbnail: "/thumbnails/comedy.jpg",
//     category: "Entertainment",
//     viewers: 1532,
//     trending: true,
//   },
//   {
//     id: 8,
//     title: "Morning Wellness",
//     creator: "zenMaster",
//     thumbnail: "/thumbnails/wellness.jpg",
//     category: "Lifestyle",
//     viewers: 621,
//     trending: true,
//   },
// ];

// // Mock data for partners
// const partners = [
//   { id: 1, name: "GameSphere", logo: "/partners/gamesphere.png" },
//   { id: 2, name: "MusicMax", logo: "/partners/musicmax.png" },
//   { id: 3, name: "TechGiant", logo: "/partners/techgiant.png" },
//   { id: 4, name: "FoodieNetwork", logo: "/partners/foodie.png" },
//   { id: 5, name: "StreamGear", logo: "/partners/streamgear.png" },
// ];

// const categories = ["All Streams", "Music", "Gaming", "Entertainment", "Lifestyle", "Social", "Talk Shows"];

// export default function XonnectExplorePage() {
//   const [selectedCategory, setSelectedCategory] = useState("All Streams");
//   const [partnerIndex, setPartnerIndex] = useState(0);
  
//   const filteredStreams = selectedCategory === "All Streams" 
//     ? streams 
//     : streams.filter(stream => stream.category === selectedCategory);

//   const nextPartner = () => {
//     setPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length);
//   };

//   const prevPartner = () => {
//     setPartnerIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
     

//       <main className="container mx-auto px-4 py-6">
//         {/* Ad Banner */}
//         <div className="w-full bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-4 mb-8 flex items-center justify-between">
//           <div>
//             <p className="text-sm uppercase font-bold">Premium Offer</p>
//             <h3 className="text-xl md:text-2xl font-bold">Get 50% off your first month of XONNECT Premium!</h3>
//             <p className="text-sm mt-2">Stream ad-free with exclusive content and higher quality.</p>
//           </div>
//           <button className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm">Subscribe Now</button>
//         </div>

//         {/* Partner Slider */}
//         <div className="relative bg-gray-900 rounded-lg p-6 mb-8">
//           <h2 className="text-xl font-bold mb-4">Our Partners</h2>
//           <div className="flex items-center justify-between">
//             <button 
//               onClick={prevPartner} 
//               className="bg-gray-800 rounded-full p-2 hover:bg-gray-700"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
            
//             <div className="flex items-center justify-center flex-1 p-4">
//               <div className="text-center">
//                 <div className="w-32 h-32 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
//                   {/* Replace with actual partner logo */}
//                   <span className="text-xl font-bold">{partners[partnerIndex].name}</span>
//                 </div>
//                 <p className="mt-2 font-medium">{partners[partnerIndex].name}</p>
//                 <p className="text-sm text-gray-400">Official Partner</p>
//               </div>
//             </div>
            
//             <button 
//               onClick={nextPartner} 
//               className="bg-gray-800 rounded-full p-2 hover:bg-gray-700"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex justify-center mt-4">
//             {partners.map((_, idx) => (
//               <button 
//                 key={idx} 
//                 className={`w-2 h-2 mx-1 rounded-full ${idx === partnerIndex ? 'bg-red-600' : 'bg-gray-600'}`}
//                 onClick={() => setPartnerIndex(idx)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Categories */}
//         <section className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">Categories</h2>
//             <Link href="/categories">
//               <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
//                 View All
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </Link>
//           </div>
          
//           <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
//                   selectedCategory === category
//                     ? 'bg-red-600 text-white'
//                     : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category === "All Streams" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 )}
//                 {category === "Music" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
//                   </svg>
//                 )}
//                 {category === "Gaming" && (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
//                   </svg>
//                 )}
//                 {category}
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Featured Streams */}
//         <section className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//               Featured Streams
//             </h2>
//             <Link href="/featured">
//               <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
//                 See All
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </Link>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {filteredStreams.filter(stream => !stream.trending).slice(0, 4).map((stream) => (
//               <div key={stream.id} className="bg-gray-900 rounded-lg overflow-hidden">
//                 <div className="relative">
//                   <div className="aspect-video bg-gray-800 relative">
//                     {/* Replace with actual thumbnail */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-lg">{stream.title}</span>
//                     </div>
//                   </div>
//                   {stream.premium && (
//                     <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//                       PREMIUM
//                     </div>
//                   )}
//                   <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                     {stream.viewers.toLocaleString()} viewers
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-medium text-lg truncate">{stream.title}</h3>
//                   <div className="flex items-center mt-2">
//                     <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
//                     <span className="ml-2 text-sm text-gray-300">{stream.creator}</span>
//                     <span className="ml-auto text-xs px-2 py-1 bg-gray-800 rounded">{stream.category}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Trending Now */}
//         <section className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
//               </svg>
//               Trending Now
//             </h2>
//             <Link href="/trending">
//               <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
//                 See All
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </Link>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {filteredStreams.filter(stream => stream.trending).slice(0, 4).map((stream) => (
//               <div key={stream.id} className="bg-gray-900 rounded-lg overflow-hidden">
//                 <div className="relative">
//                   <div className="aspect-video bg-gray-800 relative">
//                     {/* Replace with actual thumbnail */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-lg">{stream.title}</span>
//                     </div>
//                   </div>
//                   <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                     {stream.viewers.toLocaleString()} viewers
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-medium text-lg truncate">{stream.title}</h3>
//                   <div className="flex items-center mt-2">
//                     <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
//                     <span className="ml-2 text-sm text-gray-300">{stream.creator}</span>
//                     <span className="ml-auto text-xs px-2 py-1 bg-gray-800 rounded">{stream.category}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Promo Banner */}
//         <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-4 md:mb-0">
//               <h3 className="text-2xl font-bold mb-2">Start Your Streaming Journey Today</h3>
//               <p className="text-gray-300">Create your own channel and connect with viewers worldwide.</p>
//             </div>
//             <div className="flex space-x-4">
//               <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium">
//                 Start Streaming
//               </button>
//               <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-gray-900">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

  
//     </div>
//   );
// }

'use client'


// pages/explore.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for streams
const streams = [
  {
    id: 1,
    title: "Live Music Session",
    creator: "musicLover",
    thumbnail: "/thumbnails/music-session.jpg",
    category: "Music",
    viewers: 1245,
    premium: true,
  },
  {
    id: 2,
    title: "Gaming Tournament Finals",
    creator: "gameMaster",
    thumbnail: "/thumbnails/tournament.jpg",
    category: "Gaming",
    viewers: 3651,
  },
  {
    id: 3,
    title: "Artist Showcase",
    creator: "creativeMinds",
    thumbnail: "/thumbnails/artist.jpg",
    category: "Entertainment",
    viewers: 890,
  },
  {
    id: 4,
    title: "Cooking with Chef Alex",
    creator: "foodieDelight",
    thumbnail: "/thumbnails/cooking.jpg",
    category: "Lifestyle",
    viewers: 745,
  },
  {
    id: 5,
    title: "Indie Band Live",
    creator: "indieVibe",
    thumbnail: "/thumbnails/indie-band.jpg",
    category: "Music",
    viewers: 1845,
    trending: true,
  },
  {
    id: 6,
    title: "Strategy Game Championship",
    creator: "strategist",
    thumbnail: "/thumbnails/strategy-game.jpg",
    category: "Gaming",
    viewers: 2178,
    trending: true,
  },
  {
    id: 7,
    title: "Comedy Hour",
    creator: "laughFactory",
    thumbnail: "/thumbnails/comedy.jpg",
    category: "Entertainment",
    viewers: 1532,
    trending: true,
  },
  {
    id: 8,
    title: "Morning Wellness",
    creator: "zenMaster",
    thumbnail: "/thumbnails/wellness.jpg",
    category: "Lifestyle",
    viewers: 621,
    trending: true,
  },
];

// Mock data for partners
const partners = [
  { id: 1, name: "GameSphere", logo: "/partners/gamesphere.png" },
  { id: 2, name: "MusicMax", logo: "/partners/musicmax.png" },
  { id: 3, name: "TechGiant", logo: "/partners/techgiant.png" },
  { id: 4, name: "FoodieNetwork", logo: "/partners/foodie.png" },
  { id: 5, name: "StreamGear", logo: "/partners/streamgear.png" },
  { id: 6, name: "DevCom", logo: "/partners/devcom.png" },
  { id: 7, name: "CreativeHub", logo: "/partners/creativehub.png" },
  { id: 8, name: "eSportsPro", logo: "/partners/esportspro.png" },
];

const categories = ["All Streams", "Music", "Gaming", "Entertainment", "Lifestyle", "Social", "Talk Shows"];

export default function XonnectExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Streams");
  
  const filteredStreams = selectedCategory === "All Streams" 
    ? streams 
    : streams.filter(stream => stream.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
     

      <main className="container mx-auto px-4 py-6">
        {/* Ad Banner */}
        <div className="w-full bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-4 mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase font-bold">Premium Offer</p>
            <h3 className="text-xl md:text-2xl font-bold">Get 50% off your first month of XONNECT Premium!</h3>
            <p className="text-sm mt-2">Stream ad-free with exclusive content and higher quality.</p>
          </div>
          <button className="bg-white text-red-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition">Subscribe Now</button>
        </div>

        {/* Partner Slider */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Our Partners</h2>
            <Link href="/partners">
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.slice(0, 5).map((partner) => (
              <div key={partner.id} className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 transition">
                <div className="w-16 h-16 mx-auto bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                  {/* Replace with actual partner logo */}
                  <span className="text-lg font-bold">{partner.name.substring(0, 2)}</span>
                </div>
                <p className="font-medium text-sm truncate">{partner.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <Link href="/categories">
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All Streams" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                {category === "Music" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                )}
                {category === "Gaming" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                )}
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Streams */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Streams
            </h2>
            <Link href="/featured">
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
                See All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredStreams.filter(stream => !stream.trending).slice(0, 4).map((stream) => (
              <div key={stream.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-[1.02]">
                <div className="relative">
                  <div className="aspect-video bg-gray-800 relative">
                    {/* Replace with actual thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg">{stream.title}</span>
                    </div>
                  </div>
                  {stream.premium && (
                    <div className="absolute top-2 left-2 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded">
                      PREMIUM
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {stream.viewers.toLocaleString()} viewers
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-60 transition flex items-center justify-center">
                    <button className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-lg truncate">{stream.title}</h3>
                  <div className="flex items-center mt-2">
                    <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-300">{stream.creator}</span>
                    <span className="ml-auto text-xs px-2 py-1 bg-gray-800 rounded">{stream.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Second Ad Banner */}
        <div className="w-full bg-gradient-to-r from-gray-900 to-black border border-red-700 rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">XONNECT Gaming Championship</h3>
              <p className="text-gray-300 text-sm">Watch the biggest gaming event of the year. Exclusive coverage only on XONNECT.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-red-700 hover:bg-red-800 transition text-white px-6 py-2 rounded-full text-sm font-medium">
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Trending Now */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Trending Now
            </h2>
            <Link href="/trending">
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer flex items-center">
                See All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredStreams.filter(stream => stream.trending).slice(0, 4).map((stream) => (
              <div key={stream.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-[1.02]">
                <div className="relative">
                  <div className="aspect-video bg-gray-800 relative">
                    {/* Replace with actual thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg">{stream.title}</span>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 bg-opacity-90 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    TRENDING
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {stream.viewers.toLocaleString()} viewers
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-60 transition flex items-center justify-center">
                    <button className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-lg truncate">{stream.title}</h3>
                  <div className="flex items-center mt-2">
                    <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-300">{stream.creator}</span>
                    <span className="ml-auto text-xs px-2 py-1 bg-gray-800 rounded">{stream.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <div className="w-full bg-gradient-to-r from-red-800 to-red-900 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Start Your Streaming Journey Today</h3>
              <p className="text-gray-200">Create your own channel and connect with viewers worldwide.</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white hover:bg-gray-100 text-red-800 px-6 py-2 rounded-full font-medium transition">
                Start Streaming
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-red-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}