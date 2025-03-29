import React from 'react'

const PricingFAQ = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-black">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="space-y-6">
            <details className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm group text-black">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-bold">Do I need to subscribe to watch content?</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>
                <div className="px-6 pb-6">
                    <p className="text-gray-600">
                        No, ExclusiveStream operates on a pay-per-view model. You only pay for the
                        specific events you want to watch, with no monthly subscription required for
                        viewers.
                    </p>
                </div>
            </details>

            <details className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm group text-black">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-bold">How do I become a content creator?</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>
                <div className="px-6 pb-6">
                    <p className="text-gray-600">
                        Creator features are coming soon! When launched, you&apos;ll be able to sign up for
                        our creator subscription, which will allow you to host your content, set your
                        prices, and start earning revenue.
                    </p>
                </div>
            </details>

           
        </div>
    </div>
</section>
  )
}

export default PricingFAQ
