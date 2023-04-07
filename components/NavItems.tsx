import React from 'react';

interface NavItemProps {
 label: string;    
}

const NavItems: React.FC<NavItemProps> = ({label}) => {
  return (
    <div className='text-orange-500 cursor-pointer hover:text-white'>
      {label}
    </div>
  )
}

export default NavItems