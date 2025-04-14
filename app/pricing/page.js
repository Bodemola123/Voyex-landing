"use client"
import Header from '@/components/Header/Header'
import Final from '@/components/pricing-page/final'
import Soon from '@/components/pricing-page/soon'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
      <Header/>
      <Soon/>
      <div className='relative px-9 lg:w-[786px] lg:h-[10px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[370px] md:mt-[440px] sm:mt-[620px] top-[40px] opacity-100 rounded-b-full mx-auto'>
      </div>
      <Final/>
    </div>
  )
}

export default page