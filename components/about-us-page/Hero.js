'use client';
import React, { useEffect, useState } from 'react';
import "../../app/globals.css";

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
          <div className="lg:h-[322px] md:h-[198px] sm:h-[118px] mx-auto mt-32">
            <p className='text-[#ffffff] font-semibold lg:px-[20px] lg:py-[9px] md:px-[15px] md:py-[6px] md:flex sm:hidden gap-2.5 rounded-[41px] bg-gradient-to-r from-[#C088FB] to-[#9747FF] w-fit md:text-xs lg:left-[150px] relative lg:top-[20px] md:top-[20px] md:left-[80px] '>Revolutionizing AI-Powered Productivity</p>
            <h1 className="lg:text-[165px] md:text-[98.67px] sm:text-[58.88px] sm:font-bold md:font-bold lg:font-black leading-tight text-[#ffffff] z-20 lg:-mt-10">
              About Us
            </h1>
          </div>
        </div>

        <p
          className={`flex justify-center items-center md:-mt-16 lg:-mt-36 sm:-mt-[45.97px] lg:text-xl md:text-base sm:text-base text-[#ffffff] md:leading-[25.6px] sm:leading-[23.92px] lg:w-[977px] z-20 text-center md:w-[584.27px] sm:w-auto sm:px-10 md:px-0 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          At Voyex, we empower individuals and organizations with AI-driven tools that streamline workflows, enhance efficiency, and unlock new possibilities. Whether you're an individual user or a large enterprise, our intelligent solutions help you achieve more with automation, insights, and seamless integration.
        </p>

        <div className="flex mb-10 md:flex-row lg:flex-row sm:flex-col sm:gap-[18px] lg:gap-4 md:gap-[15.57px] mt-3 justify-center items-center">
          <button className="bg-[#f4f4f4] flex items-center justify-center sm:py-3 sm:px-3 md:py-2.5 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#032400] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#e0e0e0] z-20 md:w-auto lg:max-w-[217px] sm:w-[236px]">
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
