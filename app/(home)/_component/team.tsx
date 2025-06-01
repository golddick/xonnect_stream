
import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const Team = () => {
  const teamMembers = [
    {
      name: "Gold Dick",
      title: "Founder & Lead Developer",
      bio: "Building transformative software that challenges the norm and shapes the future.",
      image: "/assets/founder.jpeg",
      linkedin: "https://www.linkedin.com/in/gold-dick-81550629a",
      instagram: "https://www.instagram.com/__goldick/"
    },
    // Add more members with social URLs here
  ]

  return (
    <section aria-labelledby="team-heading" className="mb-20 px-4">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 id="team-heading" className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
        <p className="text-lg text-gray-700">
          The passionate team behind <span className=' text-red-700'>x</span>onnect is dedicated to building the future of creator audience relationships.
        </p>
      </div>

      <div className=" flex justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs"
            role="group"
            aria-label={`Team member: ${member.name}`}
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(max-width: 640px) 128px, 128px"
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-red-700 font-medium mb-3">{member.title}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>

            <div className="flex justify-center gap-6 text-gray-600  text-2xl">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <FaLinkedin  className=' hover:text-red-700'/>
                </a>
              )}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Instagram profile`}
                >
                  <FaInstagram  className=' hover:text-red-700'/>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team
