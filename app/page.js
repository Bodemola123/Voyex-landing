import Companies from '@/components/Companies/Companies'
import Everythingyouneed from '@/components/Everythingyouneed'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import CTA from '@/components/Play/CTA'
import Playmode from '@/components/Play/Playmode'
import Rectangle from '@/components/Rectangle'
import Templates from '@/components/Templates'
import React from 'react'
import '../app/globals.css'
import FAQ from '@/components/FAQ'
import Final from '@/components/Play/Final'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
      <Header/>
      <Hero/>
      <Playmode/>
      <Companies/>
      <Everythingyouneed/>
      <Rectangle/>
      <Templates/>
<div className='relative lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[180px] sm:w-[226.29px] sm:h-[90px] lg:mt-[1080px] md:mt-[700px] sm:mt-[1350px] top-[40px] opacity-100 rounded-b-full mx-auto bg-gradient-to-t from-black to-[#8C45FF7D] via-[#8C45FF7D] [background-size:100%_200%] [background-position:49%] backdrop-blur-[104px] glow-gradient shadow-[0px_0px_100px_60px_#8C45FF7D]'>
</div>

      <CTA/>
      <FAQ/>
      <Final/>
    </div>
  )
}

export default page
