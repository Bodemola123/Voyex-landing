import Companies from '@/components/Companies/Companies'
import Everythingyouneed from '@/components/Everythingyouneed'
import CTA from '@/components/Play/CTA'
import Playmode from '@/components/Play/Playmode'
import Rectangle from '@/components/Rectangle'
import Templates from '@/components/Templates'
import React from 'react'
import '../app/globals.css'
import FAQ from '@/components/FAQ'
import Final from '@/components/Play/Final'
import Combo from '@/components/Combo'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full '>
      <Combo/>
      <Playmode/>
      <Companies/>
      <Everythingyouneed/>
      <Rectangle/>
      <Templates/>
<div className='relative lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[880px] md:mt-[640px] sm:mt-[1520px] top-[40px] opacity-100 rounded-b-full mx-auto bg-gradient-to-t from-black to-[#8C45FF7D] via-[#8C45FF7D] [background-size:100%_200%] [background-position:49%] backdrop-blur-[104px] glow-gradient shadow-[0px_0px_100px_60px_#8C45FF7D]'>
</div>

      <CTA/>
      <FAQ/>
      <Final/>
    </div>
  )
}

export default page
