// import React, { Suspense } from "react";
// import { Metadata } from "next";
// import { Results, ResultsSkeleton } from "./_components/results";
// import VideoBox from "./_components/video-box";
// import AdsBanner from "./_components/AdsBanner";
// import AllStream from "./_components/StreamVideos/AllStream";


// export const metadata: Metadata = {
//   title: "Home",
// };

// export default function Home() {
//   return (
//     <div className="h-full p-4 lg:p-8 max-w-screen-2xl mx-auto bg-black w-full  overflow-auto flex flex-col gap-6 hidden-scrollbar">
//       <Suspense fallback={<ResultsSkeleton />}>
//         <VideoBox/>
//         {/* <AdsBanner/> */}
//         <Results label="Creators" />
//         <AllStream label="Coming Up"/>
//       </Suspense>
//     </div>
//   );
// }



import React from "react"
import SponsorCard from "./_components/ads-card/sponsor-card"
import TopLiveSTream from "./_components/StreamRow/TopLiveSTream"
import { Results } from "./_components/results"
import { getStreams } from "@/lib/feed-service";
import Image from "next/image";

export default async function Home() {

    const stream = await getStreams();

    return (
        <div id="webcrumbs">
            {/* <div className="w-full bg-gradient-to-b from-neutral-900 via-black-950 to-neutral-900 relative overflow-hidden rounded-xl border border-white/10"> */}
            <div className="w-full bg-gradient-to-b from-black-900 via-black-950 to-red-900 relative overflow-hidden  border-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600 opacity-20 rounded-full blur-3xl"></div>

                <div className="relative z-10 p-8">
 
                    <SponsorCard/>

                    <div className="mb-8">
                        <div className="flex gap-1 overflow-x-auto pb-2 mb-6 flex-wrap">
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
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Entertainment
                            </button>
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Education
                            </button>
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Technology
                            </button>
                            <button className="bg-black/30 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-black/50 transition-colors">
                                Lifestyle
                            </button>
                        </div>

                        <h2 className="text-white text-xl font-bold mb-4">Top Stream Channel</h2>
                       <TopLiveSTream data={stream}/>

                       {/* <Results label="Creators" /> */}

                        <h2 className="text-white text-xl font-bold mb-4">Popular in Music</h2>
                        <div className=" p-4 grid   grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                            {[
                                {
                                    title: "Electronic Dance Party",
                                    host: "DJ Maxwell",
                                    viewers: "12.3K",
                                    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: true
                                },
                                {
                                    title: "Jazz Night Session",
                                    host: "SmoothSax",
                                    viewers: "5.8K",
                                    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: false
                                },
                                {
                                    title: "Rock Legends Concert",
                                    host: "GuitarHero",
                                    viewers: "21.7K",
                                    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: true
                                },
                                {
                                    title: "Classical Symphony",
                                    host: "MaestroArts",
                                    viewers: "7.9K",
                                    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: false
                                }
                            ].map((stream, index) => (
                                <div
                                    key={index}
                                    className="bg-black/20 rounded-xl overflow-hidden border border-white/5 group hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="relative">
                                        <Image
                                            src={stream.image}
                                            alt={stream.title}
                                            width={100}
                                            height={80}
                                            className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-2 left-2 flex items-center gap-2">
                                            {stream.isLive ? (
                                                <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold flex items-center">
                                                    <span className="material-symbols-outlined text-[10px] mr-1">
                                                        fiber_manual_record
                                                    </span>
                                                    LIVE
                                                </span>
                                            ) : (
                                                <span className="bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                                                    REPLAY
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-white font-semibold text-sm line-clamp-1">
                                            {stream.title}
                                        </h3>
                                        <p className="text-white/60 text-xs">{stream.host}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-white/60 text-xs">{stream.viewers} viewers</span>
                                            <button className="text-white/70 hover:text-blue-400 transition-colors">
                                                <span className="material-symbols-outlined text-sm">more_vert</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-white text-xl font-bold mb-4">Popular in Sports</h2>
                        <div className=" p-4 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                            {[
                                {
                                    title: "Premier League Match",
                                    host: "SportsChannel",
                                    viewers: "87.3K",
                                    image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: true
                                },
                                {
                                    title: "Formula 1 Grand Prix",
                                    host: "RacingNetwork",
                                    viewers: "65.1K",
                                    image: "https://images.unsplash.com/photo-1503945839639-aea48daa250f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: true
                                },
                                {
                                    title: "NBA Highlights",
                                    host: "HoopsTV",
                                    viewers: "32.4K",
                                    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: false
                                },
                                {
                                    title: "Tennis Open Finals",
                                    host: "CourtSide",
                                    viewers: "41.2K",
                                    image: "https://images.unsplash.com/photo-1595435934740-bf6b92b535fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                                    isLive: true
                                }
                            ].map((stream, index) => (
                                <div
                                    key={index}
                                    className="bg-black/20 rounded-xl overflow-hidden border border-white/5 group hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="relative">
                                        <Image
                                            width={100}
                                            height={80}
                                            src={stream.image}
                                            alt={stream.title}
                                            className="w-full h-36 object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-2 left-2 flex items-center gap-2">
                                            {stream.isLive ? (
                                                <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold flex items-center">
                                                    <span className="material-symbols-outlined text-[10px] mr-1">
                                                        fiber_manual_record
                                                    </span>
                                                    LIVE
                                                </span>
                                            ) : (
                                                <span className="bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                                                    REPLAY
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-white font-semibold text-sm line-clamp-1">
                                            {stream.title}
                                        </h3>
                                        <p className="text-white/60 text-xs">{stream.host}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-white/60 text-xs">{stream.viewers} viewers</span>
                                            <button className="text-white/70 hover:text-blue-400 transition-colors">
                                                <span className="material-symbols-outlined text-sm">more_vert</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            {/* Next: "Add a user's recommended streams section based on viewing history" */}
            {/* Next: "Add stream scheduling calendar with upcoming events" */}
        </div>
    )
}
