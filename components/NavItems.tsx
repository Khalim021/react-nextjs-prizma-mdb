import React from 'react';

interface NavItemProps {
 label: string;    
}

const NavItems: React.FC<NavItemProps> = ({label}) => {
  return (
    <div className='cursor-pointer text-white'>
      {label}
    </div>
  )
}

export default NavItems