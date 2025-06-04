import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

// Function to get all schedules
export const getSchedules = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let schedules = [];

  if (userId) {
    schedules = await db.schedule.findMany({
      where: {
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      },
      select: {
        thumbnailImage: true,
        thumbnailVideo:true,
        amount:true,
        physicalTicketAmount:true,
        isPriority:true,
        status:true,
        availableSlots:true,
        remainingSlots:true,
        TicketType:true,
        address:true,
        artists:true,
        perticipant:true,
        organizers:true,
        orgEmail:true,
        category:true,
        tags:true,
        description:true,
        title: true,
        eventDateTime: true,
        user: true,
        id: true,
        userId: true, 
        streamId: true, 
        isLive: true,
        isFree:true,
        createdAt: true, 
        updatedAt: true,
        fileUploads:{
          select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            scheduleId: true,
            ImageURL: true,
          }
        }
      },
      orderBy: [{ eventDateTime: "desc" }, { updatedAt: "desc" }],
    });
  } else {
    schedules = await db.schedule.findMany({
      select: {
        thumbnailImage: true,
        thumbnailVideo:true,
        amount:true,
        physicalTicketAmount:true,
        availableSlots:true,
        remainingSlots:true,
        TicketType:true,
        isPriority:true,
        status:true,
        address:true,
        artists:true,
        organizers:true,
        perticipant:true,
        category:true,
        tags:true,
        orgEmail:true,
        description:true,
        title: true,
        eventDateTime: true,
        user: true,
        id: true,
        userId: true, 
        streamId: true, 
        isLive: true,
        isFree:true,
        createdAt: true, 
        updatedAt: true,
        fileUploads:{
          select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            scheduleId: true,
            ImageURL: true,
          }
        }
      },
      orderBy: [{ eventDateTime: "desc" }, { updatedAt: "desc" }],
    });
  }

  return schedules;
};


// Function to get schedules for a specific user or all users if no id is provided
export const getSchedulesByUserID = async (userId?: string | null) => {
  // If no userId is passed, attempt to get the user from the current session
  if (!userId) {
    try {
      const self = await getSelf();
      userId = self.id;
    } catch {
      userId = null;
    }
  }

  let schedules = [];

  // Fetch schedules based on the userId (either the one from session or passed as an argument)
  if (userId) {
    schedules = await db.schedule.findMany({
      where: {
        userId,
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      },
      select: {
        thumbnailImage: true,
        thumbnailVideo: true,
        amount: true,
        physicalTicketAmount:true,
        availableSlots:true,
        remainingSlots:true,
        TicketType:true,
        address: true,
        isPriority:true,
        status:true,
        artists: true,
        category:true,
        perticipant:true,
        tags:true,
        organizers: true,
        orgEmail:true,
        description: true,
        title: true,
        eventDateTime: true,
        user: true,
        id: true,
        userId: true,
        streamId: true,
        isLive: true,
        isFree: true,
        createdAt: true,
        updatedAt: true,
        fileUploads:{
          select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            scheduleId: true,
            ImageURL: true,
          }
        }
      },
      orderBy: [{ eventDateTime: "desc" }, { updatedAt: "desc" }],
    });
  } else {
    // If no userId is available, fetch schedules for all users
    schedules = await db.schedule.findMany({
      select: {
        thumbnailImage: true,
        thumbnailVideo: true,
        amount: true,
        physicalTicketAmount:true,
        availableSlots:true,
        remainingSlots:true,
        TicketType:true,
        address: true,
        isPriority:true,
        status:true,
        artists: true,
        organizers: true,
        perticipant:true,
        category:true,
        tags:true,
        orgEmail:true,
        description: true,
        title: true,
        eventDateTime: true,
        user: true,
        id: true,
        userId: true,
        streamId: true,
        isLive: true,
        isFree: true,
        createdAt: true,
        updatedAt: true,
        fileUploads:{
          select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            scheduleId: true,
            ImageURL: true,
          }
        }
      },
      orderBy: [{ eventDateTime: "desc" }, { updatedAt: "desc" }],
    });
  }

  return schedules;
};


// Function to get a specific schedule by its ID
export const getScheduleById = async (scheduleId: string) => {
  const schedule = await db.schedule.findUnique({
    where: {
      id: scheduleId,
    },
    select: {
      thumbnailImage: true,
        thumbnailVideo:true,
        amount:true,
        address:true,
        artists:true,
        physicalTicketAmount:true,
        isPriority:true,
        status:true,
        availableSlots:true,
        remainingSlots:true,
        TicketType:true,
        organizers:true,
        perticipant:true,
        category:true,
        tags:true,
        orgEmail:true,
        description:true,
        title: true,
        eventDateTime: true,
        user: {
          select:{
            username:true,
            imageUrl:true,
            followedBy:true,
            following:true,
            id:true,
            externalUserId:true,
            schedules:true,
            instagram:true,
            twitter:true,
            youtube:true,
            email:true,
          }
        },
        id: true,
        userId: true, 
        streamId: true, 
        isLive: true,
        isFree:true,
        createdAt: true, 
        updatedAt: true,
        fileUploads:{
          select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            scheduleId: true,
            ImageURL: true,
          }
        },
        comments:{
          select:{
            id:true,
            content:true,
            userId:true,
            createdAt:true,
            user:{
              select:{
                id:true,
                imageUrl:true,
                username:true
              }
            },
            replies:{
              select:{
                id:true,
                content:true,
                createdAt:true,
                user:{
                  select:{
                    id:true,
                    imageUrl:true,
                    username:true
                  }
                }
              }
            },
            likes:true
          }
        }
    },
  });

  return schedule;
};


export const getComments = async (scheduleId: string) => {
  try {
    const comments = await db.comment.findMany({
      where: { scheduleId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            imageUrl: true,
            instagram: true,
          }
        },
        schedule: true,
        replies: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                imageUrl: true,
                instagram: true,
              }
            }
          },
          orderBy: { createdAt: 'asc' }
        },
        likes: true
      },
      orderBy: { createdAt: 'desc' }
    });

    // ✅ MAKE SURE TO RETURN THE MAPPED COMMENTS
    return comments.map(comment => ({
      ...comment,
      replies: comment.replies.map(reply => ({
        ...reply,
        commentId: reply.commentId
      }))
    }));
  } catch (error) {
    console.error('[getComments]', error);
    throw new Error('Failed to fetch comments');
  }
};


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



