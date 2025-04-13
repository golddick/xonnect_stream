// "use server";

// // /actions/reminders.ts
// import { currentUser } from "@clerk/nextjs/server"
// import { db } from "@/lib/db"
// import { scheduleReminderEmail } from "@/lib/email/scheduler"

// export const setEventReminder = async ({
//   scheduleId,
//   title,
//   date,
//   enable,
// }: {
//   scheduleId: string
//   title: string
//   date: string
//   enable: boolean
// }) => {
//   const user = await currentUser()

//   if (!user) {
//     return { success: false, message: "Not authenticated" }
//   }

//   const email = user.emailAddresses[0]?.emailAddress
//   if (!email) {
//     return { success: false, message: "Missing user email" }
//   }

//   if (enable) {
//     const reminderTime = new Date(new Date(date).getTime() - 30 * 60 * 1000) // 30 min before event

//     await db.reminder.upsert({
//       where: {
//         userId_scheduleId: {
//           userId: user.id,
//           scheduleId: scheduleId,
//         },
//       },
//       update: {
//         scheduledFor: reminderTime,
//         sent: false,
//       },
//       create: {
//         userId: user.id,
//         scheduleId: scheduleId,
//         email: email,
//         scheduledFor: reminderTime,
//       },
//     })

//     await scheduleReminderEmail({
//       email,
//       eventId: scheduleId,
//       eventTitle: title,
//       eventDateTime: date,
//       userId: user.id,
//     })
//   } else {
//     await db.reminder.deleteMany({
//       where: {
//         userId: user.id,
//         scheduleId,
//         sent: false,
//       },
//     })
//   }

//   return { success: true }
// }
