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

// Store joined and active participants
const joinedParticipantMap = new Map<string, Set<string>>();
const activeParticipantMap = new Map<string, Set<string>>();

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
    const stream = await db.stream.findUnique({
      where: { ingressId: event.ingressInfo?.ingressId },
      select: { userId: true },
    });

    if (!stream) return null;

    await db.stream.update({
      where: { ingressId: event.ingressInfo?.ingressId },
      data: { isLive },
    });

    return stream;
  };

  const getClosestSchedule = async (userId: string) => {
    const schedules = await db.schedule.findMany({
      where: { userId },
      orderBy: { eventDateTime: "asc" },
    });

    const now = new Date();

    const isToday = (date: Date) =>
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate();

    const todaysSchedules = schedules.filter((sch) =>
      isToday(new Date(sch.eventDateTime))
    );

    if (todaysSchedules.length === 0) return null;

    const upcoming = todaysSchedules.filter(
      (s) => new Date(s.eventDateTime).getTime() > now.getTime()
    );

    if (upcoming.length > 0) {
      return upcoming.sort(
        (a, b) =>
          new Date(a.eventDateTime).getTime() -
          new Date(b.eventDateTime).getTime()
      )[0];
    }

    // Fallback: Pick latest past schedule for today
    const past = todaysSchedules.filter(
      (s) => new Date(s.eventDateTime).getTime() <= now.getTime()
    );

    if (past.length > 0) {
      return past.sort(
        (a, b) =>
          new Date(b.eventDateTime).getTime() -
          new Date(a.eventDateTime).getTime()
      )[0];
    }

    return null;
  };

  if (event.event === "ingress_started") {
    const stream = await handleStreamEvent(true);
    if (!stream) return new Response("Stream not found", { status: 404 });

    const schedule = await getClosestSchedule(stream.userId);
    if (schedule) {
      await db.schedule.update({
        where: { id: schedule.id },
        data: {
          isLive: true,
          status: "ONGOING",
        },
      });

      // Initialize maps
      joinedParticipantMap.set(schedule.id, new Set());
      activeParticipantMap.set(schedule.id, new Set());
    }
  }

if (event.event === "ingress_ended") {
  const stream = await handleStreamEvent(false);
  if (!stream) return new Response("Stream not found", { status: 404 });

  const schedule = await getClosestSchedule(stream.userId);
  if (schedule) {
    const room = event.room?.name;
    if (!room) return new Response("Missing room name", { status: 400 });

    const joined = joinedParticipantMap.get(room) ?? new Set();
    const active = activeParticipantMap.get(room) ?? new Set();

    await db.schedule.update({
      where: { id: schedule.id },
      data: {
        isLive: false,
        status: "PAST",
        participantCount: joined.size,
        activeAtStreamEndCount: active.size,
      },
    });

    joinedParticipantMap.delete(room);
    activeParticipantMap.delete(room);
  }
}


  if (event.event === "participant_joined") {
   const room = event.room?.name;
    const participant = event.participant;
    if (!room || !participant?.identity) return new Response("Missing data", { status: 400 });

    // Update both sets
    if (!joinedParticipantMap.has(room)) joinedParticipantMap.set(room, new Set());
    if (!activeParticipantMap.has(room)) activeParticipantMap.set(room, new Set());

    joinedParticipantMap.get(room)!.add(participant.identity);
    activeParticipantMap.get(room)!.add(participant.identity);
  }

  if (event.event === "participant_left") {
    const room = event.room?.name;
    const participant = event.participant;
    if (!room || !participant?.identity) return new Response("Missing data", { status: 400 });

    const active = activeParticipantMap.get(room);
    if (active) {
      active.delete(participant.identity);
    }
  }

  return new Response("Success!", { status: 200 });
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
