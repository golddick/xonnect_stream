'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { updateUserToCreator } from '@/actions/user' 
import { useRouter } from 'next/navigation'

interface Props {
  disabled?: boolean
}

const CreatorBTN: React.FC<Props> = ({ disabled }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    try {
      setLoading(true)
      await updateUserToCreator()
      toast.success('You are now a creator!')
      router.push(`/Stream`)
    } catch (err) {
      toast.error('Failed to update role')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      disabled={disabled || loading}
      onClick={handleClick}
      className="bg-red-600 hover:bg-red-700 text-white"
    >
      {loading ? 'Updating...' : 'Become a Creator'}
    </Button>
  )
}

export default CreatorBTN
