import { getSelf } from '@/lib/auth-service'
import Image from 'next/image'
import React from 'react'

const AdminUserBar = async () => {

    const user = await getSelf()

  return (
   <div className="p-6 border-t border-[#2D2E35] flex items-center space-x-3">
           <Image
             src={user.imageUrl}
             alt={user.username}
             width={40}
             height={40}
             className="rounded-full object-cover"
           />
           <div className="text-sm">
             <p className="font-medium text-white">{user.username}</p>
             <p className="text-muted-foreground text-xs">{user.email}</p>
           </div>

         </div>
  )
}

export default AdminUserBar
