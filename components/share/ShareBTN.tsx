


import React from 'react'
import { Button } from '../ui/button'
import { Share2 } from 'lucide-react'
import { toast } from 'sonner'

const ShareBTN = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'xonnect',
      text: 'Join the experience and be part of the moment!',
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href)
        toast.success('Link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
      if (error instanceof Error && error.name !== 'AbortError') {
        toast.error('Failed to share. Please try again.')
      }
    }
  }

  return (
    <Button 
      onClick={handleShare}
      variant="ghost"
      size="sm"
      className="gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 w-full p-2 border "
      title="Share this stream"
    >
      <Share2 className="w-4 h-4" />
      <span className="hidden sm:inline">Share</span>
    </Button>
  )
}

export default ShareBTN