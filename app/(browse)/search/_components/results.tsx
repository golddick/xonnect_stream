import React from "react";

import { getSearch } from "@/lib/search-service";
import { Skeleton } from "@/components/ui/skeleton";
import { ResultCard, ResultCardSkeleton } from "./result-card";
import StreamVideoCard from "../../(stream_landing)/Stream/_components/StreamVideos/StreamVideoCard";

export async function Results({ term }: { term?: string }) {
  const data = await getSearch(term);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Results for term &quot;{term}&quot;
      </h2>
      {data.streams.length === 0 && data.schedules.length === 0 && (
        <p className="text text-muted-foreground text-sm">
          No results found. Try searching for something else.
        </p>
      )}
      <div className="flex flex-col gap-y-4 w-full ">
        {data.streams.map((result) => (
          <ResultCard key={result.id} data={result} />
        ))}
        {data.schedules.map((result) => (
          <StreamVideoCard 
            streamName={result.title}
            description={ result.user.bio ||'No description'}
            thumbNailImg={result.thumbnailImage || '/assets/xc.jpg'}
            isLive={result.isLive}
            id={result.id}
            key={result.id}
            dp={result.user.imageUrl || '/assets/xc.jpg'}
            index={result.id.length % 2} 
            creatorName={result.user.username}
          />
        ))}
      </div>
    </div>
  );
}

export function ResultsSkeleton() {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="flex flex-col gap-y-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
