import { redirect } from 'next/navigation';
import StreamExplore from '../Explore'; 
import { checkUser } from '@/lib/user-service';
import { currentUser } from '@clerk/nextjs/server';



const Page = async () => {
  const sessionUser = await currentUser(); 

  console.log(sessionUser, 'sessionUser');

  // if (!sessionUser) {
  //   redirect('/sign-in'); 
  // }

  // const user = await checkUser({ externalUserId: sessionUser.id });

  // if (process.env.NODE_ENV === 'development') {
  //   console.log(user, 'user user');
  // }

  // if (!user) {
  //   redirect('/sign-up');
  // }

  // if (!user.acceptPlatformTerms) {
  //   redirect('/legal?showToast=true');
  // }

  // if (!user.acceptCreatorTerms) {
  //   redirect('/legal/creator?showToast=true');
  // }

  return <StreamExplore />;
};

export default Page;
