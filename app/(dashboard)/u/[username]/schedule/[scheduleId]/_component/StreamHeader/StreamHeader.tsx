import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import StreamHeaderSideDot from './StreamSideDot'

import { UserAvatar } from '@/components/user-avatar'

const StreamHeader = () => {

    const creator = true

  return (
    <div className=' flex flex-col md:flex-row gap-2 items-center w-full justify-between p-4'>
      <div className='w-full flex items-center justify-between'>
      <div className='flex w-full  items-center gap-4 lg:gap-2 '>
            {/* <UserAvatar isLive  imageUrl='' username='James'/> */}
            img
            <div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
              <span className=' capitalize goldText' style={{fontSize:'15px', fontFamily:'monospace'}}>james</span>
              <VerifiedIcon className='w-4 h-4 goldText' />
              </div>
                <span className=' text-muted-foreground capitalize' style={{fontSize:'13px'}}>2m Viewers</span>
              </div>
            </div>
        </div>

            <div className='flex  w-full items-center  justify-end  md:pr-4'>
      <div className='flex items-center'>
   
        {
          creator ? (
            <div className='flex gap-2 items-center'>
           <div>ana</div>
           <div>edit</div>
            </div>
          ):(
            <div>
              <div>purchase</div>
            </div>
          )
        }
      
            </div>
            <div className=' justify-end '>  <StreamHeaderSideDot/></div>
        </div>
      </div>
    </div>
  )
}

export default StreamHeader



