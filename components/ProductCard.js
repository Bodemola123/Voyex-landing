'use client'
// ProductCard Component with Hover and Animation Enhancements
import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { PiAirplaneBold } from "react-icons/pi";
import Image from "next/image";
import Link from 'next/link';
import '../app/globals.css';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-auto lg:rounded-3xl md:rounded-[17.84px] sm:rounded-[17.84px] flex flex-col lg:gap-4 md:gap-[7.13px] sm:gap-[7.13px] lg:p-6 md:p-[17.12px] sm:p-[17.12px] bg-custom-gradient backdrop-blur-custom text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      style={{
        background: 'linear-gradient(90.83deg, rgba(192, 136, 251, 0.1) 0%, rgba(192, 136, 251, 0.042) 100%)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='flex justify-between flex-row'>
        <div className='flex flex-col lg:gap-2.5 md:gap-[7.13px] sm:gap-[7.13px]'>
          <Image src={'/chatgpt.svg'} alt='chatgpt' width={52} height={52} className='lg:w-[52px] lg:h-[52px] md:w-[37.1px] md:h-[37.1px] sm:w-[37.1px] sm:h-[37.1px]'/>
          <h1 className="lg:text-base md:text-[11.42px] sm:text-[11.42px] font-bold">{product.title}</h1>
        </div>
        <FaRegStar className='lg:text-[16px] md:text-[11.42px] sm:text-[11.42px] transition-transform duration-300 hover:scale-125'/>
      </div>
      <div className='lg:text-sm md:text-sm sm:text-sm font-normal'>
        <p>Supports GPT-4 and GPT-3.5. OpenAI&apos;s</p>
        <p className='truncate'>next-generation conversational AI, using intelligent Q&A capabilities to solve your tough questions.</p>
      </div>
      {!hovered && (
        <div className='flex flex-row items-center truncate lg:gap-2 md:gap-[5.71px] sm:gap-[5.71px] mt-4'>
          {['chatbot', 'writing', 'sales', 'models', 'research'].map((tag, index) => (
            <span 
              key={index} 
              className="text-xs capitalize px-2 py-1 rounded-[21px] border border-card transition-transform duration-300 hover:scale-110"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {hovered && (
        <div>
          <Link href='' passHref>
            <button 
              className="w-full bg-[#c088fb] lg:py-2 lg:px-4 md:py-[6.42px] md:px-[11.42px] sm:py-[6.42px] sm:px-[11.42px] md:gap-[7.13px] sm:gap-[7.13px] lg:gap-2.5 rounded-3xl flex items-center flex-row justify-center transition-transform duration-300 hover:scale-105"
            >
              <PiAirplaneBold className='text-[#032400] '/>
              <p className=' lg:text-base md:text-[11.42px] sm:text-[11.42px] font-medium text-[#032400]'>{product.buttonText}</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
