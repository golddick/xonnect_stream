// core.ts
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

const uploadthing = createUploadthing();

export const ourFileRouter = {
  thumbnailUploader: uploadthing({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const self = await getSelf();
      return { user: self };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      await db.stream.update({
        where: {
          userId: metadata.user.id,
        },
        data: {
          thumbnailUrl: file.url,
        },
      });
      return { fileUrl: file.url };
    }), 

      // New schedule uploader
  scheduleUploader: uploadthing({
    image: {
      maxFileSize: "4MB",  // Adjust size limit as needed
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const self = await getSelf();
      return { user: self };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      return { fileUrl: file.url };
    }),


    //file uploader
    ScheduleFileUploader: uploadthing({
      image: {
        maxFileSize: "8MB",  // Adjust size limit as needed
        maxFileCount: 5,
      },
    })
      .middleware(async () => {
        const self = await getSelf();
        return { user: self };
      })
      .onUploadComplete(async ({ file, metadata }) => {
        return { fileUrl: file.url };
      }),

} satisfies FileRouter;


export type OurFileRouter = typeof ourFileRouter;


