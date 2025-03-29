import { ScheduleFileUpload } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface GalleryProps {
  fileUpload: ScheduleFileUpload[]
}

const EventGallery = ({ fileUpload }: GalleryProps) => {
  // Show nothing if no files
  if (fileUpload.length === 0) return null

  const previewFiles = fileUpload.slice(0, 5)
  const remainingFiles = fileUpload.length - 5
  const defaultImage = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'

  return (
    <>
      <h4 className="font-bold text-lg mb-3 text-black">Event Gallery</h4>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {previewFiles.map((file, index) => (
          <div key={file.id} className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative w-full h-40">
            <Image
              fill
              src={file.ImageURL || defaultImage}
              alt='gallary'
              className=" object-cover group-hover:scale-110 transition-transform duration-300 absolute"
            />
          </div>
        ))}

        {remainingFiles > 0 && (
          <div className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer relative w-full h-full">
            <Image
              fill
              src={fileUpload[5]?.ImageURL || defaultImage}
              alt='gallary'
              className=" object-cover group-hover:scale-110 transition-transform duration-300 absolute"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white font-bold">
              +{remainingFiles} more
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default EventGallery