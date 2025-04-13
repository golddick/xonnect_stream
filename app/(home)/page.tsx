

// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { FaMoneyBillWave, FaUsers, FaVideo, FaShoppingCart, FaMusic } from 'react-icons/fa';
import { BsChatDotsFill, BsGraphUp, BsCalendarEvent, BsImages, BsPencilSquare } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import { MdVideoLibrary } from 'react-icons/md';
import NewsLetter from './_component/NewsLetter';
import FAQ from './_component/faq';
import CTA from './_component/CTA';
import HeroSection from './_component/Hero-section';
import { GiftIcon, PenLineIcon, TicketIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureAvailabilityComponent from './_component/featuresAvailable';
import { JoinASCreatorBTN } from '@/components/joinAsCreator/JoinASCreatorBTN';

export default function Home() {
  return (
    <div className="bg-white text-black">
    

      
      {/* Hero Section */}

      <HeroSection/>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Complete <span className=' text-red-700'>X</span>onnect Ecosystem</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Xonnect brings together everything creators need to share, engage, and monetize their content across multiple formats.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaVideo className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Live Streaming</h3>
              <p className="text-gray-600 text-center">
                Broadcast HD live content with interactive features for real-time audience engagement.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaMusic className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Exclusive Music</h3>
              <p className="text-gray-600 text-center">
                Share and monetize your original music with superfans through exclusive releases.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShoppingCart className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">E-Commerce</h3>
              <p className="text-gray-600 text-center">
                Sell merchandise and digital products directly to your audience with integrated storefronts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BsImages className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Visual Stories</h3>
              <p className="text-gray-600 text-center">
                Share photos, videos and time-limited stories that keep your audience engaged.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaUsers className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Build a thriving community with discussion threads, groups, and member perks.
              </p>
            </div>


            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TicketIcon className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Tickecting system</h3>
              <p className="text-gray-600 text-center">
                Sell and purchase both virtual live-streaming access and physical tickets to event 
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <PenLineIcon className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Writeup</h3>
              <p className="text-gray-600 text-center">
                Post and engage with written content like aticles, blogs and personal stories 
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GiftIcon className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Virtual Gifting and Donations</h3>
              <p className="text-gray-600 text-center">
              Send virtual gifts to creators during live streams that can be converted to real currency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monetization Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/assets/xc.jpg" 
                    alt="Multi-Channel Monetization" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-48">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-bold text-red-600">$4,580</div>
                    <div className="text-green-500 flex items-center text-sm">
                      <BsGraphUp className="mr-1" /> +32%
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Monthly Revenue</div>
                </div> */}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Multiple Revenue Streams</h2>
              <p className="text-lg text-gray-700 mb-8">
                Xonnect gives you the power to monetize your creativity across various channels, from live content to merchandise.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-700">
                    <HiCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Pay-On-Demand Content</h4>
                    <p className="text-gray-600">
                      Offer premium live streams, exclusive music releases, and special content with flexible pricing options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-700">
                    <HiCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">E-Commerce Store</h4>
                    <p className="text-gray-600">
                      Sell merchandise, digital downloads, and branded products directly to your audience with our integrated storefront.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-600">
                    <HiCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Subscription Tiers</h4>
                    <p className="text-gray-600">
                      Create membership tiers that offer different levels of access to your exclusive content and community features.
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-700">
                    <HiCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Virtual Gifts & Tips</h4>
                    <p className="text-gray-600">
                      Receive direct support from fans through virtual gifts during streams and tip donations on any content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-white">
                 <JoinASCreatorBTN 
                  tittle='Start Monetizing'  
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music & E-commerce Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beyond Live Streaming</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Xonnect offers specialized tools for music creators and e-commerce integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Music Platform */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/assets/xc.jpg" 
                  alt="Music Platform" 
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Exclusive Music Platform</h3>
                  <p className="text-sm max-w-md">Release your music directly to fans</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaMusic className="text-red-700 text-sm" />
                    </span>
                    <span>Direct music uploads with high-quality audio</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaMusic className="text-red-700 text-sm" />
                    </span>
                    <span>Exclusive pre-releases for your superfans</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaMusic className="text-red-700 text-sm" />
                    </span>
                    <span>Analytics to track listens and engagement</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaMusic className="text-red-700 text-sm" />
                    </span>
                    <span>Custom playlist creation and sharing</span>
                  </li>
                </ul>
                <button className="w-full mt-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all">
                  Explore Music Features
                </button>
              </div>
            </div>

            {/* E-commerce */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/assets/xc.jpg" 
                  alt="E-commerce Platform" 
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Integrated E-Commerce</h3>
                  <p className="text-sm max-w-md">Sell brand merchandise and products</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaShoppingCart className="text-red-700 text-sm" />
                    </span>
                    <span>Custom storefront with your branding</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaShoppingCart className="text-red-700 text-sm" />
                    </span>
                    <span>Physical and digital product management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaShoppingCart className="text-red-700 text-sm" />
                    </span>
                    <span>Integrated with live streams for promotions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <FaShoppingCart className="text-red-700 text-sm" />
                    </span>
                    <span>Secure payment processing and fulfillment</span>
                  </li>
                </ul>
                <button className="w-full mt-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all">
                  Explore Shop Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/assets/xlogo.jpg" 
                    alt="Community Interaction" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Floating chat widget */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-64">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <div className="font-medium">LiveFan42</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-sm mb-3">
                    Loved your latest post! When's the next live stream?
                  </div>
                  <div className="bg-red-100 p-3 rounded-lg text-sm ml-auto max-w-[80%] text-right">
                    Thanks! Going live this Friday at 8PM 🎉
                  </div>
                </div> */}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Build Your Community</h2>
              <p className="text-lg text-gray-700 mb-8">
                Xonnect provides all the tools you need to create a thriving community around your content, from live interactions to persistent social spaces.
              </p>

              <div className="space-y-5">
                <div className="bg-white rounded-xl shadow p-5 flex items-center">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <BsChatDotsFill className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Interactive Chats</h4>
                    <p className="text-gray-600 text-sm">
                      Real-time conversations during streams with moderation tools and reactions.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <FaUsers className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Community Groups</h4>
                    <p className="text-gray-600 text-sm">
                      Create topic-based groups for fans to connect around shared interests.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <BsCalendarEvent className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Virtual Events and Gifting</h4>
                    <p className="text-gray-600 text-sm">
                    Connect with fans through virtual Q&As, exclusive meetups, and interactive gifting
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <BsPencilSquare className="text-xl text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Posts Writeup and Video Reels</h4>
                    <p className="text-gray-600 text-sm">
                    Engage your audience with updates, stories, and eye-catching video reels.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-10">

                <Button className='px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all'>
                Explore Community Features
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>


      {/* News letter Section */}
      <NewsLetter/>

        {/* What viewers say Section */}
        <section className="bg-white py-12 text-black">
        <div className="container mx-auto px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What Our Viewers Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Join thousands of satisfied viewers who enjoy premium content on StreamVue.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <span className="material-symbols-outlined text-primary-800">person</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Sarah Johnson</h4>
                            <div className="flex text-yellow-400">
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    &quot;The streaming quality is incredible! I&apos;ve never experienced such clear live
                        events from the comfort of my home. Worth every penny!&quot;
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <span className="material-symbols-outlined text-primary-800">person</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Michael Rodriguez</h4>
                            <div className="flex text-yellow-400">
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star_half</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    &quot;I love being able to watch exclusive events that I couldn&apos;t attend in person.
                        The multi-device feature lets me watch anywhere!&quot;
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            <span className="material-symbols-outlined text-primary-800">person</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Emily Chen</h4>
                            <div className="flex text-yellow-400">
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">
                    &quot;The on-demand feature is a game-changer. I never miss an event even with my
                        busy schedule. Customer support is also excellent!&quot;
                    </p>
                </div>
            </div>
        </div>
        </section>

      {/* FAQ Section */}
      <FAQ/>

   
    
    </div>
  )
}

















