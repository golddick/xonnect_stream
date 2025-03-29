import Image from "next/image"
import React from "react"
import EventVideoPreview from "./EventVideoPreview"
import EventGallery from "./EventGallery"
import EventDetails from "./EventDetails"
import { Schedule, ScheduleFileUpload } from "@prisma/client"
import EventMoreSection from "./EventMoreSection"
import { SchedulePurchaseBTN } from "../purchaseBTN/SchedulePurchaseBTN"


interface Props {
  data: Schedule  | null;
  userId:string | undefined
  selfName:string | undefined | null
  selfEmail:string  | null | undefined
  fileUpload: ScheduleFileUpload []
}

export const ScheduleEventProfile = ({data, userId, fileUpload, selfName, selfEmail}:Props) => {

    if (!data) {
        return
    }

    
   
    return (
        <div id="xonnect">
            <div className="w-full bg-white font-sans">
                <section className="w-full bg-black ">

                <div className="space-y-4">
                    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="p-0"> 
                            <div className="relative">
                                <div className=" h-48 lg:h-[200px] w-full bg-gradient-to-r from-black to-red-900/80 overflow-hidden relative">
                                    <Image
                                        src={data?.thumbnailImage || "/assets/xc.jpg"}
                                        alt="Banner"
                                        fill
                                        className=" object-cover mix-blend-overlay opacity-60 absolute animate-pulse"
                                    />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2 text-center animate-fadeInUp">
                                        {data?.title}
                                    </h2>
                                    <p className="text-lg text-white text-center drop-shadow-md">
                                        The Ultimate Experience
                                    </p>
                                </div>
                            </div>

                            <div className="bg-red-800 text-white py-3 px-5 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    {
                                        data.amount && data.amount > 0 ? (
                                            <span className="font-bold">N{data.amount} - Premium</span>
                                        ) : (
                                            <span className="font-bold">Free</span>
                                        )
                                    }
                                </div>
                                <SchedulePurchaseBTN data={data} selfEmail={selfEmail} selfName={selfName} userId={userId}/>
                            </div>

                            <div className="flex flex-col md:flex-row">
                               <EventDetails data={data}/>

                                <div className="w-full md:w-1/2 p-5 bg-gray-50">
                                    <h4 className="font-bold text-lg mb-4 text-black">Live Stream Preview</h4>
                                    <EventVideoPreview video={data.thumbnailVideo } img={data.thumbnailImage || '/assets/xc.jpg'}/>

                                   
                                   <EventGallery fileUpload={fileUpload}/>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-black">Stream Features:</h4>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                4K Ultra HD Video Quality
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Multi-camera Angles
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Live Chat with Other Fans
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-green-500 mr-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                48-hour Replay Access
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                           <EventMoreSection data={data} userId={userId}  fileUpload={fileUpload}/>
                        </div>
                    </div>
                </div>
                               
                </section>
            </div>
        </div>
    )
}
