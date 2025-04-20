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
                XONNECT was founded in 2025 with a simple goal: to bring exclusive live experiences to fans who couldn’t attend in person. We launched as a streaming platform focused on concerts, helping users enjoy performances from their favorite artists—no matter where they are in the world.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Now evolving into a full-scale pay-on-demand platform, XONNECT empowers creators across music, education, gaming, tech, and more to host live streams, connect with audiences, and earn from their content—without the need for subscriptions.
              </p>

              <p className="text-lg text-gray-700">
                While we&apos;re just getting started, our mission is clear: to redefine how creators and audiences interact—making live, premium content accessible, engaging, and rewarding for everyone involved.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 w-full h-[400px] lg:h-full relative">
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


