'use client'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center lg:mt-[50px] md:mt-[220.82px]'>
      <div className='flex flex-row gap-[40px]'>
            <Image src={'/cursor.svg'} alt='chart' width={200} height={200} className='relative lg:top-[90px] md:top-[65px] lg:left-[140px] md:left-[70px] z-40 lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px]'/>
      <h1 class="lg:text-[168px] md:text-[98.67px] font-black leading-tight text-[#ffffff] shadow-[0px_12px_4px_0px_#0000003D] z-50">
        <span>Ideas into</span><br></br>
        <span>Workflows</span>
      </h1>
            <Image src={'/message.svg'} alt='bolt' width={200} height={200} className='relative top-[-25px] lg:left-[-120px] z-40 lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] md:left-[-75px]'/> 
      </div>
      <p class="mt-6 lg:text-xl md:text-base text-[#ffffff] leading-[25.6px] lg:w-[977px] text-center md:w-[584.27px]">
Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
      </p>
      <div className='flex flex-row lg:gap-4 md:gap-[9.57px] mt-5'>
        <button className='bg-[#c088fb] flex py-2.5 px-9 rounded-3xl gap-2.5 text-[#141414] font-medium'>Start your AI journey</button>
        <button className='bg-[#f4f4f4] flex py-2.5 px-9 rounded-3xl gap-2.5 text-[#032400] font-medium'>Upload Product</button>
      </div>
    </div>
  )
}

export default Hero
