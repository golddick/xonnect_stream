

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
import { GiftIcon, PenLineIcon, Star, TicketIcon } from 'lucide-react';
import { JoinASCreatorBTN } from '@/components/joinAsCreator/JoinASCreatorBTN';
import ContactForm from './_component/contact-form';
import Rating from './_component/Rating';

export default function Home() {
  return (
    <div className="bg-white text-black">
      
      {/* Hero Section */}

      <HeroSection/>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4  md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Complete <span className=' text-red-700'>x</span>onnect Ecosystem</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              xonnect brings together everything creators need to share, engage, and monetize their content across multiple formats.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaVideo className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Live Streaming</h3>
              <p className="text-gray-600 text-center">
                Broadcast HD live content with interactive features for real-time audience engagement.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaMusic className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Exclusive Music</h3>
              <p className="text-gray-600 text-center">
                Share and monetize your original music with superfans through exclusive releases.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShoppingCart className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">E-Commerce</h3>
              <p className="text-gray-600 text-center">
                Sell merchandise and digital products directly to your audience with integrated storefronts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BsImages className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Visual Stories</h3>
              <p className="text-gray-600 text-center">
                Share photos, videos and time-limited stories that keep your audience engaged.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaUsers className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                Build a thriving community with discussion threads, groups, and member perks.
              </p>
            </div>


            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TicketIcon className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Tickecting system</h3>
              <p className="text-gray-600 text-center">
                Sell and purchase both virtual live-streaming access and physical tickets to event 
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <PenLineIcon className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Writeup</h3>
              <p className="text-gray-600 text-center">
                Post and engage with written content like aticles, blogs and personal stories 
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8  transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <GiftIcon className="text-2xl text-red-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Virtual Gifting</h3>
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
            <div className="lg:w-1/2 w-full">
                <div className="w-full h-96 lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/assets/xc.jpg" 
                    alt="Multi-Channel Monetization" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Multiple Revenue Streams</h2>
              <p className="text-lg text-gray-700 mb-8">
                xonnect gives you the power to monetize your creativity across various channels, from live content to merchandise.
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
      {/* <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beyond Live Streaming</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Xonnect offers specialized tools for music creators and e-commerce integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            Music Platform
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

            E-commerce
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
      </section> */}

      {/* Community Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl bg-green-500">
                  <Image 
                    src="/assets/xc.jpg" 
                    alt="Community Interaction" 
                    fill
                    objectFit="cover"
                    className=' absolute inset-0'
                  />
                </div>

                {/* Floating chat widget */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-64">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 relative  overflow-hidden">
                        <Image 
                    src="/assets/xsb.png" 
                    alt="Community Interaction" 
                    fill
                    objectFit="cover"
                    className=' absolute inset-0'
                  />
                    </div>
                    <div className="font-medium">xonnect_hq</div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg text-sm mb-3">
                     Anyone else heading to jiggy&apos;s concert tonight? 👀
                  </div>
                  <div className="bg-red-100 p-2 rounded-lg text-sm ml-auto max-w-[70%] text-right">
                     I&apos;ll be there! Leaving around 8 🎉
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Build Your Community</h2>
              <p className="text-lg text-gray-700 mb-8">
                xonnect provides all the tools you need to create a thriving community around your content, from live interactions to persistent social spaces.
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
      <Rating/>
        
      {/* FAQ Section */}
      <FAQ/>

      {/* Contact Form Section */}
      <ContactForm/>
    
    </div>
  )
}












