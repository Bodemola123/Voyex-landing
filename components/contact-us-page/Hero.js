import React from 'react'

const Hero = () => {
  return (
    <div className='flex lg:px-32 md:px-16 sm:px-10 lg:mt-36 sm:mt-28 h-full w-full items-center justify-start'>
        <div className='flex flex-col lg:gap-5 sm:gap-3 items-start justify-start text-[#f4f4f4]'>
            <div className='flex flex-col lg:gap-3 sm:gap-2 text-left'>
                <p className='font-semibold lg:text-base sm:text-sm'>Contact us</p>
                <h1 className='font-semibold lg:text-4xl sm:text-3xl'>Chat to our friendly team</h1>
            </div>
            <p className='font-normal lg:text-xl sm:text-lg'>We&apos;d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>
    </div>
  )
}

export default Hero