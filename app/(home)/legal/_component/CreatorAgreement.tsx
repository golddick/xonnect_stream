'use client'

import { CreatorAgreement } from '@/components/joinAsCreator/creatorAgreement'
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'sonner';

const CreatorsAgreement = () => {
    const searchParams = useSearchParams();
    const showToast = searchParams.get('showToast');
  
    useEffect(() => {
      if (showToast) {
        toast.error('You must accept creator agreement to continue.');
      }
    }, [showToast]);
  return (
    <div id="xonnect" className=' container mx-auto '>
        <CreatorAgreement/>
  </div>
  )
}

export default CreatorsAgreement
