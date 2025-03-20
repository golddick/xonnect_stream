import React from "react"
import Team from "./team"
import Image from "next/image"

export const AboutUS = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full bg-white font-sans">
                {/* About Us Section Header */}
                <header className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
                    <Image
                        width={100}
                        height={100}
                        src="/assets/woman.jpeg"
                        alt="About ExclusiveStream"
                        className="w-full h-[400px] object-cover object-center transform scale-105 animate-pulse-slow"
                    />
            
                    <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight animate-fadeInDown">
                            About ExclusiveStream
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl animate-fadeInUp">
                            Revolutionizing how you experience live events and entertainment around the world.
                        </p>
                    </div>
                </header>

                {/* Our Story Section */}
                <section className="py-16 px-4 sm:px-8 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 animate-fadeIn">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Story</h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                From humble beginnings to becoming a leading streaming platform
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animate-fadeInLeft group relative">
                                <Image
                                    width={100}
                                    height={100}
                                    src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                    alt="Team at work"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="text-white p-4 text-lg font-semibold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                        Founded in 2018 with a simple mission
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 animate-fadeInRight">
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-600">
                                    <h3 className="text-2xl font-bold mb-3 text-red-600">Founded with Passion</h3>
                                    <p className="text-gray-600">
                                        Founded in 2018, ExclusiveStream began with a simple mission: to break down the
                                        barriers between audiences and premium entertainment. What started as a small
                                        team of tech enthusiasts and event lovers has now grown into a leading platform
                                        that serves millions of viewers worldwide.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-600">
                                    <h3 className="text-2xl font-bold mb-3 text-red-600">Growth & Expansion</h3>
                                    <p className="text-gray-600">
                                        Over the first two years, we expanded from streaming local events to partnering
                                        with major venues and production companies across North America. By 2021, we had
                                        secured exclusive rights to stream concerts, theatrical performances, and
                                        sporting events from six continents.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-600">
                                    <h3 className="text-2xl font-bold mb-3 text-red-600">Innovation at Our Core</h3>
                                    <p className="text-gray-600">
                                        Our technical team has consistently pushed the boundaries of streaming
                                        technology, developing proprietary systems for high-definition, low-latency
                                        streaming that works even in challenging network conditions. This commitment to
                                        innovation earned us the 2022 Streaming Technology Excellence Award.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <Team/>
            </div>
        </div>
    )
}
