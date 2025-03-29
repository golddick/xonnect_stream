"use server";


import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';


// Validate the payment data
export const validatePaymentData = (paymentData: { email: string, name: string, amount: number, scheduleId?: string, streamId?: string }) => {
    if (!paymentData.email || !paymentData.name || !paymentData.amount) {
        throw new Error("Missing required fields for payment");
    }

    // Ensure at least one of scheduleId or streamId is provided
    if (!paymentData.scheduleId && !paymentData.streamId) {
        throw new Error("Either scheduleId or streamId is required");
    }
};

// Check if the user exists in the database
export const checkUserExistence = async (userId: string) => {
    const userExists = await db.user.findUnique({
        where: { externalUserId: userId },
    });

    if (!userExists) {
        throw new Error(`User with ID ${userId} does not exist`);
    }
};

// Create the payment record in the database
export const createPaymentRecord = async (paymentData: {
    userId: string;
    email: string;
    name: string;
    amount: number;
    status: "SUCCESSFUL" | "PENDING";
    scheduleId?: string;
    streamId?: string;
    reference?: string;
    
}) => {
    // Create the payment record
    const payment = await db.payment.create({
        data: {
            externalUserId: paymentData.userId,
            email: paymentData.email,
            name: paymentData.name,
            amount: paymentData.amount,
            status: paymentData.status,
            scheduleId: paymentData.scheduleId, 
            streamId: paymentData.streamId,
            reference: paymentData.reference,
        },
    });

    return payment;
};

// Main create payment function
export const createPayment = async (paymentData: {
    userId: string;
    email: string;
    name: string;
    amount: number;
    status: "SUCCESSFUL" | "PENDING";
    scheduleId?: string;
    streamId?: string;
    reference?: string;
}) => {
    try {
        // Validate the payment data
        validatePaymentData(paymentData);

        // Check if the user exists in the database
        await checkUserExistence(paymentData.userId);

        // Create the payment record
        const payment = await createPaymentRecord(paymentData);

        // Revalidate paths for caching updates (if needed)
        // You might want to keep this or remove based on your setup
        // revalidatePath(`/u/${self.username}/payments`);
        revalidatePath(`/schedule-info/${paymentData.scheduleId}`);

        return payment;
    } catch (error) {
        console.error("createPayment", error);

        // Handle Prisma foreign key violation error (P2003)
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
            throw new Error(`Invalid userId: User with ID ${paymentData.userId} does not exist.`);
        }

        // Handle any other error
        throw new Error("Internal server error");
    }
};

export const checkIfUserPurchased = async (userId: string, scheduleId: string,streamId:string  ): Promise<boolean> => {
    try {
        const payment = await db.payment.findFirst({
            where: {
                externalUserId: userId,
                scheduleId: scheduleId,
                streamId: streamId,
                status: "SUCCESSFUL", // Ensure the payment was successful
            },
        });

        return !!payment; // Return true if a payment exists, false otherwise
    } catch (error) {
        console.error("Error checking purchase status:", error);
        throw new Error("Failed to check purchase status");
    }
};

// Add webhook handler for payment verification
export const verifyPayment = async (reference: string) => {
    try {
      const response = await fetch('https://api.paystack.co/transaction/verify/' + reference, {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      });
  
      const data = await response.json();
      
      if (data.data.status === 'success') {
        await db.payment.update({
          where: { reference },
          data: { status: "SUCCESSFUL" }
        });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Payment verification failed:", error);
      return false;
    }
  };
