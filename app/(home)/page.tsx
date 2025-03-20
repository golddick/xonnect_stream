

import React from "react"
import HeroSection from "./_component/Hero-section"
import FAQ from "./_component/faq"
import ContactForm from "./_component/contact-form"
import Team from "./_component/team"
import VisionMission from "./_component/vision-mission"
import Features from "./_component/features"

export default function Home() {
    return (
        <div id="webcrumbs" className=" w-full">
            <div className="w-full bg-black font-sans">
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

                 {/* Contact Form Section */}
                 <ContactForm/>
            </div>
        </div>
    )
}


