import React from "react";


import { Actions } from "./actions";
import { Logo } from "./logo";
import { MobileNav } from "./mobileNav";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
  
    <nav className="flex items-center justify-between bg-black fixed top-0 z-40 w-full p-4 text-white text-[20px]">
    <Logo/>
    <MobileNav/>
     
    <Actions />

  </nav>
  );
}
