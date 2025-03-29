import React from 'react'

const AllFeatures = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-black">
                                    For Viewers & Creators
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
                                    XONNECT offers tailored experiences for both viewers and content creators,
                                    with innovative features designed to enhance your live music experience.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="bg-red-700 text-white p-5">
                                            <h3 className="text-2xl font-bold">Viewers Experience</h3>
                                            <p className="mt-2 opacity-90">
                                                Access premium content your way with our flexible viewing options
                                            </p>
                                        </div>
                                        <div className="p-6 space-y-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Pay on Demand</h4>
                                                    <p className="text-gray-600">
                                                        Only pay for the events you want to watch. No subscriptions or
                                                        hidden fees - just straightforward pricing for premium content.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Multiple Angles</h4>
                                                    <p className="text-gray-600">
                                                        Switch between camera perspectives in real-time. Get up close
                                                        with your favorite artists or enjoy the full stage experience.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Artist Interaction</h4>
                                                    <p className="text-gray-600">
                                                        Queue questions for artists during special Q&A sessions and
                                                        participate in exclusive fan interactions during live events.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -right-2 -top-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                                        COMING SOON
                                                    </div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Merchandise Selection</h4>
                                                    <p className="text-gray-600">
                                                        Browse and purchase exclusive event merchandise during streams,
                                                        delivered right to your door.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="bg-red-700 text-white p-5">
                                            <h3 className="text-2xl font-bold">Creators Hub</h3>
                                            <p className="mt-2 opacity-90">
                                                Powerful tools to grow your audience and monetize your content
                                            </p>
                                        </div>
                                        <div className="p-6 space-y-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Analytics Dashboard</h4>
                                                    <p className="text-gray-600">
                                                        Access comprehensive data on viewer engagement, demographics,
                                                        and viewing patterns to optimize your content strategy.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Custom Pricing</h4>
                                                    <p className="text-gray-600">
                                                        Set your own pricing for different content types. Create special
                                                        offers, bundles, or early-bird specials to maximize revenue.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Profile Customization</h4>
                                                    <p className="text-gray-600">
                                                        Design your artist or band profile with customizable themes,
                                                        media galleries, and promotional sections to engage your
                                                        audience.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
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
                                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -right-2 -top-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                                        COMING SOON
                                                    </div>
                                                    <h4 className="text-lg font-bold mb-2 text-black">Content Management</h4>
                                                    <p className="text-gray-600">
                                                        Easily upload, schedule, and manage your content library with
                                                        our intuitive dashboard. Create playlists and organize your
                                                        material.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                             
                            </div>
                        </section>
  )
}

export default AllFeatures




// import React from "react"

// export const Component = () => {
//     return (
//         <div id="webcrumbs">
//             <div className="w-full bg-white font-sans">
//                 {/* Header/Banner Section */}
              
//                 <section className="py-16 px-4 sm:px-8 bg-white">
//                     <div className="max-w-6xl mx-auto">
                       

                        
//                     </div>
//                 </section>

               
//             </div>
//         </div>
//     )
// }
