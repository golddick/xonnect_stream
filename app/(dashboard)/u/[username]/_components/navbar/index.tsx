import React from "react";


import { Actions } from "./actions";
import { Logo } from "./logo";
import { MobileNav } from "./mobileNav";

export function Navbar() {
  return (
    <div className="fixed top-0 w-full h-20 z-[49] bg-black px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
     <div className="flex items-center gap-4">
      <Actions />
     <MobileNav/>
     </div>
    </div>
  );
}
