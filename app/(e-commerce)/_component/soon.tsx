
// 'use client';


// import Head from 'next/head';
// import Link from 'next/link';
// import { useState } from 'react';
// import { ShoppingBag, Heart, Search, User, ShoppingCart } from 'lucide-react';

// export default function Soon() {
//   const [featuredCreators] = useState([
//     {
//       id: 1,
//       name: 'Creator Name',
//       image: '/api/placeholder/300/300',
//       followers: '2.4M',
//     },
//     {
//       id: 2,
//       name: 'Creator Name',
//       image: '/api/placeholder/300/300',
//       followers: '1.8M',
//     },
//     {
//       id: 3,
//       name: 'Creator Name',
//       image: '/api/placeholder/300/300',
//       followers: '5.2M',
//     },
//   ]);

//   const [featuredProducts] = useState([
//     {
//       id: 1,
//       name: 'Limited Edition T-Shirt',
//       image: '/api/placeholder/400/400',
//       price: 29.99,
//       creator: 'Creator Name',
//       exclusive: true,
//     },
//     {
//       id: 2,
//       name: 'Signature Hoodie',
//       image: '/api/placeholder/400/400',
//       price: 59.99,
//       creator: 'Creator Name',
//       exclusive: false,
//     },
//     {
//       id: 3,
//       name: 'Coffee Mug',
//       image: '/api/placeholder/400/400',
//       price: 19.99,
//       creator: 'Creator Name',
//       exclusive: false,
//     },
//     {
//       id: 4,
//       name: 'Limited Edition Poster',
//       image: '/api/placeholder/400/400',
//       price: 24.99,
//       creator: 'Creator Name',
//       exclusive: true,
//     },
//   ]);

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Xonnect | Creator Merchandise Store</title>
//         <meta name="description" content="Purchase authentic merchandise from your favorite Xonnect creators" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Header */}
//       <header className="bg-black text-white sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center">
//             <Link href="/">
//               <span className="text-2xl font-bold cursor-pointer">
//                 X<span className="text-red-600">onnect</span>
//                 <span className="ml-2 text-sm bg-red-600 px-2 py-1 rounded">STORE</span>
//               </span>
//             </Link>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <Link href="/categories">
//               <span className="hover:text-red-500 transition duration-200 cursor-pointer">Categories</span>
//             </Link>
//             <Link href="/trending">
//               <span className="hover:text-red-500 transition duration-200 cursor-pointer">Trending</span>
//             </Link>
//             <Link href="/creators">
//               <span className="hover:text-red-500 transition duration-200 cursor-pointer">Creators</span>
//             </Link>
//             <Link href="/exclusive">
//               <span className="hover:text-red-500 transition duration-200 cursor-pointer">Exclusive</span>
//             </Link>
//           </nav>

