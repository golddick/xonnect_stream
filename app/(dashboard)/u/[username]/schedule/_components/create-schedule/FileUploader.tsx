import { Button } from '@/components/ui/button'
import { UploadDropzone } from '@/lib/uploadthing'
import React, { useState } from 'react'

interface FileUploaderProps {
  onUploadComplete: (videoUrl: string | null, thumbnailUrl: string | null) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUploadComplete }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const handleVideoUpload = (res: any) => {
    setVideoUrl(res?.[0]?.url);
    console.log('Video upload complete:', res?.[0]?.url);
    if (videoUrl && thumbnailUrl) {
      onUploadComplete(videoUrl, thumbnailUrl);
    }
  };

  const handleImageUpload = (res: any) => {
    setThumbnailUrl(res?.[0]?.url);
    console.log('Image upload complete:', res?.[0]?.url);
    if (videoUrl && thumbnailUrl) {
      onUploadComplete(videoUrl, thumbnailUrl);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 w-full p-2">
      {/* Video Upload Section */}
      <div className="flex flex-col items-center justify-center w-full bg-black p-3 rounded-sm">
        <UploadDropzone
          endpoint='thumbnailUploader'
          appearance={{
            label: { color: "#FFFFFF" },
            allowedContent: { color: "#FFFFFF" },
          }}
          onClientUploadComplete={handleVideoUpload}
        />
      </div>

      {/* Image Upload Section */}
      <div className="flex flex-col items-center justify-center w-full bg-black p-3 rounded-lg truncate">
        <UploadDropzone
          endpoint="thumbnailUploader"
          appearance={{
            label: { color: "#FFFFFF" },
            allowedContent: { color: "#FFFFFF" },
          }}
          onClientUploadComplete={handleImageUpload}
        />
      </div>
    </div>
  )
}

export default FileUploader
