import Image from "next/image"
import React from "react"
import BannerHeader from "./BannerHeader"
import PricingFAQ from "../pricing/_coomponent/PricingFAQ"

export const Pricing = () => {

    const img = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    const tittle = 'Our Pricing'
    const header = 'Flexible Pricing'
    const subText = ' Pay-on-demand for viewers, monthly subscription for creators.'
   

    return (
        <div id="webcrumbs">
            <div className="w-full bg-white font-sans">
                {/* Header/Banner Section */}
                <BannerHeader img={img} title={tittle} header={header} subText={subText}/>

                {/* Pay-on-demand Model Overview */}
                <section className="py-16 px-4 sm:px-8 bg-white">
                    <div className="max-w-6xl mx-auto text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                            Flexible Pricing for Viewers and Creators
                        </h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ExclusiveStream offers a unique payment model that works for both viewers and content
                            creators
                        </p>
                    </div>
                </section>

                {/* Viewers and Creators Pricing Section */}
                <section className="py-16 px-4 sm:px-8 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12">

                            <div className="w-full md:w-1/2 animate-fadeInLeft">
                                <div className="rounded-2xl bg-white shadow-xl p-8 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex justify-center mb-8">
                                        <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-12 w-12 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-center mb-4 text-black flex flex-col">
                                        Viewers  <span  className=" text-[15px] text-muted-foreground">Pay Only for What You Watch</span>
                                    </h3>
                                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">No monthly subscriptions required</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">
                                                    Pay per event - only for what interests you
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">
                                                    Transparent pricing for each stream
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">Access to free preview content</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center mb-2">
                                           
                                                <span className="text-2xl font-bold text-red-700">$0</span>
                                            </div>
                                            <p className="text-gray-500 text-sm">Base subscription</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="w-full md:w-1/2 animate-fadeInRight">
                                <div className="rounded-2xl bg-white shadow-xl p-8 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2">
                                    <div className="mb-6">
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-bold">Rock Festival 2023</h4>
                                                <span className="text-red-600 font-bold">$24.99</span>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 flex items-start space-x-4">
                                                <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden relative">
                                                    <Image
                                                       src="/assets/woman.jpeg"
                                                       fill
                                                        className=" object-cover absolute"
                                                        alt="Event thumbnail"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Aug 15, 2023 - 19:00 UTC</p>
                                                    <div className="flex mt-2">
                                                        <button className="bg-red-600 text-white text-xs px-3 py-1 rounded-full hover:bg-red-700 transition-colors duration-300">
                                                            Purchase
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-6 text-center">How It Works for Viewers</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-red-600">1</span>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold mb-1">Browse Available Events</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Explore our catalog of upcoming exclusive streams
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-red-600">2</span>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold mb-1">Purchase Your Ticket</h4>
                                                <p className="text-gray-600 text-sm">
                                                    One-time payment for the events you want to watch
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-red-100 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="font-bold text-red-600">3</span>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold mb-1">Enjoy the Stream</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Watch live or on-demand within the available timeframe
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                            <div className="w-full md:w-1/2 animate-fadeInRight">
                                <div className="rounded-2xl bg-white shadow-xl p-8 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex justify-center mb-8">
                                        <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-12 w-12 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-center mb-4 text-black flex flex-col">
                                    Creators  <span  className=" text-[15px] text-muted-foreground"> Monthly Fee to Share Your Content</span>
                                    </h3>
                                    <div className="flex justify-center mb-6">
                                        <div className="bg-gray-50 rounded-xl px-6 py-4 inline-flex items-baseline text-black">
                                            <span className="text-4xl font-bold">N00.00</span>
                                            <span className="text-gray-500 ml-2">/month</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">
                                                    List unlimited content on the platform
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">Set your own per-view pricing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">
                                                    Detailed analytics and viewer insights
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                                                <span className="text-gray-700">Access to promotional tools</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="text-center">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
               <PricingFAQ/>
            </div>
        </div>
    )
}



