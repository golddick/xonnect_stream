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

    const todaysSchedules = schedules.filter(sch =>
      isToday(new Date(sch.eventDateTime))
    );

    if (todaysSchedules.length === 0) return null;

    const live = todaysSchedules.filter(s =>
      new Date(s.eventDateTime).getTime() <= now.getTime() && s.isLive
    );
    if (live.length > 0) {
      return live.sort((a, b) =>
        new Date(b.eventDateTime).getTime() - new Date(a.eventDateTime).getTime()
      )[0];
    }

    const upcoming = todaysSchedules.filter(s =>
      new Date(s.eventDateTime).getTime() > now.getTime()
    );
    if (upcoming.length > 0) {
      return upcoming.sort((a, b) =>
        new Date(a.eventDateTime).getTime() - new Date(b.eventDateTime).getTime()
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
    }
  }

  if (event.event === "ingress_ended") {
    const stream = await handleStreamEvent(false);
    if (!stream) return new Response("Stream not found", { status: 404 });

    const schedule = await getClosestSchedule(stream.userId);
    if (schedule) {
      await db.schedule.update({
        where: { id: schedule.id },
        data: { 
          isLive: false,
          status: "PAST",
         },
      });
    }
  }

  return new Response("Success!", { status: 200 });
}



