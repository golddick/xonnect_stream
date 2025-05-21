import { JoinASCreatorBTN } from '@/components/joinAsCreator/JoinASCreatorBTN'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
  bgColor?:string
}

const CTA = async ({bgColor}:Props) => {

  return (
    <section className={cn("bg-black text-white rounded-lg p-12 text-center", bgColor )}>
          <h2 className="text-3xl font-bold mb-4">Join <span className='text-red-700'>X</span>ONNECT Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a creator looking to connect with your audience or a fan seeking unique experiences,
            <span className='text-red-700'>X</span>onnect is the platform for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <JoinASCreatorBTN 
            
            />
            <Link 
              href="/sign-up" 
              className="bg-white hover:bg-gray-100 text-black font-bold  flex justify-center items-center px-8 rounded-lg py-2"
            >
              Sign Up as Fan
            </Link>
          </div>
        </section>
  )
}

export default CTA
