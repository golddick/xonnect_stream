import React from "react";
import { Metadata } from "next";
import { Top_nav } from "./_component/Top-nav";


export const metadata: Metadata = {
  title: 'Authentication',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Top_nav/>
      <div className="h-full flex flex-col mt-10">
        {children}
      </div>
    </>
  );
}
