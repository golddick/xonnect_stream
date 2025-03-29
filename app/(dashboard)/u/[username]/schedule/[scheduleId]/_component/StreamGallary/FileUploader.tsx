// 'use client';

// import React, { startTransition, useState } from "react";
// import { UploadDropzone } from "@/lib/uploadthing"; // Assuming this component handles drag-and-drop file upload
// import { Label } from "@/components/ui/label";
// import { Hint } from "@/components/hint";
// import { Button } from "@/components/ui/button";
// import { Trash } from "lucide-react";
// import Image from "next/image";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { updateScheduledStream, updateScheduleWithFiles } from "@/actions/schedule";
// import { ScheduleFileUpload } from "@prisma/client";

// interface FileUploaderProps {
//   fileUpload: ScheduleFileUpload[] | undefined;
//   scheduleID: string | null | undefined;
// }

// const GalleryFileUploader = ({ fileUpload, scheduleID }: FileUploaderProps) => {
//   const [fileUrl, setFileUrl] = useState(fileUpload);
//   const [isPending, setIsPending] = useState(false); // Manage loading state
//   const router = useRouter();

//   // Handle removing the thumbnail
//   const onRemove = async () => {
//     if (!scheduleID) return;
//     setIsPending(true);

//     try {
//       // Await the update operation to remove the thumbnail
//       await updateScheduleWithFiles(scheduleID as string, []);
//       toast.success("Stream thumbnail removed");
//       setFileUrl([]);
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setIsPending(false); // Reset the pending state
//     }
//   };

//   // Flatten all image URLs from the fileUpload array
//    const allImageURLs = fileUpload?.flatMap((file) => file.ImageURL) || [];
 
//    // Handle file upload
//    const handleFileUpload = async (res: { url: string }[]) => {
//      if (!scheduleID) {
//        toast.error('Schedule ID is missing.');
//        return;
//      }
 
//      try {
//        // Extract the uploaded file URLs
//        const fileUrls = res.map((file) => file.url);
 
//        // Update the schedule with the new file URLs
//        await updateScheduleWithFiles(scheduleID, fileUrls);
 
//        toast.success('Files uploaded and schedule updated successfully.');
//      } catch (error) {
//        console.error('Error uploading files:', error);
//        toast.error('Failed to upload files.');
//      }
//    };

//   return (
//     <form onSubmit={(e) => e.preventDefault()} className="space-y-2 w-full">
//       <Label>Thumbnail</Label>
//       {fileUpload ? (
//         <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
//           <div className="absolute top-2 right-2 z-[10]">
//             <Hint label="Remove thumbnail" asChild side="left">
//               <Button
//                 type="button"
//                 disabled={isPending}
//                 onClick={onRemove}
//                 className="h-auto w-auto p-1.5"
//               >
//                 <Trash className="h-4 w-4" />
//               </Button>
//             </Hint>
//           </div>
//           <Image
//             alt="Thumbnail"
//             src={allImageURLs[0] } 
//             fill
//             className="object-cover"
//             // onLoadingComplete={() => {
//             //   // Automatically submit the form after the image has fully loaded
//             //   onSubmit();
//             // }}
//           />
//         </div>
//       ) : (
//         <div className="rounded-xl border outline-dashed outline-muted">
//         <UploadDropzone
//           endpoint="ScheduleFileUploader" 
//           appearance={{
//             label: {
//               color: '#FFFFFF',
//             },
//             allowedContent: {
//               color: '#FFFFFF',
//             },
//           }}
//           onClientUploadComplete={handleFileUpload}
//           onUploadError={(error) => {
//             console.error('Upload error:', error);
//             toast.error('File upload failed.');
//           }}
//         />
//       </div>
//       )}
//     </form>
//   );
// };

// export default GalleryFileUploader;



'use client';

import React, { useState } from 'react';
import { UploadDropzone } from '@/lib/uploadthing';
import { Label } from '@/components/ui/label';
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import { updateScheduleWithFiles } from '@/actions/schedule';
import { Schedule, ScheduleFileUpload } from '@prisma/client';

interface FileUploaderProps {
  fileUpload: ScheduleFileUpload[];
  scheduleID: string | null | undefined;
}

const GalleryFileUploader = ({ fileUpload, scheduleID }: FileUploaderProps) => {
  const [isPending, setIsPending] = useState(false); // Manage loading state

 

  // Get the first image URL
  const firstImageUrl = fileUpload?.[0]?.ImageURL;

  // Handle removing the thumbnail
  const onRemove = async () => {
    if (!scheduleID) return;
    setIsPending(true);

    try {
      // Await the update operation to remove the thumbnail
      await updateScheduleWithFiles(scheduleID, []); // Pass an empty array to remove all files
      toast.success('Stream thumbnail removed');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsPending(false); // Reset the pending state
    }
  };

  // Handle file upload
  const handleFileUpload = async (res: { url: string }[]) => {
    if (!scheduleID) {
      toast.error('Schedule ID is missing.');
      return;
    }

    try {
      // Extract the uploaded file URLs
      const fileUrls = res.map((file) => file.url);

      // Update the schedule with the new file URLs
      await updateScheduleWithFiles(scheduleID, fileUrls);

      toast.success('Files uploaded and schedule updated successfully.');
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error('Failed to upload files.');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <Label>Thumbnail</Label>
      {firstImageUrl ? (
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
          <div className="absolute top-2 right-2 z-[10]">
            <Hint label="Remove thumbnail" asChild side="left">
              <Button
                type="button"
                disabled={isPending}
                onClick={onRemove}
                className="h-auto w-auto p-1.5"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </Hint>
          </div>
          <Image
            alt="Thumbnail"
            src={firstImageUrl} // Use the first image URL
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="rounded-xl border outline-dashed outline-muted">
          <UploadDropzone
            endpoint="ScheduleFileUploader" 
            appearance={{
              label: {
                color: '#FFFFFF',
              },
              allowedContent: {
                color: '#FFFFFF',
              },
            }}
            onClientUploadComplete={handleFileUpload}
            onUploadError={(error) => {
              console.error('Upload error:', error);
              toast.error('File upload failed.');
            }}
          />
        </div>
      )}
    </form>
  );
};

export default GalleryFileUploader;