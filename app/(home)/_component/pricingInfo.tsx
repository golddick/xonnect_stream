'use client'



import { useState } from 'react';
import { ArrowRight, Check, Music, Video, User, DollarSign, PieChart, Mail } from 'lucide-react';
import BannerHeader from './BannerHeader';
import Link from 'next/link';
import { JoinASCreatorBTN } from '@/components/joinAsCreator/JoinASCreatorBTN';
import CTA from './CTA';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('viewers');

  return (
    <div className="min-h-screen bg-white text-black">
    

      {/* Hero Section */}
      <BannerHeader H1='Simple, Transparent Pricing' Header='PLATFORM PRICING' Desc=' Pay only for what you watch. Creators earn directly from their content without subscription fees.'/>
    
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto text-center px-4">
          
          {/* Tab Selector */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-16">
            <button
              onClick={() => setActiveTab('viewers')}
              className={`px-6 py-3 rounded-md ${
                activeTab === 'viewers' ? 'bg-red-700 text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              For Viewers
            </button>
            <button
              onClick={() => setActiveTab('creators')}
              className={`px-6 py-3 rounded-md ${
                activeTab === 'creators' ? 'bg-red-700 text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              For Creators
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Viewers */}
      {activeTab === 'viewers' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 w-[80%] mx-auto">
              {/* Pay Per Stream */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg transition-transform hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Video className="text-red-700 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-black">Pay Per Stream</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-black">OnDemand</span>
                    <span className="text-gray-600 ml-2">pricing varies by content</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Watch what you want, pay when you want. No monthly fees or commitments.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Pay only for streams you choose to watch</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">HD quality streams</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Live chat during stream</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Email Notification</span>
                    </li>
                    {/* <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">48-hour replay access</span>
                    </li> */}
                  </ul>
                  <Link href={'/explore-event'}>
                  <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-md font-medium flex items-center justify-center">
                    Browse Streams <ArrowRight className="ml-2" size={18} />
                  </button>
                  </Link>
                </div>
              </div>

              {/* Music Subscription */}
              <div className="bg-black rounded-xl overflow-hidden transform scale-105 shadow-xl z-10">
                <div className="absolute top-0 right-0 bg-red-800 text-white font-bold py-1 px-4 text-sm">
                  COMING SOON
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Music className="text-red-700 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-white">Music Premium</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">N0</span>
                    <span className="text-gray-300 ml-2">per month</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Unlimited access to exclusive music content and premium streams.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Unlimited access to xonnect music library</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Early access to new releases</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Access to exclusive music found only on xonnect</span>
                    </li>
                    {/* <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">HD audio quality</span>
                    </li> */}
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Offline playback</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">10% discount on all exclusive live streams </span>
                    </li>
                  </ul>
                  
                </div>
              </div>

              {/* Single Song Purchase */}
              {/* <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg transition-transform hover:scale-105">
              <div className="absolute top-0 right-0 bg-red-800 text-white font-bold py-1 px-4 text-sm">
                  COMING SOON
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Music className="text-red-800 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-black">Song On Demand</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-black">Buy Song</span>
                    <span className="text-gray-600 ml-2">pricing varies by artist</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Purchase and own individual tracks from your favorite artists.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">One-time purchase, lifetime access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">High-quality audio formats</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Exclusive remixes and versions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Direct support to artists</span>
                    </li>
                  </ul>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium flex items-center justify-center">
                    Browse Songs <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section - Creators */}
      {activeTab === 'creators' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* Standard Creator */}
              <div className="bg-white rounded-xl w-full md:w-[400px] mx-auto overflow-hidden border border-gray-200 shadow-lg transition-transform hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <User className="text-red-700 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-black">Standard Creator</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-black">70%</span>
                    <span className="text-gray-600 ml-2">revenue share</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Get started with content creation and build your audience.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">70% of all stream revenue</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Basic analytics dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Standard streaming tools</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-700 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Email support and Email Notification</span>
                    </li>
                  </ul>
                   <JoinASCreatorBTN 
                    tittle='Start Creating'  
                    />
                </div>
              </div>

              {/* Premium Creator */}
              {/* <div className="bg-black rounded-xl overflow-hidden shadow-xl">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <User className="text-red-600 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-white">Premium Creator</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">70%</span>
                    <span className="text-gray-300 ml-2">revenue share</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    For established creators looking to maximize earnings and growth.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">70% of all stream revenue</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Advanced analytics and audience insights</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Premium streaming tools and effects</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Promotional opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-red-800 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Customized channel branding</span>
                    </li>
                  </ul>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium flex items-center justify-center">
                    Upgrade Now <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-black">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Pay As You Go</h3>
              <p className="text-gray-700">
                No monthly subscription fees for streams. Viewers only pay for the content they actually want to watch.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <PieChart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Fair Revenue Split</h3>
              <p className="text-gray-700">
                Creators earn the majority of revenue from their content with transparent payment processing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Exclusive Music</h3>
              <p className="text-gray-700">
                Access our exclusive music found only on xonnect library through a monthly subscription or purchase individual songs on demand.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-black">How does pay-per-stream work?</h3>
              <p className="text-gray-700">
                Each stream has a price set by the creator. You&apos;ll see the price before watching and only pay for streams you choose to watch. No hidden fees or subscriptions required.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-black">How do creators get paid?</h3>
              <p className="text-gray-700">
                Creators receive 70-85% of the revenue generated from their streams and music sales. Payments are processed monthly and transferred directly to your linked payment account.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-black">What&apos;s included in the Music Premium subscription?</h3>
              <p className="text-gray-700">
                The Music Premium subscription gives you unlimited access to our entire exclusive music library for a monthly fee. This includes early access to new releases, HD audio quality, and offline playback.
              </p>
            </div>
            {/* <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-black">Can I buy individual songs without a subscription?</h3>
              <p className="text-gray-700">
                Yes, many songs are available for individual purchase. Pay once and get lifetime access to that track, even if you don&apos;t have a subscription.
              </p>
            </div> */}
            {/* <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-black">Can I upgrade from Standard to Premium Creator?</h3>
              <p className="text-gray-700">
                Yes, you can upgrade at any time. Once you meet the eligibility requirements (based on audience size and stream frequency), the Premium Creator option will become available in your dashboard.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* <CTA bgColor='bg-red-700'/> */}
    </div>
  );
}