import React from 'react';
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session) {
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
}


const Profile = () => {
  const router = useRouter()
  const {data: user} = useCurrentUser();

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col'>
        <h3 className='text-white text-center text-2xl md:text-4xl'>Who is watching?</h3>
        <div className='flex items-center justify-center gap-8 mt-10'>
          <div onClick={() => router.push('/')}>
            <div className='group flex-row mx-auto w-44'>
              <div className='flex items-center justify-center border-4 border-transparent 
              group-hover:cursor-pointer group-hover:border-orange-500 overflow-hidden rounded-full w-44 h-44'>
                <img src='/images/naruto2.jpg' alt='profile' />
              </div>
              <div className='mt-4 text-white text-xl text-center group-hover:text-orange-500'>
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Profile