import React, { useState, useCallback } from 'react'
import NavItems from './NavItems'
import { BsChevronDown} from 'react-icons/bs'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = useCallback(() => {
    setShowMenu(curr => !curr)
  }, [])


  return (
    <nav className='fixed z-40 w-full'>
      <div className="flex flex-row items-center transition duration-500 
      bg-zinc-900 bg-opacity-90 px-4 md:px-16 py-6">
        <img className='h-4 lg:h-11' src='/images/logo.svg.png' alt='logo' />
        <div className='hidden flex-row lg:flex ml-8 gap-7'>
          <NavItems label='Home' />
          <NavItems label='Movies' />
          <NavItems label='TV Series' />
          <NavItems label='My List' />
          <NavItems label='New & Popular' />
          <NavItems label='Browse by Language' />
        </div>
        <div onClick={handleShowMenu} className='lg:hidden relative flex flex-row items-center gap-2 cursor-pointer ml-8'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className='text-white transition' />
          <MobileMenu visible={showMenu}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar