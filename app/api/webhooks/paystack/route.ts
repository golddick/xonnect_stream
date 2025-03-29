import { NextResponse } from 'next/server'; // This assumes you're using Next.js, adjust for other frameworks
import crypto from 'crypto';

// app/api/webhooks/paystack/route.ts
export async function POST(req: Request) {
  try {
    // Ensure PAYSTACK_SECRET_KEY is defined in the environment variables
    if (!process.env.PAYSTACK_SECRET_KEY) {
      console.error('PAYSTACK_SECRET_KEY is not set in the environment variables');
      return new Response('Internal Server Error: Missing PAYSTACK_SECRET_KEY', { status: 500 });
    }

    const payload = await req.json();

    // Verify event signature
    const signature = req.headers.get('x-paystack-signature');
    if (!signature) {
      return new Response('Missing signature header', { status: 400 });
    }

    const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
                       .update(JSON.stringify(payload))
                       .digest('hex');
    
    // Compare computed hash with received signature
    if (hash !== signature) {
      return new Response('Invalid signature', { status: 401 });
    }

    // Handle different events
    switch (payload.event) {
      case 'charge.success':
        await handleSuccessfulCharge(payload.data);
        break;
      case 'transfer.success':
        await handleSuccessfulTransfer(payload.data);
        break;
      case 'transfer.failed':
        await handleFailedTransfer(payload.data);
        break;
      default:
        console.warn(`Unhandled event: ${payload.event}`);
        return new Response('Event not handled', { status: 200 });
    }

    return new Response('Webhook received', { status: 200 });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

async function handleSuccessfulCharge(data: any) {
  // Handle the charge success event
  console.log('Charge successful', data);
  // Add your business logic here
}

async function handleSuccessfulTransfer(data: any) {
  // Handle the transfer success event
  console.log('Transfer successful', data);
  // Add your business logic here
}

async function handleFailedTransfer(data: any) {
  // Handle the transfer failed event
  console.log('Transfer failed', data);
  // Add your business logic here
}
