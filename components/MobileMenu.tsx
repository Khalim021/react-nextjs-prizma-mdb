import React from 'react';

interface MobileMenuItems {
  visible?: boolean   
}

const MobileMenu: React.FC<MobileMenuItems> = ({visible}) => {
  if(!visible) {
    return null
  }

  return (
    <div className='absolute top-8 left-0 py-5 w-56 bg-black flex flex-col border-2 border-gray-800'>
      <div className='flex flex-col gap-4'>
        <div className='text-center px-3 text-orange-500 hover:text-white hover:underline'>
          Home
        </div>
        <div className='text-center px-3 text-orange-500 hover:text-white hover:underline'>
          Movies
        </div>
        <div className='text-center px-3 text-orange-500 hover:text-white hover:underline'>
          TV Series
        </div>
        <div className='text-center px-3 text-orange-500 hover:text-white hover:underline'>
          My List
        </div>
        <div className='text-center px-3 text-orange-500 hover:text-white hover:underline'>
          New & Popular
        </div>
        <div className='text-center px-3 text-orange-500 hover:text-white hover:underline'>
          Browse by Language 
        </div>
      </div>
    </div>
  )
}

export default MobileMenu