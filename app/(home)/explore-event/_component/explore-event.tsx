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
              
                <BannerHeader img={img} title={tittle} header={header} subText={subText}/>


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
            </div>
        </div>
    )
}