//           {/* User Actions */}
//           <div className="flex items-center space-x-5">
//             <button className="relative hover:text-red-500">
//               <Search size={20} />
//             </button>
//             <button className="relative hover:text-red-500">
//               <Heart size={20} />
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
//             </button>
//             <button className="relative hover:text-red-500">
//               <ShoppingCart size={20} />
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
//             </button>
//             <button className="hover:text-red-500">
//               <User size={20} />
//             </button>
//           </div>
//         </div>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="bg-black text-white py-16">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <h1 className="text-4xl font-bold mb-4">
//                   Shop <span className="text-red-600">Authentic</span> Creator Merchandise
//                 </h1>
//                 <p className="text-gray-300 mb-8">
//                   Purchase authentic merchandise sourced directly from manufacturers and delivered to your address.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded font-medium transition duration-200">
//                     Explore Shop
//                   </button>
//                   <button className="bg-transparent hover:bg-white hover:text-black border border-white text-white py-3 px-6 rounded font-medium transition duration-200">
//                     Browse Creators
//                   </button>
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <div className="relative">
//                   <img
//                     src="/api/placeholder/600/400"
//                     alt="Xonnect merchandise showcase"
//                     className="rounded-lg shadow-xl"
//                   />
//                   <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg font-bold">
//                     EXCLUSIVE
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-12 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//               {[
//                 'Creator-approved merchandise',
//                 'Secure payment processing',
//                 'Global shipping options',
//                 'Exclusive limited-edition items',
//                 'Wishlist and favorites features'
//               ].map((feature, index) => (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//                   <div className="bg-red-100 p-3 rounded-full mb-4">
//                     <ShoppingBag className="text-red-600" size={24} />
//                   </div>
//                   <p className="text-gray-800 font-medium">{feature}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Creators */}
//         <section className="py-12">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold mb-8">Featured Creators</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {featuredCreators.map(creator => (
//                 <div key={creator.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
//                   <div className="relative">
//                     <img src={creator.image} alt={creator.name} className="w-full h-64 object-cover" />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//                       <h3 className="text-white text-xl font-bold">{creator.name}</h3>
//                       <p className="text-gray-300">{creator.followers} followers</p>
//                     </div>
//                   </div>
//                   <div className="p-4 flex justify-between items-center">
//                     <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm transition duration-200">
//                       View Collection
//                     </button>
//                     <button className="text-gray-500 hover:text-red-600 transition duration-200">
//                       <Heart size={20} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="py-12 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-3xl font-bold">Featured Products</h2>
//               <Link href="/products">
//                 <span className="text-red-600 hover:text-red-700 font-medium cursor-pointer">View All</span>
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//               {featuredProducts.map(product => (
//                 <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
//                   <div className="relative">
//                     <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//                     {product.exclusive && (
//                       <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 m-2 rounded">
//                         LIMITED EDITION
//                       </div>
//                     )}
//                     <button className="absolute bottom-0 right-0 m-2 bg-white rounded-full p-2 shadow-md hover:bg-red-600 hover:text-white transition duration-200">
//                       <Heart size={16} />
//                     </button>
//                   </div>
//                   <div className="p-4">
//                     <p className="text-gray-500 text-sm mb-1">By {product.creator}</p>
//                     <h3 className="font-medium mb-2">{product.name}</h3>
//                     <div className="flex justify-between items-center">
//                       <span className="text-black font-bold">${product.price}</span>
//                       <button className="bg-black hover:bg-red-600 text-white text-sm py-1 px-3 rounded transition duration-200">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="py-16 bg-black text-white">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold mb-4">Become a Creator</h2>
//             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join Xonnect's marketplace and sell your merchandise directly to your fans. 
//               No middlemen, full creative control, and global reach.
//             </p>
//             <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded font-medium transition duration-200">
//               Apply Now
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}

//     </div>
//   );
// }




'use client'



import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function ComingSoon() {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // State for email input
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  
  // Set launch date (30 days from now)
  const calculateTimeLeft = () => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const difference = launchDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }
  };
  
  // Update countdown every second
  useEffect(() => {
    calculateTimeLeft();
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  // Handle form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsInvalidEmail(true);
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setIsInvalidEmail(false);
    setEmail('');
    
    // Reset submission message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Head>
        <title>Coming Soon | Xonnect Store</title>
        <meta name="description" content="Xonnect Store - Launching Soon! Authentic creator merchandise coming to your doorstep." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Animated background */}
      <div className="fixed top-0 left-0 w-full h-full">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black to-red-900 opacity-80"></div> */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-600"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            X<span className="text-red-600">onnect</span>
            <span className="ml-2 text-lg md:text-xl bg-red-600 px-3 py-1 rounded">STORE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            The ultimate marketplace for authentic creator merchandise is coming soon.
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold text-white">{item.value}</span>
              </div>
              <span className="mt-2 text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12 w-full max-w-4xl">
          {[
            'Creator-approved merchandise',
            'Secure payment processing',
            'Global shipping options',
            'Exclusive limited-edition items',
            'Wishlist and favorites features'
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-5 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center text-center">
              <div className="bg-red-600 bg-opacity-20 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <p className="text-sm text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
        
        {/* Signup Form */}
        <div className="w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Get notified when we launch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-grow px-4 py-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border ${
                isInvalidEmail ? 'border-red-500' : 'border-gray-700'
              } text-white placeholder-gray-400 focus:outline-none focus:border-red-500`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition duration-200"
            >
              Notify Me
            </button>
          </form>
          
          {isInvalidEmail && (
            <p className="mt-2 text-red-500 text-sm">Please enter a valid email address.</p>
          )}
          
          {isSubmitted && (
            <p className="mt-2 text-green-400 text-sm">Thanks for subscribing! We&apos;ll notify you when we launch.</p>
          )}
          
          <p className="mt-4 text-gray-400 text-sm text-center">
            We&apos;ll never share your email with anyone else.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {['facebook', 'twitter', 'instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-400 hover:text-red-500 transition duration-200"
            >
              <span className="sr-only">{social}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {social === 'facebook' ? (
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                ) : social === 'twitter' ? (
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                ) : (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </>
                )}
              </svg>
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">© 2025 Xonnect, Inc. All rights reserved.</p>
      </footer>
      

    </div>
  );
}