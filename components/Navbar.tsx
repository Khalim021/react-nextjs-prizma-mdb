import React, { useState, useCallback, useEffect } from 'react'
import NavItems from './NavItems'
import { BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'
import MobileMenu from './MobileMenu';
import Account from './Account';

const TOP_OFFSET = 66;


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      }else {
        setShowBackground(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowMenu = useCallback(() => {
    setShowMenu(curr => !curr)
  }, []);

  const handleShowAccount = useCallback(() => {
    setShowAccount(curr => !curr)
  }, []);


  return (
    <nav className='fixed z-40 w-full'>
      <div className={`flex flex-row items-center transition duration-500 px-4 md:px-16 
      py-5 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
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
          <BsChevronDown className={`text-white transition ${showMenu ? 'rotate-180 transition': 'rotate-0'}`}/>
          <MobileMenu visible={showMenu}/>
        </div>
        <div className='flex flex-row items-center ml-auto gap-7'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>
          <div onClick={handleShowAccount} className='relative flex flex-row items-center gap-2 cursor-pointer'>
            <div className='w-6 h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden'>
              <img src='/images/naruto.jpg' alt='profile' />
            </div>
            <BsChevronDown className={`text-white transition ${showAccount ? 'rotate-180 transition': 'rotate-0'}`} />
            <Account visible={showAccount} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar