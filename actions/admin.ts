

'use server'

import { db } from '@/lib/db'
import { getSelf } from "@/lib/auth-service";
import { revalidatePath } from 'next/cache';
import { REQUEST_STATUS } from '@prisma/client';

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


  export async function fetchAllCreatorRequests() {
    const session = await getSelf();
  
    if (!session || session.role !== "ADMIN") {
      throw new Error("Unauthorized");
    }
  
    const requests = await db.creatorRequest.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
    return requests;
  }


  
export async function updateCreatorRequestStatus({
  requestId,
  status,
}: {
  requestId: string;
  status: REQUEST_STATUS;
}) {
  const session = await getSelf();

  if (!session || session.role !== 'ADMIN') {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    const updated = await db.creatorRequest.update({
      where: { id: requestId },
      data: { status },
    });

    if (status === 'APPROVED') {
      await db.user.update({
        where: { id: updated.userId },
        data: { role: 'CREATOR' },
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Update failed:', error);
    return { success: false };
  }
}

export const revertUserRole = async (userId: string) => {
  try {
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: { role: 'USER' }, // Set role back to USER
    });

    if (!updatedUser) {
      return { success: false, error: 'User not found' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error reverting user role:', error);
    return { 
      success: false, 
      error: error instanceof Error 
        ? error.message 
        : 'Failed to revert user role' 
    };
  }
};




export const fetchAdminContactMessages = async () => {
  const session = await getSelf();

  // Optional: Only allow admins
  if (!session || session.role !== "ADMIN") {
    throw new Error("Unauthorized access")
  }

  try {
    const messages = await db.contactForm.findMany({
      orderBy: { createdAt: "desc" },
    })
    return messages
  } catch (error) {
    console.error("Failed to fetch contact messages:", error)
    throw new Error("Failed to fetch contact messages")
  }
}
