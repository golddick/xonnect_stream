

// 'use client'

// import Image from 'next/image'
// import React from 'react'
// import Marquee from "react-fast-marquee"

// const reviews = [
//   {
//     name: "Daniel Kim",
//     image: "/assets/xsw.png",
//     message: "Absolutely love the on-demand content. So many amazing creators to support and enjoy!"
//   },
//   {
//     name: "Maria Lopez",
//     image: "/assets/xsb.png",
//     message: "Xonnect is a game-changer. I can catch my favorite artists live, and the quality is top-tier."
//   },
//   {
//     name: "Jake Thompson",
//      image: "/assets/xsb.png",
//     message: "Super smooth experience, and I only pay for what I actually watch. Love that!"
//   },
//    {
//     name: "Dotunn BK",
//     image: "/assets/xsb.png",
//     message: "The level of performance streaming here is unmatched. You feel like you're in the front row!"
//   },
//   {
//     name: "Alex Rivera",
//     image: "/assets/xsb.png",
//     message: "Finally, a platform that puts creators first. The support and flexibility are amazing!"
//   },
// ]

// const Rating = () => {
//   return (
//     <section className="bg-gray-50 py-24 text-black">
//       <div className="container mx-auto px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">What Our Viewers Say</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Join thousands of satisfied viewers who enjoy premium content on <span className='text-red-700'>x</span>onnect.
//           </p>
//         </div>

//         <Marquee gradient={false} speed={50} pauseOnHover className="w-full grid grid-cols-1 md:grid-cols-3 justify-around gap-6 py-2">
//           {reviews.map((review, index) => (

           
//                  <div key={index}  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-[350px] mx-auto ml-6">
//                       <div className="flex items-center mb-4">
//                           <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
//                               <div className=' relative w-[40px] h-[40px] rounded-full overflow-hidden'>
//                                 <Image src={review.image} alt='img'  fill className=' absolute object-cover'/>
//                               </div>
//                           </div>
//                           <div>
//                               <h4 className="font-bold">{review.name}</h4>
                             
//                           </div>
//                       </div>
//                       <p className="text-gray-600">
//                       &quot;{review.message}&quot;
//                       </p>
//                   </div>

//           ))}
//         </Marquee>
//       </div>
//     </section>
//   )
// }

// export default Rating








'use client'

import { getApprovedReviews } from '@/lib/getApprovedReviews';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee"

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.18 3.63c.3.921-.755 1.688-1.538 1.118l-3.084-2.24a1 1 0 00-1.175 0l-3.084 2.24c-.783.57-1.838-.197-1.538-1.118l1.18-3.63a1 1 0 00-.364-1.118L2.33 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.18-3.63z" />
        </svg>
      ))}
    </div>
  );
};

const Rating = () => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getApprovedReviews();
      setReviews(data);
    };
    fetch();
  }, []);

  return (
    <>
    
    {reviews.length >0 && ( 

        <section className="bg-gray-50 py-24 text-black">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Viewers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied viewers who enjoy premium content on <span className='text-red-700'>x</span>onnect.
          </p>
        </div>

          <Marquee gradient={false} speed={50} pauseOnHover className="w-full gap-6 py-2">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-[350px] mx-auto ml-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <div className='relative w-[40px] h-[40px] rounded-full overflow-hidden'>
                      <Image
                        src={review.user.imageUrl || '/default-avatar.png'}
                        alt={review.user.username || 'user'}
                        fill
                        className='absolute object-cover'
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{review.user.username}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-600">&quot;{review.comment}&quot;</p>
              </div>
            ))}
          </Marquee>
      </div>
    </section>


    )}

 

    </>
  );
};

export default Rating;
