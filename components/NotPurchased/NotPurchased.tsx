

import { Schedule } from '@prisma/client';
import React from 'react'
import { SchedulePurchaseBTN } from '../purchaseBTN/SchedulePurchaseBTN';

interface NotPurchasedProps{
      data: Schedule | null;
      userId: string
      externalUserName: string
      externalUserEmail: string
}

const NotPurchased = ({data, userId, externalUserEmail,externalUserName}:NotPurchasedProps) => {
  return (
    <div>
       <SchedulePurchaseBTN data={data} selfName={externalUserName} selfEmail={externalUserEmail} userId={userId} />
    </div>
  )
}

export default NotPurchased
