// "use server";

// import { db } from "@/lib/db";
// import { revalidatePath } from "next/cache";



// // Admin approves
// export async function approveCreatorRequest(requestId: string) {
//   const session = await auth();

//   if (session?.user?.role !== "ADMIN") {
//     throw new Error("Forbidden");
//   }

//   const request = await db.creatorRequest.update({
//     where: { id: requestId },
//     data: { status: "APPROVED" },
//   });

//   await db.user.update({
//     where: { id: request.userId },
//     data: { role: "CREATOR" },
//   });

//   revalidatePath("/admin/creator-requests");
// }

// // Admin denies
// export async function denyCreatorRequest(requestId: string) {
//   const session = await auth();

//   if (session?.user?.role !== "ADMIN") {
//     throw new Error("Forbidden");
//   }

//   await db.creatorRequest.update({
//     where: { id: requestId },
//     data: { status: "DENIED" },
//   });

//   revalidatePath("/admin/creator-requests");
// }
