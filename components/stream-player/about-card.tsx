// "use client";

// import React from "react";

// import { VerifiedMark } from "@/components/verified-mark";

// import { BioModal } from "./bio-modal";
// import { BadgeCheck } from "lucide-react";
// import { SocialCard } from "./social-card";

// export function AboutCard({
//   bio,
//   followedByCount,
//   hostIdentity,
//   hostName,
//   viewerIdentity,
//   instagram,
//   youtube,
//   twitter
// }: {
//   hostName: string;
//   hostIdentity: string;
//   viewerIdentity: string;
//   bio: string | null;
//   instagram: string | null;
//     youtube: string | null;
//     twitter: string | null;
//   followedByCount: number;
// }) {
//   const hostAsViewer = `host-${hostIdentity}`;
//   const isHost = viewerIdentity === hostAsViewer;

//   const followedByLabel = followedByCount === 1 ? "Follower" : "Followers";

//   return (
//     <div className="pr-4 border-none">
//      <div className="group rounded-xl  p-6 lg:p-10 flex  w-full  border-none">

//      <div className=" flex flex-col gap-y-3 w-full">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-x-2 font-semibold text-sm lg:text-sm">
//             About {hostName}
//             {/* <VerifiedMark /> */}
//             <BadgeCheck  className="text-gold size-4"/>
//           </div>
//           {isHost && <BioModal initialBio={bio} initialInstagram={instagram} initialYoutube={youtube} initialTwitter={twitter} />}
//         </div>
//         <div className="text-sm text-muted-foreground">
//           <span className="font-semibold text-primary">{followedByCount}</span>{" "}
//           {followedByLabel}
//         </div>
//         <p className="text-sm">
//           {bio || "This user prefers to keep an air of mystery about them."}
//         </p>
//       </div>
//         <SocialCard  Instagram={instagram} Youtube={youtube} Twitter={twitter}/>
//      </div>
      
//     </div>
//   );
// }





"use client";

import React from "react";
import { BadgeCheck, Instagram, Youtube, Twitter, UserPlus, Heart, UserIcon } from "lucide-react";
import { BioModal } from "./bio-modal";
import { UserAvatar } from "../user-avatar";
import { Actions } from "./actions";
import { useParticipants, useRemoteParticipant } from "@livekit/components-react";
import { Badge } from "../ui/badge";
import { DotEllipse } from "./dot-ellipse";

export function AboutCard({
  bio,
  followedByCount,
  hostIdentity,
  hostName,
  viewerIdentity,
  instagram,
  youtube,
  twitter,
  imageUrl,
  isFollowing
}: {
  hostName: string;
  hostIdentity: string;
  imageUrl: string;
  isFollowing: boolean;
  viewerIdentity: string;
  bio: string | null;
  instagram: string | null;
  youtube: string | null;
  twitter: string | null;
  followedByCount: number;
}) {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;
  const followedByLabel = followedByCount === 1 ? "Follower" : "Followers";

   const participants = useParticipants();
    const participant = useRemoteParticipant(hostIdentity);
  
    const isLive = !!participant;
    const participantCount = participants.length - 1;

  return (
    <div className="w-full rounded-xl bg-black border  shadow-lg p-4 overflow-hidden">
      {/* Header - Red gradient background */}
      {/* <div className="w-full h-16 bg-gradient-to-r from-red-900 to-red-700"></div> */}
      
      <div className="px-6 pt-0 pb-6 ">
        {/* Profile Section */}
        <div className="flex lg:flex-row justify-between items-center sm:items-start sm:flex-row gap-4 mb-6">
          {/* Avatar with border */}
     
          <div className="flex items-center gap-x-3 py-4 w-full">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size='lg'
          isLive={isLive}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className="text-xl font-bold text-white">{hostName}</h2>
            <BadgeCheck  className="text-gold size-4"/>
          </div>
          {isLive && (
            <div className="font-semibold flex gap-x-1 items-center text-xs text-rose-500">
              <UserIcon className="h-4 w-4" />
              <p>
                {participantCount}{" "}
                {participantCount === 1 ? "viewer" : "viewers"}
              </p>
            </div>
          )}
           <div className=" flex items-center gap-2">

              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span className="font-medium text-red-400">{followedByCount}</span>
              <span>{followedByLabel}</span>
            </div>
           </div>
          
        </div>
        </div>
          
           {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-6">
          {isHost ? (
            <BioModal
              initialBio={bio}
              initialInstagram={instagram}
              initialYoutube={youtube}
              initialTwitter={twitter}
            />
          ) : (
            <Actions
              hostIdentity={hostIdentity}
              isFollowing={isFollowing}
              isHost={isHost}
            />
          )}
        <DotEllipse/>
        </div>
        </div>
        
        {/* Bio Section */}
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 mb-6">
          <p className="text-gray-300 text-sm">
            {bio || "This user prefers to keep an air of mystery about them."}
          </p>
        </div>
        
       
        
        {/* Social Links */}
        <div className="grid grid-cols-3 gap-6">
          {instagram && (
            <SocialLink 
              icon={<Instagram className="w-5 h-5" />}
              platform="Instagram"
              handle={instagram}
              url={`https://instagram.com/${instagram}`}
            />
          )}
          
          {youtube && (
            <SocialLink 
              icon={<Youtube className="w-5 h-5" />}
              platform="YouTube"
              handle={youtube}
              url={`https://youtube.com/@${youtube}`}
            />
          )}
          
          {twitter && (
            <SocialLink 
              icon={<Twitter className="w-5 h-5" />}
              platform="Twitter"
              handle={twitter}
              url={`https://twitter.com/${twitter}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Social Link Component
type SocialLinkProps = {
  icon: React.ReactNode;
  platform: string;
  handle: string;
  url: string;
};

function SocialLink({ icon, platform, handle, url }: SocialLinkProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-3 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-red-600 hover:bg-neutral-800 transition-all"
    >
      <div className="text-red-500">
        {icon}
      </div>
      <div className="overflow-hidden">
        <p className="text-xs text-gray-400">{platform}</p>
        <p className="text-sm text-white truncate font-medium">{handle}</p>
      </div>
    </a>
  );
}