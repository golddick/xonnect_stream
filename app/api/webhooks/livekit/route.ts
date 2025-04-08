// import { headers } from "next/headers";
// import { WebhookReceiver } from "livekit-server-sdk";

// import { db } from "@/lib/db";

// const receiver = new WebhookReceiver(
//   process.env.LIVEKIT_API_KEY!,
//   process.env.LIVEKIT_API_SECRET!
// );

// export async function POST(req: Request) {
//   const body = await req.text();
//   const headerPayload = headers();
//   const authorization = headerPayload.get("Authorization");

//   if (!authorization) {
//     return new Response("Error occured -- no authorization headers", {
//       status: 400,
//     });
//   }

//   const event = receiver.receive(body, authorization);

//   if (event.event === "ingress_started") {
//     await db.stream.update({
//       where: {
//         ingressId: event.ingressInfo?.ingressId,
//       },
//       data: {
//         isLive: true,
//       },
//     });
//   }

//   if (event.event === "ingress_ended") {
//     await db.stream.update({
//       where: {
//         ingressId: event.ingressInfo?.ingressId,
//       },
//       data: {
//         isLive: false,
//       },
//     });
//   }

//   return new Response("Success!", { status: 200 });
// }











import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";
import { db } from "@/lib/db";

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("Error occurred -- no authorization headers", {
      status: 400,
    });
  }

  const event = receiver.receive(body, authorization);

  const handleStreamEvent = async (isLive: boolean) => {
    // Find the stream to get userId
    const stream = await db.stream.findUnique({
      where: { ingressId: event.ingressInfo?.ingressId },
      select: { userId: true },
    });

    if (!stream) return null;

    // Update stream status
    await db.stream.update({
      where: { ingressId: event.ingressInfo?.ingressId },
      data: { isLive },
    });

    return stream;
  };

  if (event.event === "ingress_started") {
    const stream = await handleStreamEvent(true);
    
    if (!stream) {
      return new Response("Stream not found", { status: 404 });
    }

    // Update schedules that match current time
    const currentDateTime = new Date();
    await db.schedule.updateMany({
      where: {
        userId: stream.userId,
        eventDateTime: { lte: currentDateTime },
      },
      data: { isLive: true },
    });
  }

  if (event.event === "ingress_ended") {
    const stream = await handleStreamEvent(false);
    
    if (!stream) {
      return new Response("Stream not found", { status: 404 });
    }

    // Update all user's schedules to false when stream ends
    await db.schedule.updateMany({
      where: { userId: stream.userId },
      data: { isLive: false },
    });
  }

  return new Response("Success!", { status: 200 });
}