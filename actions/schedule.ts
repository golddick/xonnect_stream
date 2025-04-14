"use server";

import { Prisma, Schedule } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const createScheduledStream = async (values: Partial<Schedule>) => {
    try {
      const self = await getSelf();


      console.log("Values received for scheduling stream:", values);

  
      // Validate required fields
      if (!values.title || !values.address || !values.eventDateTime|| !values.orgEmail  || !self.id || !values.category) {
        throw new Error("Missing required fields ");
      }

      const selfStream = await db.stream.findUnique({
        where: {
          userId: self.id,
        },
      });
  
      // Build the schedule data
      const scheduleData: Prisma.ScheduleCreateInput = {
        title: values.title,
        address: values.address,
        description: values.description || null,
        eventDateTime: new Date(values.eventDateTime),
        amount: values.amount,
        isFree: values.isFree,
        physicalTicketAmount:values.physicalTicketAmount,
        availableSlots:values.availableSlots,
        category:values.category,
        TicketType:values.TicketType,
        remainingSlots:values.availableSlots,
        tags: values.tags,
        thumbnailImage: values.thumbnailImage || null,
        thumbnailVideo: values.thumbnailVideo || null,
        artists: values.artists || null,
        organizers: values.organizers || null,
        orgEmail:values.orgEmail,
        streamId: self.streamId || selfStream?.id || '',
        user: {
          connect: { id: self.id }, 
        },
        payments:{
          create:{
            name:`creator ${self.username}`,
            status:'SUCCESSFUL',
            amount:values.amount || 0,
            email:self.email,
            externalUserId:self.externalUserId,
            streamId:self.streamId || selfStream?.id
            
          }
        }
       
      };
      
  
      // Create the schedule in the database
      const schedule = await db.schedule.create({
        data: scheduleData,
      });
  
      // Optionally revalidate the user's page or schedule-related pages
      revalidatePath(`/u/${self.username}/schedule`);
      revalidatePath(`/u/${self.username}`);
  
      return schedule;
    } catch (error) {
      console.error("createScheduledStream", error);
      throw new Error("Internal server error");
    }
  }


// Function to update an existing schedule
export const updateScheduledStream = async (scheduleID: string, values: Partial<Schedule>) => {
  try {
    const self = await getSelf(); 

    // Find the existing schedule to update
    const schedule = await db.schedule.findUnique({
      where: { id: scheduleID },
    });

    if (!schedule) {
      throw new Error("Schedule not found");
    }

    const selfStream = await db.stream.findUnique({
      where: {
        userId: self.id,
      },
    });

    // Check if the user is the one who created the schedule
    if (schedule.userId !== self.id) {
      throw new Error("You are not authorized to edit this schedule");
    }

    // Prepare the updated data
    const updatedData = {
      title: values.title || schedule.title,
      address: values.address || schedule.address,
      description: values.description || schedule.description,
      eventDateTime: values.eventDateTime || schedule.eventDateTime,
      category:values.category || schedule.category,
      tags: values.tags || schedule.tags,
      TicketType:values.TicketType || schedule.TicketType,
      amount: values.amount || schedule.amount,
      physicalTicketAmount:values.physicalTicketAmount || schedule.physicalTicketAmount,
      availableSlots:values.availableSlots || schedule.availableSlots,
      isFree: values.isFree || schedule.isFree,
      thumbnailImage: values.thumbnailImage || schedule.thumbnailImage,
      thumbnailVideo: values.thumbnailVideo || schedule.thumbnailVideo,
      artists: values.artists || schedule.artists,
      organizers: values.organizers || schedule.organizers,
      orgEmail:values.orgEmail || schedule.orgEmail,
      streamId:  selfStream?.id || schedule.streamId,
      
    };

    // Update the schedule in the database
    const updatedSchedule = await db.schedule.update({
      where: { id: scheduleID },
      data: updatedData,
    });

    // Revalidate paths for caching updates
    revalidatePath(`/u/${self.username}/schedule/${scheduleID}`);
    revalidatePath(`/u/${self.username}`);

    return updatedSchedule;
  } catch (error) {
    console.error("updateScheduledStream", error);
    throw new Error("Internal server error");
  }
};

