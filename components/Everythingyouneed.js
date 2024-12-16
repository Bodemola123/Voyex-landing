'use client'
import React from 'react'
import '../app/globals.css'
import Image from 'next/image'

const Everythingyouneed = () => {
  return (
    <div className='flex flex-col gap-16 justify-center items-center bg-black'>
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
                    <p>Enhance your productivity by connecting</p>
                    <p>with your favorite tools,keeping all your </p>
                    <p>essentials in one place.</p>
                </span>
            </div>
            <div className='p-10 border border-card rounded-xl flex flex-col justify-center items-center bg-[#0d0d0d] gap-6'>
                <div className='p-5 w-[56px] flex rounded-xl bg-[#ffffff] items-center justify-center'><Image src={'/Vector.svg'} alt='vec' width={15.63} height={15.63}/></div>
                <h1 className='font-bold text-center text-[#ffffff] text-[18px] leading-[23.03px]'>Workflow Creation</h1>
                <span className='flex flex-col justify-center items-center font-normal text-base text-[#ffffff]'>
                    <p>Define and track your goals, breaking down</p><br></br>
                    <p className='-mt-5'> objectives into achievable tasks to keep</p><br></br>
                    <p className='-mt-5'>your targets in sight.</p>
                </span>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2.5'>
            <div className='flex flex-col gap-2 p-4 border border-card rounded-[13px]'>
                <Image src={'/Visual.svg'} alt='holo' width={311} height={242}/>
                <h1 className='font-medium text-[#ffffff]'>The Future of Automation: Agent-Based</h1>
                <h1 className='font-medium text-[#ffffff]'>Workflows</h1>
                <p className='text-[#ffffffb3]'>Helps you set and achieve SEO goals </p>
                <p className='text-[#ffffffb3]'>with guided assistance.</p>
            </div>
            <div className='flex flex-col p-10 border border-card items-baseline justify-end col-span-2 rounded-[13px]'
                    style={{ 
                        backgroundImage: "url('/Visual1.svg')", 
                        backgroundSize: 'contain',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center',  
                        width: '744px',
                        height: '400px' 
                      }}>
                <h1 className='font-medium text-[#ffffff]'>Automate campaigns</h1>
                <p className='text-[#ffffffb3]'>Perform complex SEO audits and</p>
                <p className='text-[#ffffffb3]'>optimizations with a single click.</p>
            </div>
        </div>
    </div>
  )
}

export default Everythingyouneed
