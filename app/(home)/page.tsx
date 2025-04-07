

// import React from "react"
// import HeroSection from "./_component/Hero-section"
// import FAQ from "./_component/faq"
// import ContactForm from "./_component/contact-form"
// import Team from "./_component/team"
// import VisionMission from "./_component/vision-mission"
// import Features from "./_component/features"
// import { ScheduleEventProfile } from "@/components/EventProfile/ScheduleEventProfile"
// import NewsLetter from "./_component/NewsLetter"

// export default function Home() {
//     return (
//         <div id="xonnect" className=" w-full">
//             <div className="w-full  font-sans">
//                 {/* Hero Section */}
//                <HeroSection/>

                // {/* Features Section */}
                // <Features/>

//                 {/* Vision and Mission Section */}
//                <VisionMission/>

//                 {/* Team Section */}
//                <Team/>

                //  {/* FAQ Section */}
                // <FAQ/>

    
                // {/* News letter Section */}
                // {/* <NewsLetter/> */}

                //  {/* Contact Form Section */}
                //  <ContactForm/>
//             </div>
//         </div>
       
//     )
// }


import React from "react"

import HeroSection from './_component/Hero-section';
import Features from "./_component/features";
import FAQ from "./_component/faq";
import ContactForm from "./_component/contact-form";

export default function Home() {



  return (
    <div className="min-h-screen bg-black">

      {/* Hero Section */}
        <HeroSection/>

      {/* Features Section */}
          <Features/>


      {/* For Creators Section */}
      <div id="creators" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">For Creators</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              Empower your content creation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Xonnect provides all the tools you need to create, share, and monetize your content.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg leading-6 font-medium text-black mb-4">Creator Control Panel</h3>

                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Upload and manage videos</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Schedule live streams</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Control access to paid content</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">View engagement analytics</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg leading-6 font-medium text-black mb-4">Monetization Options</h3>

                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Flexible pricing for streams (free or paid)</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Sell virtual and physical event tickets</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Creator merchandise sales</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">Subscription-based and one-time payment options</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Audience Section */}
      <div id="audience" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">For Audience</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              Connect with your favorite creators
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Xonnect brings you closer to the content and creators you love.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 rounded-md bg-red-600 text-white flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black mb-2">Watch Live</h3>
                <p className="text-base text-gray-500">
                  Access live streams of concerts, sports events, reality shows and more from any device.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 rounded-md bg-red-600 text-white flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black mb-2">Engage & Connect</h3>
                <p className="text-base text-gray-500">
                  Participate in live chats, discussions, and build community with creators and fellow fans.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="w-12 h-12 rounded-md bg-red-600 text-white flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-black mb-2">Shop Authentically</h3>
                <p className="text-base text-gray-500">
                  Purchase genuine creator merchandise directly from manufacturers through our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story & Content Types Section */}
      <div className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Content Experience</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Multiple ways to express and engage
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-red-600 mb-4">Story Section</h3>
                <p className="text-gray-300 mb-4">
                  Share image-based content in a dedicated Story section. Unlike other platforms, photos exist exclusively in Stories, creating a clean content experience.
                </p>
                <div className="flex items-center justify-center h-40 bg-black rounded-lg">
                  <span className="text-gray-400">Image Stories Preview</span>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-red-600 mb-4">Video Reels</h3>
                <p className="text-gray-300 mb-4">
                  Discover short-form video content, highlights, and clips from past events to stay engaged between live streams.
                </p>
                <div className="flex items-center justify-center h-40 bg-black rounded-lg">
                  <span className="text-gray-400">Video Reels Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                       {/* FAQ Section */}
                       <FAQ/>

    
{/* News letter Section */}
{/* <NewsLetter/> */}

            {/* Contact Form Section */}
            {/* <ContactForm/> */}

    </div>
       
  )
}

          