import { FacebookIcon, InstagramIcon, Mail, PhoneCall, YoutubeIcon } from 'lucide-react'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const ContactForm = () => {
  return (
    <section className="py-16 px-8 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our support team through any of the platforms and we&apos;ll get back to
            you shortly.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden w-full justify-center flex items-center ">
          <div className="flex  items-start w-full md:w-[50%] mx-auto py-8  justify-between px-4  md:gap-12">

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='size-8 rounded-lg cursor-pointer shadow-black shadow-md p-1' />
            </a>

            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className='size-8 rounded-lg cursor-pointer shadow-black shadow-md p-1' />
            </a>

            <a href="https://wa.me/+2348065591354" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className='size-8 rounded-lg cursor-pointer shadow-black shadow-md p-1' />
            </a>

            <a href="mailto:hrxonnet@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className='size-8 rounded-lg cursor-pointer shadow-black shadow-md p-1' />
            </a>

            <a href="tel:+2348065591354" target="_blank" rel="noopener noreferrer">
              <PhoneCall className='size-8 rounded-lg cursor-pointer shadow-black shadow-md p-1' />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
