'use server'

import { db } from './db'

export const getPartners = async () => {
  try {
    const partners = await db.partner.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return partners
  } catch (error) {
    console.error('Error fetching partners:', error)
    return []
  }
}



export const updatePartnerStatus = async ({
  partnerId,
  status,
}: {
  partnerId: string
  status: 'APPROVED' | 'REJECTED' | 'PENDING'
}) => {
  try {
    const updated = await db.partner.update({
      where: { id: partnerId },
      data: { status },
    })

    return { success: true, updated }
  } catch (error) {
    console.error('Update partner status error:', error)
    return { success: false, message: 'Something went wrong.' }
  }
}


import { IndustryType, Partner } from '@prisma/client'

// Helper to group by enum value
function groupBy<T>(array: T[], key: keyof T) {
  return array.reduce((result: Record<string, T[]>, item) => {
    const groupKey = item[key] as string
    if (!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item)
    return result
  }, {})
}

export async function getPartnersByIndustry(): Promise<
  {
    type: IndustryType
    count: number
    partners: Partner[]
  }[]
> {
  try {
    const approvedPartners = await db.partner.findMany({
      where: { status: 'APPROVED' },
      orderBy: { createdAt: 'desc' },
    })

    const grouped = groupBy(approvedPartners, 'industry')

    return Object.entries(grouped).map(([industry, partners]) => ({
      type: industry as IndustryType,
      count: partners.length,
      partners,
    }))
  } catch (err) {
    console.error('Failed to group partners:', err)
    return []
  }
}


export async function getApprovedPartners(): Promise<Partner[]> {
    try {
      const partners = await db.partner.findMany({
        where: { status: 'APPROVED' },
        orderBy: { createdAt: 'desc' },
      })
      return partners
    } catch (err) {
      console.error('Error fetching approved partners:', err)
      return []
    }
  }