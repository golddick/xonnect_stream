'use client';

import React, { startTransition, useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing"; // Assuming this component handles drag-and-drop file upload
import { Label } from "@/components/ui/label";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateScheduledStream } from "@/actions/schedule";

interface FileUploaderProps {
  thumbnailImg: string | null | undefined;
  scheduleID: string | null | undefined;
}

const FileUploader = ({ thumbnailImg, scheduleID }: FileUploaderProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(thumbnailImg);
  const [isPending, setIsPending] = useState(false); // Manage loading state
  const router = useRouter();

  // Handle removing the thumbnail
  const onRemove = async () => {
    if (!scheduleID) return;
    setIsPending(true);

    try {
      // Await the update operation to remove the thumbnail
      await updateScheduledStream(scheduleID as string, { thumbnailImage: null });
      toast.success("Stream thumbnail removed");
      setThumbnailUrl(null);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsPending(false); // Reset the pending state
    }
  };

  // Handle the form submission
  const onSubmit = async () => {
    if (!scheduleID || !thumbnailUrl) return; // Ensure scheduleID and thumbnailUrl are valid
    setIsPending(true);

    try {
      await updateScheduledStream(scheduleID as string, { thumbnailImage: thumbnailUrl });
      toast.success("Stream updated");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsPending(false); // Reset the pending state
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <Label>Thumbnail</Label>
      {thumbnailUrl ? (
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
            src={thumbnailUrl } 
            fill
            className="object-cover"
            // onLoadingComplete={() => {
            //   // Automatically submit the form after the image has fully loaded
            //   onSubmit();
            // }}
          />
        </div>
      ) : (
        <div className="rounded-xl border outline-dashed outline-muted">
          <UploadDropzone
            endpoint="scheduleUploader"
            appearance={{
              label: {
                color: "#FFFFFF",
              },
              allowedContent: {
                color: "#FFFFFF",
              },
            }}
            onClientUploadComplete={(res) => {
              if (res?.[0]?.url) {
                setThumbnailUrl(res[0].url); // Update the thumbnail URL
                onSubmit(); // Automatically submit the form after the upload is complete
                toast.success("Thumbnail uploaded");
              }
            }}
          />
        </div>
      )}
    </form>
  );
};

export default FileUploader;