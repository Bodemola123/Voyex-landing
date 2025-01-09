'use client';
import React, { useEffect, useState } from 'react';
import "../../app/globals.css";
import StarsCanvas from '../common/StarBackground';
import Animate from '../common/animate';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false); // State to trigger fade-in

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2000); // Delays the fade-in effect slightly
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center text-center h-screen bg-cover bg-center bg-no-repeat relative gap-[21px] z-15"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="flex flex-row justify-center items-center">
        <div className="lg:h-[322px] md:h-[198px] sm:h-[118px] mx-auto">
          <h1 className="lg:text-[165px] md:text-[98.67px] sm:text-[58.88px] sm:font-bold md:font-bold lg:font-black leading-tight text-[#ffffff] z-50">
            Ideas Into Workflow
          </h1>
        </div>
      </div>

      <p
        className={`flex justify-center items-center md:mt-12 lg:mt-12 sm:mt-[5.97px] lg:text-xl md:text-base sm:text-base text-[#ffffff] md:leading-[25.6px] sm:leading-[23.92px] lg:w-[977px] text-center md:w-[584.27px] sm:w-auto sm:px-10 md:px-0 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
      </p>

      <div className="flex md:flex-row lg:flex-row sm:flex-col sm:gap-[18px] lg:gap-4 md:gap-[15.57px] mt-3 justify-center items-center">
        <button
          className="bg-[#c088fb] flex items-center justify-center sm:py-3 md:py-2.5 sm:px-3 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#141414] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] md:w-auto sm:w-[286px] z-50"
        >
          Start your AI journey
        </button>
        <button
          className="bg-[#f4f4f4] flex items-center justify-center sm:py-3 sm:px-3 md:py-2.5 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#032400] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#e0e0e0] z-50 md:w-auto sm:w-[286px]"
        >
          Upload Product
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <StarsCanvas />
        <Animate />
      </div>
    </div>
  );
};

export default Hero;
