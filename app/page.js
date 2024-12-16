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
import Stars from '@/components/Stars'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>

      <Stars/>
      <Playmode/>
      <Companies/>
      <Everythingyouneed/>
      <Rectangle/>
      <Templates/>
      <div className='relative w-[686px] h-[290px] top-[60px]  mt-20 rounded-b-full mx-auto bg-gradient-to-t from-black to-[#8C45FF7D] via-black [background-size:100%_200%] [background-position:49%] backdrop-blur-[304px] glow-gradient'>
</div>
      <CTA/>
      <FAQ/>
      <Final/>
    </div>
  )
}

export default page
