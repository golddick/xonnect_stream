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
      <div className="flex h-full w-full mt-10 bg-black">
        {children}
      </div>
    </>
  );
}
