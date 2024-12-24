'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Final = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (email) {
        alert('Email submitted: ' + email);
        setEmail(''); // Clear the input after submission
      } else {
        alert('Please enter a valid email address');
      }
    };
  return (
    <div className='mt-[176px] flex flex-col lg:px-[120px] md:px-[10px] sm:px-[10px]'>
        <div className='flex flex-row sm:gap-[40px] justify-center items-center sm:mx-auto'>
            <Image src={'/Chart.svg'} alt='chart' width={263} height={263} className='relative lg:top-[-106px] md:top-[-136px] lg:left-0 md:right-[0px] sm:hidden md:flex'/>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='md:font-bold sm:font-normal md:text-[54px] sm:text-[32px] text-center text-[#ffffff]'>Get instant access</h1>
                <p className='text-[#bbbbbb] text-base sm:w-[333px] md:w-[447px] font-normal text-center'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <form onSubmit={handleSubmit}className='flex md:flex-row sm:flex-col justify-center gap-2.5 items-center'>
                    <input
                    type='email'
                    id='emailInput'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    require
                    className='px-3 py-2.5 rounded-[27px] flex gap-2.5 bg-white/20 text-white/50 items-center sm:w-[286px]'
                    />
                    <button type='submit' className='py-2.5 px-[15px] flex gap-1 bg-[#ffffff] text-[#000000] font-medium text-base rounded-[27px] sm:w-[286px] md:w-auto items-center justify-center'>Get Access</button>
                </form>
            </div>
            <Image src={'/Bolt.svg'} alt='bolt' width={225} height={225} className='relative lg:top-[35px] md:top-[38px] lg:left-0 md:left-[0px] sm:hidden md:flex'/> 
        </div>
        <div className='md:mt-[40px] sm:mt-[72px] border-t border-white/20 flex md:flex-row sm:flex-col px-[40px] md:py-[20px] sm:py-[50px] md:justify-between sm:justify-center sm:items-center sm:gap-2 md:gap-0'>
        <p className='text-sm font-normal text-[#808080]'>@ 2024 VOYEX, Inc. All rights reserved</p>
        <div className='flex flex-row lg:gap-[16px] md:gap-[15px] sm:gap-[15px]'>
          <Image src={'/X.svg'} alt='X' width={16} height={14}/>
          <Image src={'/Insta.svg'} alt='X' width={19.5} height={19.5}/>
          <Image src={'/Pinterest.svg'} alt='X' width={16} height={16}/>
          <Image src={'/Linkedin.svg'} alt='X' width={16} height={16}/>
          <Image src={'/Tiktok.svg'} alt='X' width={17} height={15}/>
          <Image src={'/Youtube.svg'} alt='X' width={21} height={16.5}/>
        </div>
        </div>
      
    </div>
  )
}

export default Final
