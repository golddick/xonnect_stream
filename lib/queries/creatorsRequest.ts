import { db } from "../db"


export const getCreatorRequests = async () => {
  return await db.creatorRequest.findMany({
    include: {
      user: true, // ✅ this includes full user object
    },
  })
}

// 👇 You export the type directly from the result
export type CreatorRequestWithUser = Awaited<ReturnType<typeof getCreatorRequests>>[number]
