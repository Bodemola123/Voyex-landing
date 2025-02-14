'use client';
import React, { useEffect, useState } from 'react';
import "../../app/globals.css";
import StarsCanvas from '../common/StarBackground';
import CircularRings from '../Circular';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false); // State to trigger fade-in

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2000); // Delays the fade-in effect slightly
  }, []);

  return (
    <div className="relative overflow-hidden z-20"> {/* Add overflow-hidden here */}
      <div className="flex flex-col items-center justify-center text-center gap-[21px]">
        <div className="flex flex-row justify-center items-center">
          <div className="lg:h-[322px] md:h-[198px] sm:h-[118px] mx-auto">
            <p className='text-[#ffffff] font-semibold lg:px-[20px] lg:py-[9px] md:px-[15px] md:py-[6px] md:flex sm:hidden gap-2.5 rounded-[41px] bg-gradient-to-r from-[#C088FB] to-[#9747FF] w-fit md:text-xs lg:left-[150px] relative lg:top-[30px] md:top-[40px] md:left-[80px] '>Your AI agency anytime</p>
            <h1 className="lg:text-[165px] md:text-[98.67px] sm:text-[58.88px] sm:font-bold md:font-bold lg:font-black leading-tight text-[#ffffff] z-20 lg:-mt-10">
              Ideas Into<br></br> Workflow
            </h1>
            <p className='bg-gradient-to-r relative from-[#46BA3C] to-[#00A766] text-[#0a0a0b] font-semibold lg:px-[20px] lg:py-[9px] md:px-[15px] md:py-[6px] md:flex sm:hidden gap-2.5 rounded-[41px] w-fit md:text-xs lg:left-[500px] lg:bottom-[180px] md:left-[292px] md:bottom-[108px]'>AI Search made easy</p>
          </div>
        </div>

        <p
          className={`flex justify-center items-center md:mt-12 lg:mt-12 sm:mt-[5.97px] lg:text-xl md:text-base sm:text-base text-[#ffffff] md:leading-[25.6px] sm:leading-[23.92px] lg:w-[977px] z-20 text-center md:w-[584.27px] sm:w-auto sm:px-10 md:px-0 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
        </p>

        <div className="flex mb-10 md:flex-row lg:flex-row sm:flex-col sm:gap-[18px] lg:gap-4 md:gap-[15.57px] mt-3 justify-center items-center">
          <button className="bg-[#c088fb] flex items-center justify-center sm:py-3 md:py-2.5 sm:px-3 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#141414] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] md:w-auto lg:max-w-[269px] sm:w-[286px] z-20">
            Start your AI journey
          </button>
          <button className="bg-[#f4f4f4] flex items-center justify-center sm:py-3 sm:px-3 md:py-2.5 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#032400] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#e0e0e0] z-20 md:w-auto lg:max-w-[217px] sm:w-[286px]">
            Upload Product
          </button>
        </div>
        
        {/* The parent div now has overflow-hidden */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 flex items-center justify-center">
          <CircularRings />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default Hero;
