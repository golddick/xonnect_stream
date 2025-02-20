"use client";

import React from "react";
import { useIsClient } from "usehooks-ts";

import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar((state) => state);
  const isClient = useIsClient();

  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0  flex-col w-60 h-full border-r border-[#2D2E35] z-50   bg-gradient-to-b from-[black]  via-[#171717] to-[red] hidden md:block ",
        collapsed && "w-[70px]"
      )}
    >
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
      {children}
      </div>
    </aside>
  );
}
