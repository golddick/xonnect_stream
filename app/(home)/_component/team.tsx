import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The passionate team behind Creator Connect is dedicated to building the future of creator-audience relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO & Co-Founder",
                bio: "Former content creator with a vision to revolutionize the creator economy through technology.",
                image: "/assets/woman.jpeg"
              },
              {
                name: "Michael Chen",
                title: "CTO & Co-Founder",
                bio: "Tech visionary with 15+ years of experience building scalable platforms for content creators.",
                image: "/assets/woman.jpeg"
              },
              {
                name: "Aisha Patel",
                title: "Chief Product Officer",
                bio: "Creator advocate focused on building intuitive, powerful tools for the creator community.",
                image: "/assets/xc.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className=' relative  w-32 h-32  mx-auto'>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className=" absolute rounded-full mb-4 object-cover"
                />
                </div>
               
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-red-700 font-medium mb-3">{member.title}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Team