// import React from "react"

// import HeroSection from './_component/Hero-section';
// import Features from "./_component/features";
// import FAQ from "./_component/faq";
// import ContactForm from "./_component/contact-form";
// import NewsLetter from "./_component/NewsLetter";

// export default function Home() {



//   return (
//     <div className="min-h-screen bg-black">

//       {/* Hero Section */}
//         <HeroSection/>

//       {/* Features Section */}
//           <Features/>

//       {/* For Creators Section */}
//       <div id="creators" className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">For Creators</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
//               Empower your content creation
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               Xonnect provides all the tools you need to create, share, and monetize your content.
//             </p>
//           </div>

//           <div className="mt-10">
//             <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-lg leading-6 font-medium text-black mb-4">Creator Control Panel</h3>

//                 <ul className="space-y-4">
//                   <li className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="ml-3 text-base text-gray-500">Schedule live streams</p>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="ml-3 text-base text-gray-500">Control access to paid content</p>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="ml-3 text-base text-gray-500">View engagement analytics</p>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-lg leading-6 font-medium text-black mb-4">Monetization Options</h3>

//                 <ul className="space-y-4">
//                   <li className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="ml-3 text-base text-gray-500">Flexible pricing for streams (free or paid)</p>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="ml-3 text-base text-gray-500">Sell virtual and physical event tickets</p>
//                   </li>
//                   <li className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="ml-3 text-base text-gray-500">Merchandise sales</p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* For Audience Section */}
//       <div id="audience" className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">For Audience</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
//               Connect with your favorite creators
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               Xonnect brings you closer to the content and creators you love.
//             </p>
//           </div>

