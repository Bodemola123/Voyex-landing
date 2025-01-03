'use client'
import React, { useState } from 'react'
import '../../app/globals.css'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-row lg:px-[96px] md:px-[46px] sm:px-[30px] justify-between mt-6 items-center'>
      <h1 className='font-bold text-2xl text-[#ffffff]'>Voyex.</h1>
      
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

      {/* Mobile Dropdown Toggle */}
      <button className='md:hidden' onClick={toggleDropdown}>
        <Image src={'/menu.svg'} alt='menu' width={24} height={24} />
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-16 right-8 sm:block bg-[#0d0d0d] text-[#ffffff] rounded-lg shadow-lg py-4 px-6'>
          <ul className='flex flex-col gap-4'>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
