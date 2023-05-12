import { NextPageContext } from 'next';
import { signOut, getSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
};

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className=" text-neutral-200">Netflix clone</h1>
      <p className=' text-white'>Logged in as: {user?.name}</p>
      <button onClick={() => signOut()}>Logout!</button>
    </>
  )
}
