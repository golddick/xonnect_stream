// 'use server'

// import { getSelf } from "@/lib/auth-service";
// import { db } from '@/lib/db'
// import { getAvailablePhysicalSlots } from "@/lib/schedule-service";

// export const getAdminScheduleSummary = async () => {
//     const session = await getSelf()
  
//     if (!session || session.role !== 'ADMIN') {
//       throw new Error('Unauthorized')
//     }
  
//     const schedules = await db.schedule.findMany({
//       include: {
//         payments: {
//           where: { status: 'SUCCESSFUL' },
//           select: { amount: true },
//         },
//         physicalTicket: {
//           where: { status: 'SUCCESSFUL' },
//           select: { amount: true },
//         },
//       },
//     })
  
//     let totalStreamRevenue = 0
//     let totalPhysicalRevenue = 0
  
//     const events = await Promise.all(
//       schedules.map(async (schedule) => {
//         const streamTotal = schedule.payments.reduce((sum, p) => sum + p.amount, 0)
//         const physicalTotal = schedule.physicalTicket.reduce((sum, p) => sum + p.amount, 0)
  
//         const slots = await getAvailablePhysicalSlots(schedule.id)
  
//         totalStreamRevenue += streamTotal
//         totalPhysicalRevenue += physicalTotal
  
//         return {
//           id: schedule.id,
//           name: schedule.title,
//           date: schedule.eventDateTime,
//           physicalTotal,
//           streamTotal,
//           totalRevenue: physicalTotal + streamTotal,
//           physicalSlots: slots,
//         }
//       })
//     )
  
//     return {
//       events,
//       totals: {
//         totalStreamRevenue,
//         totalPhysicalRevenue,
//         combinedTotal: totalStreamRevenue + totalPhysicalRevenue,
//       },
//     }
//   }



'use server'

import { db } from '@/lib/db'
import { getSelf } from "@/lib/auth-service";

const PLATFORM_FEE_PERCENTAGE = 0.3 // 30%

export const getAvailablePhysicalSlots = async (scheduleId: string) => {
  const schedule = await db.schedule.findUnique({
    where: { id: scheduleId },
    select: {
      availableSlots: true,
      remainingSlots: true,
    },
  });

  if (!schedule) throw new Error('Schedule not found');

  return {
    totalSlots: schedule.availableSlots ?? 0,
    remainingSlots: schedule.remainingSlots ?? 0,
  };
};



export const getAdminScheduleSummary = async () => {
    const session = await getSelf()
  
    if (!session || session.role !== 'ADMIN') {
      throw new Error('Unauthorized')
    }
  
    const schedules = await db.schedule.findMany({
      include: {
        payments: {
          where: { status: 'SUCCESSFUL' },
          select: { amount: true },
        },
        physicalTicket: {
          where: { status: 'SUCCESSFUL' },
          select: { amount: true },
        },
      },
    })
  
    let totalRawStreamRevenue = 0
    let totalRawPhysicalRevenue = 0
  
    const events = await Promise.all(
      schedules.map(async (schedule) => {
        const streamTotalRaw = schedule.payments.reduce((sum, p) => sum + p.amount, 0)
        const physicalTotalRaw = schedule.physicalTicket.reduce((sum, p) => sum + p.amount, 0)
  
        const streamNet = streamTotalRaw * (1 - PLATFORM_FEE_PERCENTAGE)
        const physicalNet = physicalTotalRaw * (1 - PLATFORM_FEE_PERCENTAGE)
  
        totalRawStreamRevenue += streamTotalRaw
        totalRawPhysicalRevenue += physicalTotalRaw
  
        const slots = await getAvailablePhysicalSlots(schedule.id)
  
        return {
          id: schedule.id,
          name: schedule.title,
          date: schedule.eventDateTime,
          slots,
          originalPrices: {
            stream: schedule.amount ?? 0,
            physical: schedule.physicalTicketAmount ?? 0,
          },
          totals: {
            stream: {
              raw: streamTotalRaw,
              net: streamNet,
            },
            physical: {
              raw: physicalTotalRaw,
              net: physicalNet,
            },
            combined: {
              raw: streamTotalRaw + physicalTotalRaw,
              net: streamNet + physicalNet,
            },
          },
        }
      })
    )
  
    const totalNetStreamRevenue = totalRawStreamRevenue * (1 - PLATFORM_FEE_PERCENTAGE)
    const totalNetPhysicalRevenue = totalRawPhysicalRevenue * (1 - PLATFORM_FEE_PERCENTAGE)
  
    return {
      events,
      totals: {
        stream: {
          raw: totalRawStreamRevenue,
          net: totalNetStreamRevenue,
        },
        physical: {
          raw: totalRawPhysicalRevenue,
          net: totalNetPhysicalRevenue,
        },
        combined: {
          raw: totalRawStreamRevenue + totalRawPhysicalRevenue,
          net: totalNetStreamRevenue + totalNetPhysicalRevenue,
        },
      },
    }
  }

// export const getAdminScheduleSummary = async () => {
//   const session = await getSelf();

//   if (!session || session.role !== 'ADMIN') {
//     throw new Error('Unauthorized');
//   }

//   const schedules = await db.schedule.findMany({
//     include: {
//       payments: {
//         where: { status: 'SUCCESSFUL' },
//         select: { amount: true },
//       },
//       physicalTicket: {
//         where: { status: 'SUCCESSFUL' },
//         select: { amount: true },
//       },
//     },
//   });

//   let totalRawStreamRevenue = 0;
//   let totalRawPhysicalRevenue = 0;

//   const events = await Promise.all(
//     schedules.map(async (schedule) => {
//       const streamTotalRaw = schedule.payments.reduce((sum, p) => sum + p.amount, 0);
//       const physicalTotalRaw = schedule.physicalTicket.reduce((sum, p) => sum + p.amount, 0);

//       const streamNet = streamTotalRaw * (1 - PLATFORM_FEE_PERCENTAGE);
//       const physicalNet = physicalTotalRaw * (1 - PLATFORM_FEE_PERCENTAGE);

//       totalRawStreamRevenue += streamTotalRaw;
//       totalRawPhysicalRevenue += physicalTotalRaw;

//       const slots = await getAvailablePhysicalSlots(schedule.id);

//       return {
//         id: schedule.id,
//         name: schedule.title,
//         date: schedule.eventDateTime,
//         slots,
//         totals: {
//           stream: {
//             raw: streamTotalRaw,
//             net: streamNet,
//           },
//           physical: {
//             raw: physicalTotalRaw,
//             net: physicalNet,
//           },
//           combined: {
//             raw: streamTotalRaw + physicalTotalRaw,
//             net: streamNet + physicalNet,
//           },
//         },
//       };
//     })
//   );

//   const totalNetStreamRevenue = totalRawStreamRevenue * (1 - PLATFORM_FEE_PERCENTAGE);
//   const totalNetPhysicalRevenue = totalRawPhysicalRevenue * (1 - PLATFORM_FEE_PERCENTAGE);

//   return {
//     events,
//     totals: {
//       stream: {
//         raw: totalRawStreamRevenue,
//         net: totalNetStreamRevenue,
//       },
//       physical: {
//         raw: totalRawPhysicalRevenue,
//         net: totalNetPhysicalRevenue,
//       },
//       combined: {
//         raw: totalRawStreamRevenue + totalRawPhysicalRevenue,
//         net: totalNetStreamRevenue + totalNetPhysicalRevenue,
//       },
//     },
//   };
// };
