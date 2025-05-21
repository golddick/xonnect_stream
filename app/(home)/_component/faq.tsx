'use client'

import React from 'react'

const faqItems = [
  {
    question: "What is XONNECT?",
    answer:
      "XONNECT is a pay-on-demand streaming platform where users only pay for the content they want to watch—no monthly subscriptions or hidden fees."
  },
  {
    question: "What kind of content is available on XONNECT?",
    answer:
      "XONNECT features live concerts, sports, interviews, theater, and educational events. New content is added frequently to keep the experience fresh."
  },
  {
    question: "How does the pay-per-view model work?",
    answer:
      "You pay only for the events or streams you choose to watch. Once purchased, you get access to the content for the specified viewing window—no recurring fees."
  },
  {
    question: "Can I watch replays or highlights after a live event?",
    answer:
        "Users can only watch extended highlights, which will be posted after the event. Full event replays are not available."
  },
  {
    question: "How can I become a creator on XONNECT?",
    answer:
      "To stream on XONNECT, creators must agree to our terms and submit a request. Our team reviews and approves all creator applications before granting access."
  },
]

const FAQ = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3 text-black">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick answers to the most common questions about XONNECT for viewers and creators.
          </p>
        </div>

        <div className="space-y-4 text-black">
          {faqItems.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg"
            >
              <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700 transform group-open:rotate-180 transition-transform duration-300"
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
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Have more questions about features?{" "}
            <a href="/features" className="text-red-700 underline">
              Check out the Features page
            </a>{" "}
            for full details.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
