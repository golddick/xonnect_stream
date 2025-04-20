'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { requestCreatorRole } from '@/actions/user' 
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
      await requestCreatorRole()
      toast.success('Your request has been sent to our Team !')
      router.push(`/`)
    } catch (err) {
      toast.error('Failed to send request')
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



