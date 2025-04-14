

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
import { JoinASCreatorBTN } from '@/components/joinAsCreator/JoinASCreatorBTN';
import ContactForm from './_component/contact-form';

export default function Home() {
  return (
    <div className="bg-white text-black">
      
      {/* Hero Section */}

      <HeroSection/>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4  md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Complete <span className=' text-red-700'>X</span>onnect Ecosystem</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Xonnect brings together everything creators need to share, engage, and monetize their content across multiple formats.
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

          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
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
            <div className="lg:w-1/2 w-full">
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
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-64">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <div className="font-medium">xonnect24</div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg text-sm mb-3">
                    who is going to jiggy&apos;s concert?
                  </div>
                  <div className="bg-red-100 p-2 rounded-lg text-sm ml-auto max-w-[80%] text-right">
                    Im going! Will leave home by 8PM 🎉
                  </div>
                </div>
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
      <section className="bg-white py-24 text-black">
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

      {/* Contact Form Section */}
      <ContactForm/>
    
    </div>
  )
}












