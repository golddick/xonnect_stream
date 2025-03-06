"use client";

import React, { useTransition } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { onFollow, onUnfollow } from "@/actions/follow";

export function PuchaseBTN() {
  const { userId } = useAuth();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

 


  return (
    <Button
      disabled={isPending }
      onClick={() => {}}
      size="sm"
      className="w-full lg:w-auto from-[red] font-medium to-[black] bg-gradient-to-br text-white"
    >
     
      purchase
    </Button>
  );
}


