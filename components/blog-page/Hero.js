import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:gap-10 md:gap-8 sm:gap-6 sm:px-4 md:px-0'>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <p className='text-[#f4f4f4] font-semibold lg:text-lg sm:text-base '>Subscribe to our mailing</p>
            <div className='flex md:flex-row sm:flex-col md:gap-2.5 sm:gap-2.5 items-center justify-center'>
            <input
                type='email'
                id='emailInput'
                placeholder="name@email.com"
                className='px-3 py-2.5 rounded-[27px] flex gap-2.5 bg-white/20 placeholder:text-white/50 text-[#f4f4f4] lg:text-base sm:text-sm items-center sm:w-[286px] focus:ring-2 focus:ring-[#C088fb] focus:outline-none'
            />
            <button className='py-2.5 px-[15px] flex gap-1 bg-[#ffffff] text-[#000000] font-medium sm:text-sm lg:text-base rounded-[27px] sm:w-[136px] md:w-auto items-center justify-center'>
                Subscribe
            </button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-bold lg:text-8xl md:text-6xl sm:text-5xl text-[#f4f4f4]'>Welcome to <br></br>VOYEX Blog</h1>
                <p className='font-medium lg:text-base sm:text-sm text-[#f4f4f4] text-center'>All the latest updates about our products, our team, and our community.</p>
            </div>
    </div>
  )
}

export default Hero