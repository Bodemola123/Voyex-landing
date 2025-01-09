'use client'
import React, { useState } from 'react'
import '../../app/globals.css'
import Image from 'next/image'

const Header = () => {
  // Managing the dropdown state
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the mobile menu
  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className="flex justify-between items-center md:h-[72px] lg:px-[24px] md:px-[24px] sm:px-[24px] bg-[#0A0A0B] sticky top-0 z-20">
      <h1 className="font-bold text-2xl text-white">Voyex.</h1>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex md:flex text-sm font-medium text-white gap-8 py-2 px-[48px] border border-card rounded-[43px]">
        <p className='hover:text-[#C088fb]'>Pricing</p>
        <p className='hover:text-[#C088fb]'>Resources</p>
        <p className='hover:text-[#C088fb]'>About us</p>
        <p className='hover:text-[#C088fb]'>Blog</p>
      </div>

      {/* Go to App Button */}
      <a 
        href="https://voyex-app-dev.vercel.app/" 
        className="sm:hidden lg:flex md:flex bg-[#c088fb] rounded-3xl md:rounded-[27px] border-[1.5px] border-[#c088fb] text-[#0a0a0b] flex gap-2 lg:py-[6px] lg:px-9 md:py-[6px] md:px-9 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] hover:backdrop-blur-[18.4px] hover:shadow-md hover:shadow-[#c088fb]"
      >
        Go to App
      </a>

      {/* Hamburger Menu Button */}
      <button className="md:hidden" onClick={toggleDropdown}>
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-8 sm:flex flex-col gap-4 bg-[#0d0d0d] text-white rounded-lg shadow-lg py-4 px-6 z-20">
          <ul className="flex flex-col gap-4">
            <li className='hover:text-[#C088fb]'><a href="#">Pricing</a></li>
            <li className='hover:text-[#C088fb]'><a href="#">Resources</a></li>
            <li className='hover:text-[#C088fb]'><a href="#">About us</a></li>
            <li className='hover:text-[#C088fb]'><a href="#">Blog</a></li>
          </ul>
          <a 
              href="https://voyex-app-dev.vercel.app/" 
              className='bg-[#c088fb] rounded-3xl border-[1.5px] border-[#c088fb] text-sm text-[#0a0a0b] flex gap-2 px-4 py-2 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] hover:backdrop-blur-[18.4px] hover:shadow-md hover:shadow-[#c088fb] justify-start'
            >
              Go to App
          </a>
        </div>
      )}
    </div>
  )
}

export default Header