export const updateScheduleWithFiles = async (scheduleId: string, fileUrls: string[]) => {
  try {
    const self = await getSelf(); 

    // Find the existing schedule to ensure it exists and the user is authorized
    const schedule = await db.schedule.findUnique({
      where: { id: scheduleId },
    });

    if (!schedule) {
      throw new Error('Schedule not found');
    }

    // Check if the user is the one who created the schedule
    if (schedule.userId !== self.id) {
      throw new Error('You are not authorized to edit this schedule');
    }

    // Create new ScheduleFileUpload records for the uploaded files
    await db.scheduleFileUpload.createMany({
      data: fileUrls.map((url) => ({
        scheduleId,
        ImageURL: url,
      })),
    });

    // Revalidate paths after adding files
    revalidatePath(`/u/${self.username}/schedule/${scheduleId}`);
    revalidatePath(`/schedule/${scheduleId}`);
    revalidatePath(`/u/${self.username}`);

    return { message: "Schedule file uploaded successfully" };
  } catch (error) {
    console.error('Error updating schedule with files:', error);
    throw new Error('Failed to update schedule with files.');
  }
};



// Function to delete a scheduled stream
export const deleteScheduledStream = async (scheduleId: string) => {
  try {
    const self = await getSelf();

    // Find the schedule to delete
    const schedule = await db.schedule.findUnique({
      where: { id: scheduleId },
    });

    if (!schedule) {
      throw new Error("Schedule not found");
    }

    // Check if the user is the one who created the schedule
    if (schedule.userId !== self.id) {
      throw new Error("You are not authorized to delete this schedule");
    }

    // Delete the schedule from the database
    await db.schedule.delete({
      where: { id: scheduleId },
    });

    // Revalidate paths after deletion
    revalidatePath(`/u/${self.username}/schedule`);
    revalidatePath(`/u/${self.username}`);

    return { message: "Schedule deleted successfully" };
  } catch (error) {
    console.error("deleteScheduledStream", error);
    throw new Error("Internal server error");
  }
};



export const createComment = async (scheduleId: string, content: string) => {
  try {
    const self = await getSelf();

    const schedule = await db.schedule.findUnique({
      where: { id: scheduleId },
    });

    if (!schedule) {
      throw new Error("Schedule not found");
    }

    const comment = await db.comment.create({
      data: {
        content,
        userId: self.id,
        scheduleId,
      },
    });

    revalidatePath(`/schedule/${scheduleId}`);

    return { message: "Comment created successfully", comment };
  } catch (error) {
    console.error("createComment error", error);
    throw new Error("Internal server error");
  }
};



export async function createReply(commentId: string, content: string) {
  const user = await getSelf()
  if (!user) throw new Error('Not authenticated')

    const parentComment = await db.comment.findUnique({
      where: { id: commentId },
    });

    if (!parentComment) {
      throw new Error("Parent comment not found");
    }

  const reply = await db.reply.create({
    data: {
      commentId,
      userId: user.id,
      content
    },
    include: {
      user: true
    }
  })

  revalidatePath(`/Event/${parentComment.scheduleId}`);

  return { message: "Reply created successfully", reply };

}




export const likeComment = async (commentId: string) => {
  const user = await getSelf()
  if (!user) throw new Error('Not authenticated')

  const existingLike = await db.commentLike.findFirst({
    where: {
      commentId,
      userId: user.id,
    },
  })

  if (existingLike) return // Prevent duplicate likes

  const like = await db.commentLike.create({
    data: {
      commentId,
      userId: user.id,
    },
  })

  return like
}

export const unlikeComment = async (commentId: string) => {
  const user = await getSelf()
  if (!user) throw new Error('Not authenticated')

  await db.commentLike.deleteMany({
    where: {
      commentId,
      userId: user.id,
    },
  })
}

