

"use client"
import Combo from '@/components/about-us-page/Combo'
// import CTA from '@/components/about-us-page/CTA'
import Final from '@/components/about-us-page/Final'
import Howitworks from '@/components/about-us-page/Howitworks'
import Mission from '@/components/about-us-page/Mission'
import Vision from '@/components/about-us-page/Vision'
import Whatweoffer from '@/components/about-us-page/Whatweoffer'
import CTA from '@/components/about-us-page/CTA'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
       <Combo/>
       <Mission/>
       <Vision/>
       <Whatweoffer/>
       <Howitworks/>
       <div className='relative px-9 lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[370px] md:mt-[440px] sm:mt-[620px] top-[40px] opacity-100 rounded-b-full mx-auto'>
</div>
       <CTA/>
        <Final/>
    </div>
  )
}

export default page