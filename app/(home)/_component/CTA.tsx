import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className="bg-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Creator Connect Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a creator looking to connect with your audience or a fan seeking unique experiences,
            Creator Connect is the platform for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/creators/join" 
              className="bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg"
            >
              Join as Creator
            </Link>
            <Link 
              href="/sign-up" 
              className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-lg"
            >
              Sign Up as Fan
            </Link>
          </div>
        </section>
  )
}

export default CTA
