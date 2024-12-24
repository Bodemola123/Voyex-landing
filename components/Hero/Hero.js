'use client'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center lg:mt-[50px] md:mt-[220.82px] sm:mt-[221px]'>
      <div className='flex flex-row gap-[40px] justify-center items-center'>
            <Image src={'/cursor.svg'} alt='chart' width={200} height={200} className='relative lg:top-[90px] md:top-[65px] lg:left-[140px] md:left-[70px] z-40 lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] sm:hidden md:flex lg:flex'/>
      <h1 class="lg:text-[168px] md:text-[98.67px] sm:text-[58.88px] sm:font-bold md:font-bold lg:font-black leading-tight text-[#ffffff] shadow-[0px_12px_4px_0px_#0000003D] z-50">
        <span>Ideas into</span><br></br>
        <span>Workflows</span>
      </h1>
            <Image src={'/message.svg'} alt='bolt' width={200} height={200} className='relative top-[-25px] lg:left-[-250px] z-40 lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] md:left-[-165px] sm:hidden md:flex lg:flex'/> 
      </div>
      <p class="md:mt-6 lg:mt-6 sm:mt-[5.97px] lg:text-xl md:text-base sm:text-sm text-[#ffffff] md:leading-[25.6px] sm:leading-[17.92px] lg:w-[977px] text-center md:w-[584.27px] sm:w-[350px]">
Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
      </p>
      <div className='flex md:flex-row lg:flex-row sm:flex-col sm:gap-[14px] lg:gap-4 md:gap-[9.57px] mt-5'>
        <button className='bg-[#c088fb] flex items-center justify-center sm:py-4 md:py-2.5 sm:px-6 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#141414] font-medium'>Start your AI journey</button>
        <button className='bg-[#f4f4f4] flex items-center justify-center sm:py-4 sm:px-6 md:py-2.5 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#032400] font-medium'>Upload Product</button>
      </div>
    </div>
  )
}

export default Hero
