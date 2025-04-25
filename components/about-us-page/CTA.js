'use client'
import React from 'react';
import '../../app/globals.css';

const CTA = () => {
  return (
    <div
      className="flex flex-col lg:gap-2.5 md:gap-[6.08px] sm:gap-2.5 z-10 lg:px-[170px] md:px-[70.42px] sm:px-[35px] lg:rounded-lg md:rounded-[6.08px] sm:rounded-[10px] border border-white/15 mx-auto relative lg:top-[-400px] md:top-[-400px] sm:top-[-500px] justify-center items-center lg:max-w-[1100px] lg:h-[473px] md:max-w-[669.17px] md:h-[341.27px] sm:w-full sm:h-[533px] hover:border-white/30 transition-all duration-300"
      style={{
        background: 'linear-gradient(180.17deg, rgba(2, 1, 3, 0) 0%, #020103 90%), url("/pattern.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-center text-[#ffffff] font-medium lg:text-[56px] md:text-[34.07px] sm:text-[26px] mt-10 sm:w-4/5 sm:px- md:w-[479.97px] lg:w-[789px] hover:scale-105 transition-transform duration-300">
        Are You an AI Tool Developer or Product Owner?
      </h1>

      {/* <p className="text-center text-[#FFFFFFB2] text-base sm:text-sm md:text-md lg:text-lg sm:px-6 md:px-0 mt-4 lg:w-[750px] md:w-[500px] sm:w-4/5">
        Whether you&apos;re an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
      </p> */}

{/* <p className="text-center text-[#FFFFFFB2] text-base sm:text-sm md:text-md lg:text-lg whitespace-nowrap overflow-x-auto mt-4 mb-4 px-2">
  Whether you're an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
</p> */}

<p className="text-center text-[#FFFFFFB2] text-base sm:text-sm md:text-md lg:text-lg 
  lg:whitespace-normal sm:whitespace-normal md:whitespace-normal mt-4 mb-4 px-2
  sm:max-w-[300px] md:max-w-[400px] lg:max-w-none mx-auto">
  Whether you're an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
</p>

     
<button
  className="lg:mt-[30px] md:mt-[10px] sm:mt-[0px] sm:mb-2 md:mb-0 lg:rounded-[27px] md:rounded-[16.43px] sm:rounded-[23px] flex font-medium bg-[#f4f4f4] text-[#032400] lg:px-[35px] md:px-[21.29px] sm:px-[21.29px] sm:py-3 lg:py-2.5 md:py-3 lg:gap-2.5 md:gap-[6.08px] sm:gap-[6.08px] hover:scale-105 hover:bg-gradient-to-r hover:from-[#e4e4e4] hover:to-[#ffffff] transition-all duration-300"
>
  Get started
</button>
    </div>
  );
};

export default CTA;