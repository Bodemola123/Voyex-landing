'use client'
import React from 'react'
import '../app/globals.css'
import Image from 'next/image'

const Everythingyouneed = () => {
  return (
    <div className='flex flex-col lg:gap-16 md:gap-[43px] justify-center items-center '>
        <div className='flex flex-col lg:gap-5 md:gap-[13px] mt-44 text-center'>
            <h1 className='text-[#ffffff] lg:text-[54px] md:text-[38.03px] lg:leading-[60px] md:leading-[38.57px] font-bold'>Everything you need</h1>
            <span className='text-[#ffffff] text-center lg:w-[1144px] md:w-[729px] lg:text-[22px] md:text-[15px] font-normal'>
                <p> It&apos;s like having a personal agency that manages everything, from content creation and social media strategies to technical tasks.</p>

            </span>
        </div>
        <div className='grid grid-cols-2 lg:gap-4 md:gap-[10.28px] lg:w-[1144px] md:w-[729px]'>
            <div className='lg:p-10 md:p-[25.71px] lg:border md:border-[0.64px] border-card lg:rounded-xl md:rounded-[6.43px] flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px]'>
                <div className='lg:p-5 md:p-[11.57px] lg:w-[56px] md:w-[36px] flex lg:rounded-xl md:rounded-[6.43px] bg-[#ffffff]'><Image src={'/Vector.svg'} alt='vec' width={15.63} height={15.63} className='md:w-[10.04px] md:h-[10.04px] lg:w-[15.63px] lg:h-[15.63px]'/></div>
                <h1 className='font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px]'>AI Query Engine</h1>
                <span className='flex flex-col lg:w-[319px] md:w-[294.77.px] md:text-[14.79px] text-center justify-center items-center font-normal lg:text-base text-[#ffffff] '>
                    <p>Voyex&apos;s AI query engine finds the best tools for your tasks, saving you time on research and maximizing efficiency</p>
                </span>
            </div>
            <div className='lg:p-10 md:p-[25.71px] lg:border md:border-[0.64px] border-card lg:rounded-xl md:rounded-[6.43px] flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px]'>
                <div className='lg:p-5 md:p-[11.57px] lg:w-[56px] md:w-[36px] flex lg:rounded-xl md:rounded-[6.43px] bg-[#ffffff]'><Image src={'/Vector.svg'} alt='vec' width={15.63} height={15.63} className='md:w-[10.04px] md:h-[10.04px] lg:w-[15.63px] lg:h-[15.63px]'/></div>
                <h1 className='font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px]'>Workflow Creation</h1>
                <span className='flex flex-col lg:w-[400px] md:w-[311.67px] text-center justify-center items-center font-normal md:text-[14.79px] lg:text-base text-[#ffffff]'>
                    <p>Voyex delivers the best tools and workflows, adapting with feedback to ensure tasks are completed efficiently from start to finish.</p>

                </span>
            </div>
        </div>
        <div className='lg:grid lg:grid-cols-3 lg:gap-2.5 md:gap-[6.43px] md:flex md:flex-row'>
            <div className='flex flex-col lg:gap-2 lg:p-4 md:py-[10.93px] px-[10.28] border border-card bg-black lg:rounded-[13px] md:rounded-[8.36px]'>
                <Image src={'/Visual.svg'} alt='holo' width={311} height={242} className='lg:w-[311px] lg:h-[242px] md:w-[199.9px] md:h-[155.55px]'/>
                <div className='flex flex-col lg:gap-[9px] md:gap-[5.79px] lg:w-[358px] md:w-[320.11px]'>
                <h1 className='font-medium text-[#ffffff]'>The Future of Automation: Agent-Based Workflows</h1>
                <p className='text-[#ffffffb3]'> This is just the beginning. We're developing agent-based workflows that will allow you to</p>
                </div>
            </div>
            <div className='flex flex-col lg:pl-10 md:pl-[25.71px] lg:pb-5 md:pb-[11.1px] border bg-black border-card items-baseline justify-end col-span-2 lg:rounded-[13px] md:rounded-[6.43px] lg:w-[744px] lg:h-[400px] md:w-[478.23px] md:h-[316.19px]'
                    style={{ 
                        backgroundImage: "url('/Visual1.svg')", 
                        backgroundSize: 'contain',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center',  
                      }}>
                <h1 className='font-medium text-[#ffffff]'>Automate campaigns</h1>
                <p className='text-[#ffffffb3]'>Automated campaigns simplify marketing </p>
                <p className='text-[#ffffffb3]'>with personalized, data-driven strategies.</p>
            </div>
        </div>
    </div>
  )
}

export default Everythingyouneed
