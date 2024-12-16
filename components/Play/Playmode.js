'use client'
import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import '../././../app/globals.css'

const Playmode = () => {
  return (
    <div className='flex justify-center items-center mt-[179px]'>
      <div  className='border rounded-[18px] border-card flex justify-center items-center' 
        style={{ 
          backgroundImage: "url('/ChatBot.svg')", 
          backgroundSize: 'contain',  
          backgroundRepeat: 'no-repeat',  
          backgroundPosition: 'center',  
          width: '1131px',
          height: '635px' 
        }}>
      <button className=' p-[23.86px] gap-[23.86px] border rounded-3xl flex  items-center justify-center bg-custom-gradient backdrop-blur-custom'>
         <CiPlay1 className='text-white w-14 h-14'/>
        </button>
      </div>
    </div>
  )
}

export default Playmode
