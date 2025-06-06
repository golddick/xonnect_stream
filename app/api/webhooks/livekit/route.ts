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

// Store participant data by room name
const participantData = new Map<string, {
  joined: Set<string>;
  active: Set<string>;
}>();

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("Error occurred -- no authorization headers", {
      status: 400,
    });
  }

  try {
    const event = receiver.receive(body, authorization);

    const handleStreamEvent = async (isLive: boolean) => {
      if (!event.ingressInfo?.ingressId) {
        throw new Error("Missing ingress ID");
      }

      const stream = await db.stream.findUnique({
        where: { ingressId: event.ingressInfo.ingressId },
        select: { userId: true, id: true },
      });

      if (!stream) return null;

      await db.stream.update({
        where: { ingressId: event.ingressInfo.ingressId },
        data: { isLive },
      });

      return stream;
    };

    const getClosestSchedule = async (userId: string, streamId: string) => {
      const now = new Date();
      const startOfDay = new Date(now.setHours(0, 0, 0, 0));
      const endOfDay = new Date(now.setHours(23, 59, 59, 999));

      return await db.schedule.findFirst({
        where: {
          userId,
          streamId,
          eventDateTime: {
            gte: startOfDay,
            lte: endOfDay,
          },
          OR: [
            { status: "UPCOMING" },
            { status: "ONGOING" }
          ]
        },
        orderBy: { eventDateTime: "asc" },
      });
    };

    // Handle participant events
    if (event.event === "participant_joined" || event.event === "participant_left") {
      const room = event.room?.name;
      const participant = event.participant?.identity;
      
      if (!room || !participant) {
        return new Response("Missing room or participant data", { status: 400 });
      }

      if (!participantData.has(room)) {
        participantData.set(room, {
          joined: new Set(),
          active: new Set()
        });
      }

      const roomData = participantData.get(room)!;

      if (event.event === "participant_joined") {
        roomData.joined.add(participant);
        roomData.active.add(participant);
      } else {
        roomData.active.delete(participant);
      }
    }

    // Handle stream start
    if (event.event === "ingress_started") {
      const stream = await handleStreamEvent(true);
      if (!stream) return new Response("Stream not found", { status: 404 });

      const schedule = await getClosestSchedule(stream.userId, stream.id);
      if (schedule) {
        await db.schedule.update({
          where: { id: schedule.id },
          data: {
            isLive: true,
            status: "ONGOING",
          },
        });

        // Initialize participant tracking for this room
        const room = event.room?.sid;
        if (room) {
          participantData.set(room, {
            joined: new Set(),
            active: new Set()
          });
        }
      }
    }

    // Handle stream end
    if (event.event === "ingress_ended") {
      const stream = await handleStreamEvent(false);
      if (!stream) return new Response("Stream not found", { status: 404 });

      const schedule = await getClosestSchedule(stream.userId, stream.id);
      if (schedule) {
        const room = event.room?.sid;
        if (!room) return new Response("Missing room name", { status: 400 });

        const { joined = new Set(), active = new Set() } = participantData.get(room) || {};

        await db.schedule.update({
          where: { id: schedule.id },
          data: {
            isLive: false,
            status: "PAST",
            participantCount: joined.size,
            activeAtStreamEndCount: active.size,
          },
        });

        // Clean up
        participantData.delete(room);
      }
    }

    return new Response("Success!", { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}


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
//     return new Response("Error occurred -- no authorization headers", {
//       status: 400,
//     });
//   }

//   const event = receiver.receive(body, authorization);

//   const handleStreamEvent = async (isLive: boolean) => {
//     const stream = await db.stream.findUnique({
//       where: { ingressId: event.ingressInfo?.ingressId },
//       select: { userId: true },
//     });

//     if (!stream) return null;

//     await db.stream.update({
//       where: { ingressId: event.ingressInfo?.ingressId },
//       data: { isLive },
//     });

//     return stream;
//   };

//   const getClosestSchedule = async (userId: string) => {
//     const schedules = await db.schedule.findMany({
//       where: { userId },
//       orderBy: { eventDateTime: "asc" },
//     });

//     const now = new Date();

//     const isToday = (date: Date) =>
//       date.getFullYear() === now.getFullYear() &&
//       date.getMonth() === now.getMonth() &&
//       date.getDate() === now.getDate();

//     const todaysSchedules = schedules.filter((sch) =>
//       isToday(new Date(sch.eventDateTime))
//     );

//     if (todaysSchedules.length === 0) return null;

//     const upcoming = todaysSchedules.filter(
//       (s) => new Date(s.eventDateTime).getTime() > now.getTime()
//     );

//     if (upcoming.length > 0) {
//       return upcoming.sort(
//         (a, b) =>
//           new Date(a.eventDateTime).getTime() -
//           new Date(b.eventDateTime).getTime()
//       )[0];
//     }

//     // Fallback: Pick latest past schedule for today
//     const past = todaysSchedules.filter(
//       (s) => new Date(s.eventDateTime).getTime() <= now.getTime()
//     );

//     if (past.length > 0) {
//       return past.sort(
//         (a, b) =>
//           new Date(b.eventDateTime).getTime() -
//           new Date(a.eventDateTime).getTime()
//       )[0];
//     }

//     return null;
//   };

//   if (event.event === "ingress_started") {
//     const stream = await handleStreamEvent(true);
//     if (!stream) return new Response("Stream not found", { status: 404 });

//     const schedule = await getClosestSchedule(stream.userId);
//     if (schedule) {
//       await db.schedule.update({
//         where: { id: schedule.id },
//         data: {
//           isLive: true,
//           status: "ONGOING",
//         },
//       });
//     }
//   }

//   if (event.event === "ingress_ended") {
//     const stream = await handleStreamEvent(false);
//     if (!stream) return new Response("Stream not found", { status: 404 });

//     const schedule = await getClosestSchedule(stream.userId);
//     if (schedule) {
//       await db.schedule.update({
//         where: { id: schedule.id },
//         data: {
//           isLive: false,
//           status: "PAST",
//         },
//       });
//     }
//   }

//   return new Response("Success!", { status: 200 });
// }
