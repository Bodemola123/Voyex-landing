"use client"
// import CTA from '@/components/about-us-page/CTA'
import Final from '@/components/blog-page/Final'
import Blog from '@/components/blog-page/Blog'
import Combo from '@/components/blog-page/Combo'
import CTA from '@/components/blog-page/CTA'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
      <Combo/>
      <Blog/>
      <div className='relative px-9 lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[370px] md:mt-[440px] sm:mt-[620px] top-[40px] opacity-100 rounded-b-full mx-auto'>
</div>
        <CTA/>
        <Final/>
    </div>
  )
}

export default page