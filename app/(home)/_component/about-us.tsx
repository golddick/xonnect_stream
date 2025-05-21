// pages/about.js
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

            <p className="text-lg text-gray-700 mb-6">
              XONNECT was founded in 2025 with a simple goal: to bring exclusive live experiences to fans who couldn’t attend in person. We launched as a streaming platform focused on concerts, helping users enjoy performances from their favorite artists—no matter where they are in the world.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Now evolving into a full-scale pay-on-demand platform, XONNECT empowers creators across music, education, gaming, tech, and more to host live streams, connect with audiences, and earn from their content—without the need for subscriptions.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              XONNECT is a product of <strong>SixthGrid</strong>, the team also behind <em>TheNews.Africa</em>—an innovative email marketing platform designed to help African brands engage and grow their audiences with powerful, data-driven campaigns.
            </p>

            <p className="text-lg text-gray-700">
              While we&apos;re just getting started, our mission is clear: to redefine how creators and audiences interact—making live, premium content accessible, engaging, and rewarding for everyone involved.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 w-full h-[400px] lg:h-full relative">
            <Image src="/assets/xc.jpg" alt="Team" fill className="rounded-lg shadow-lg absolute" />
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
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-700">
              <div className="mb-4">
                <Target className="text-red-700 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To make premium live content accessible to anyone, anywhere. XONNECT empowers creators to broadcast their events, performances, and stories directly to fans—inviting them into unforgettable experiences and building real-time, meaningful communities around shared passions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-black">
              <div className="mb-4">
                <Globe className="text-black w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To create a world where every creator—regardless of location or background—can grow their brand, engage directly with their audience, and build a sustainable career doing what they love. We envision a borderless future for creativity, powered by technology and community.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
         <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do as we build and scale XONNECT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Creator Empowerment */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="text-red-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creator Empowerment</h3>
              <p className="text-gray-700">
                We give creators full control over how they share, earn, and grow. From live streaming to direct fan engagement, XONNECT provides the tools to turn passion into sustainable income.
              </p>
            </div>

            {/* Fan Empowerment */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-red-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fan Empowerment</h3>
              <p className="text-gray-700">
                We make premium experiences accessible to everyone. Fans can join live concerts, interviews, and events from anywhere — no barriers, just connection.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-red-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We build next-gen tech that redefines live content. From smooth streaming to smart monetization and interactive tools — we keep creators and fans at the center of it all.
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


