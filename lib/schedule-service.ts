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
        address:true,
        artists:true,
        organizers:true,
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
  } else {
    schedules = await db.schedule.findMany({
      select: {
        thumbnailImage: true,
        thumbnailVideo:true,
        amount:true,
        address:true,
        artists:true,
        organizers:true,
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
        address: true,
        artists: true,
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
        address: true,
        artists: true,
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
        organizers:true,
        orgEmail:true,
        description:true,
        title: true,
        eventDateTime: true,
        user: {
          select:{
            username:true,
            imageUrl:true,
            id:true,
            externalUserId:true
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
        }
    },
  });

  return schedule;
};


