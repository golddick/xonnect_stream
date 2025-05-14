'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import axios from 'axios'

const NewsLetter = () => {
    const [value, setValue] = useState('')

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        await axios.post("https://denews-xi.vercel.app/api/subscribe", {
            apiKey: process.env.NEXT_PUBLIC_DeNews_API_KEY,
        }).then((res) => {
            console.log(res)
        })
        
    }

  return (
    <section className="py-16 px-8 bg-white text-black">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
                        <p className="mb-8 text-gray-600">
                            Get updates on new releases, exclusive offers, and personalized recommendations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 rounded-md border border-gray-300 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                            />
                            <Button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-500 transition duration-300">
                                Subscribe
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </section>
  )
}

export default NewsLetter






// 'use client'

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'sonner'

// const NewsLetter = () => {
//   const [value, setValue] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState('')

//   const [categories, setCategories] = useState([])
//   const [selectedCategory, setSelectedCategory] = useState('')
//   const [ selectedCategoryName, setSelectedCategoryName] = useState('')
//   const [selectedCampaignName, setSelectedCampaignName] = useState('')
//   const [catloading, setCatLoading] = useState(false)
//   const [catmessage, setCatMessage] = useState('')

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/category', {
//           headers: {
//             'TheNews-api-key': process.env.NEXT_PUBLIC_TheNews_API_KEY!,
//           },
//         })

//         setCategories(res.data.data)
//         if (res.data.data.length > 0) {
//           setSelectedCategory(res.data.data[0]._id)
//           setSelectedCategoryName(res.data.data[0].name)
//           setSelectedCampaignName(res.data.data[0].campaigns[0].name)
//         }
//       } catch (err) {
//         console.error('Error fetching categories:', err)
//         toast.error('Failed to load categories.')
//       }
//     }

//     fetchCategories()
//   }, [])

//   console.log(categories, 'categories')
//   console.log(selectedCategory, 'selectedCategory')

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
  
//     try {
//       const payload = {
//         email:value,
//         source: `${process.env.NEXT_PUBLIC_SOURCE}/category?${selectedCategoryName}`,
//         status: "Subscribed",
//         categoryId: selectedCategory,
//         metadata: {
//           campaign: selectedCampaignName || "Xonnect website landing page",
//           pageUrl: `${process.env.NEXT_PUBLIC_SOURCE}/${selectedCategoryName}`,
//           formId: "TheNews website general sub page",
//         },
//       };

  
//       const res = await axios.post(
//         "http://localhost:3000/api/subscribe",
//         payload,
//         {
//           headers: {
//             "TheNews-api-key": process.env.NEXT_PUBLIC_TheNews_API_KEY!, // API key in header
//           },
//         }
//       );
  
//       if (res.status === 200) {
//         setMessage("✅ Successfully subscribed!");
//         toast.success("Successfully subscribed!");
//         setValue(''); // Reset email input field
//       } else {
//         toast.error("⚠️ Something went wrong. Please try again.");
//       }
//     } catch (err: any) {
//       const customMessage =
//         err.response?.data?.error || "❌ Failed to subscribe. Please try again later.";
//       setMessage(customMessage);
//       toast.error(customMessage);
//       console.error("Subscription error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };
  
  
  
//   return (
//     <section className="py-16 px-8 bg-white text-black">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
//         <p className="mb-8 text-gray-600">
//           Get updates on new releases, exclusive offers, and personalized recommendations.
//         </p>
//         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Input
//             type="email"
//             required
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             placeholder="Your email address"
//             className="px-4 py-3 bg-white rounded-md border border-black w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
//           />
//           <Button
//             type="submit"
//             disabled={loading}
//             className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-500 transition duration-300"
//           >
//             {loading ? "Subscribing..." : "Subscribe"}
//           </Button>
//         </form>
//         {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
//         <p className="mt-4 text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
//       </div>
//     </section>
//   )
// }

// export default NewsLetter
