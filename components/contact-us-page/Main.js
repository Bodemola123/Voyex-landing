"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
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
    <div className='flex lg:px-24 md:px-12 sm:px-6 lg:py-8 sm:py-6 lg:mt-11 sm:mt-9 h-full w-full items-center justify-center'>
      <div className='flex md:flex-row sm:flex-col lg:gap-14 sm:gap-11 lg:px-8 sm:px-4 justify-between lg:items-start md:items-start sm:items-start'>
        <div className='sm:flex sm:flex-col md:grid md:grid-rows-2 lg:gap-12 sm:gap-9'>
          <div className='sm:flex md:grid md:grid-cols-2 sm:flex-col lg:gap-8 sm:gap-6'>
            <div className='flex flex-col lg:gap-4 sm:gap-2 items-start justify-center text-[#f4f4f4]' data-aos='fade-up'>
              <MdOutlineEmail className='lg:text-2xl sm:text-2xl text-[#f4f4f4] hover:scale-110 transition-transform duration-300'/>
              <div className='flex flex-col gap-2'>
                <p className='text-[#f4f4f4] font-semibold lg:text-xl sm:text-lg'>Email</p>
                <p className='text-[#667085] font-normal lg:text-base sm:text-sm'>Our friendly team is here to help.</p>
              </div>
              <button 
                className='lg:text-base sm:text-sm hover:text-blue-400 transition-colors duration-300' 
                onClick={() => window.location.href = 'mailto:hi@untitledui.com'}>
                hi@untitledui.com
              </button>
            </div>
            <div className='flex flex-col lg:gap-4 sm:gap-2 items-start justify-center text-[#f4f4f4]' data-aos='fade-up'>
              <IoChatbubbleOutline className='lg:text-2xl sm:text-2xl text-[#f4f4f4] hover:scale-110 transition-transform duration-300'/>
              <div className='flex flex-col gap-2'>
                <p className='text-[#f4f4f4] font-semibold lg:text-xl sm:text-lg'>Live Chat</p>
                <p className='text-[#667085] font-normal lg:text-base sm:text-sm'>Our friendly team is here to help.</p>
              </div>
              <button className='lg:text-base sm:text-sm hover:text-blue-400 transition-colors duration-300'>Start new chat</button>
            </div>
          </div>
          <div className='sm:flex md:grid md:grid-cols-2 sm:flex-col lg:gap-8 sm:gap-6'>
            <div className='flex flex-col lg:gap-4 sm:gap-2 items-start justify-center text-[#f4f4f4]' data-aos='fade-up'>
              <CiLocationOn className='lg:text-2xl sm:text-2xl text-[#f4f4f4] hover:scale-110 transition-transform duration-300'/>
              <div className='flex flex-col gap-2'>
                <p className='text-[#f4f4f4] font-semibold lg:text-xl sm:text-lg'>Office</p>
                <p className='text-[#667085] font-normal lg:text-base sm:text-sm'>Come say hello at our office HQ.</p>
              </div>
              <button 
                className='lg:text-base sm:text-sm hover:text-blue-400 transition-colors duration-300 text-left' 
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=100+Smith+Street+Collingwood+VIC+3066+AU', '_blank')}>
                100 Smith Street <br /> Collingwood VIC 3066 AU
              </button>
            </div>
            <div className='flex flex-col lg:gap-4 sm:gap-2 items-start justify-center text-[#f4f4f4]' data-aos='fade-up'>
              <FiPhone className='lg:text-2xl sm:text-2xl text-[#f4f4f4] hover:scale-110 transition-transform duration-300'/>
              <div className='flex flex-col gap-2'>
                <p className='text-[#f4f4f4] font-semibold lg:text-xl sm:text-lg'>Phone</p>
                <p className='text-[#667085] font-normal lg:text-base sm:text-sm'>Mon-Fri from 8am to 5pm.</p>
              </div>
              <button 
                className='lg:text-base sm:text-sm hover:text-blue-400 transition-colors duration-300 text-left' 
                onClick={() => window.location.href = 'tel:+15550000000'}>
                +1 (555) 000-0000
              </button>
            </div>
          </div>
        </div>
        <Form data-aos='fade-left'/>
      </div>
    </div>
  );
};

export default Main;
