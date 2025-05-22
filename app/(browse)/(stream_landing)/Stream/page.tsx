import { redirect } from 'next/navigation';
import StreamExplore from '../Explore'; 
import { checkUser } from '@/lib/user-service';
import { currentUser } from '@clerk/nextjs/server';

export const metadata = {
  title: 'Explore',
  description: 'Discover streams and content on the platform',
};

const Page = async () => {
  const sessionUser = await currentUser(); 

  if (!sessionUser) {
    redirect('/sign-in'); 
  }

  const user = await checkUser({ externalUserId: sessionUser.id });

  if (process.env.NODE_ENV === 'development') {
    console.log(user, 'user user');
  }

  if (!user) {
    redirect('/sign-up');
  }

  if (!user.acceptPlatformTerms) {
    redirect('/legal?showToast=true');
  }

  if (!user.acceptCreatorTerms) {
    redirect('/legal/creator?showToast=true');
  }

  return <StreamExplore />;
};

export default Page;
