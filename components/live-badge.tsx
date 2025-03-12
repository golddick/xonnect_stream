import React from "react";

import { cn } from "@/lib/utils";

export function LiveBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide",
        className
      )}
    >
      Live
    </div>
    // <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2 z-20">
    // <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
    // <span>LIVE</span>
// </div>
  );
}
