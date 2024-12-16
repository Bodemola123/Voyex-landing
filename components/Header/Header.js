'use client'
import React from 'react'
import '../../app/globals.css'

const Header = () => {
  return (
    <div className='flex flex-row px-[96px] justify-between mt-6 items-center'>
      <h1 className='font-bold text-2xl text-[#ffffff]'>Voyex.</h1>
      <div className='text-sm font-medium text-[#ffffffb3] flex flex-row justify-between gap-8 rounded-[43px] border border-card py-2 px-[48px] '>
        <p>Pricing</p>
        <p>Resources</p>
        <p>About us</p>
        <p>Blog</p>
      </div>
      <button className=' bg-[#c088fb] rounded-3xl flex gap-2 py-2.5 px-9 text-[#f4f4f4]'>Go to App</button>
    </div>
  )
}

export default Header
