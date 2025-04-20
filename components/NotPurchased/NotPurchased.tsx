import { Schedule } from "@prisma/client";
import React from "react";
import { SchedulePurchaseBTN } from "../purchaseBTN/SchedulePurchaseBTN";
import { Lock } from "lucide-react";

interface NotPurchasedProps{
    data: Schedule | null;
    userId: string
    externalUserName: string
    externalUserEmail: string
}


const NotPurchased = ({data, userId, externalUserEmail,externalUserName}:NotPurchasedProps) => {
  return (
<div id="xonnect"> 
        	<div className="w-full bg-gradient-to-b from-neutral-900 via-red-950 to-neutral-900 relative overflow-hidden rounded-xl border border-white/10">
	  <div className="absolute -top-10 -right-10 w-[80%] mx-auto h-40 bg-red-600 opacity-20 rounded-full blur-3xl"></div>
	  <div className="absolute -bottom-10 -left-10 w-full h-40 bg-red-600 opacity-20 rounded-full blur-3xl"></div>
	  
	  <div className="relative z-10 p-8">
	    <div className="flex flex-col items-center text-center">
	      <div className="mb-6 w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
	       <Lock/>
	      </div>
	      
	      <h2 className="text-white text-2xl font-bold mb-4">Premium Content Locked</h2>
	      <p className="text-white/80 text-sm mb-6">To access this premium event, you need to purchase a stream pass. Unlock high-quality streaming with no interruptions.</p>
	      
	      <div className="w-full bg-black/40 rounded-xl p-6 mb-6 border border-white/5">
	        <h3 className="text-white text-lg font-semibold mb-4">Event Details</h3>
	        <div className="space-y-3">
	          <div className="flex justify-between items-center border-b border-white/10 pb-2">
	            <span className="text-white/70 text-sm">Event Name:</span>
	            <span className="text-white font-medium text-sm">{data?.title}</span>
	          </div>
	          <div className="flex justify-between items-center border-b border-white/10 pb-2">
	            <span className="text-white/70 text-sm">Date & Time:</span>
				<span className="text-white font-medium text-sm">{data?.eventDateTime?.toLocaleString()}</span>
	          </div>
	          <div className="flex justify-between items-center">
	            <span className="text-white/70 text-sm">Pass Price:</span>
	            <span className="text-white font-bold text-sm">N{data?.amount}</span>
	          </div>
	        </div>
	      </div>
	      
	      <div className="flex flex-col gap-3 w-full">
          <SchedulePurchaseBTN data={data} selfName={externalUserName} selfEmail={externalUserEmail} userId={userId} />
	      </div>
	      
	    </div>
	  </div>
	</div>
	

        </div>
  )
}


export default NotPurchased

