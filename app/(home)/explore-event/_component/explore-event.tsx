import Image from "next/image"
import React from "react"

export const EventExplore = () => {
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
                            Upcoming Events
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl animate-fadeInUp">
                            Discover and join the hottest live events streaming on ExclusiveStream
                        </p>
                    </div>
                </header>

                {/* Event Filter Section */}
                <section className="py-8 px-4 sm:px-8 bg-white sticky top-0 z-30 shadow-md">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex space-x-2">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                                    All Events
                                </button>
                                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                                    Live Now
                                </button>
                                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                                    Upcoming
                                </button>
                                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                                    Past Events
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    className="bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 w-full"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Events Section */}
                <section className="py-12 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-red-900 text-white overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="flex-shrink-0 h-4 w-4 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                            <h2 className="text-3xl font-bold">Live Now</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-red-500/30">
                                <div className="relative">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                        alt="Global Techno Concert"
                                        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-1 animate-pulse">
                                        <span className="h-2 w-2 bg-white rounded-full inline-block"></span>
                                        <span>LIVE</span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                                        14,382 watching
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">Global Techno Concert</h3>
                                        <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
                                            Join Now
                                        </button>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Experience the best electronic music with top DJs from around the world in this
                                        24-hour non-stop music festival.
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
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
                                            <span>Started 3 hours ago</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span>Virtual Event</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-red-500/30">
                                <div className="relative">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                        alt="Broadway Tonight Show"
                                        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-1 animate-pulse">
                                        <span className="h-2 w-2 bg-white rounded-full inline-block"></span>
                                        <span>LIVE</span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                                        8,791 watching
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">Broadway Tonight Show</h3>
                                        <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
                                            Join Now
                                        </button>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        The exclusive streaming of the award-winning musical direct from New York&apos;s
                                        theater district to your home.
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
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
                                            <span>Started 45 minutes ago</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span>New York, NY</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="py-16 px-4 sm:px-8 bg-white text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 animate-fadeIn">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Upcoming Events</h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Secure your spot for these exclusive upcoming streams before tickets sell out
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Event Card 1 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 animate-fadeInUp border border-gray-200">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Rock Festival 2023"
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <button className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                                                Get Tickets
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        IN 3 DAYS
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
                                        Rock Festival 2023
                                    </h3>
                                    <div className="flex items-center mb-3 text-sm text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2"
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
                                        <span>Aug 15, 2023 - 19:00 UTC</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        The biggest rock bands gather for an exclusive 3-day festival that you can
                                        stream in 4K quality.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-bold">$24.99</span>
                                        <div className="flex items-center">
                                            <span className="text-xs mr-2 text-gray-500">3,291 going</span>
                                            <div className="flex -space-x-2">
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-red-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-blue-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-green-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 animate-fadeInUp delay-100 border border-gray-200">
                                <div className="relative h-48 overflow-hidden">
                                        <Image
                                        width={100}
                                        height={100}
                                        src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Jazz Night Special"
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <button className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                                                Get Tickets
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        IN 1 WEEK
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
                                        Jazz Night Special
                                    </h3>
                                    <div className="flex items-center mb-3 text-sm text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2"
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
                                        <span>Aug 20, 2023 - 20:30 UTC</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        An intimate evening with legendary jazz musicians performing their greatest hits
                                        and new compositions.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-bold">$19.99</span>
                                        <div className="flex items-center">
                                            <span className="text-xs mr-2 text-gray-500">1,845 going</span>
                                            <div className="flex -space-x-2">
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-purple-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-yellow-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-pink-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 3 */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 animate-fadeInUp delay-200 border border-gray-200">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Virtual Gaming Championship"
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <button className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                                                Get Tickets
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        IN 2 WEEKS
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
                                        Virtual Gaming Championship
                                    </h3>
                                    <div className="flex items-center mb-3 text-sm text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2"
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
                                        <span>Aug 28, 2023 - 16:00 UTC</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Watch the best gamers in the world compete for the grand prize in this
                                        multi-genre tournament.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-bold">$14.99</span>
                                        <div className="flex items-center">
                                            <span className="text-xs mr-2 text-gray-500">5,782 going</span>
                                            <div className="flex -space-x-2">
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-indigo-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-teal-500"></div>
                                                <div className="h-6 w-6 rounded-full border-2 border-white bg-orange-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/20">
                                View All Upcoming Events
                            </button>
                        </div>
                    </div>
                </section>

                {/* Past Events Section */}
                <section className="py-16 px-4 sm:px-8 bg-gray-50 text-black overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 animate-fadeIn">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Past Events</h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}