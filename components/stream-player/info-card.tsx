// "use client";

// import React from "react";
// import Image from "next/image";
// import { Pencil } from "lucide-react";

// import { Separator } from "@/components/ui/separator";

// import { InfoModal } from "./info-modal";

// export function InfoCard({
//   name,
//   thumbnailUrl,
//   hostIdentity,
//   viewerIdentity,
// }: {
//   name: string;
//   thumbnailUrl: string | null;
//   hostIdentity: string;
//   viewerIdentity: string;
// }) {
//   const hostAsViewer = `host-${hostIdentity}`;
//   const isHost = viewerIdentity === hostAsViewer;

//   if (!isHost) return null;

//   return (
//     <div className="px-4">
//       <div className="rounded-xl group shadow-md shadow-[red] border p-6 lg:p-10 flex flex-col  w-full">
//         <div className="flex items-center gap-x-2.5 p-4">
//           <div className="rounded-md bg-red-600 p-2 h-auto w-auto">
//             <Pencil className="h-5 w-5" />
//           </div>
//           <div>
//             <h2 className="text-sm lg:text-md font-semibold capitalize">
//               Edit your stream info
//             </h2>
//             <p className="text-muted-foreground text-xs lg:text-xs">
//               Maximize your visibility
//             </p>
//           </div>
//           <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
//         </div>
//         <Separator />
//         <div className="p-4 lg:p-6 space-y-4">
//           <div>
//             <h3 className="text-sm text-muted-foreground mb-2">Channel Name</h3>
//             <p className="text-sm font-semibold">{name}</p>
//           </div>
//           <div>
//             {thumbnailUrl && (
//               <h3 className="text-sm text-muted-foreground mb-2">Thumbnail</h3>
//             )}
//             {thumbnailUrl && (
//               <div className="relative aspect-video rounded-md overflow-hidden w-[200px] border border-white/10">
//                 <Image
//                   fill
//                   src={thumbnailUrl}
//                   alt={name}
//                   className="object-cover"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









"use client";

import React from "react";
import Image from "next/image";
import { Settings, Image as ImageIcon } from "lucide-react";

import { InfoModal } from "./info-modal";

export function InfoCard({
  name,
  thumbnailUrl,
  hostIdentity,
  viewerIdentity,
}: {
  name: string;
  thumbnailUrl: string | null;
  hostIdentity: string;
  viewerIdentity: string;
}) {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  if (!isHost) return null;

  return (
    <div className="w-full">
      <div className="rounded-lg bg-black border border-neutral-800 shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-neutral-900 to-black p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-red-600/20 text-red-600 p-2">
              <Settings className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-white">
                Stream Settings
              </h2>
              <p className="text-xs text-neutral-400">
                Update your stream information
              </p>
            </div>
          </div>
          
          <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-6">
          {/* Channel Name */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">Channel Name</h3>
            <div className="bg-neutral-900 border border-neutral-800 rounded p-3">
              <p className="text-sm text-white font-medium">{name}</p>
            </div>
          </div>
          
          {/* Thumbnail */}
          {thumbnailUrl ? (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">Thumbnail</h3>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-3">
                <div className="relative aspect-video rounded overflow-hidden w-full max-w-xs">
                  <Image
                    fill
                    src={thumbnailUrl}
                    alt={name}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">Thumbnail</h3>
              <div className="bg-neutral-900 border border-neutral-800 rounded-md p-5 flex flex-col items-center justify-center text-neutral-500">
                <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                <p className="text-xs">No thumbnail set</p>
              </div>
            </div>
          )}
          
          {/* Tips */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-md p-3 mt-4">
            <p className="text-xs text-neutral-400">
              <span className="text-red-500 font-medium">Pro tip:</span> Use a high-quality thumbnail with a 16:9 aspect ratio for the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
