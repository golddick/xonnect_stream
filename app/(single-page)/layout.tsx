import React from "react";
import { SingleNav } from "./_component/Top-nav";


export default function SinglePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      <SingleNav />
      <div className="flex h-screen w-full  pt-[70px] bg-black">
        {children}
      </div>
    </>
  );
}
