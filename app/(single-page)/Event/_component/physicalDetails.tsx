'use client'

import React, { useTransition, useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { CheckCheck } from 'lucide-react'
import PaystackPop from '@paystack/inline-js'
import {
  checkPaymentExists,
  createPhysicalTicketPayment,
  verifyPhysicalTicketPayment,
} from '@/actions/payment'

interface PhysicalDetailsProps {
  physicalTicketAmount: number
  availableSlots: number
  remainingSlots: number
  userEmail?: string | null | undefined
  userName?: string | null | undefined
  userId?: string
  eventName?: string
  eventID?: string
  address?: string
  ticketType?: string
}

const POLL_INTERVAL = 5000 // 5 seconds
const INITIAL_DELAY = 2000 // 2 seconds before first check
const MAX_RETRIES = 5

const PhysicalDetails: React.FC<PhysicalDetailsProps> = ({
  physicalTicketAmount,
  availableSlots,
  userEmail,
  userId,
  eventName,
  eventID,
  address,
  userName,
  remainingSlots,
  ticketType
}) => {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()
  const [slotsLeft, setSlotsLeft] = useState(remainingSlots)
  const [currentReference, setCurrentReference] = useState<string | null>(null)



  // 🔁 Retry logic for verifying payment
  const verifyPaymentWithRetry = async (reference: string, attempts = MAX_RETRIES) => {
    for (let i = 0; i < attempts; i++) {
      try {
        const exists = await checkPaymentExists(reference)
        if (!exists) {
          console.log(`Payment ${reference} not found (attempt ${i + 1})`)
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))) // Exponential backoff
          continue
        }

        const verified = await verifyPhysicalTicketPayment(reference)
        if (verified) return true
        console.warn(`Payment ${reference} exists but not verified yet (attempt ${i + 1})`)
      } catch (error) {
        console.error(`Verification attempt ${i + 1} failed:`, error)
      }
    }
    return false
  }

  // ⏱️ Verification polling effect
  useEffect(() => {
    if (!currentReference) return

    let interval: NodeJS.Timeout
    const initialDelay = setTimeout(async () => {
      interval = setInterval(async () => {
        try {
          console.log('🔍 Verifying payment:', currentReference)
          const verified = await verifyPaymentWithRetry(currentReference)

          if (verified) {
            setSlotsLeft(prev => prev - quantity)
            setCurrentReference(null)
            clearInterval(interval)
            toast.success(`✅ Payment verified! Ref: ${currentReference.slice(0, 8)}`)
          }
        } catch (error) {
          console.error('❌ Final verification error:', error)
          toast.error(`Verification failed for: ${currentReference.slice(0, 8)}`)
        }
      }, POLL_INTERVAL)
    }, INITIAL_DELAY)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [currentReference, quantity])

  const totalAmount = physicalTicketAmount * quantity * 100
  const soldTickets = Math.max(0, availableSlots - slotsLeft)

  const handlePay = () => {
    const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY

    if (!paystackKey) {
      toast.error(' Payment gateway configuration error')
      return
    }

    if (!userId || !userEmail || !eventID || !userName) {
      toast.error(' Login required to buy tickets')
      return
    }

    if (quantity > slotsLeft) {
      toast.error(' Not enough tickets available')
      return
    }

    const paystack = new PaystackPop()

    paystack.newTransaction({
      key: paystackKey,
      email: userEmail,
      amount: totalAmount,
      currency: 'NGN',
      metadata: {
        custom_fields: [
          { display_name: 'Quantity', variable_name: 'quantity', value: quantity },
          { display_name: 'User Name', variable_name: 'user name', value: userName },
          { display_name: 'Event Name', variable_name: 'event name', value: `${eventName} physical ticket` },
        ],
      },
      onSuccess: (transaction) => {
        startTransition(async () => {
          try {
            setCurrentReference(transaction.reference)

            const createdPayment = await createPhysicalTicketPayment({
              userId: userId,
              email: userEmail,
              name: `${eventName} physical ticket`,
              amount: totalAmount / 100, // back to Naira
              quantity: quantity,
              status: 'PENDING',
              reference: transaction.reference,
              scheduleId: eventID,
            })

            if (!createdPayment?.success) {
              throw new Error('Failed to create payment record')
            }

            console.log(' Payment record created:', createdPayment.payment?.reference || 'undefined reference')
            toast.success(` Payment initiated! Ref: ${transaction.reference.slice(0, 8)}`)
          } catch (error) {
            console.error('Payment processing error:', error)
            toast.error(' Payment processing failed')
            setCurrentReference(null)
          }
        })
      },
      onCancel: () => {
        toast.error(' Payment cancelled by user')
        setCurrentReference(null)
      },
    })
  }

  return (
    <Card >
    <CardContent className="relative p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-black bg-white">


    <h2 className="text-xl font-bold mb-6 border-b flex items-center">Physical Ticket Details</h2>

    <div className="">
        <div className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-500 w-32 flex items-center">Price per Ticket</span>
            <span className="font-medium text-primary-600">₦{physicalTicketAmount}</span>
        </div>
        <div className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-500 w-32 flex items-center">Initial slot</span>
            <span className="font-medium">{availableSlots}</span>
        </div>
        <div className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-500 w-32 flex items-center">Ticket Type</span>
            <span className="font-medium">{ticketType}</span>
        </div>
        <div className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-500 w-32 flex items-center">Event Addres</span>
            <span className="font-medium">{address}</span>
        </div>

        <div>
            <div className=" flex flex-col  gap-2">
                <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-gray-700 font-medium">Available Slots</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {slotsLeft}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600"> Quantity</label>
              <Input
                type="number"
                min={1}
                max={slotsLeft}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(slotsLeft, Number(e.target.value))))}
                className="bg-black text-white"
              />
              <p className=' text-black'>Total: ₦{(quantity * physicalTicketAmount).toLocaleString()}</p>
            </div>
            <Button
          className="w-full bg-black text-white hover:bg-gray-800 transition"
          onClick={handlePay}
          disabled={isPending || slotsLeft === 0 || !!currentReference}
        >
          {currentReference ? (
            `Verifying ${currentReference.slice(0, 8)}...`
          ) : isPending ? (
            'Processing...'
          ) : slotsLeft === 0 ? (
            <div className="flex items-center gap-2">
              <CheckCheck className="text-green-500" size={16} /> Sold Out
            </div>
          ) : (
            `Buy Now (${slotsLeft} left)`
          )}
        </Button>
            </div>
        </div>
    </div>
    </CardContent>
</Card>
  )
}

export default PhysicalDetails


