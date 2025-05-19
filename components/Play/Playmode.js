'use client';
import React, { useEffect, useState } from 'react';
import '../././../app/globals.css';

const Playmode = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  return (
    <div className="relative z-50 flex flex-col justify-center items-center min-h-screen gap-5 py-40 mb-[32px]">

      {/* Title */}
      <div className="text-center text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight mb-[20px]">
        How Voyex Works
      </div>

      {/* Video Container */}
      <div className="w-full h-full xl:max-w-[1130px] lg:max-h-[554px] lg:max-w-[980px] flex-grow flex items-center px-4 lg:px-8">
        <div className="relative w-full aspect-video">
          {isClient && (
            <iframe
              src="https://www.youtube.com/embed/c0m6yaGlZh4?si=NjP4Fmf-ws2e3i4x&autoplay=1&loop=1&playlist=c0m6yaGlZh4&cc_load_policy=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full xl:max-w-[1130px] lg:max-h-[554px] lg:max-w-[980px] rounded-lg border border-[rgb(49,49,49)] border-opacity-100"
              style={{ backgroundColor: "black" }}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playmode;


