// // pages/index.js

// 'use client'



// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { motion } from 'framer-motion';

// export default function ComingSoon() {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [countdown, setCountdown] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Set your launch date here
//   const launchDate = new Date('June 1, 2025 00:00:00').getTime();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         return;
//       }

//       setCountdown({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000)
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

// interface Countdown {
//     days: number;
//     hours: number;
//     minutes: number;
//     seconds: number;
// }

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     // Here you would typically send the email to your backend
//     console.log('Email submitted:', email);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//     setEmail('');
// };

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.6
//       }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const countdownVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-black text-white">
//       <Head>
//         <title>Coming Soon | Your Store Name</title>
//         <meta name="description" content="Our e-commerce store is launching soon. Be the first to know when we go live!" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
//         {/* Background Animated Elements */}
//         <div className="absolute inset-0 overflow-hidden z-0">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-gradient-to-r from-red-500 to-red-700 opacity-20"
//               style={{
//                 width: Math.random() * 300 + 50,
//                 height: Math.random() * 300 + 50,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 x: [0, Math.random() * 100 - 50],
//                 y: [0, Math.random() * 100 - 50],
//               }}
//               transition={{
//                 duration: Math.random() * 20 + 10,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 text-center max-w-4xl">
//           {/* Logo */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             className="mb-8"
//           >
//             <div className="flex items-center justify-center space-x-3">
//               <motion.div
//                 className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-900 rounded-lg"
//                 whileHover={{ rotate: 180, scale: 1.1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-700 to-red-900">
//                 <span className='text-white'>X</span>ONNECT STORE
//               </h1>
//             </div>
//           </motion.div>

//           {/* Main content */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="space-y-8"
//           >
//             <motion.h2 
//               variants={fadeIn}
//               className="text-3xl md:text-5xl font-bold"
//             >
//               Something <span className="text-red-700">Amazing</span> is Coming Soon
//             </motion.h2>
            
//             <motion.p 
//               variants={fadeIn}
//               className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
//             >
//               We're working hard to bring you the best shopping experience. Our online store is under construction and will be launching soon.
//             </motion.p>

//             {/* Countdown */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={staggerContainer}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
//             >
//               {[
//                 { label: 'Days', value: countdown.days },
//                 { label: 'Hours', value: countdown.hours },
//                 { label: 'Minutes', value: countdown.minutes },
//                 { label: 'Seconds', value: countdown.seconds },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   variants={countdownVariants}
//                   className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-4 border border-gray-700"
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)" }}
//                 >
//                   <div className="text-3xl md:text-5xl font-bold text-pink-400">{item.value}</div>
//                   <div className="text-gray-400 text-sm md:text-base">{item.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Newsletter Signup */}
//             <motion.div
//               variants={fadeIn}
//               className="mt-12 max-w-md mx-auto w-full"
//             >
//               <h3 className="text-xl mb-4">Get notified when we launch</h3>
//               <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
//                 <motion.input
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   whileFocus={{ scale: 1.02 }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                 />
//                 <motion.button
//                   type="submit"
//                   className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                 >
//                   Notify Me
//                 </motion.button>
//               </form>
              
//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="mt-4 text-green-400"
//                 >
//                   Thank you! We'll notify you when we launch.
//                 </motion.div>
//               )}
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               variants={fadeIn}
//               className="flex justify-center space-x-6 mt-8"
//             >
//               {[
//                 { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
//                 { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
//                 { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors duration-300"
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="sr-only">{social.name}</span>
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d={social.icon} />
//                   </svg>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Footer */}
//           <motion.div
//             variants={fadeIn}
//             className="mt-16 text-sm text-gray-500"
//           >
//             <p>© {new Date().getFullYear()} Store Name. All rights reserved.</p>
//           </motion.div>
//         </div>

//         {/* Construction animation icon */}
//         <motion.div
//           className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <motion.div
//             className="w-16 h-16 md:w-24 md:h-24 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-full flex items-center justify-center"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//           >
//             <svg 
//               className="w-10 h-10 md:w-14 md:h-14 text-pink-500" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={1.5} 
//                 d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
//               />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }






'use client'




import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your launch date here
  const launchDate = new Date('August 1, 2025 00:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Coming Soon | xConnect Store</title>
        <meta name="description" content="xConnect Store - The marketplace where creators connect with buyers. Coming soon!" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        {/* Background Animated Elements - Minimal and Less Congested */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-600 opacity-10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 15 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-3">
            
              <h1 className="text-4xl md:text-5xl font-extrabold text-white flex items-center gap-2">
                <span className="text-red-700">X</span>ONNECT
                <motion.div
                className="w-fit px-6 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 1 }}
              >
                Store
              </motion.div>
                 {/* <span className="font-light">Store</span> */}
              </h1>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold"
            >
              Creator Marketplace <span className="text-red-700">Coming Soon</span>
            </motion.h2>
            
            <motion.div 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto space-y-6"
            >
              <p>
                xonnect Store is revolutionizing how creators and buyers interact online.
              </p>

              <div className="border-l-4 border-red-600 pl-4 text-left py-2">
                <h3 className="font-bold text-xl mb-2">What to Expect:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Creators can upload and sell custom merchandise with ease</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Shoppers can discover unique products from independent creators</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure, direct transactions between creators and buyers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Streamlined storefront creation for all types of creators</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
            >
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={countdownVariants}
                  className="bg-gray-900 rounded-xl p-4 border border-gray-800"
                  whileHover={{ scale: 1.05, border: '1px solid #dc2626' }}
                >
                  <div className="text-3xl md:text-5xl font-bold text-red-600">{item.value}</div>
                  <div className="text-gray-400 text-sm md:text-base">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              variants={fadeIn}
              className="mt-12 max-w-md mx-auto w-full"
            >
              <h3 className="text-xl mb-4">Get notified when we launch</h3>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-red-600"
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Notify Me
                </motion.button>
              </form>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-green-500"
                >
                  Thank you! We&apos;ll notify you when we launch.
                </motion.div>
              )}
            </motion.div>

            {/* Creator and Buyer CTA */}
            <motion.div
              variants={fadeIn}
              className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              <motion.div 
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.02, border: '1px solid #dc2626' }}
              >
                <h3 className="text-xl font-bold mb-3">For Creators</h3>
                <p className="text-gray-400 mb-4">Upload and sell your merchandise with full control over your brand and pricing.</p>
                {/* <motion.button
                  className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Selling
                </motion.button> */}
              </motion.div>
              
              <motion.div 
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.02, border: '1px solid #dc2626' }}
              >
                <h3 className="text-xl font-bold mb-3">For Shoppers</h3>
                <p className="text-gray-400 mb-4">Discover and purchase unique products directly from independent creators.</p>
                {/* <motion.button
                  className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Preview Products
                </motion.button> */}
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn}
              className="flex justify-center space-x-6 mt-8"
            >
              {[
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeIn}
            className="mt-16 text-sm text-gray-500"
          >
            <p>© {new Date().getFullYear()} SITHGRID . All rights reserved.</p>
          </motion.div>
        </div>

        {/* Construction icon - Simplified */}
        <motion.div
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <svg 
              className="w-8 h-8 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
