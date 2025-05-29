


'use client'

import { Button } from '@/components/ui/button'
import { updatePartnerStatus } from '@/lib/Adminpartners'
import { PARTNER_STATUS } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useTransition, useState } from 'react'

interface ActionBTNProps {
  partnerID: string
  currentStatus: PARTNER_STATUS
  onStatusChange?: (status: PARTNER_STATUS) => void 
}

export const ActionBTN = ({ partnerID, currentStatus, onStatusChange }: ActionBTNProps) => {
  const [isPending, startTransition] = useTransition()
  const [localStatus, setLocalStatus] = useState<PARTNER_STATUS>(currentStatus)
  const router = useRouter()
  const handleUpdate = (status: PARTNER_STATUS) => {
    startTransition(async () => {
      const res = await updatePartnerStatus({ partnerId: partnerID, status })
      if (res.success) {
        setLocalStatus(status)
        onStatusChange?.(status)
        router.refresh() 
      } else {
        alert('Error updating status')
      }
    })
  }

  const statusColors = {
    APPROVED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
      {/* <span className={`text-xs px-3 py-1 rounded-full ${statusColors[localStatus]}`}>
        {localStatus}
      </span> */}

      {/* Actions for undoing a decision */}
      {localStatus === 'APPROVED' || localStatus === 'REJECTED' ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleUpdate('PENDING')}
          disabled={isPending}
        >
          Undo
        </Button>
      ) : null}

      {/* Approve / Reject options if still pending */}
      {localStatus === 'PENDING' && (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleUpdate('APPROVED')}
            disabled={isPending}
          >
            Approve
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleUpdate('REJECTED')}
            disabled={isPending}
          >
            Reject
          </Button>
        </div>
      )}
    </div>
  )
}
