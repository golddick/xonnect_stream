import React from 'react'

const VisionMission = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 animate-fadeIn">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-black">Our Vision & Mission</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Guiding principles that drive everything we do at ExclusiveStream.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-gradient-to-br from-red-800/90 to-red-900 text-white p-8 rounded-xl shadow-lg transform hover:-translate-y-3 transition-all duration-500 animate-fadeInLeft hover:shadow-red-500/30 hover:shadow-xl">
                                <div className="border-2 border-white/20 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group">
                                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="flex items-center mb-6 relative">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12 mr-4 animate-pulse-slow"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <h3 className="text-3xl font-bold">Our Vision</h3>
                                    </div>
                                    <p className="text-white/90 text-lg leading-relaxed mb-6 relative">
                                    To become the world’s leading platform for live streaming, setting new standards for quality, accessibility, and meaningful connections across music, comedy, sports, and beyond. 
                                    We envision a future where anyone, regardless of location or circumstance, can experience the magic of live entertainment in all its forms, bringing fans and performers closer together like never before.
                                    </p>
                                    <p className="text-white/90 text-lg leading-relaxed mt-auto relative">
                                        By 2027, we aim to be the premier destination for exclusive content across
                                        entertainment, education, sports, and cultural experiences, serving over 2
                                        million viewers worldwide.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg transform hover:-translate-y-3 transition-all duration-500 animate-fadeInRight hover:shadow-gray-500/30 hover:shadow-xl">
                                <div className="border-2 border-white/20 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group">
                                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="flex items-center mb-6 relative">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12 mr-4 animate-pulse-slow"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                            />
                                        </svg>
                                        <h3 className="text-3xl font-bold">Our Mission</h3>
                                    </div>
                                    <p className="text-white/90 text-lg leading-relaxed mb-6 relative">
                                        To democratize access to extraordinary experiences through innovative streaming
                                        technology. We&apos;re committed to:
                                    </p>
                                    <ul className="text-white/90 text-lg space-y-4 mb-6 relative">
                                        <li className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-2 flex-shrink-0 text-red-500"
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
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                Delivering unparalleled streaming quality and reliability
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-2 flex-shrink-0 text-red-500"
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
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                Curating exclusive content that inspires and entertains
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-2 flex-shrink-0 text-red-500"
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
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                Creating a global community connected through shared experiences
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="text-white/90 text-lg leading-relaxed mt-auto relative">
                                        Every day, we work to break down barriers and bring unforgettable moments
                                        directly to your screens.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default VisionMission
