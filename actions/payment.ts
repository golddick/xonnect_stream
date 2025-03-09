"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const createPayment = async (paymentData: {
    userId?: string; 
    email: string; 
    name: string; 
    amount: number; 
    status: "SUCCESSFUL" | "FAILED"; 
    scheduleId?: string;
    streamId?: string; 
}) => {
    try {
        const self = await getSelf();

        // Validate required fields for the payment
        if (!paymentData.email || !paymentData.name || !paymentData.amount) {
            throw new Error("Missing required fields for payment");
        }

        // Create the payment record
        const payment = await db.payment.create({
            data: {
                userId: paymentData.userId || self.id, // Use provided userId or default to self.id
                email: paymentData.email,
                name: paymentData.name || self.username,
                amount: paymentData.amount,
                status: paymentData.status,
                scheduleId: paymentData.scheduleId, // Optional: Associate with a schedule
                streamId: paymentData.streamId, // Optional: Associate with a stream
            },
        });

        // Revalidate paths for caching updates (if needed)
        revalidatePath(`/u/${self.username}/payments`);
        revalidatePath(`/u/${self.username}`);

        return payment;
    } catch (error) {
        console.error("createPayment", error);
        throw new Error("Internal server error");
    }
};