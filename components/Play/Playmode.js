'use client'
import React, { useRef } from 'react';
import '../././../app/globals.css';

const Playmode = () => {
  return (
    <div className='relative z-50 flex flex-col justify-center h-screen gap-4 items-center md:mt-[69px] sm:-mt-[52.32px] rounded-[18px] mx-auto'  style={{ backgroundColor: "black" }}>
      <h1 className="relative text-center text-[#ffffff] lg:text-[54px] md:text-[38.03px] sm:text-[32px] after:content-[''] after:absolute after:left-0 lg:after:bottom-[10px] md:after:bottom-[8px] sm:after:bottom-[8px] after:w-0 after:h-[2px] after:bg-[#ffffff] after:transition-all after:duration-1000 hover:after:w-full">
        How Voyex Works
      </h1>

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
