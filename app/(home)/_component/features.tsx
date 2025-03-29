import React from 'react'
import FeatureCard from '../features/_component/FeatureCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden ">
                    <div className="text-center mb-12 animate-fadeInUp">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-black">Why Choose XONNECT?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our platform offers a unique streaming experience with premium features designed to enhance
                            your entertainment journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <FeatureCard
                    svg={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                        />
                        </svg>
                    }
                    title='HD Streaming'
                    description='Experience crystal-clear video quality for all your favorite events and shows.'
                    />
                       
                    <FeatureCard
                    svg={
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                    }
                    title='Multi-View Experience'
                    description=' Choose your perspective with multiple camera angles during live events.
                                Experience concerts like never before.'
                    />


                    <FeatureCard
                    svg={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
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
                    }
                    title='On-Demand Payments'
                    description='  Pay only for what you want to watch without subscription commitments. Our
                                        flexible payment system gives you complete control.'
                    />
                       

                        
                    </div>

                    <div className="text-center mt-12 animate-out">

                                <Link href={'/features'}>
                                    <Button className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30 font-bold text-lg">
                                        Explore All Features
                                    </Button>
                                </Link>
                                </div>
                </section>
  )
}

export default Features
