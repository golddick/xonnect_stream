import React from 'react';

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
          {/* 1. What is XONNECT? */}
          <details className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg">
            <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
              <span>What is XONNECT?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              <p>
                XONNECT is a pay-on-demand streaming platform where users only pay for the content they want to watch—no monthly subscriptions or hidden fees.
              </p>
            </div>
          </details>

          {/* 2. What kind of content is available? */}
          <details className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg">
            <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
              <span>What kind of content is available on XONNECT?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              <p>
                XONNECT features live concerts, sports, interviews, theater, and educational events. New content is added frequently to keep the experience fresh.
              </p>
            </div>
          </details>

          {/* 3. How does pay-per-view work? */}
          <details className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg">
            <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
              <span>How does the pay-per-view model work?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              <p>
                You pay only for the events or streams you choose to watch. Once purchased, you get access to the content for the specified viewing window—no recurring fees.
              </p>
            </div>
          </details>

          {/* 4. Can I watch replays or highlights? */}
          <details className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg">
            <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
              <span>Can I watch replays or highlights after a live event?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              <p>
                Yes! Many events offer replays or extended highlights that you can access after the live stream ends, depending on the event.
              </p>
            </div>
          </details>

          {/* 5. How can I become a creator? */}
          <details className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg">
            <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
              <span>How can I become a creator on XONNECT?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              <p>
                To stream on XONNECT, creators must agree to our terms and submit a request. Our team reviews and approves all creator applications before granting access.
              </p>
            </div>
          </details>

          {/* 6. Will the creator process get easier? */}
          <details className="bg-white rounded-lg shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg">
            <summary className="p-6 flex justify-between items-center font-semibold text-[15px]">
              <span>Will the creator onboarding process improve?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 transform group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
              <p>
                Yes! Our upcoming Auto-Creator Mode (launching Q4 2025) will let creators onboard instantly, stream faster, and get access to real-time analytics.
              </p>
            </div>
          </details>
        </div>

        {/* Footer note */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Have more questions about features? <a href="/features" className="text-red-600 underline">Check out the Features page</a> for full details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
