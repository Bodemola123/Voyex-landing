'use client'
import React from 'react'
import '../../app/globals.css'
import Image from 'next/image'
const Companies = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center '>
      <p className='text-center text-[#f4f4f4b3] mt-[103px]'>Trusted by the world&apos;s most innovative teams</p>
      <div className='grid gap-2.5 grid-cols-4 grid-rows-2'>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/AcmeCorp.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/EchoValley.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/Quantum.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/Pulse.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/Outside.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/Apex.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/Celestial.svg'} alt='acme' width={155} height={34}/></div>
        <div className='border border-card px-10 py-8 gap-2.5 rounded-xl'><Image src={'/2twice.svg'} alt='acme' width={155} height={34}/></div>
      </div>
    </div>
  )
}

export default Companies
