'use client'
import { useRouter } from 'next/navigation';

const GetStartedPage = () => {
  const router = useRouter();

  const handleJoinAsContractor = () => {
    router.push('/sign-up?as=contractor');
  };

  const handleJoinAsClient = () => {
    router.push('/sign-up?as=client');
  };

  return (
    <div className='flex justify-center items-center gap-8'>
      <h1>Get Started</h1>
      <button onClick={handleJoinAsContractor}>Join as Contractor</button>
      <button onClick={handleJoinAsClient}>Join as Client</button>
    </div>
  );
};

export default GetStartedPage;
