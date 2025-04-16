
'use server'

import { db } from '@/lib/db'
import { CreatePartnerData } from '@/lib/Validator/createStream.validator'
import { IndustryType } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export async function createPartner(formData: CreatePartnerData) {
  try {
    // Validate the industry type
    const industry = formData.industry.toUpperCase()
    if (!Object.values(IndustryType).includes(industry as IndustryType)) {
      return { 
        success: false, 
        message: 'Invalid industry type provided' 
      }
    }

    // Create the partner with direct industry type
    const partner = await db.partner.create({
      data: {
        companyName: formData.companyName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        description: formData.description,
        industry: industry as IndustryType, 
        logo: formData.logo || null, 
      },
    })

    // Optional: Update cached paths to reflect the new partner
    revalidatePath('/xontrol/partners')

    return { success: true, partnerId: partner.id }
  } catch (error: any) {
    console.error('createPartner error:', error)

    // Handle unique constraint error for email
    if (error.code === 'P2002') {
      return { success: false, message: 'Email already exists' }
    }

    return { 
      success: false, 
      message: error.message || 'Failed to create partner' 
    }
  }
}