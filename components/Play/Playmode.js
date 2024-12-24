'use client'
import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import '../././../app/globals.css'

const Playmode = () => {
  return (
    <div className='flex justify-center items-center md:mt-[179px] sm:mt-[75.32px]'>
<div className='border rounded-[18px] border-card flex justify-center items-center lg:w-[1131px] lg:h-[635px] md:w-[730px] md:h-[409px] sm:w-[344px] sm:h-[193px]' 
  style={{ 
    backgroundImage: "url('/ChatBot.svg')", 
    backgroundSize: 'contain',  
    backgroundRepeat: 'no-repeat',  
    backgroundPosition: 'center' 
  }} 

>
      <button className=' lg:p-[23.86px] md:p-[13.66px] sm:p-[3.86px] lg:gap-[23.86px] md:gap-[13.66px] sm:gap-[3.86px] border lg:rounded-3xl md:rounded-xl sm:rounded-md flex  items-center justify-center bg-custom-gradient backdrop-blur-custom'>
         <CiPlay1 className='text-white lg:w-14 lg:h-14 md:w-8 md:h-8 sm:w-8 sm:h-8'/>
        </button>
      </div>
    </div>
  )
}

export default Playmode
