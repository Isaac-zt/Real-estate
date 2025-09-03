import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='mt-4 text-gray-300'>
  Estate is dedicated to helping you find your dream home and invest in quality properties. With years of experience and a commitment to excellence, we provide trusted real estate solutions for families and businesses.
</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
              <li><a href="#Header" className='hover:text-white'>Home</a></li>
              <li><a href="#About" className='hover:text-white'>About Us</a></li>
              <li><a href="#Contact" className='hover:text-white'>Contact Us</a></li>
              <li><a href="#" className='hover:text-white'>Privacy Policy</a></li>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>The latest News, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex gap-2'>
            <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
            <button className='py-2 px-4 rounded-3xl bg-blue-600 text-white hover:bg-blue-800 duration-300 ease-in-out cursor-pointer '>Subscribe</button>
          </div>
          {/* Social icons next to subscribe */}
          <div className='flex gap-4 mt-4'>
            <a href="https://www.linkedin.com/in/isaac-ekaro-09957a366" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" fill="currentColor" className="text-blue-600 hover:text-blue-800" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
            <a href="https://github.com/Isaac-zt" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" fill="currentColor" className="text-gray-300 hover:text-gray-500" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 cursor-default'>
        Copyright 2025 © ESTATE. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
