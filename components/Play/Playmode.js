'use client'
import React, { useRef, useState } from 'react';
import { CiPlay1, CiPause1 } from "react-icons/ci";
import '../././../app/globals.css';

const Playmode = () => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeWindow = iframe.contentWindow;
      if (isPlaying) {
        iframeWindow.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
          "*"
        );
        setIsPlaying(false);
      } else {
        iframeWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: "" }),
          "*"
        );
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className='flex flex-col justify-center gap-4 items-center md:mt-[59px] sm:mt-[75.32px]  rounded-[18px] mx-auto z-35'>
 <h1 className="relative text-center text-[#ffffff] lg:text-[54px] md:text-[38.03px] sm:text-[32px] after:content-[''] after:absolute after:left-0 lg:after:bottom-[10px] md:after:bottom-[8px] sm:after:bottom-[8px] after:w-0 after:h-[2px] after:bg-[#ffffff] after:transition-all after:duration-1000 hover:after:w-full">
  How Voyex Works
</h1>


      <div
        className='relative  lg:w-[1131px] lg:h-[635px] md:w-[730px] md:h-[409px] sm:w-[100%] sm:h-[315px]'
      >
        {/* YouTube iframe */}
        <iframe
  ref={iframeRef}
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/h3M4bm2EveM?enablejsapi=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="border border-[rgb(49,49,49)] border-opacity-100 rounded-lg"
></iframe>


        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className={`absolute flex items-center justify-center border lg:p-[23.86px] md:p-[13.66px] sm:p-[3.86px] lg:gap-[23.86px] md:gap-[13.66px] sm:gap-[3.86px] 
            lg:rounded-3xl md:rounded-xl sm:rounded-md bg-custom-gradient backdrop-blur-custom text-white
            transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {isPlaying ? (
            <CiPause1 className='lg:w-14 lg:h-14 md:w-8 md:h-8 sm:w-8 sm:h-8' />
          ) : (
            <CiPlay1 className='lg:w-14 lg:h-14 md:w-8 md:h-8 sm:w-8 sm:h-8' />
          )}
        </button>
      </div>
    </div>
  );
};

export default Playmode;
