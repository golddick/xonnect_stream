"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <aside
      className={cn(
        "z-50 fixed left-0  flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E34]  bg-gradient-to-b from-[black]  via-[#171717] to-[red] hidden md:flex",
        collapsed && "lg:w-[70px]"
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
