'use server';

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

// export async function submitReview({
//   userId,
//   streamId,
//   rating,
//   comment,
// }: {
//   userId: string;
//   streamId: string;
//   rating: number;
//   comment: string;
// }) {
//   if (!userId || !streamId || !comment) {
//     throw new Error('Missing required fields');
//   }

//   const review = await db.review.create({
//     data: {
//       externalUserId: userId,
//       streamId,
//       rating,
//       comment,
//     },
//   });

//    revalidatePath(`/`);
//    revalidatePath(`/(xmin/xontrol/review)`);

//   return review;
// }









export async function submitReview({
  userId, // Clerk ID
  streamId,
  rating,
  comment,
}: {
  userId: string;
  streamId: string;
  rating: number;
  comment: string;
}) {
  if (!userId || !streamId || !comment) {
    throw new Error("Missing required fields");
  }

  // 🔍 Find internal user.id using externalUserId
  const user = await db.user.findUnique({
    where: {
      externalUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found in database");
  }

  const review = await db.review.create({
    data: {
      userId: user.id, // ✅ use internal DB id
      streamId,
      rating,
      comment,
    },
  });

  revalidatePath(`/`);
  revalidatePath(`/(xmin/xontrol/review)`);

  return review;
}
