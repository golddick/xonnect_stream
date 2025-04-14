

// import React from 'react'
// import XonnectExplorePage from '../StreamExplore'
// import StreamExplore from '../Explore'

// const page = () => {
//   return (
//     <>
//       {/* <XonnectExplorePage/> */}
//       <StreamExplore/>
//     </>
//   )
// }

// export default page




// app/yourPagePath/page.tsx
import { redirect } from 'next/navigation';
import StreamExplore from '../Explore'; 
import { checkUser } from '@/lib/user-service';
import { currentUser } from '@clerk/nextjs/server';


const Page = async () => {
  const sessionUser = await currentUser(); 

  if (!sessionUser) {
    redirect('/sign-in'); 
  }

  const user = await checkUser({ externalUserId: sessionUser.id });

  console.log(user, 'user user')

  if (!user) {
    redirect('/sign-up');
  }

  if (!user.acceptPlatformTerms  ) {
    redirect('/legal?showToast=true'); // pass param
  }
  if (!user.acceptCreatorTerms  ) {
    redirect('/legal/creator?showToast=true'); // pass param
  }

  return (
    <>
      <StreamExplore />
    </>
  );
};

export default Page;
