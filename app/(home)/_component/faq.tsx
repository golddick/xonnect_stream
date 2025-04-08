import React from 'react'

const FAQ = () => {
  return (
    <>
       {/* FAQ Section */}
       <section className="py-12 px-4 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold mb-3 text-black s">Frequently Asked Questions</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Find answers to the most common questions about our platform and services.
                            </p>
                        </div>

                        <div className="space-y-4 text-black">
                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
                                    <span>What type of events are available on XONNECT?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                    <p>
                                        XONNECT offers a wide variety of events including live concerts, sports
                                        events, exclusive interviews, theatrical performances, and educational webinars.
                                        Our content library is constantly updated with new and exciting events.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
                                    <span>What makes Xonnect different from other live-streaming platforms?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                    <p>
                                    Xonnect combines pay-per-view monetization with interactive community features like virtual events, 
                                    live chats, and interest-based groups, prioritizing both creator revenue and audience engagement in one seamless ecosystem.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
                                    <span>Can I watch content after a live event ends?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                    <p>
                                    Yes! Our Basic feature provides access to extended highlights of the event after its conclusion.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
                                    <span>How do I start streaming as a creator?                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                    <p>
                                    The current process requires creators to reach out to Xonnect&apos;s administrative team to facilitate the setup of their creator accounts.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
                                    <span>Will Xonnect support independent creators in the future?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                    <p>
                                    Yes! Our Auto-Creator Mode (launching in Q4 2025) will enable creators to set up their accounts and start streaming instantly,
                                     without the need for admin approval. It will also include a detailed analytics dashboard to track performance and insights.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default FAQ
