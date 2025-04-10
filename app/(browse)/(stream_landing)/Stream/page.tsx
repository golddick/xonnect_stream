// import React, { Suspense } from "react";
// import { Metadata } from "next";
// import { Results, ResultsSkeleton } from "./_components/results";
// import VideoBox from "./_components/video-box";
// import AdsBanner from "./_components/AdsBanner";
// import AllStream from "./_components/StreamVideos/AllStream";


// export const metadata: Metadata = {
//   title: "Home",
// };

// export default function Home() {
//   return (
//     <div className="h-full p-4 lg:p-8 max-w-screen-2xl mx-auto bg-black w-full  overflow-auto flex flex-col gap-6 hidden-scrollbar">
//       <Suspense fallback={<ResultsSkeleton />}>
//         <VideoBox/>
//         {/* <AdsBanner/> */}
//         <Results label="Creators" />
//         <AllStream label="Coming Up"/>
//       </Suspense>
//     </div>
//   );
// }



import React from 'react'
import XonnectExplorePage from '../StreamExplore'
import StreamExplore from '../Explore'

const page = () => {
  return (
    <>
      {/* <XonnectExplorePage/> */}
      <StreamExplore/>
    </>
  )
}

export default page
