import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import React from 'react'

const SimpleFooter = () => {
  return (
      <div className="w-full bg-black/70 backdrop-blur-md text-white bottom-0 mb-0  sticky z-20">
            <div className='flex items-start w-full justify-between gap-4 py-2 px-4'>
                <div>
                    <p className='text-sm'>© Xonnect 2024 </p>
                </div>
                <div className='flex items-center gap-4 '>
                    <InstagramIcon className='size-6 cursor-pointer'/>
                    <TwitterIcon className='size-6 cursor-pointer'/>
                    <YoutubeIcon className='size-6 cursor-pointer'/>
                </div>
            </div>
      </div>
  )
}

export default SimpleFooter