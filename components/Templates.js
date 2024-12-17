import React from 'react';
import '../app/globals.css';
import Card from './Card';

const Templates = () => {
  return (
    <div 
      className="flex flex-col gap-[53px] p-28 justify-center items-center absolute top-[3270px] opacity-[0.89] mx-auto z-50"
      style={{
        background: 'linear-gradient(180deg, #A46EDB 0%, #010101 9.46%)',
        backgroundImage: "url('/Ellipse.svg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col gap-6 justify-center items-center">
        <p className="text-[#C088fb] font-medium text-[18.44px]">Use Templates</p>
        <h1 className="text-[#ffffff] font-medium text-5xl">Get Started with our Templates options</h1>
        <button className="border border-card px-9 py-2.5 flex gap-2.5 bg-[#C088FB] text-black font-medium rounded-3xl shadow-[0_0_20px_5px_rgba(192,136,251,0.5)] hover:shadow-[0_0_30px_10px_rgba(192,136,251,0.8)] transition-all duration-300">
          See All Templates
        </button>
      </div>
      <div className="mt-14 flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Templates;
