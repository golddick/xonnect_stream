import * as z from 'zod';


export const CreateScheduleStreamSchema = z.object({
  title: z.string({
      message:'Add Event Name'
    }),
    description: z.string({
      message:'Add Event Description'
    }),
    address: z.string({
      message:'Event Location Needed'
    }),
    category: z.string({
      message:'Event category Needed'
    }),
    eventDateTime: z.date(),
    amount: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).optional(),
    isFree: z.boolean().default(false),
    artists: z.string(),
    tags: z.string(),
    TicketType: z.string(),
    sellPhysicalTicket: z.boolean().default(false),
    physicalTicketAmount: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).optional(),
    availableSlots: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).optional(),
    organizers: z.string(),
    orgEmail: z.string({
      message:'Add Organization Email'
    }),
    thumbnailImage: z.string().optional(),
    thumbnailVideo: z.string().optional(),
  
    
  });

  export const EditScheduleStreamSchema = z.object({
    title: z.string().optional(),
      description: z.string().optional(),
      address: z.string().optional(),
      eventDateTime: z.date().optional(),
      amount: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).optional(),
      isFree: z.boolean().default(false),
      artists: z.string().optional(),
      organizers: z.string().optional(),
      physicalTicketAmount: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).optional(),
      availableSlots: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).optional(),
      thumbnailImage: z.string().optional(),
      thumbnailVideo: z.string().optional(),
      orgEmail: z.string().optional(),
      tags: z.string().optional(),
      category: z.string().optional(),
    
      
    });


  export const CreatePartner = z.object({
      companyName: z.string(),
      contactName: z.string(),
      email: z.string({
        message:'Partner must add email'
      }),
      phone: z.string(),
      logo: z.string(),
      website: z.string().optional(),
      description: z.string().optional(),
      industry: z.string(),
    
      
    });

    export type CreatePartnerData = {
      companyName: string;
      contactName: string;
      email: string;
      phone: string;
      logo: string;
      website?: string;
      description?: string;
      industry: string;
    };
    