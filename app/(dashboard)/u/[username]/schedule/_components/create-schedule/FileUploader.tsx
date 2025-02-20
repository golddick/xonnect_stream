import { Button } from '@/components/ui/button'
import React from 'react'

const FileUploader = () => {
  return (
 <div className='grid grid-cols-1 md:grid-cols-2  gap-4 w-full  p-2'>
   <div className="flex flex-col items-center justify-center w-full  bg-black p-3 rounded-sm">
    <img src="/assets/icons/upload.svg" width={70} height={70} alt="file upload" />
    <h3 className="mb-2 mt-2 goldText" style={{fontSize:'13px'}}>Drag Video here</h3>
    <p className=" font-mono goldText mb-4" style={{fontSize:'12px'}}>Max 10sec</p>
    <Button type="button" className="rounded-full shadow-neutral-600 shadow-md border" size='sm' variant='ghost'>
      Select 
    </Button>
  </div>
  <div className="flex flex-col items-center justify-center w-full  bg-black p-3 rounded-sm">
    <img src="/assets/icons/upload.svg" width={70} height={70} alt="file upload" />
    <h3 className="mb-2 mt-2 goldText" style={{fontSize:'13px'}}>Drag photo here</h3>
    <p className=" mb-4 goldText" style={{fontSize:'12px'}}>SVG, PNG, JPG</p>
    <Button type="button" className="rounded-full shadow-neutral-600 shadow-md border" size='sm' variant='ghost'>
      Select 
    </Button>
  </div>
 </div>
  )
}

export default FileUploader