
'use client';

import { updateCreatorRequestStatus, revertUserRole } from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { REQUEST_STATUS } from '@prisma/client';
import { useTransition, useState } from 'react';
import { toast } from 'sonner';

interface CreatorRequestActionButtonProps {
  requestId: string;
  currentStatus: REQUEST_STATUS;
  userId: string; // Added userId prop
  onStatusChange?: (status: REQUEST_STATUS) => void;
}

export const CreatorRequestActionButton = ({
  requestId,
  currentStatus,
  userId, // Added userId
  onStatusChange,
}: CreatorRequestActionButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [localStatus, setLocalStatus] = useState<REQUEST_STATUS>(currentStatus);

  const handleRevertToPending = async () => {
    startTransition(async () => {
      // First revert the user role if the current status is APPROVED
      if (localStatus === 'APPROVED') {
        const roleResult = await revertUserRole(userId);
        if (!roleResult.success) {
          toast.error('Failed to revert user role');
          return;
        }
      }
      
      // Then update the request status
      const statusResult = await updateCreatorRequestStatus({
        requestId,
        status: 'PENDING',
      });

      if (statusResult.success) {
        setLocalStatus('PENDING');
        onStatusChange?.('PENDING');
        toast.success('Status reverted to pending and user role updated');
      } else {
        toast.error(statusResult.error || 'Failed to revert status');
      }
    });
  };

  const handleUpdate = (newStatus: REQUEST_STATUS) => {
    startTransition(async () => {
      const result = await updateCreatorRequestStatus({
        requestId,
        status: newStatus,
      });

      if (result.success) {
        setLocalStatus(newStatus);
        onStatusChange?.(newStatus);
        
        // Show success toast with undo action if approved/denied
        if (newStatus !== 'PENDING') {
          toast.success(`Request ${newStatus.toLowerCase()}`, {
            action: {
              label: 'Undo',
              onClick: () => handleRevertToPending(),
            },
          });
        } else {
          toast.success('Status reverted to pending');
        }
      } else {
        toast.error(result.error || 'Failed to update status');
      }
    });
  };



  if (localStatus !== 'PENDING') {
    return (
      <div className="flex items-center gap-2">
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            localStatus === 'APPROVED'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {localStatus}
        </span>
        <Button
          variant="ghost"
          size="sm"
          disabled={isPending}
          onClick={handleRevertToPending}
          className="text-xs text-muted-foreground hover:text-primary"
        >
          Undo
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={isPending}
        onClick={() => handleUpdate('APPROVED')}
      >
        Approve
      </Button>
      <Button
        variant="destructive"
        size="sm"
        disabled={isPending}
        onClick={() => handleUpdate('DENIED')}
      >
        Deny
      </Button>
    </div>
  );
};