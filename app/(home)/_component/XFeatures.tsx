

'use client'

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Video, 
  Ticket, 
  Users, 
  Clock, 
  FileText, 
  ShoppingBag,
  Music,
  Award,
  Gift,
  Zap,
  Shield,
  BarChart2,
  LucideIcon
} from 'lucide-react';
import BannerHeader from './BannerHeader';
import PlatformFeatures from './featuresAvailable';

// Feature card component
interface FeatureCardProps {
  icon: LucideIcon
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`rounded-xl p-6 cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-red-700 text-white shadow-lg scale-105' : 'bg-white  text-black hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-3 rounded-full ${isActive ? 'bg-white' : 'bg-red-100'}`}>
          <Icon size={24} className={isActive ? 'text-red-700' : 'text-red-700'} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className={`${isActive ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  );
};

export const XFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('streaming');

  const features = [
    {
      id: 'streaming',
      icon: Video,
      title: 'Live Streaming',
      description: 'Host and watch live streams for concerts, sports, and reality shows on both web and mobile platforms.',
      details: [
        'Multi-platform streaming capabilities',
        'High-definition video quality',
        'Low-latency streaming technology',
        'Real-time audience interaction',
        'Stream recording and playback options'
      ]
    },
    {
      id: 'ticketing',
      icon: Ticket,
      title: 'Ticketing System',
      description: 'Sell and purchase both virtual live-streaming access and physical tickets to events globally.',
      details: [
        'Secure payment processing',
        'QR code ticket generation',
        'Digital ticket transfer capabilities'
      ]
    },
    {
      id: 'community',
      icon: Users,
      title: 'Community Features',
      description: 'Engage with creators and other fans through live chats, group interactions, and personalized interactions.',
      details: [
        'Fan clubs and interest groups',
        'Direct messaging with creators',
        'Fan meetups coordination',
        'Content voting and feedback systems',
        'Creator Q&A sessions'
      ]
    },
    {
      id: 'reels',
      icon: Clock,
      title: 'Video Reels',
      description: 'Share and watch short-form video content, highlights, and clips on the platform.',
      details: [
        'Customizable video editing tools',
        'Trending hashtags and challenges',
        'Video response capabilities',
        'Content discovery algorithm',
        'Shareable across social platforms'
      ]
    },
    {
      id: 'writeup',
      icon: FileText,
      title: 'Writeup Post',
      description: 'Post and engage with written content like articles, blogs, and personal stories.',
      details: [
        'Rich text editor with formatting options',
        'Image and video embedding',
        'Comment and discussion threads',
        'Content categorization',
        'Featured article spotlights'
      ]
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'eCommerce',
      description: 'Purchase authentic merchandise sourced directly from manufacturers and delivered to your address.',
      details: [
        'Creator-approved merchandise',
        'Secure payment processing',
        'Local shipping options',
        'Exclusive limited-edition items',
        'Wishlist and favorites features'
      ]
    },
    {
      id: 'music',
      icon: Music,
      title: 'Exclusive Music',
      description: 'Access exclusive music releases, singles and albums directly from your favorite artists.',
      details: [
        'Early access to new releases',
        'High-fidelity audio streaming',
        'Offline listening capabilities',
        'Exclusive remixes and bonus tracks',
        'Virtual listening parties'
      ]
    },
    {
      id: 'gifting',
      icon: Gift,
      title: 'Virtual Gifting',
      description: 'Send virtual gifts to creators during live streams that can be converted to real currency.',
      details: [
        'Discounted Event Tickets',
        'Merch Store Discounts',
        'Early access to content and events',
        'Special badge recognition',
        'Birthday and anniversary rewards',
        'Priority Access to Drops & Collabs'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <BannerHeader H1=' Unleash Creativity. Build Your Tribe.' Header='XONNECT FEATURES' Desc='Stream live, share exclusive content, connect with fans, and sell merch effortlessly.'/>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>

          {/* Feature Details */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-black">
            {features.map((feature) => (
              activeFeature === feature.id && (
                <div key={`detail-${feature.id}`} className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-100 rounded-full">
                      <feature.icon size={24} className="text-red-700" />
                    </div>
                    <h2 className="text-3xl font-bold">{feature.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                  
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mt-1 mr-3 text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <PlatformFeatures/>

     

 </div>
  )
}





















//  {/* Additional Features */}
//  <section className="py-16 bg-gray-50 text-black">
//  <div className="container mx-auto px-4">
//    <div className="text-center mb-12">
//      <h2 className="text-3xl font-bold mb-4">Additional Platform Capabilities</h2>
//      <p className="text-gray-600 max-w-2xl mx-auto">
//        Xonnect continues to innovate with these powerful features that help creators monetize their content and grow their audience.
//      </p>
//    </div>

//    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//      {additionalFeatures.map((feature, index) => (
//        <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
//          <div className="flex flex-col items-center text-center space-y-4">
//            <div className="p-3 bg-red-100 rounded-full">
//              <feature.icon size={24} className="text-red-800" />
//            </div>
//            <h3 className="text-xl font-bold">{feature.title}</h3>
//            <p className="text-gray-600">{feature.description}</p>
//          </div>
//        </div>
//      ))}
//    </div>
//  </div>
// </section>

// {/* Integration Section */}
// <section className="py-16 bg-white text-black">
//  <div className="container mx-auto px-4">
//    <div className="flex flex-col md:flex-row items-center gap-12">
//      <div className="md:w-1/2">
//        <h2 className="text-3xl font-bold mb-6">Seamless integration with your existing workflow</h2>
//        <p className="text-gray-600 mb-8">
//          Xonnect works with the tools you already use, allowing for smooth content distribution across multiple platforms.
//        </p>
//        <ul className="space-y-4">
//          {/* <li className="flex items-start">
//            <div className="mt-1 mr-3 text-red-800">
//              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//              </svg>
//            </div>
//            <span className="text-gray-700">Social media cross-posting to major platforms</span>
//          </li> */}
//          <li className="flex items-start">
//            <div className="mt-1 mr-3 text-red-800">
//              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//              </svg>
//            </div>
//            <span className="text-gray-700">Calendar integration for event scheduling and reminder</span>
//          </li>
//          <li className="flex items-start">
//            <div className="mt-1 mr-3 text-red-800">
//              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//              </svg>
//            </div>
//            <span className="text-gray-700">Email marketing tool connectivity</span>
//          </li>
//          <li className="flex items-start">
//            <div className="mt-1 mr-3 text-red-800">
//              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//              </svg>
//            </div>
//            <span className="text-gray-700">API access for custom integrations</span>
//          </li>
//        </ul>
//        <button className="mt-8 px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-800/50 transition">
//          Explore Integrations
//        </button>
//      </div>
//      <div className="md:w-1/2">
//        <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
//          <p className="text-gray-500 text-lg">Integration Illustration</p>
//        </div>
//      </div>
//    </div>
//  </div>
// </section>



// {/* FAQ Section */}
// <section className="py-16 bg-white text-black">
//  <div className="container mx-auto px-4">
//    <div className="text-center mb-12">
//      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
//      <p className="text-gray-600 max-w-2xl mx-auto">
//        Get answers to common questions about Xonnect's features and capabilities.
//      </p>
//    </div>

//    <div className="max-w-3xl mx-auto divide-y">
//      <div className="py-6">
//        <h3 className="text-xl font-bold mb-3">How do I start live streaming on Xonnect?</h3>
//        <p className="text-gray-600">
//          Starting a live stream is simple! Once you've created your account, go to your dashboard, click on "Go Live", set your stream title and privacy settings, and you're ready to broadcast to your audience.
//        </p>
//      </div>
//      <div className="py-6">
//        <h3 className="text-xl font-bold mb-3">What payment methods are supported for ticketing?</h3>
//        <p className="text-gray-600">
//          Xonnect supports all major credit cards, PayPal, and various regional payment methods. We're constantly expanding our payment options to ensure global accessibility.
//        </p>
//      </div>
//      <div className="py-6">
//        <h3 className="text-xl font-bold mb-3">How does the merchandise store work?</h3>
//        <p className="text-gray-600">
//          Creators can set up their own branded merchandise store with custom designs. We handle production, inventory, shipping, and customer service so creators can focus on what they do best.
//        </p>
//      </div>
//      <div className="py-6">
//        <h3 className="text-xl font-bold mb-3">Are there any fees for using Xonnect?</h3>
//        <p className="text-gray-600">
//          Xonnect offers a free tier with basic features. Premium tiers unlock additional features with competitive pricing. For transactions, we charge a small processing fee. Visit our Pricing page for detailed information.
//        </p>
//      </div>
//    </div>

//    <div className="text-center mt-10">
//      <Link href="/faq" className="text-red-600 font-medium hover:text-red-700">
//        View all FAQs
//      </Link>
//    </div>
//  </div>
// </section>