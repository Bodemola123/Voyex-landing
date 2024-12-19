import React from 'react';
import '../app/globals.css';
import Card from './Card';

const Templates = () => {
  return (
    <div 
      className="flex flex-col lg:gap-[53px] md:gap-[37.81px] lg:p-28 md:p-[84px] justify-center items-center absolute lg:top-[3270px] md:top-[2800px] opacity-[0.89] mx-auto z-50"
      style={{
        background: 'linear-gradient(180deg, #A46EDB 0%, #010101 9.46%)',
        backgroundImage: "url('/Ellipse.svg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col lg:gap-6 md:gap-[17.12px] justify-center items-center">
        <div className='flex flex-col items-center justify-center md:gap-[5.71px] lg:gap-2'>
        <p className="text-[#C088fb] font-medium lg:text-[18.44px] md:text-[13.16px]">Use Templates</p>
        <h1 className="text-[#ffffff] font-medium lg:text-5xl md:text-[34.25px]">Get Started with our Templates options</h1>
        </div>
        <button className="border border-card lg:px-9 md:px-[24.97px] lg:py-2.5 md:py-[6.42px] flex lg:gap-2.5 md:gap-2 bg-[#C088FB] text-black font-medium lg:rounded-3xl md:rounded-[19.26px] shadow-[0_0_20px_5px_rgba(192,136,251,0.5)] hover:shadow-[0_0_30px_10px_rgba(192,136,251,0.8)] transition-all duration-300">
          See All Templates
        </button>
      </div>
      <div className="lg:mt-14 md:mt-[37.81px] flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Templates;
