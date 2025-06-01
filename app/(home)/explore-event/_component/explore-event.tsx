import Image from "next/image"
import React from "react"
import BannerHeader from "../../_component/BannerHeader"
import LiveComponent from "./LiveComponent"
import ScheduledEvent from "./ScheduledEvent"
import { getStreams } from "@/lib/feed-service"
import CTA from "../../_component/CTA"

export const EventExplore = async () => {

     const creators = await getStreams();

    return (
        <div id="xonnect">
            <div className="w-full bg-white font-sans">
                {/* About Us Section Header */}
              
              <BannerHeader H1='Experience Live Event' Header=' XONNECT EVENTS' Desc='Join real-time events hosted by your favorite creators — unfiltered, exclusive, and interactive.'/>

                {/* Live Events Section */}
               <LiveComponent/>


                {/* Upcoming Events Section */}
                <section className="py-16 px-4 sm:px-8 bg-white text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">

                            <ScheduledEvent type="upcoming"/>
                 
                       
                    </div>
                </section>

                {/* Past Events Section */}
                <section className="py-16 px-4 sm:px-8 bg-gray-50 text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                      
                        <ScheduledEvent type="past"/>
                    </div>
                </section>


                {/* cta */}
                <section className="py-16 px-4 sm:px-8 bg-white text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <CTA/>
                    </div>
                </section>
                        


                {/* <section className="py-16 gap-10 px-4 sm:px-8 bg-white text-black container mx-auto justify-center flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6">Top Creators</h2>
                <div className="flex items-center flex-wrap gap-16">
                {creators.slice(0, 6).map((result, index) => (
                    <div key={index} className="text-center">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-3 relative">
                        <Image 
                        fill
                        src={ result.thumbnailUrl || `/assets/woman.jpeg`} 
                        alt={`Creator`} 
                        className="w-full h-full object-cover absolute"
                        />
                    </div>
                    <h3 className="font-semibold mb-1">{result.name}</h3>
                    <p className="text-sm text-gray-600">{result.user.username}</p>
                    </div>
                ))}
                </div>
                </section> */}
            </div>
        </div>
    )
}







