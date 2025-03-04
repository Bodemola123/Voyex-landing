"use client"
import CTA from '@/components/about-us-page/CTA'
import Final from '@/components/about-us-page/Final'
import Blog from '@/components/blog-page/Blog'
import Combo from '@/components/blog-page/Combo'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
      <Combo/>
      <Blog/>
      <div className='relative px-9 lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[370px] md:mt-[440px] sm:mt-[620px] top-[40px] opacity-100 rounded-b-full mx-auto bg-gradient-to-t from-black to-[#8C45FF7D] via-[#8C45FF7D] [background-size:100%_200%] [background-position:49%] backdrop-blur-[104px] glow-gradient shadow-[0px_0px_100px_60px_#8C45FF7D]'>
</div>
      <CTA/>
        <Final/>
    </div>
  )
}

export default page