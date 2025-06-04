'use server';

import { db } from "./db";


export async function getApprovedReviews() {
  return await db.review.findMany({
    where: {
      AdminReviewDisplay: true,
    },
    include: {
      user: {
        select: { username: true, imageUrl: true },
      },
      stream: {
        select: { name: true, id: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
