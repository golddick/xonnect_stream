
"use client";

import React, { useTransition, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import PaystackPop from '@paystack/inline-js';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Schedule } from "@prisma/client";
import { createPayment, checkIfUserPurchased } from "@/actions/payment";

interface PurchaseBTNProps {
    data: Schedule | null;
    selfName: string;
    userId: string;
    selfEmail: string | null;
}

export function StreamPurchaseBTN({ data, selfName, selfEmail, userId }: PurchaseBTNProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [hasPurchased, setHasPurchased] = useState(false); // State to track purchase status

    // Check if the user has already purchased the ticket
    useEffect(() => {
        if (userId && data?.id) {
            checkIfUserPurchased(userId, data.id ,data.streamId)
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

        const name = selfName || 'custom name';

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
            email: email,
            amount: data.amount ? data.amount * 100 : 0,
            currency: "NGN", // Currency code
            onSuccess: async (transaction: any) => {
                startTransition(async () => {
                    try {
                        // Save payment details to the database
                        const payment = await createPayment({
                            userId: userId,
                            email: email,
                            name: name,
                            amount: data.amount || 0,
                            status: "SUCCESSFUL",
                            scheduleId: data.id, // Optional: Associate with a schedule
                            streamId: data.streamId || '', // Optional: Associate with a stream
                        });

                        if (!payment) {
                            throw new Error("Failed to save payment details.");
                        }

                        // Update the purchase status
                        setHasPurchased(true);

                        toast.success(`Payment successful! ${transaction.reference}`);
                        // router.push("/success"); // Redirect to a success page
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
            disabled={isPending || !data || hasPurchased}
            onClick={onPay}
            size="sm"
            className={cn(
                "w-full lg:w-auto font-medium text-white",
                hasPurchased ? "bg-green-500 hover:bg-green-600" : "from-[red] to-[black] bg-gradient-to-br"
            )}
        >
            {isPending ? "Processing..." : hasPurchased ? "Purchased" : "Purchase"}
        </Button>
    );
}



