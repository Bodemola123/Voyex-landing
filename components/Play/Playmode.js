'use client'
import React, { useRef } from 'react';
import '../././../app/globals.css';

const Playmode = () => {
  return (
    <div className='relative z-50 flex flex-col justify-center h-screen gap-4 items-center md:mt-[100px] sm:-mt-[20px] rounded-[18px] mx-auto'  style={{ backgroundColor: "black" }}>
      <div className="relative text-center text-[#ffffff] lg:h-[54px] md:h-[38.03px] sm:h-[32px]">
        
      </div>

      <div
        className='relative lg:w-[1131px] lg:h-[635px] md:w-[730px] md:h-[409px] sm:w-[100%] sm:h-[315px]'
      >
        {/* YouTube iframe */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/c0m6yaGlZh4?si=NjP4Fmf-ws2e3i4x&autoplay=1&loop=1&playlist=c0m6yaGlZh4&cc_load_policy=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="border border-[rgb(49,49,49)] border-opacity-100 rounded-lg"
          style={{ backgroundColor: "black" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Playmode;
