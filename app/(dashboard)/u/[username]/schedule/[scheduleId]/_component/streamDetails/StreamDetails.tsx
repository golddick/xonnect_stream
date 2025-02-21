import { Button } from '@/components/ui/button'
import React from 'react'
// import StreamGallery from '../SreamGallary/StreamGallery'



const StreamDetails = () => {

    const isCreator = true

  return (
    <div className='w-full  '>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 relative px-4 '>

            <div className='flex flex-col space-y-3 w-full  Container rounded-lg'>

            {/* {isCreator && (
                    // <div className={`${isLargeScreen ? '' : 'absolute top-4 right-4'}`}>
                    <div>
                    <EditStreamBTN/>
                    </div>
                )}

                {!isCreator && (
                    // <FollowBtn/>
                    <div>follow</div>
                )} */}

            <ul>
                <li>
                    <span className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Title:</span> <i style={{fontSize:'13px', fontWeight:'500'}}> How to make a paper jet</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Address:</span>
                     <i style={{fontSize:'13px', fontWeight:'500'}} > Akobo mall</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Category:</span>
                     <i style={{fontSize:'13px', fontWeight:'500'}} > Music</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Description:</span>
                     <i style={{fontSize:'13px', fontWeight:'500'}} >
                        Professional thief Mason attempts his biggest heist with his brother, robbing a bank. When it goes wrong,.</i>
                </li>
            </ul>
            </div>

            <div className='flex flex-col space-y-3 w-full Container rounded-lg'>
            {/* <PuchaseBtn/> */}
            <ul>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Organizer:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>sam link</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Participants:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>sam,
                    John Travolta, Kristin Davis, Lukas Haas</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Price:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>#2,500.00</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Date:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>12-02-2024</i>
                </li>
                <li>
                    <span  className='goldText ' style={{fontSize:'13px', fontWeight:'500'}}>Time:</span> <i style={{fontSize:'13px', fontWeight:'500'}}>12:30:pm</i>
                </li>
            </ul>
            </div>

                {/* <StreamGallery/> */}
        </div>

      
    </div>
  )
}

export default StreamDetails