import { db } from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      externalUserId: true,
      email:true,
      username: true,
      bio: true,
      instagram:true,
      twitter:true,
      role:true,
      acceptCreatorTerms:true,
      acceptPlatformTerms:true,
      youtube:true,
      imageUrl: true,
      stream: {
        select: {
          id: true,
          isLive: true,
          isChatDelayed: true,
          isChatEnabled: true,
          isChatFollowersOnly: true,
          thumbnailUrl: true,
          name: true,
        },
      },
      schedules:{
        select: {
          id: true,
          streamId: true,         
          createdAt: true,       
          updatedAt: true,    
          category:true,
          perticipant:true,
          tags:true,    
          isLive: true,          
          userId: true,           
          title: true,           
          address: true,          
          description: true,      
          eventDateTime: true,    
          amount: true,   
          physicalTicketAmount:true,
          availableSlots:true,       
          isFree: true,         
          thumbnailImage: true,   
          thumbnailVideo: true,  
          artists: true,          
          organizers: true, 
          orgEmail:true,
          user: {
            select: {
              id: true,
              username: true,
              imageUrl: true,
              email:true,
              role:true,
              acceptCreatorTerms:true,
              acceptPlatformTerms:true,
              externalUserId: true,
              bio: true,
              instagram: true,
              twitter: true,
              youtube: true,
              streamId: true,
              createdAt: true,
              updatedAt: true,
            }
          }
        },
      },
      _count: {
        select: {
          followedBy: true,
        },
      },
    },
  });

  return user;
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
    include: { stream: true },
  });

  return user;
};
