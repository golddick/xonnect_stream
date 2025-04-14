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
            <div className="w-24 h-1 bg-red-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-700">
              <div className="mb-4">
                <Target className="text-red-700 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
              Our mission is to make every event accessible — giving fans a front-row seat no matter where they are. We help creators stream their concerts and moments, invite audiences into the experience, and build meaningful, connected communities around their passion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-black">
              <div className="mb-4">
                <Globe className="text-black w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
              To build a world where every creator has the opportunity to connect deeply with their audience, share their unique perspectives, and thrive professionally while doing what they love — no matter where they or their fans may be.
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
              <UserPlus className="text-red-700 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Creator Empowerment</h3>
            <p className="text-gray-700">
            We empower creators to stream live experiences, connect with their audiences from anywhere, and build thriving communities. With full control over their content, audience access, and monetization tools, creators can focus on doing what they love — and grow sustainably while doing it.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-red-700 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fans Empowerment</h3>
            <p className="text-gray-700">
            We give fans front-row access to live events, concerts, and exclusive experiences — no matter where they are in the world. By removing physical barriers, we help fans feel seen, connected, and truly part of the moment.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-red-700 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-700">
            We push boundaries with technology that brings creators and fans closer than ever. From seamless live streaming to interactive community features, we’re redefining how experiences are shared, accessed, and monetized around the world.
            </p>
          </div>
        </div>
      </section>

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


