
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AdminUserBar from './AdminUserBar';
import AdminNav from './AdminNav';


const AdminSideBar = () => {
 

  return (
    <div className="fixed left-0 top-0 flex-col w-60 h-full border-r border-[#2D2E35] z-50 bg-background hidden md:flex justify-between">
      {/* Top: Logo and Nav */}
      <div>
        {/* Logo */}
        <div className=" relative h-20 w-full ">
          <Image
            src="/assets/xlogo.jpg" 
            alt="Logo"
            className=' absolute object-cover'
            fill
          />
        </div>

        {/* Navigation */}
       <AdminNav/>
      </div>

      {/* Bottom: Admin Info */}
      <AdminUserBar/>
    </div>
  );
};

export default AdminSideBar;
