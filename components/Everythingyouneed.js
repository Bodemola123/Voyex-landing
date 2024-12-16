'use client'
import React from 'react'
import '../app/globals.css'
import Image from 'next/image'

const Everythingyouneed = () => {
  return (
    <div className='flex flex-col gap-16 justify-center items-center '>
        <div className='flex flex-col gap-5 mt-44 text-center'>
            <h1 className='text-[#ffffff] text-[54px] leading-[60px]'>Everything you need</h1>
            <span className='text-[#ffffff] text-[22px] font-normal'>
                <p> It&apos;s like having a personal agency that manages everything, from content creation and social media</p><br></br>
                <p className='-mt-8'>strategies to technical tasks.</p>
            </span>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div className='p-10 border border-card rounded-xl flex flex-col justify-center items-center bg-[#0d0d0d] gap-6'>
                <div className='p-5 w-[56px] flex rounded-xl bg-[#ffffff]'><Image src={'/Vector.svg'} alt='vec' width={15.63} height={15.63}/></div>
                <h1 className='font-bold text-center text-[#ffffff] text-[18px] leading-[23.03px]'>AI Query Engine</h1>
                <span className='flex flex-col justify-center items-center font-normal text-base text-[#ffffff]'>
                    <p>Voyex&apos;s AI query engine finds the best tools </p>
                    <p> for your tasks, saving you time on research </p>
                    <p>and maximizing efficiency</p>
                </span>
            </div>
            <div className='p-10 border border-card rounded-xl flex flex-col justify-center items-center bg-[#0d0d0d] gap-6'>
                <div className='p-5 w-[56px] flex rounded-xl bg-[#ffffff] items-center justify-center'><Image src={'/Vector.svg'} alt='vec' width={15.63} height={15.63}/></div>
                <h1 className='font-bold text-center text-[#ffffff] text-[18px] leading-[23.03px]'>Workflow Creation</h1>
                <span className='flex flex-col justify-center items-center font-normal text-base text-[#ffffff]'>
                    <p>Voyex delivers the best tools and workflows, adapting</p>
                    <p> with feedback to ensure tasks are completed </p>
                    <p>efficiently from start to finish.</p>
                </span>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2.5'>
            <div className='flex flex-col gap-2 p-4 border border-card bg-black rounded-[13px]'>
                <Image src={'/Visual.svg'} alt='holo' width={311} height={242}/>
                <h1 className='font-medium text-[#ffffff]'>The Future of Automation: Agent-Based</h1>
                <h1 className='font-medium text-[#ffffff]'>Workflows</h1>
                <p className='text-[#ffffffb3]'> This is just the beginning. We're developing </p>
                <p className='text-[#ffffffb3]'>agent-based workflows that will allow you to</p>
            </div>
            <div className='flex flex-col p-10 border bg-black border-card items-baseline justify-end col-span-2 rounded-[13px]'
                    style={{ 
                        backgroundImage: "url('/Visual1.svg')", 
                        backgroundSize: 'contain',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center',  
                        width: '744px',
                        height: '400px' 
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
