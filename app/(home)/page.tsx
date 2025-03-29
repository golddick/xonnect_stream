

import React from "react"
import HeroSection from "./_component/Hero-section"
import FAQ from "./_component/faq"
import ContactForm from "./_component/contact-form"
import Team from "./_component/team"
import VisionMission from "./_component/vision-mission"
import Features from "./_component/features"
import { ScheduleEventProfile } from "@/components/EventProfile/ScheduleEventProfile"
import NewsLetter from "./_component/NewsLetter"

export default function Home() {
    return (
        <div id="xonnect" className=" w-full">
            <div className="w-full  font-sans">
                {/* Hero Section */}
               <HeroSection/>

                {/* Features Section */}
                <Features/>

                {/* Vision and Mission Section */}
               <VisionMission/>

                {/* Team Section */}
               <Team/>

                 {/* FAQ Section */}
                <FAQ/>

    
                {/* News letter Section */}
                {/* <NewsLetter/> */}

                 {/* Contact Form Section */}
                 <ContactForm/>
            </div>
        </div>
       
    )
}




