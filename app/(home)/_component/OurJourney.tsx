import React from 'react'

const OurJourney = () => {
  return (
    <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              How Creator Connect evolved from an idea to a leading platform.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2023",
                title: "The Beginning",
                description: "Creator Connect was founded with the mission to empower creators through live events and interactive experiences."
              },
              {
                year: "2023",
                title: "First 1,000 Creators",
                description: "We welcomed our first thousand creators to the platform, hosting over 500 events in our inaugural year."
              },
              {
                year: "2024",
                title: "Platform Expansion",
                description: "Launched advanced monetization tools, analytics dashboard, and mobile applications to enhance the creator experience."
              },
              {
                year: "2025",
                title: "Global Growth",
                description: "Expanded operations to support creators in over 50 countries, with multi-language support and localized payment options."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                <div className="md:w-1/5">
                  <div className="bg-red-800 text-white text-xl font-bold py-2 px-4 rounded-lg inline-block">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-4/5 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default OurJourney
