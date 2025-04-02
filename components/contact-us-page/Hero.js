import React from 'react'

const Hero = () => {
  return (
    <div className='flex sm:mt-10 h-full w-full'>
        <div className='flex flex-col lg:gap-5 sm:gap-3 items-start justify-center text-[#f4f4f4]'>
            <div className='flex flex-col lg:gap-3 sm:gap-2 '>
                <p className='font-semibold md:text-left sm:text-center lg:text-base sm:text-sm'>Contact us</p>
                <h1 className='font-semibold md:text-left sm:text-center lg:text-4xl sm:text-3xl'>Chat to our friendly team</h1>
            </div>
            <p className='font-normal lg:text-xl sm:text-lg md:text-left sm:text-center'>We&apos;d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>
    </div>
  )
}

export default Hero