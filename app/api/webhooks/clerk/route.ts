import { Webhook } from "svix";
import { headers } from "next/headers";
import {  WebhookEvent } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { resetIngresses } from "@/actions/ingress";
import { createUser } from "@/actions/user";
import { User } from "@prisma/client";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  console.log(payload, 'payloads ')
  console.log('Webhook payload:', body)
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, username, image_url } = evt.data;

    await db.user.create({
      data: {
        externalUserId: id,
        username: email_addresses[0].email_address,
        imageUrl: image_url,
        email: 'dick@gmail.com',
        stream: {
          create: {
            name: `${payload.data.username}'s stream`,
          },
        },
      },
    });
  }

  // if (eventType === 'user.created') {
  //   const { id, email_addresses, username, image_url } = evt.data;
  
  //   // Check if all required data exists
  //   if (!id || !email_addresses || !email_addresses[0]?.email_address) {
  //     console.error("Error: Missing required data -", evt.data);
  //     return new Response('Error occurred -- missing data', {
  //       status: 400
  //     });
  //   }
  
  //   const email = email_addresses[0].email_address;
  //   const user = {
  //     externalUserId: id,
  //     email: email, 
  //     username: username ?? '', 
  //     imageUrl: image_url ?? '', 
  //     stream: {
  //       create: {
  //         name: `${username ?? 'Anonymous'}'s stream`, 
  //       },
  //     },
  //   };
  
  //   try {
  //     // Create the user in the database
  //     await db.user.create({ data: user });
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //     return new Response('Error occurred while creating user', { status: 500 });
  //   }
  // }
  

 

  if (eventType === "user.updated") {

    await db.user.update({
      where: {
        externalUserId: payload.data.id,
      },
      data: {
        username: payload.data.username,
        imageUrl: payload.data.image_url,
       
      },
    });
  }

  if (eventType === "user.deleted") {
    await resetIngresses(payload.data.id);

    await db.user.delete({
      where: {
        externalUserId: payload.data.id,
      },
    });
  }

  return new Response("", { status: 200 });
}
