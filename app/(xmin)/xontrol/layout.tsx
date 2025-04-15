import React from "react";
import { AdminNav } from "./_component/Top-nav";



export default function SinglePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      {/* <AdminNav /> */}
      <div className="flex h-full w-full bg-black">
        {children}
      </div>
    </>
  );
}
