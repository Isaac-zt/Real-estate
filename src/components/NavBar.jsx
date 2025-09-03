import React from 'react'
import {assets} from '../assets/assets'

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <li>
            <button
              className='cursor-pointer hover:text-gray-400 bg-transparent border-none'
              onClick={() => document.getElementById('Header')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className='cursor-pointer hover:text-gray-400 bg-transparent border-none'
              onClick={() => document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </button>
          </li>
          <li>
            <button
              className='cursor-pointer hover:text-gray-400 bg-transparent border-none'
              onClick={() => document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className='cursor-pointer hover:text-gray-400 bg-transparent border-none'
              onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </button>
          </li>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-100 duration-300 cursor-pointer'>Sign Up</button>
        <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='md:hidden w-7' alt="" />
      </div>
      {/* MOBILE MENU */}
      <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0' } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <li><a onClick={() => setShowMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a></li>
          <li><a onClick={() => setShowMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a></li>
          <li><a onClick={() => setShowMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a></li>
          <li><a onClick={() => setShowMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a></li>  
        </ul>
      </div>
    </div>
  )
}

export default NavBar
