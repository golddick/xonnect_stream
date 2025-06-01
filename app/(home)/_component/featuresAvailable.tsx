'use client'




import { useState } from 'react';
import { Smartphone, Globe, Music, Users, Video, BookOpen, Tv, Gift, ShoppingBag } from 'lucide-react';

export default function PlatformFeatures() {
  const [activeTab, setActiveTab] = useState('app');

  // Define features for each platform
  const appFeatures = [
    { icon: <Music size={20} />, name: "Exclusive Music", description: "Access premium tracks and releases from your favorite artists" },
    { icon: <Users size={20} />, name: "Community Groups", description: "Connect with other fans in dedicated interest-based spaces" },
    { icon: <Video size={20} />, name: "Video Reels", description: "Create and watch short-form video content" },
    { icon: <BookOpen size={20} />, name: "Writeups", description: "Post and read articles, reviews, and updates" },
    { icon: <Tv size={20} />, name: "Live Streaming", description: "Watch and interact with live performances and events" },
    { icon: <Gift size={20} />, name: "Virtual Gifting", description: "Send virtual gifts to creators during streams" }
  ];

  const webFeatures = [
    { icon: <Tv size={20} />, name: "Live Streaming", description: "Host and manage professional live stream events" },
    { icon: <ShoppingBag size={20} />, name: "E-commerce", description: "Sell merchandise and digital products through our storefront" }
  ];

  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover what&apos;s available on each platform and what&apos;s coming soon
          </p>
        </div>
        
        {/* Platform tabs */}
        <div className="flex max-w-md mx-auto mb-12 bg-gray-100 rounded-full p-1">
          <button 
            onClick={() => setActiveTab('app')}
            className={`flex-1 py-3 px-6 rounded-full text-center transition-all flex items-center justify-center ${
              activeTab === 'app' ? 'bg-red-700 text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Smartphone size={18} className="mr-2" />
            Mobile App
          </button>
          <button 
            onClick={() => setActiveTab('web')}
            className={`flex-1 py-3 px-6 rounded-full text-center transition-all flex items-center justify-center ${
              activeTab === 'web' ? 'bg-red-700 text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Globe size={18} className="mr-2" />
            Web <span  className=' hidden md:block'>Platform</span>
          </button>
        </div>
        
        {/* Platform content */}
        <div className=" max-w-3xl lg:container mx-auto">
          {activeTab === 'app' ? (
            <div className="relative">
              {/* Coming soon banner */}
              <div className="absolute -top-4 right-0 bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                Coming Soon
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-100 rounded-full mr-4">
                    <Smartphone className="text-red-700" size={24} />
                  </div>
                  <div>
                    {/* <h3 className="text-2xl font-bold">Mobile Application</h3> */}
                    <p className="text-gray-600">Experience <span className='text-red-700'>x</span>onnect on the go with our feature rich mobile app</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-start">
                      <div className="mr-3 p-2 bg-red-100 text-red-700 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-700">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Our mobile app is currently in development and will be launching soon. subscribe to our newsletter to be notified when it&apos;s available!
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-100 rounded-full mr-4">
                    <Globe className="text-red-700" size={24} />
                  </div>
                  <div>
                    {/* <h3 className="text-2xl font-bold">Web Platform</h3> */}
                    <p className="text-gray-600">Available now with professional creator tools</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                    Available Now
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {webFeatures.map((feature, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-start">
                      <div className="mr-3 p-2 bg-red-100 text-red-700 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      The web platform offers professional tools for creators to host streams and sell merchandise. Additional features will be available in the mobile app.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          )}
        </div>
        
        {/* Platform comparison */}
        <div className="max-w-3xl hidden md:block lg:container mx-auto mt-16">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-center">Platform Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-600">
                      <div className="flex items-center justify-center">
                        <Smartphone size={16} className="mr-2" />
                        Mobile App
                        <span className="ml-2 text-xs bg-red-100 text-red-700 py-1 px-2 rounded-full">Coming Soon</span>
                      </div>
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-600">
                      <div className="flex items-center justify-center">
                        <Globe size={16} className="mr-2" />
                        Web Platform
                        <span className="ml-2 text-xs bg-green-100 text-green-700 py-1 px-2 rounded-full">Available</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Exclusive Music</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                    <td className="text-center py-3 px-4 text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Community Groups</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                    <td className="text-center py-3 px-4 text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Video Reels</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                    <td className="text-center py-3 px-4 text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Writeups</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                    <td className="text-center py-3 px-4 text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Live Streaming</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Virtual Gifting</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                    <td className="text-center py-3 px-4 text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">E-commerce Store</td>
                    <td className="text-center py-3 px-4 text-red-600">✗</td>
                    <td className="text-center py-3 px-4 text-green-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}