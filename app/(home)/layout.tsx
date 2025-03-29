import React from "react";
import { Metadata } from "next";
import { Top_nav } from "./_component/Top-nav";
import Footer from "./_component/Footer";


export const metadata: Metadata = {
  title: 'Xonnect',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Top_nav/>
      <div className="h-full flex flex-col w-full">
        {children}
      <Footer/>
      </div> 
    </>
  );
}
