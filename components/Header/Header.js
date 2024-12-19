'use client'
import React from 'react'
import '../../app/globals.css'

const Header = () => {
  return (
    <div className='flex flex-row lg:px-[96px] md:px-[46px] justify-between mt-6 items-center'>
      <h1 className='font-bold text-2xl text-[#ffffff]'>Voyex.</h1>
      <div className='text-sm font-medium text-[#ffffff] flex flex-row justify-between gap-8 rounded-[43px] border border-card py-2 px-[48px] '>
        <p>Pricing</p>
        <p>Resources</p>
        <p>About us</p>
        <p>Blog</p>
      </div>
      <button className=' bg-[#c088fb] lg:rounded-3xl md:rounded-[27px] border-[1.5px] text-[#0a0a0b] border-[#c088fb] flex gap-2 lg:py-2.5 lg:px-9 md:py-[6px] md:px-9'>Go to App</button>
    </div>
  )
}

export default Header
