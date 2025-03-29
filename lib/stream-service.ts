import { db } from "@/lib/db";

export const getStreamByUserId = async (userId: string) => {
  const stream = await db.stream.findUnique({
    where: {
      userId,
    },
  });

  return stream;
};

export const getLiveStreams = async () => {
  try {
    const streams = await db.stream.findMany({
      where: {
        isLive: true
      },
      include: {
        user: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return streams;
  } catch (error) {
    console.error("Error fetching live streams:", error);
    return [];
  }
};