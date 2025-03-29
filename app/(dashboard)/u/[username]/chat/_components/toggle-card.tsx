"use client";

import React, { useTransition } from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";
import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

export function ToggleCard({
  field,
  label,
  value = false,
}: {
  field: FieldTypes;
  label: string;
  value: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  const onChange = async () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated"))
        .catch(() =>
          toast.error("Something went wrong, failed to update chat settings")
        );
    });
  };

  return (
    <div className="rounded-xl w-full lg:w-auto from-[black] font-medium to-[red] bg-gradient-to-br text-white  overflow-hidden">
       <div
        className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       bg-[#000] 
       bg-opacity-70 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
      >
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
      </div>
    </div>
  );
}

export function ToggleCardSkeleton() {
  return <Skeleton className="rounded-xl p-10 w-full" />;
}
