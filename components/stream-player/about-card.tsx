"use client";

import React from "react";

import { VerifiedMark } from "@/components/verified-mark";

import { BioModal } from "./bio-modal";
import { BadgeCheck } from "lucide-react";
import { SocialCard } from "./social-card";

export function AboutCard({
  bio,
  followedByCount,
  hostIdentity,
  hostName,
  viewerIdentity,
  instagram,
  youtube,
  twitter
}: {
  hostName: string;
  hostIdentity: string;
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

  return (
    <div className="pr-4 border-none">
     <div className="group rounded-xl  p-6 lg:p-10 flex  w-full  border-none">

     <div className=" flex flex-col gap-y-3 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-sm lg:text-sm">
            About {hostName}
            {/* <VerifiedMark /> */}
            <BadgeCheck  className="text-gold size-4"/>
          </div>
          {isHost && <BioModal initialBio={bio} initialInstagram={instagram} initialYoutube={youtube} initialTwitter={twitter} />}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{followedByCount}</span>{" "}
          {followedByLabel}
        </div>
        <p className="text-sm">
          {bio || "This user prefers to keep an air of mystery about them."}
        </p>
      </div>
        <SocialCard  Instagram={instagram} Youtube={youtube} Twitter={twitter}/>
     </div>
      
    </div>
  );
}
