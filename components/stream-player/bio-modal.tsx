"use client";

import React, { useState, useTransition, useRef, ElementRef } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Instagram, Twitter, Youtube } from "lucide-react";

interface BioModalProps{
  initialBio:string | null
  initialInstagram:string | null
  initialYoutube:string | null
  initialTwitter:string | null
}

export function BioModal({initialBio, initialInstagram, initialYoutube, initialTwitter}:BioModalProps) {
  const closeRef = useRef<ElementRef<"button">>(null);

  const [isPending, startTransition] = useTransition();

  const [bio, setBio] = useState(initialBio || " ");
  const [instagram, setInstagram] = useState(initialInstagram || " ");
  const [twitter, setTwitter] = useState(initialTwitter || " ");
  const [youtube, setYoutube] = useState(initialYoutube || " ");


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateUser({ bio: bio, instagram:instagram , youtube:youtube, twitter:twitter })
        .then(() => {
          toast.success("User bio updated");
          closeRef.current?.click();
        })
        .catch(() => toast.error("Failed to update bio"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto shadow-md shadow-neutral-500">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea
            placeholder="User bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            disabled={isPending}
            className="resize-none"
          />
          <h1>Edit Socials</h1>
          <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4" >
           <div className="flex items-center  border px-2 rounded-lg">
            <Label>
              <Instagram className=" size-4"/>
            </Label>
           <Input 
            placeholder="INSTAGRAM" className="  placeholder:text-white border-none"  
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            disabled={isPending}

            />
           </div>

           <div className="flex items-center  border px-2 rounded-lg">
            <Label>
              <Twitter className=" size-4"/>
            </Label>
            <Input placeholder="X(TWITTER)" 
              className="  placeholder:text-white border-none"  
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              disabled={isPending}
            />
           </div>

           <div className="flex items-center  border px-2 rounded-lg">
            <Label>
              <Youtube className=" size-4"/>
            </Label>
            <Input placeholder="YOUTUBE"  
              className="  placeholder:text-white border-none"  
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              disabled={isPending}
            />
           </div>
           
          
           
          </div>
          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
