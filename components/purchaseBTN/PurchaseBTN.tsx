"use client";

import React, { useTransition } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import PaystackPop from '@paystack/inline-js';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Schedule } from "@prisma/client";
import { createPayment } from "@/actions/payment";

interface PurchaseBTNProps {
    data: Schedule | null;
    selfName:string 
    // userId:string 
    selfEmail:string | null
}

export function PurchaseBTN({ data, selfName, selfEmail }: PurchaseBTNProps) {
    const { userId  } = useAuth();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const onPay = () => {

      const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

      if (!paystackKey) {
        toast.error("Paystack key is required.");
        return;
      }

      if (!userId) {
          toast.error("You must be logged in to make a payment.");
          return;
      }
      if (!selfName) {
          toast.error("You must be logged in to make a payment.");
          return;
      }

      if (!data) {
          toast.error("No schedule data available.");
          return;
      }
      const email = selfEmail || `custom${selfName}@gmail.com`;

      if (!email) {
        toast.error("Email is required.");
        return;
      }

      const name = selfName || 'custom name'
    
      if (!name) {
        toast.error("Name is required.");
        return;
      }
    
      if (!data.amount) {
        toast.error("Amount is required.");
        return;
      }

      const paystack = new PaystackPop();

      paystack.newTransaction({
          key: paystackKey,
          email: selfEmail || `custom${selfName}@gmail.com`,
          amount: data.amount ? data.amount * 100 : 0,
          currency: "NGN", // Currency code
          onSuccess: async (transaction: any) => {
              startTransition(async () => {
                  try {
                      // Save payment details to the database using the new payment endpoint
                      const payment = await createPayment({
                          userId: userId,
                          email: selfEmail || `custom${selfName}@gmail.com`,
                          name: selfName,
                          amount: data.amount || 0,
                          status: "SUCCESSFUL",
                          scheduleId: data.id,
                          streamId: data.streamId || ''
                      });

                      if (!payment) {
                          throw new Error("Failed to save payment details.");
                      }

                      toast.success(`Payment successful! ${transaction.reference}`);
                      router.push("/success"); // Redirect to a success page
                  } catch (error) {
                      console.error(error);
                      toast.error("Failed to save payment details.");
                  }
              });
          },
          onCancel: () => {
              toast.error("Payment cancelled.");
          },
      });
  };

    return (
        <Button
            disabled={isPending || !data}
            onClick={onPay}
            size="sm"
            className="w-full lg:w-auto from-[red] font-medium to-[black] bg-gradient-to-br text-white"
        >
            {isPending ? "Processing..." : "Purchase"}
        </Button>
    );
}




