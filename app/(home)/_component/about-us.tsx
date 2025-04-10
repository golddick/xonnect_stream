// pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import { UserPlus, Award, Target, Heart, Users, Globe, Zap, CheckCircle, UserRound, User } from 'lucide-react';
import BannerHeader from './BannerHeader';
import CTA from './CTA';
import OurJourney from './OurJourney';
import Image from 'next/image';
import Team from './team';

export const AboutUS = () => {
  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <BannerHeader H1='Our Story' Header='PLATFORM ABOUT' Desc='Bridging the gap between creators and audiences through meaningful live experiences.'/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 text-black">
        {/* Who We Are Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Xonnect was founded in 2023 with a simple yet powerful vision: to revolutionize how creators connect with their audiences. In an increasingly digital world, we recognized the need for more meaningful interactions between content creators and their communities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform enables creators from all niches—gaming, education, arts, technology, and beyond—to host engaging live events, workshops, and interactive streams. We provide the tools and infrastructure that make it easy for creators to monetize their expertise while delivering exceptional value to their audiences.
              </p>
              <p className="text-lg text-gray-700">
                Today, Xonnect hosts thousands of events monthly, supporting a diverse community of creators and millions of attendees worldwide.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 w-full h-full relative">
              <Image src="/assets/woman.jpeg" alt=" Team" fill className=" rounded-lg shadow-lg absolute " />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-600">
              <div className="mb-4">
                <Target className="text-red-800 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower creators with innovative tools and platforms that enable them to share their knowledge, talents, and passion while building sustainable businesses around their content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-black">
              <div className="mb-4">
                <Globe className="text-black w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To build a world where every creator has the opportunity to connect deeply with their audience, share their unique perspectives, and thrive professionally while doing what they love.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
         <section className="mb-20">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            These principles guide everything we do as we build Creator Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="text-red-800 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Creator Empowerment</h3>
            <p className="text-gray-700">
              We build tools that give creators complete control over their content, commerce, and community while maximizing their earning potential.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-red-800 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fans Empowerment</h3>
            <p className="text-gray-700">
            Fans can participate in exclusive event around the world, ensuring they never feel left out of the experience.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-red-800 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-700">
              We continuously push boundaries to develop cutting-edge features that enhance content creation, sharing, and monetization for both creators and fans.
            </p>
          </div>
        </div>
      </section>

       {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Complete Platform</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Creator Connect offers a comprehensive suite of features designed to maximize creator expression and fan engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="mb-4">
                <Music className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Music</h3>
              <p className="text-gray-700">
                Artists release exclusive tracks, previews, and behind-the-scenes content directly to their most dedicated fans. Our high-quality streaming ensures the perfect listening experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="mb-4">
                <ShoppingBag className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creator Marketplace</h3>
              <p className="text-gray-700">
                Our integrated e-commerce platform allows creators to sell merchandise, digital downloads, and exclusive products directly to fans with seamless transactions and fulfillment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="mb-4">
                <Video className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Video Reels & Stories</h3>
              <p className="text-gray-700">
                Creators share short-form video content and temporary stories that give fans glimpses into their creative process and daily lives, fostering authentic connections.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="mb-4">
                <Calendar className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Events</h3>
              <p className="text-gray-700">
                From virtual concerts to workshops and Q&A sessions, our platform makes hosting and attending live events seamless and interactive for creators and fans alike.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="mb-4">
                <Users className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Groups</h3>
              <p className="text-gray-700">
                Dedicated spaces where fans connect with each other and coordinate meet-ups, event attendance, and collaborative initiatives around their shared interests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="mb-4">
                <MessageSquare className="text-red-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creator Journals</h3>
              <p className="text-gray-700">
                Long-form content where creators share in-depth thoughts, tutorials, and updates that engage fans on a deeper intellectual and emotional level.
              </p>
            </div>
          </div>
        </section> */}

        {/* Impact Stats Section */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Since our founding, Creator Connect has helped transform the creator economy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">15K+</p>
              <p className="text-lg font-medium">Active Creators</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">2.5M+</p>
              <p className="text-lg font-medium">Audience Members</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">40K+</p>
              <p className="text-lg font-medium">Events Hosted</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">$25M+</p>
              <p className="text-lg font-medium">Creator Earnings</p>
            </div>
          </div>
        </section> */}

        {/* Team Section */}
       <Team/>

        {/* Timeline Section */}
       <OurJourney/>

        {/* CTA Section */}
        <CTA/>
      </main>

  
    </div>
  );
}


