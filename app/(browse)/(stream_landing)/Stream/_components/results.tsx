import React from "react";

import { getStreams } from "@/lib/feed-service";
import { Skeleton } from "@/components/ui/skeleton";
import ResultCard, {  ResultCardSkeleton } from "../result-card";
import StreamHeader from "./StreamVideos/StreamHeader";

interface ResultProps{
  label:string
}

export async function Results({label}:ResultProps) {
  const data = await getStreams();


  return (
    <div className="flex flex-col gap-4">
       <StreamHeader label={label}/>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No creator found.</div>
      )}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((result, index) => (
          <ResultCard key={result.id} data={result} index={index} />
        ))}
      </div>
    </div>
  ); 
}

export function ResultsSkeleton() {
  return (
    <div className=" ">
      <Skeleton className="h-8 w-[290px] mb-4 " />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
