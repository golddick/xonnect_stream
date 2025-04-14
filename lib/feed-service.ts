import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getStreams = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let streams = [];

  if (userId) {
    streams = await db.stream.findMany({
      where: {
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      },
      select: {
        thumbnailUrl: true,
        name: true,
        isLive: true,
        user: true,
        id: true,
        
      },
      orderBy: [{ isLive: "desc" }, { updatedAt: "desc" }],
    });
  } else {
    streams = await db.stream.findMany({
      select: {
        thumbnailUrl: true,
        name: true,
        isLive: true,
        user: true,
        id: true,
      },
      orderBy: [{ isLive: "desc" }, { updatedAt: "desc" }],
    });
  }

  return streams;
};




export const getTopStreams = async () => {
  let userId: string | null = null

  try {
    const self = await getSelf()
    userId = self.id
  } catch {
    userId = null
  }

  // Step 1: Get top users by follower count excluding current user
  const topUsers = await db.user.findMany({
    where: {
      ...(userId && { id: { not: userId } }), // exclude current user
    },
    orderBy: {
      followedBy: {
        _count: 'desc',
      },
    },
    take: 6,
    select: {
      id: true,
    },
  })

  const topUserIds = topUsers.map((user) => user.id)

  // Step 2: Get latest streams from top users
  const streams = await db.stream.findMany({
    where: {
      userId: {
        in: topUserIds,
      },
      ...(userId && {
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      }),
    },
    select: {
      id: true,
      name: true,
      thumbnailUrl: true,
      isLive: true,
      user: true,
    },
    orderBy: [
      { isLive: 'desc' },
      { updatedAt: 'desc' },
    ],
    take: 6,
  })

  return streams
}
