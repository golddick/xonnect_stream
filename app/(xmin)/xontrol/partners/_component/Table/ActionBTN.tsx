'use client'

import { Button } from '@/components/ui/button'
import { updatePartnerStatus } from '@/lib/partners'
import { PARTNER_STATUS } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { useTransition, useState } from 'react'

interface ActionBTNProps {
  partnerID: string
  currentStatus: PARTNER_STATUS
  onStatusChange?: (status: string) => void 

}

export const ActionBTN = ({ partnerID, currentStatus, onStatusChange }: ActionBTNProps) => {
  const [isPending, startTransition] = useTransition()
  const [localStatus, setLocalStatus] = useState(currentStatus)

  const handleUpdate = (status: 'APPROVED' | 'REJECTED') => {
    startTransition(async () => {
      const res = await updatePartnerStatus({ partnerId: partnerID, status })
      if (res.success) {
        setLocalStatus(status)
        onStatusChange?.(status)
   
      } else {
        alert('Error updating status')
      }
    })
  }

  if (localStatus !== 'PENDING') {
    return (
      <span
        className={`text-xs px-3 py-1 rounded-full ${
          localStatus === "APPROVED" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}
      >
        {localStatus}
      </span>
    )
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleUpdate("APPROVED")}
        disabled={isPending}
      >
        Approve
      </Button>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => handleUpdate("REJECTED")}
        disabled={isPending}
      >
        Reject
      </Button>
    </div>
  )
}
