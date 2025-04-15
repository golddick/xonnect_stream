import React from "react";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ThemeToggle } from "@/components/ThemeToggleBTN";
// import { getSelf } from "@/lib/auth-service";

export async function HomeNavActions() {
  const user = await currentUser();

  const adminEMail = 'golddick60@gmail.com'
  const Creator = user?.emailAddresses[0].emailAddress === adminEMail
  // const Creator = user?.emailAddresses[].emailAddress === 'CREATOR' || 'ADMIN'

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
      
          {Creator && (
               <Link href="/Stream">
               <Button className="lg:px-10 py-2">
                 Explore
               </Button>
             </Link>
          )}
         
        </div>
      )}
    </div>
  );
}
