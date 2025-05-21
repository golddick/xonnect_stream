import React from 'react'

const OurJourney = () => {
  return (
    <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              How <span className='text-red-700'>X</span>onnect evolved from an idea to a leading platform.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2025",
                title: "The Beginning",
                description: "Xonnect was created to make live events accessible to everyone — empowering fans to engage in real-time experiences and helping creators build stronger, more connected communities."
              },
              {
                year: "2025",
                title: "First Event",
                description:"We hosted our very first live-streamed concert. It was the beginning of a new way for creators to connect and communities to grow beyond physical borders."
              },
              {
                year: "2025",
                title: "Ecommerce Launch",
                description:  "We introduced an integrated ecommerce system, allowing creators to sell merchandise, digital content, and exclusive experiences directly to their fans — all within the platform."
              },
              // {
              //   year: "2025",
              //   title: "Platform Expansion",
              //   description: "Launched advanced monetization tools, analytics dashboard, and mobile applications to enhance the creator experience."
              // },
              // {
              //   year: "2025",
              //   title: "Global Growth",
              //   description: "Expanded operations to support creators in over 50 countries, with multi-language support and localized payment options."
              // }
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row  ">
                <div className=" md:w-1/5  items-center lg:justify-center flex">
                  <div className="bg-red-700 text-white text-xl font-bold py-2 px-4 rounded-lg inline-block">
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
