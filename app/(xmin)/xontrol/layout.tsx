import React from "react";
import { AdminNav } from "./_component/Top-nav";
import AdminSideBar from "./_component/AdminSideBar/AdminSideBar";



export default function SinglePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      {/* <AdminNav /> */}
      <div className="flex h-full w-full bg-black">
        <AdminSideBar/>
        <div className="ml-60 w-full h-full  overflow-y-scroll hidder-scrollbar">
        {children}
        </div>
      </div>
    </>
  );
}
