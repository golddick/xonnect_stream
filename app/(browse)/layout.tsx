import React, { Suspense } from "react";

import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import SimpleFooter from "@/components/simple-footer/SimpleFooter";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      <Navbar />
      <div className="flex h-full pt-20 bg-black w-full flex-col ">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>
          <div className=" flex flex-col justify-between  relative">
          {children}
          <SimpleFooter/>
          </div>
          </Container>
      </div>
    </>
  );
}
