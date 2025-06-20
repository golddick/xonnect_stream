import React from "react";

import { getRecommended } from "@/lib/recommended-service";
import { getFollwedUser } from "@/lib/follow-service";

import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Following, FollowingSkeleton } from "./following";
import { Separator } from "@/components/ui/separator";

export async function Sidebar() {
  const recommended = await getRecommended();
  const following = await getFollwedUser();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0  overflow-scroll hidder-scrollbar">
        <Following data={following} />
        <Separator className="w-full text-neutral-600 shadow-sm shadow-neutral-600"/>
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
}

export function SidebarSkeleton() {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35 z-50]  hidden md:block">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
}
