import React, { Suspense } from "react";
import { Navbar } from "../(browse)/_components/navbar";
import { Container } from "../(browse)/_components/container";


export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      <Navbar />
      <div className="flex h-full pt-20 bg-black w-full">
        {children}
      </div>
    </>
  );
}
