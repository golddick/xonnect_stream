import React from 'react'

const FAQ = () => {
  return (
    <>
       {/* FAQ Section */}
       <section className="py-16 px-8 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-3">Frequently Asked Questions</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Find answers to the most common questions about our platform and services.
                            </p>
                        </div>

                        <div className="space-y-4 text-black">
                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-lg">
                                    <span>What type of events are available on ExclusiveStream?</span>
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
                                        ExclusiveStream offers a wide variety of events including live concerts, sports
                                        events, exclusive interviews, theatrical performances, and educational webinars.
                                        Our content library is constantly updated with new and exciting events.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-lg">
                                    <span>How much does a membership cost?</span>
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
                                        We offer various membership tiers starting at $9.99 per month for our Basic
                                        plan. Premium plans with additional features like 4K streaming and offline
                                        downloads start at $14.99 per month. We also offer annual memberships at a
                                        discounted rate.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-lg">
                                    <span>Can I watch content on multiple devices?</span>
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
                                        Yes! Our Basic plan allows streaming on one device at a time, while our Premium
                                        plans support simultaneous streaming on up to four devices. You can access your
                                        ExclusiveStream account on any compatible device including smartphones, tablets,
                                        computers, and smart TVs.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-lg">
                                    <span>Is there a free trial available?</span>
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
                                        Absolutely! We offer a 7-day free trial for all new members. You can experience
                                        all the features of our Premium plan during your trial period. You can cancel
                                        anytime during the trial period without being charged.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg">
                                <summary className="p-6 flex justify-between items-center font-semibold text-lg">
                                    <span>How do I cancel my subscription?</span>
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
                                        You can cancel your subscription at any time by going to your Account Settings
                                        and selecting the &quot;Manage Subscription&quot; option. Your membership will continue
                                        until the end of your current billing period, and you won&apos;t be charged again
                                        after that.
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
