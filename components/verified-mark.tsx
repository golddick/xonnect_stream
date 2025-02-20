import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedMarkProps {
  color?:string
}

export function VerifiedMark({color}:VerifiedMarkProps) {
  return (
    <div className={cn("p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600", color )}>
      <Check className="h-[10px] w-[10px] text-primary stroke-[4px]" />
    </div>
  );
}
