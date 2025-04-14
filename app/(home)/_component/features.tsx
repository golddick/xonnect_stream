import React from 'react'
import FeatureCard from '../features/_component/FeatureCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Features = () => {
  return (
    // <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden ">
    //                 <div className="text-center mb-12 animate-fadeInUp">
    //                     <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-black">Why Choose XONNECT?</h2>
    //                     <p className="text-gray-600 max-w-2xl mx-auto">
    //                         Our platform offers a unique streaming experience with premium features designed to enhance
    //                         your entertainment journey.
    //                     </p>
    //                 </div>

    //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    //                 <FeatureCard
    //                 svg={
    //                     <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
    //                     viewBox="0 0 20 20"
    //                     fill="currentColor"
    //                     >
    //                     <path
    //                         fillRule="evenodd"
    //                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
    //                         clipRule="evenodd"
    //                     />
    //                     </svg>
    //                 }
    //                 title='HD Streaming'
    //                 description='Experience crystal-clear video quality for all your favorite events and shows.'
    //                 />
                       
    //                 <FeatureCard
    //                 svg={
    //                     <svg
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
    //                             viewBox="0 0 20 20"
    //                             fill="currentColor"
    //                         >
    //                             <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    //                         </svg>
    //                 }
    //                 title='Multi-View Experience'
    //                 description=' Choose your perspective with multiple camera angles during live events.
    //                             Experience concerts like never before.'
    //                 />


    //                 <FeatureCard
    //                 svg={
    //                     <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                 >
    //                     <path
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         strokeWidth={2}
    //                         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    //                     />
    //                 </svg>
    //                 }
    //                 title='On-Demand Payments'
    //                 description='  Pay only for what you want to watch without subscription commitments. Our
    //                                     flexible payment system gives you complete control.'
    //                 />
                       

                        
    //                 </div>

    //                 <div className="text-center mt-12 animate-out">

    //                             <Link href={'/features'}>
    //                                 <Button className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30 font-bold text-lg">
    //                                     Explore All Features
    //                                 </Button>
    //                             </Link>
    //                             </div>
    //             </section>


    <div id="features" className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">Platform Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
          Everything creators and fans need
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Xonnect offers me a comprehensive suite of tools designed to connect creators with their audience through multiple channels.
        </p>
      </div>

      <div className="mt-10">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100  items-center text-center group hover:-translate-y-3 hover:border-red-500">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">Live Streaming</h3>
              <p className="mt-2 text-base text-gray-500">
                Host and watch live streams for concerts, sports, and reality shows on both web and mobile platforms.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100  items-center text-center group hover:-translate-y-3 hover:border-red-500">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">Ticketing System</h3>
              <p className="mt-2 text-base text-gray-500">
                Sell and purchase both virtual live-streaming access and physical tickets to events globally.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100  items-center text-center group hover:-translate-y-3 hover:border-red-500">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">Community Features</h3>
              <p className="mt-2 text-base text-gray-500">
                Engage with creators and other fans through live chats, group interactions, and personalized interactions.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100  items-center text-center group hover:-translate-y-3 hover:border-red-500">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">Video Reels</h3>
              <p className="mt-2 text-base text-gray-500">
                Share and watch short-form video content, highlights, and clips on the platfrom .
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100  items-center text-center group hover:-translate-y-3 hover:border-red-500">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">Writeup Post</h3>
              <p className="mt-2 text-base text-gray-500">
                Post and engage with written content like articles, blogs, and personal stories.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100  items-center text-center group hover:-translate-y-3 hover:border-red-500">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-black">eCommerce</h3>
              <p className="mt-2 text-base text-gray-500">
                Purchase authentic merchandise sourced directly from manufacturers and delivered directly to your address NO STORY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features
