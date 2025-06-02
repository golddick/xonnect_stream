// pages/about.js
import { UserPlus, Award, Target, Heart, Users, Globe, Zap, CheckCircle, UserRound, User } from 'lucide-react';
import BannerHeader from './BannerHeader';
import CTA from './CTA';
import OurJourney from './OurJourney';
import Image from 'next/image';
import Team from './team';
import Link from 'next/link';

export const AboutUS = () => {
  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <BannerHeader H1='Our Story' Header=' ABOUT XONNECT' Desc='From global concerts to exclusive shows, xonnect brings unforgettable live experiences straight to your screen anytime, anywhere.'/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 text-black">
        {/* Who We Are Section */}
       <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold ">Who We Are</h2>

          <p className="text-lg text-gray-700 ">
            <strong><span className=' text-red-700'>x</span>onnect</strong> launched in 2025 as a premium concert streaming platform, giving fans around the world access to exclusive, live performances on demand.
          </p>

          <p className="text-lg text-gray-700 ">
            But this is just the beginning. We&apos;re building xonnect into a full scale creator ecosystem supporting live streaming, eCommerce, community interaction, virtual gifting, ticketing, storytelling, and more. Whether it&apos;s music, gaming, sports, education, or tech, creators will be able to share, engage, and monetize all in one place.
          </p>

          <p className="text-lg text-gray-700 ">
            <span className=' text-red-700'>x</span>onnect is a product of <strong>SixthGrid</strong>, the team also behind <em><Link href="https://thenews.africa" className="underline">TheNews.Africa</Link></em>, a data driven email marketing platform helping brands connect and grow through powerful campaigns.
          </p>

          <p className="text-lg text-gray-700">
            We&apos;re just getting started but our mission is bold: to redefine how creators and audiences connect through accessible, live, and interactive experiences.
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
                To make premium live content accessible to anyone, anywhere. <span className=' text-red-700'>x</span>onnect empowers creators to broadcast their events, performances, and stories directly to fans inviting them into unforgettable experiences and building real-time, meaningful communities around shared passions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-black">
              <div className="mb-4">
                <Globe className="text-black w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To create a world where every creator regardless of location or background can grow their brand, engage directly with their audience, and build a sustainable career doing what they love. We envision a borderless future for creativity, powered by technology and community.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
       <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These values shape every decision we make as we grow and scale <span className=' text-red-700'>x</span>onnect.
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
              We put creators in control giving them the tools to stream, connect, and monetize on their own terms. From music to content creation, xonnect turns passion into opportunity.
            </p>
          </div>

            {/* Fan Empowerment */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-red-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fan Access</h3>
              <p className="text-gray-700">
                We believe everyone should experience premium content anywhere, anytime. xonnect removes barriers so fans can engage in live events and exclusive moments with ease.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-red-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We build cutting edge tools that enhance both the creator and fan experience. From seamless streaming to smart monetization, innovation drives everything we do.
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


