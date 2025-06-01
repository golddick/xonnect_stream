// 'use client';

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
//     seconds: 0,
//   });

//   const launchDate = new Date('August 1, 2025 00:00:00').getTime();

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
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [launchDate]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setEmail('');
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900">

//       <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center space-y-12">
//         {/* Logo */}
//         <motion.h1
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-extrabold flex items-center gap-3"
//         >
//           <span className="text-red-700">X</span>ONNECT
//           <span className="bg-red-700 text-white rounded-xl px-4 py-1 text-lg">Store</span>
//         </motion.h1>

//         {/* Main Headline */}
//         <motion.h2
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-2xl md:text-4xl font-semibold"
//         >
//           xonnect Marketplace <span className="text-red-700">Coming Soon</span>
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed"
//         >
//           xConnect Store is revolutionizing how creators and buyers interact online.
//         </motion.p>

//         {/* Features */}
//         <motion.ul
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//           className="grid gap-4 md:grid-cols-2 text-left max-w-3xl"
//         >
//           {[
//             "Creators can upload and sell custom merchandise with ease",
//             "Shoppers can discover unique products from independent creators",
//             "Secure, direct transactions between creators and buyers",
//             "Streamlined storefront creation for all types of creators",
//           ].map((feature, idx) => (
//             <motion.li
//               key={idx}
//               variants={{
//                 hidden: { opacity: 0, x: -10 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//               className="flex items-start gap-3"
//             >
//               <span className="text-red-700 mt-1">✓</span>
//               <span>{feature}</span>
//             </motion.li>
//           ))}
//         </motion.ul>

//         {/* Countdown Timer */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           {[
//             { label: 'Days', value: countdown.days },
//             { label: 'Hours', value: countdown.hours },
//             { label: 'Minutes', value: countdown.minutes },
//             { label: 'Seconds', value: countdown.seconds },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-gray-100 rounded-lg px-4 py-6 shadow-sm text-center"
//             >
//               <div className="text-3xl font-bold text-red-600">{item.value}</div>
//               <div className="text-sm text-gray-500 mt-1">{item.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Email Signup */}
//         <motion.form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md mx-auto flex flex-col md:flex-row items-center gap-4 mt-4"
//         >
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//           <button
//             type="submit"
//             className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition"
//           >
//             Notify Me
//           </button>
//         </motion.form>

//         {submitted && (
//           <motion.div
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-green-600 mt-2"
//           >
//             Thank you! We&apos;ll notify you when we launch.
//           </motion.div>
//         )}

//         {/* Creator / Shopper CTA */}
//         <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mt-12">
//           {[
//             {
//               title: "For Creators",
//               desc: "Upload and sell your merchandise with full control over your brand and pricing.",
//             },
//             {
//               title: "For Shoppers",
//               desc: "Discover and purchase unique products directly from independent creators.",
//             },
//           ].map((block, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-left shadow-sm"
//             >
//               <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
//               <p className="text-gray-600">{block.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }






'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [countdown, setCountdown] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [selectedCampaignName, setSelectedCampaignName] = useState('');

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
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://thenews.africa/api/category', {
          headers: {
            'TheNews-api-key': process.env.NEXT_PUBLIC_TheNews_API_KEY!,
          },
        });

        setCategories(res.data.data);
        if (res.data.data.length > 0) {
          const second = res.data.data[1];
          setSelectedCategory(second._id);
          setSelectedCategoryName(second.name);
          setSelectedCampaignName(second.campaigns?.[0]?.name || 'Xonnect Store Landing Page');
        }
        
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setSubmitted(false);

    try {
      const payload = {
        email,
        source: `${process.env.NEXT_PUBLIC_SOURCE}/category?${selectedCategoryName}`,
        status: 'Subscribed',
        categoryId: selectedCategory,
        metadata: {
          campaign: selectedCampaignName || 'Xonnect Store Landing Page',
          pageUrl: `${process.env.NEXT_PUBLIC_SOURCE}/${selectedCategoryName}`,
          formId: 'Xonnect Coming Soon Form',
        },
      };

      const res = await axios.post(
        'https://thenews.africa/api/subscribe',
        payload,
        {
          headers: {
            'TheNews-api-key': process.env.NEXT_PUBLIC_TheNews_API_KEY!,
          },
        }
      );

      if (res.status === 200) {
        setSubmitted(true);
        toast.success('Thank you! We\'ll notify you when we launch.')
        setMessage('Thank you! We\'ll notify you when we launch.');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      setMessage(err.response?.data?.error || 'Failed to subscribe. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center space-y-12">
        {/* Logo */}
        <motion.h1 className="text-4xl md:text-5xl font-extrabold flex items-center ">
          <span className="text-red-700">X</span>ONNECT
          <span className="bg-red-700 text-white rounded-xl px-4 py-1 text-lg ml-2">Store</span>
        </motion.h1>

        {/* Headline */}
        <motion.h2 className="text-2xl md:text-4xl font-semibold">
        <span className="text-red-700">Coming Soon</span>
        </motion.h2>

        {/* Description */}
        <motion.p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
          xonnect Store is revolutionizing how creators and buyers interact online.
        </motion.p>

        {/* Countdown */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
            const value = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds][i];
            return (
              <div key={i} className="bg-gray-100 rounded-lg px-4 py-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-red-600">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Email Signup */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col md:flex-row items-center gap-4 mt-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition"
          >
            {loading ? 'Subscribing...' : 'Notify Me'}
          </button>
        </motion.form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-2 text-sm ${
              submitted ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </motion.p>
        )}

        {/* CTAs */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mt-12">
          {[
            {
              title: 'For Creators',
              desc: 'Upload and sell your merchandise with full control over your brand and pricing.',
            },
            {
              title: 'For Shoppers',
              desc: 'Discover and purchase unique products directly from independent creators.',
            },
          ].map((block, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-left shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
              <p className="text-gray-600">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
