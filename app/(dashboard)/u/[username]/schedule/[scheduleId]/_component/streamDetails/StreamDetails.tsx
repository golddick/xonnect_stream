import { Button } from '@/components/ui/button'
import { Schedule } from '@prisma/client';
import React from 'react'

interface Props {
 
  data: Schedule;
}


const StreamDetails = ({data}:Props) => {

    const isVisible = true

  return (
    // <div className='w-full  '>
    //     <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 relative px-4 '>

    //         <div className='flex flex-col space-y-3 w-full shadow-[gold] shadow-md p-4 rounded-lg'>

           

    //         <ul>
    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Title:</span> <i  className=' text-[15px] '> {data.title}</i>
    //             </li>
    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Address:</span>
    //                 <i  className=' text-[15px] '> {data.address}</i>
    //             </li>
    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Price:</span>
    //                 {
    //                     data.isFree === false ? (
    //                         <i  className=' text-[15px] '>N{data.amount}</i>
    //                     ):
    //                     (
    //                         <i  className=' text-[15px] '>Free</i>
    //                     )
    //                 }
    //             </li>
    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Description:</span> <i  className=' text-[15px] '>{data.description}</i>
    //             </li>
    //         </ul>
    //         </div>

    //         <div className='flex flex-col space-y-3 w-full shadow-[red] shadow-md p-4 rounded-lg'>
    //         <ul>

    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Organizer:</span> <i  className=' text-[15px] '> {data.organizers}</i>
    //             </li>

    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Organizer Email:</span> <i  className=' text-[15px] '>{data.orgEmail}</i>
    //             </li>

    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Artists:</span> <i  className=' text-[15px] '>{data.artists}</i>
    //             </li>
                
                

    //             <li>
    //                 <span className=' text-neutral-600 font-bold'>Date & Time:</span> <i className='text-[15px]'>{data.eventDateTime.toLocaleString()}</i>
    //             </li>

    //         </ul>
    //         </div>

    //     </div>

      
    // </div>
    <>
     {/* <section className="py-16 px-4 sm:px-8 bg-black">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="w-full md:w-2/3">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Stream Details</h2>
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full p-3 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-700 mb-1">Date & Time</h3>
                                                <p className="text-gray-600">{data.eventDateTime.toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full p-3 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-700 mb-1">Address</h3>
                                                <p className="text-gray-600">{data.address}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full p-3 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-700 mb-1">Organizer</h3>
                                                <p className="text-gray-600">{data.organizers}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full p-3 mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-700 mb-1">Price</h3>
                                                <p className="text-gray-600">
                                                {
                                                  data.isFree === false ? (
                                                            <i  className=' text-[15px] '>N{data.amount}</i>
                                                        ):
                                                        (
                                                            <i  className=' text-[15px] '>Free</i>
                                                        )
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="font-bold text-xl mb-4">Description</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {data.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30 flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>Purchase ($24.99)</span>
                                        </button>
                                        <button className="bg-transparent border border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                            </svg>
                                            <span>Add to Wishlist</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/3">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white" >Artiste Lineup</h2>
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <ul className="space-y-4">
                                        <li className="border-b border-gray-200 pb-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-bold">Stone Revolution</h3>
                                                    <p className="text-gray-600 text-sm">Opening Act - 19:00</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-red-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="border-b border-gray-200 pb-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-bold">Midnight Riders</h3>
                                                    <p className="text-gray-600 text-sm">Main Act - 20:30</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-red-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="border-b border-gray-200 pb-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-bold">Electric Pulse</h3>
                                                    <p className="text-gray-600 text-sm">Feature Act - 22:00</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-red-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-bold">The Echoes</h3>
                                                    <p className="text-gray-600 text-sm">Closing Act - 23:30</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-red-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h3 className="font-bold mb-4">Special Features</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Backstage interviews
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Q&A with artists
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Exclusive acoustic sets
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Multi-angle camera views
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


    
        <section className="w-full relative isolate">
            {/* Blue and Gold Background Elements */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                <div
                    style={{
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-600 to-gold opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 relative px-4">
                {/* First Card  */}
                <div className="flex flex-col space-y-3 w-full shadow-red-600 p-4 rounded-lg bg-black text-white backdrop-blur-sm border border-red-950">
                    <ul className="space-y-3">
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Title:</span> 
                            <span className="text-[15px] ml-2">{data.title}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Address:</span>
                            <span className="text-[15px] ml-2">{data.address}</span>
                        </li>
                        
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Price:</span>
                            {data.isFree === false ? (
                                <span className="text-[15px] ml-2">N{data.amount}</span>
                            ) : (
                                <span className="text-[15px] ml-2">Free</span>
                            )}
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold">Description:</span> 
                            <span className="text-[15px] ml-2">{data.description}</span>
                        </li>
                    </ul>
                </div>

                {/* Second Card  */}
                <div className="flex flex-col space-y-3 w-full shadow-red-950 p-4 rounded-lg bg-black text-white backdrop-blur-sm border border-red-500/20">
                    <ul className="space-y-3">
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Organizer:</span> 
                            <span className="text-[15px] ml-2">{data.organizers}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Organizer Email:</span> 
                            <span className="text-[15px] ml-2">{data.orgEmail}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Artists:</span> 
                            <span className="text-[15px] ml-2">{data.artists}</span>
                        </li>
                        <li className="flex items-baseline">
                            <span className="text-neutral-600 font-bold ">Date & Time:</span> 
                            <span className="text-[15px] ml-2">{data.eventDateTime.toLocaleString()}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Additional background element at bottom */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                <div
                    style={{
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-black to-red-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
        </section>

    </>
  )
}

export default StreamDetails