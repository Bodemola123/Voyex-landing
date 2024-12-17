'use client'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-[50px]'>
      <div className='flex flex-row gap-[40px]'>
            <Image src={'/cursor.svg'} alt='chart' width={200} height={200} className='relative top-[90px] left-[140px] z-40'/>
      <h1 class="text-[168px] font-black leading-tight text-[#ffffff] shadow-[0px_12px_4px_0px_#0000003D] z-50">
        <span>Ideas into</span><br></br>
        <span>Workflows</span>
      </h1>
            <Image src={'/message.svg'} alt='bolt' width={200} height={200} className='relative top-[-25px] left-[-120px] z-40'/> 
      </div>
      <p class="mt-6 text-xl text-[#ffffff] leading-[25.6px]">
        <span>        Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your <br></br> 
        </span> <span>needs, and it helps you build a mini agency effortlessly.</span>
      </p>
      <div className='flex flex-row gap-4 mt-5'>
        <button className='bg-[#c088fb] flex py-2.5 px-9 rounded-3xl gap-2.5 text-[#141414] font-medium'>Start your AI journey</button>
        <button className='bg-[#f4f4f4] flex py-2.5 px-9 rounded-3xl gap-2.5 text-[#032400] font-medium'>Upload Product</button>
      </div>
    </div>
  )
}

export default Hero
