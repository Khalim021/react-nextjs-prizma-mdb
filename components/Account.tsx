import React from 'react';
import { signOut } from 'next-auth/react';

interface AccountProps {
  visible?: boolean    
}

const Account: React.FC<AccountProps> = ({visible}) => {
  if(!visible) {
    return null
  }

  return (
    <div className='absolute bg-black top-14 w-56 right-0 py-5 flex flex-col border-2 border-gray-800'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row items-center gap-3 group/item px-3 w-full'>
          <img className='w-8 rounded-full' src='/images/naruto2.jpg' alt='image' />
          <p className='text-sm text-white group-hover/item:underline'>
            Username
          </p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4' />
        <div onClick={() => signOut()} className='text-sm text-white text-center px-3 hover:underline'>
          Sign out
        </div>
      </div>
    </div>
  )
}

export default Account