//           <div className="mt-10">
//             <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
//               {/* Card 1 */}
//               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//                 <div className="w-12 h-12 rounded-md bg-red-700 text-white flex items-center justify-center mb-4">
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-medium text-black mb-2">Watch Live</h3>
//                 <p className="text-base text-gray-500">
//                   Access live streams of concerts, sports events, reality shows and more from any device.
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//                 <div className="w-12 h-12 rounded-md bg-red-700 text-white flex items-center justify-center mb-4">
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-medium text-black mb-2">Engage & Connect</h3>
//                 <p className="text-base text-gray-500">
//                   Participate in live chats, discussions, and build community with creators and fellow fans.
//                 </p>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//                 <div className="w-12 h-12 rounded-md bg-red-700 text-white flex items-center justify-center mb-4">
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-medium text-black mb-2">Shop Authentically</h3>
//                 <p className="text-base text-gray-500">
//                   Purchase genuine merchandise directly from manufacturers through our platform and delivered directly to your address 
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}

//       <section className="bg-white py-12 text-black">
//             <div className="container mx-auto px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     <div>
//                         <h2 className="text-3xl font-bold mb-6 text-black">About StreamVue</h2>
//                         <p className="text-gray-600 mb-6">
//                             StreamVue was founded in 2018 with a mission to revolutionize how people experience
//                             live events. What started as a small startup has grown into a leading platform for
//                             premium live streaming across the globe.
//                         </p>
//                         <p className="text-gray-600 mb-8">
//                             Our team of passionate professionals works tirelessly to bring you the best
//                             streaming experience with cutting-edge technology and exceptional content.
//                         </p>
//                         <div className="grid grid-cols-2 gap-6">
//                             <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
//                                 <h3 className="text-xl font-bold mb-2">Our Mission</h3>
//                                 <p className="text-gray-600">
//                                     To connect audiences worldwide with premium live events through innovative
//                                     streaming technology.
//                                 </p>
//                             </div>
//                             <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
//                                 <h3 className="text-xl font-bold mb-2">Our Vision</h3>
//                                 <p className="text-gray-600">
//                                     To become the global leader in premium live event streaming, accessible to
//                                     everyone, everywhere.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="relative">
//                         <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-red-100 -z-10"></div>
//                         <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-black/10 -z-10"></div>
//                         <img
//                             src="https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
//                             alt="StreamVue team"
//                             className="rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-500"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>

      //     {/* News letter Section */}
      //   <NewsLetter/>


      //   {/* What viewers say Section */}
      //   <section className="bg-white py-12 text-black">
      //   <div className="container mx-auto px-8">
      //       <div className="text-center mb-12">
      //           <h2 className="text-3xl font-bold mb-4">What Our Viewers Say</h2>
      //           <p className="text-gray-600 max-w-2xl mx-auto">
      //               Join thousands of satisfied viewers who enjoy premium content on StreamVue.
      //           </p>
      //       </div>

      //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      //           <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      //               <div className="flex items-center mb-4">
      //                   <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
      //                       <span className="material-symbols-outlined text-primary-800">person</span>
      //                   </div>
      //                   <div>
      //                       <h4 className="font-bold">Sarah Johnson</h4>
      //                       <div className="flex text-yellow-400">
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                       </div>
      //                   </div>
      //               </div>
      //               <p className="text-gray-600">
      //                   "The streaming quality is incredible! I've never experienced such clear live
      //                   events from the comfort of my home. Worth every penny!"
      //               </p>
      //           </div>

      //           <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      //               <div className="flex items-center mb-4">
      //                   <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
      //                       <span className="material-symbols-outlined text-primary-800">person</span>
      //                   </div>
      //                   <div>
      //                       <h4 className="font-bold">Michael Rodriguez</h4>
      //                       <div className="flex text-yellow-400">
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star_half</span>
      //                       </div>
      //                   </div>
      //               </div>
      //               <p className="text-gray-600">
      //                   "I love being able to watch exclusive events that I couldn't attend in person.
      //                   The multi-device feature lets me watch anywhere!"
      //               </p>
      //           </div>

      //           <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      //               <div className="flex items-center mb-4">
      //                   <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
      //                       <span className="material-symbols-outlined text-primary-800">person</span>
      //                   </div>
      //                   <div>
      //                       <h4 className="font-bold">Emily Chen</h4>
      //                       <div className="flex text-yellow-400">
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                           <span className="material-symbols-outlined">star</span>
      //                       </div>
      //                   </div>
      //               </div>
      //               <p className="text-gray-600">
      //                   "The on-demand feature is a game-changer. I never miss an event even with my
      //                   busy schedule. Customer support is also excellent!"
      //               </p>
      //           </div>
      //       </div>
      //   </div>
      //   </section>

      // {/* FAQ Section */}
      // <FAQ/>

    
