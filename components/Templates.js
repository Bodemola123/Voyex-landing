'use client'
// Templates Component with Micro-Interactions
import React from 'react';
import '../app/globals.css';
import Card from './Card';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Templates = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div 
      className="flex flex-col lg:gap-[53px] md:gap-[37.81px] sm:gap-[37.87px] sm:py-[84px] sm:px-[30px] lg:p-28 md:px-[30px] md:py-[84px] justify-center items-center absolute lg:top-[3000px] md:top-[2650px] sm:top-[3020px] opacity-[0.89] md:mx-auto z-50"
      style={{
        background: 'linear-gradient(180deg, #A46EDB 0%, #010101 9.46%)',
        backgroundImage: "url('/Ellipse.svg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-aos="fade-up"
    >
      <div className="flex flex-col lg:gap-6 md:gap-[17.12px] sm:gap-[17.12px] justify-center items-center">
        <div className='flex flex-col items-center justify-center md:gap-[5.71px] lg:gap-2 sm:gap-[5.71px]'>
          <p className="text-[#C088fb] font-medium lg:text-[18.44px] md:text-[13.16px] sm:text-[13.16px]">Use Templates</p>
          <h1 className="text-[#ffffff] font-medium lg:text-5xl md:text-[34.25px] sm:text-[32px] text-center" data-aos="zoom-in">
            Get Started with our Templates options
          </h1>
        </div>
        <button 
          className="border border-card sm:text-[9.99px] md:text-sm lg:px-9 md:px-[24.97px] sm:px-[24.97px] sm:py-[6.42px] lg:py-2.5 md:py-[6.42px] flex lg:gap-2.5 md:gap-2 sm:gap-2 bg-[#C088FB] text-black font-medium lg:rounded-3xl md:rounded-[19.26px] sm:rounded-[19.26px] shadow-[0_0_20px_5px_rgba(192,136,251,0.5)] hover:shadow-[0_0_30px_10px_rgba(192,136,251,0.8)] transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          See All Templates
        </button>
      </div>
      <div className="lg:mt-14 md:mt-[37.81px] sm:mt-[37.81px] flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Templates;