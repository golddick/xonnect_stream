import React from 'react'

const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden ">
                    <div className="text-center mb-12 animate-fadeInUp">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Why Choose ExclusiveStream?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our platform offers a unique streaming experience with premium features designed to enhance
                            your entertainment journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-3 hover:border-red-200">
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
                            <h3 className="text-xl font-bold mb-2">HD Streaming</h3>
                            <p className="text-gray-600">
                                Experience crystal-clear video quality for all your favorite events and shows.
                            </p>
                            <div className="mt-4 w-1/3 h-1 bg-red-600 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-3 hover:border-red-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Multi-Device Access</h3>
                            <p className="text-gray-600">
                                Watch your favorite content on any device, anywhere, anytime.
                            </p>
                            <div className="mt-4 w-1/3 h-1 bg-red-600 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-3 hover:border-red-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-slow"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
                            <p className="text-gray-600">
                                Access premium content that you won&apos;t find on any other streaming platform.
                            </p>
                            <div className="mt-4 w-1/3 h-1 bg-red-600 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        </div>
                    </div>
                </section>
  )
}

export default Features
