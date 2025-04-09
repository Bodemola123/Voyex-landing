"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { Toaster } from 'react-hot-toast';
import Form from './Form';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center md:px-10 sm:px-6 lg:py-8 sm:py-6 lg:mt-11 sm:mt-9 h-full w-full max-w-[1200px] mx-auto'>
  
      <div className='mt-4 flex md:flex-row sm:flex-col lg:gap-14 sm:gap-11 justify-between w-full'>
  
        {/* Left Side: Titles + Email Section */}
        <div className='flex flex-col lg:gap-8 sm:gap-6 w-full md:w-1/2'>
          {/* Titles */}
          <p className="bg-[#0d0d0d] text-white font-semibold lg:text-base justify-center items-center text-center sm:text-sm px-5 py-2 rounded-full inline-block w-fit">
  Contact us
</p>
          <div className='flex flex-col text-left text-[#f4f4f4] lg:gap-3 sm:gap-2'>
  
            <h1 className='font-semibold lg:text-4xl sm:text-3xl'>Chat to our friendly team</h1>
            <p className='font-normal lg:text-xl sm:text-lg text-[#f4f4f4]'>
              We&apos;d love to hear from you. Please fill out this form or shoot us an email.
            </p>
          </div>
  
          {/* Email Section */}
          <div className='flex flex-col lg:gap-4 sm:gap-2 text-[#f4f4f4]' data-aos='fade-up'>
            <MdOutlineEmail className='lg:text-2xl sm:text-2xl text-[#f4f4f4] hover:scale-110 transition-transform duration-300' />
            <div className='flex flex-col gap-2'>
              <p className='text-[#f4f4f4] font-semibold lg:text-xl sm:text-lg'>Email</p>
              <p className='text-[#667085] font-normal lg:text-base sm:text-sm'>Our friendly team is here to help.</p>
            </div>

          </div>
        </div>
  
        {/* Right Side: Form Section */}
        <div className='w-full md:w-1/2'>
          <Form />
        </div>
  
      </div>
    </div>
  );
  
   
};

export default Main;



    // <div className='flex flex-col gap-8 justify-center items-center md:px-10 sm:px-6 lg:py-8 sm:py-6 lg:mt-11 sm:mt-9 h-full w-full'>
    // <Hero />
    
    // <div className='mt-4 flex md:flex-row sm:flex-col lg:gap-14 sm:gap-11 justify-between lg:items-center md:items-center sm:items-center'>
      
    //   {/* Email Section */}
    //   <div className='flex flex-col lg:gap-4 sm:gap-2 items-start justify-center text-[#f4f4f4]' data-aos='fade-up'>
    //     <MdOutlineEmail className='lg:text-2xl sm:text-2xl text-[#f4f4f4] hover:scale-110 transition-transform duration-300' />
    //     <div className='flex flex-col gap-2'>
    //       <p className='text-[#f4f4f4] font-semibold lg:text-xl sm:text-lg'>Email</p>
    //       <p className='text-[#667085] font-normal lg:text-base sm:text-sm'>Our friendly team is here to help.</p>
    //     </div>
    //     <button 
    //       className='lg:text-base sm:text-sm hover:text-blue-400 transition-colors duration-300' 
    //       onClick={() => window.location.href = 'mailto:hi@untitledui.com'}>
    //       hi@untitledui.com
    //     </button>
    //   </div>