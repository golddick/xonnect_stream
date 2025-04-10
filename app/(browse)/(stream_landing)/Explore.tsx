
import { getStreams } from "@/lib/feed-service";
import React from "react"
import SponsorCard from "./Stream/_components/ads-card/sponsor-card";
import TopLiveSTream from "./Stream/_components/StreamRow/TopLiveSTream";
import AllStream from "./Stream/_components/StreamVideos/AllStream";
import { Results } from "./Stream/_components/results";



export default async function StreamExplore() {

    const stream = await getStreams();

    return (
        <div id="xonnect">
       
            <div className="w-full bg-gradient-to-b from-black-900 via-black-950 to-red-900 relative overflow-hidden  border-none">
              
                    <SponsorCard/>
                <div className="relative z-10 p-8">
 

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
                        <h2 className="text-white text-xl font-bold mb-4">Top Stream Channel</h2>
                       <TopLiveSTream data={stream}/>

                       {/* <Results label="Creators" /> */}

                        <AllStream label="Coming Up" type='upcoming'/>


                     {/* Second Ad Banner */}
                    <div className="w-full bg-gradient-to-r from-red-900 to-black border border-red-700 rounded-lg p-4 mb-8">
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
