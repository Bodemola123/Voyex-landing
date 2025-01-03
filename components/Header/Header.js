'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <div className='flex flex-row lg:px-[96px] md:px-[46px] sm:px-[30px] justify-between mt-6 items-center relative'>
      <h1 className='font-bold text-2xl text-[#ffffff]'>Voyex.</h1>

      {/* Button for Small Screens */}
      <button 
        className='sm:block md:hidden lg:hidden bg-transparent border-none' 
        onClick={toggleMenu}
      >
        <Image src={'/menu.svg'} alt='menu' width={24} height={24} />
      </button>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className='absolute top-[70px] left-0 bg-[#ffffff] p-4 rounded-lg shadow-lg sm:block md:hidden lg:hidden'>
          <ul className='space-y-4'>
            <li>Pricing</li>
            <li>Resources</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <div className='text-sm font-medium text-[#ffffff] flex flex-row justify-between gap-8 rounded-[43px] border border-card py-2 px-[48px] lg:flex md:flex sm:hidden'>
        <p>Pricing</p>
        <p>Resources</p>
        <p>About us</p>
        <p>Blog</p>
      </div>

      {/* Button */}
      <button className='sm:hidden bg-[#c088fb] lg:rounded-3xl md:flex lg:flex md:rounded-[27px] border-[1.5px] text-[#0a0a0b] border-[#c088fb] flex gap-2 lg:py-2.5 lg:px-9 md:py-[6px] md:px-9'>
        Go to App
      </button>
    </div>
  );
};

export default Header;
