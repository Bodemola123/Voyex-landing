'use client';
import React, { useEffect, useState } from 'react';
import "../../app/globals.css";
import StarsCanvas from '../common/StarBackground';
import CircularRings from '../Circular';
import Link from 'next/link';



const titles = [
  {
    text: 'Your Google for AI\n ',
    keyword: 'Find exactly what you need',
    typewriter: true,
    showTextAfter: false,
  },
  {
    text: 'Find the right tools\n',
    keyword: 'that align with your goals',
    typewriter: true,
    showTextAfter: false,
  },
  {
    text: ' at your fingertips.',
    keyword: 'Your AI powered Agency',
    typewriter: true,
    showTextAfter: true,
  },
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedKeyword, setTypedKeyword] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    if (!titles[currentTitleIndex].typewriter) return;

    const keyword = titles[currentTitleIndex].keyword;
    const typingSpeed = 90;
    const deletingSpeed = 80;
    const pauseTime = 1200;

    let timer;
    if (!isDeleting && typedKeyword.length < keyword.length) {
      timer = setTimeout(() => {
        setTypedKeyword(keyword.substring(0, typedKeyword.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedKeyword.length === keyword.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && typedKeyword.length > 0) {
      timer = setTimeout(() => {
        setTypedKeyword(keyword.substring(0, typedKeyword.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && typedKeyword.length === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [typedKeyword, isDeleting, currentTitleIndex]);

  useEffect(() => {
    setTypedKeyword('');
    setIsDeleting(false);
  }, [currentTitleIndex]);

  const current = titles[currentTitleIndex];

    // Updated handler to accept payload
  const handleGetAnalytics = (payload) => {
    setAnalyticsPayload(payload);  // Save payload to state
    setShowFirstModal(false);
    setShowLoadingModal(true);

    // // Simulate loading, then show results modal
    // setTimeout(() => {
    //   setShowLoadingModal(false);
    //   setShowResultsModal(true);
    // }, 3000);
  };

    const handleLoadingComplete = (result) => {
    setApiResult(result);
    setShowLoadingModal(false);
    setShowResultsModal(true);
  };


  return (
    <>
     <div className="overflow-visible z-20 w-full px-2">
  
      <div className="flex flex-col text-left gap-8 transition-opacity duration-1000 h-full mx-auto lg:w-[980px] md:w-[600px]">
      <h1 
  className="sm:text-[28.2px] md:text-4xl lg:text-[83px] font-medium text-white leading-tight"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    lineHeight: '1',
    minHeight: '2.4em',
  }}
>

          {current.showTextAfter ? (
            <>
              <span className="text-purple-400 block whitespace-nowrap">
                {typedKeyword}
                <span className="animate-pulse">|</span>
              </span>
              {typedKeyword.length === current.keyword.length && (
                <span className="text-white block">{current.text}</span>
              )}
            </>
          ) : (
            <>
              <span className="block whitespace-normal">{current.text}</span>
              <span className="text-purple-400 block whitespace-nowrap">
                {typedKeyword}
                <span className="animate-pulse">|</span>
              </span>
            </>
          )}
        </h1>
        <p className="text-gray-300 text-sm md:text-base lg:text-xl sm:text-base lg:max-w-[810px] lg:-mt-10">
          Voyex helps you find the right AI tools for your usecases. Find AI tools with just a query. It simplifies finding, using and querying AI tools and create your own mini agency.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#C088FB] text-[#0A0A0B] lg:px-8 lg:py-4 md:px-5 md:py-2 sm:px-3.5 sm:py-2 rounded-[27px] lg:font-medium font-base lg:text-lg  sm:text-sm md:text-base hover:scale-105 transition">
            Start your AI Journey
          </button>
          <Link href="/Forecaster" className="bg-[#F4F4F4] text-[#0A0A0B] lg:px-8 lg:py-4 md:px-5 md:py-2 sm:px-3.5 sm:py-2 rounded-[27px] lg:font-medium font-base lg:text-lg sm:text-sm md:text-base hover:scale-105 transition">
            Upload Product
          </Link>
        </div>
        {/* Background orbits with reduced scale and blur */}
        <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter">
            {/* <CircularRings /> */}
           <StarsCanvas />
           </div>
      </div>
    </div>

    </>
  );
};

export default Hero;