




"use client";

import React, { useTransition, useEffect, useState } from "react";
import { CheckCheck, Heart } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import PaystackPop from '@paystack/inline-js';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Schedule } from "@prisma/client";
import { createPayment, checkIfUserPurchased, verifyPayment } from "@/actions/payment";

// Add polling interval
const POLL_INTERVAL = 5000; // 5 seconds

interface PurchaseBTNProps {
    data: Schedule | null;
    selfName: string | null | undefined
    userId: string | undefined
    selfEmail: string | null | undefined;
}

export function SchedulePurchaseBTN({ data, selfName, selfEmail, userId }: PurchaseBTNProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [hasPurchased, setHasPurchased] = useState(false);
    const [currentReference, setCurrentReference] = useState<string | null>(null);

    // Add useEffect for polling
    useEffect(() => {
        if (!currentReference) return;

        const interval = setInterval(async () => {
            try {
                const verified = await verifyPayment(currentReference);
                if (verified) {
                    setHasPurchased(true);
                    clearInterval(interval);
                    toast.success("Payment successfully verified!");
                }
            } catch (error) {
                console.error("Verification error:", error);
            }
        }, POLL_INTERVAL);

        return () => clearInterval(interval);
    }, [currentReference]);

    useEffect(() => {
        if (userId && data?.id && data?.streamId) {
            checkIfUserPurchased(userId, data.id, data.streamId)
                .then((purchased) => setHasPurchased(purchased))
                .catch((error) => console.error("Error checking purchase status:", error));
        }
    }, [userId, data?.id, data?.streamId]);

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

        if ( !selfName || !data || !data.amount) {
            toast.error("Missing required payment information.");
            return;
        }

        const email = selfEmail || `custom${selfName}@gmail.com`; 
        const name = selfName || 'custom name';
        const paystack = new PaystackPop();

        paystack.newTransaction({
            key: paystackKey,
            email: email,
            amount: data.amount * 100,
            currency: "NGN",
            metadata: {
                custom_fields: [
                    { display_name: "User Name", variable_name: "user_name", value: name },
                    { display_name: "User ID", variable_name: "user_id", value: userId },
                    { display_name: "Schedule ID", variable_name: "schedule_id", value: data.id },
                    { display_name: "Stream ID", variable_name: "stream_id", value: data.streamId }
                ]
            },
            onSuccess: async (transaction: any) => {
                startTransition(async () => {
                    try {
                        setCurrentReference(transaction.reference);
                        const paymentStatus = transaction.status === 'success' ? "SUCCESSFUL" : "PENDING";

                        const payment = await createPayment({
                            userId: userId,
                            email: email,
                            name: name,
                            amount: data.amount || 0,
                            status: paymentStatus,
                            scheduleId: data.id,
                            reference: transaction.reference,
                            streamId: data.streamId || '',
                        });

                        if (!payment) throw new Error("Failed to save payment details.");

                        if (paymentStatus === "SUCCESSFUL") {
                            setHasPurchased(true);
                            toast.success(`Payment successful! ${transaction.reference}`);
                        } else {
                            toast.info("Payment pending - Complete the transaction through your banking app");
                        }

                    } catch (error) {
                        console.error(error);
                        toast.error("Payment processing failed");
                    }
                });
            },
            onCancel: () => {
                toast.error("Payment cancelled.");
                setCurrentReference(null);
            },
        });
    };

    return (
        <Button
            disabled={isPending || !data || hasPurchased}
            onClick={onPay}
            size="sm"
            className={cn(
                "w-full lg:w-auto font-medium text-white",
                hasPurchased ? "bg-green-500 hover:bg-green-600" : "from-[red] to-[black] bg-gradient-to-br"
            )}
        >
            {isPending ? "Processing..." : hasPurchased ? <div className=" flex items-center gap-2">
                <CheckCheck className="text-gold" size={16} /> Purchased
            </div>: "Get Streaming pass"}
        </Button>
    );
}



