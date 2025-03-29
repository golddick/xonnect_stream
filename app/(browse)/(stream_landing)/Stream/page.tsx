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
import AllStream from "./_components/StreamVideos/AllStream";
import AdsBanner from "./_components/AdsBanner";

export default async function Home() {

    const stream = await getStreams();

    return (
        <div id="webcrumbs">
            {/* <div className="w-full bg-gradient-to-b from-neutral-900 via-black-950 to-neutral-900 relative overflow-hidden rounded-xl border border-white/10"> */}
            <div className="w-full bg-gradient-to-b from-black-900 via-black-950 to-red-900 relative overflow-hidden  border-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600 opacity-20 rounded-full blur-3xl"></div>

                    <SponsorCard/>
                <div className="relative z-10 p-8">
 

                    <div className="mb-8">
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
                        <h2 className="text-white text-xl font-bold mb-4">Top Stream Channel</h2>
                       <TopLiveSTream data={stream}/>

                       {/* <Results label="Creators" /> */}

                        <AllStream label="Coming Up" type='upcoming'/>

                        <AllStream label="Past Event" type='past'/>
                        


                    </div>
                </div>
            </div>

            {/* Next: "Add a user's recommended streams section based on viewing history" */}
            {/* Next: "Add stream scheduling calendar with upcoming events" */}
        </div>
    )
}
