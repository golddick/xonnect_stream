import React from "react";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ThemeToggle } from "@/components/ThemeToggleBTN";

export async function HomeNavActions() {
  const user = await currentUser();

  const adminEMail = 'golddick60@gmail.com'
  const admin = user?.emailAddresses[0].emailAddress === adminEMail

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button variant="primary">Login</Button>
        </SignInButton>
        
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <UserButton afterSignOutUrl="/" />
          {admin && (
               <Link href="/Stream">
               <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[red] font-medium to-[black]">
                 Explore
               </Button>
             </Link>
          )}
         
        </div>
      )}
    </div>
  );
}