//             {/* Contact Form Section */}
//             {/* <ContactForm/> */}

//     </div>
       
//   )
// }

             {/* Content Diversity Section */}
    //   <section className="py-24 bg-gray-50">
    //   <div className="container mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl font-bold mb-4">Share Content Your Way</h2>
    //       <p className="text-lg text-gray-700 max-w-2xl mx-auto">
    //         Express yourself through multiple content formats, all in one platform.
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {/* Content Type 1 */}
    //       <div className="bg-white rounded-xl overflow-hidden shadow-lg group relative">
    //         <div className="relative h-56">
    //           <Image
    //             src="/api/placeholder/400/300"
    //             alt="Live Stream Content"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    //           <div className="absolute bottom-4 left-4 text-white">
    //             <MdVideoLibrary className="text-3xl mb-2 text-red-500" />
    //             <h3 className="text-xl font-bold">Live Streams</h3>
    //           </div>
    //         </div>
    //         <div className="p-4">
    //           <p className="text-gray-600">
    //             Connect with your audience in real-time through high-quality, interactive live broadcasts.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Content Type 2 */}
    //       <div className="bg-white rounded-xl overflow-hidden shadow-lg group relative">
    //         <div className="relative h-56">
    //           <Image
    //             src="/api/placeholder/400/300"
    //             alt="Music Content"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    //           <div className="absolute bottom-4 left-4 text-white">
    //             <FaMusic className="text-3xl mb-2 text-red-500" />
    //             <h3 className="text-xl font-bold">Music & Audio</h3>
    //           </div>
    //         </div>
    //         <div className="p-4">
    //           <p className="text-gray-600">
    //             Release exclusive tracks, albums, podcasts and audio content to your dedicated fans.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Content Type 3 */}
    //       <div className="bg-white rounded-xl overflow-hidden shadow-lg group relative">
    //         <div className="relative h-56">
    //           <Image
    //             src="/api/placeholder/400/300"
    //             alt="Photo Content"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    //           <div className="absolute bottom-4 left-4 text-white">
    //             <BsImages className="text-3xl mb-2 text-red-500" />
    //             <h3 className="text-xl font-bold">Photos & Stories</h3>
    //           </div>
    //         </div>
    //         <div className="p-4">
    //           <p className="text-gray-600">
    //             Share visual moments through high-quality photos and engaging, ephemeral stories.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Content Type 4 */}
    //       <div className="bg-white rounded-xl overflow-hidden shadow-lg group relative">
    //         <div className="relative h-56">
    //           <Image
    //             src="/api/placeholder/400/300"
    //             alt="Written Content"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    //           <div className="absolute bottom-4 left-4 text-white">
    //             <BsPencilSquare className="text-3xl mb-2 text-red-500" />
    //             <h3 className="text-xl font-bold">Written Posts</h3>
    //           </div>
    //         </div>
    //         <div className="p-4">
    //           <p className="text-gray-600">
    //             Express your thoughts through articles, updates, and text-based content for your followers.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>