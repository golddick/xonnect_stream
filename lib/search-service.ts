



import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getSearch = async (term?: string) => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  // Stream search conditions
  const streamWhere: any = {
    OR: [
      {
        name: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        user: {
          username: {
            contains: term,
            mode: "insensitive",
          },
        },
      },
    ],
  };

  // Schedule search conditions
  const scheduleWhere: any = {
    OR: [
      {
        title: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        category: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        tags: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        user: {
          username: {
            contains: term,
            mode: "insensitive",
          },
        },
      },
    ],
  };

  // Blocked user filter if logged in
  if (userId) {
    streamWhere.user = {
      NOT: {
        blocking: {
          some: {
            blockedId: userId,
          },
        },
      },
    };

    scheduleWhere.user = {
      NOT: {
        blocking: {
          some: {
            blockedId: userId,
          },
        },
      },
    };
  }

  // Fetch data in parallel
  const [streams, schedules] = await Promise.all([
    db.stream.findMany({
      where: streamWhere,
      select: {
        user: true,
        id: true,
        name: true,
        isLive: true,
        thumbnailUrl: true,
        updatedAt: true,
      },
      orderBy: [{ isLive: "desc" }, { updatedAt: "desc" }],
    }),
    db.schedule.findMany({
      where: scheduleWhere,
      select: {
        id: true,
        title: true,
        category: true,
        tags: true,
        amount: true,
        eventDateTime: true,
        isLive: true,
        thumbnailImage: true,
        thumbnailVideo: true,
        user: true,
        updatedAt: true,
      },
      orderBy: { eventDateTime: "asc" },
    }),
  ]);

  return {
    streams,
    schedules,
  };
};
