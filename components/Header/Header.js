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

  // Handle button click
  const handleClick = () => {
    alert('Button Clicked')
  }

  return (
    <div className="flex justify-between items-center mt-6 lg:px-[96px] md:px-[46px] sm:px-[30px]">
      <h1 className="font-bold text-2xl text-white">Voyex.</h1>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex md:flex text-sm font-medium text-white gap-8 py-2 px-[48px] border border-card rounded-[43px]">
        <p>Pricing</p>
        <p>Resources</p>
        <p>About us</p>
        <p>Blog</p>
      </div>

      {/* Go to App Button */}
      <button 
        className="sm:hidden lg:flex md:flex bg-[#c088fb] rounded-3xl md:rounded-[27px] border-[1.5px] border-[#c088fb] text-[#0a0a0b] flex gap-2 lg:py-2.5 lg:px-9 md:py-[6px] md:px-9 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7]" 
        onClick={handleClick}
      >
        Go to App
      </button>

      {/* Hamburger Menu Button */}
      <button className="md:hidden" onClick={toggleDropdown}>
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-8 sm:block bg-[#0d0d0d] text-white rounded-lg shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
