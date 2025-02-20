import * as z from 'zod';

export const CreateScheduleStreamSchema = z.object({
  tittle: z.string({
      message:'Add Event Name'
    }),
    description: z.string({
      message:'Add Event Description'
    }),
    address: z.string({
      message:'Event Location Needed'
    }),
    eventDateTime: z.date(),
    amount: z.string().optional(), 
    isFree: z.boolean().default(false),
    artists: z.string(),
    organizers: z.string(),
    eventImg: z.string().optional(),
    thumbVideo: z.string().optional(),
  
    
  });
  