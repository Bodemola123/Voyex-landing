'use client';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import "../../app/globals.css";

const Hero = () => {
  const [isInViewMessage, setIsInViewMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to trigger fade-in
  const [currentText, setCurrentText] = useState(""); // Text for typewriter
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messageRef = useRef(null);

  // Set up IntersectionObserver for Message icon
  useEffect(() => {
    const messageObserver = new IntersectionObserver(([entry]) => {
      setIsInViewMessage(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (messageRef.current) {
      messageObserver.observe(messageRef.current);
    }

    return () => {
      if (messageRef.current) {
        messageObserver.unobserve(messageRef.current);
      }
    };
  }, []);

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 2000); // Delays the fade-in effect slightly
  }, []);

  // Typewriter effect
  const texts = [
    "Ideas into Workflows",
    "Your AI Agency Anytime",
    "AI Search Made Easy"
  ];

  useEffect(() => {
    const currentString = texts[currentIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = 1500;

    if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
    }

    const timeout = setTimeout(() => {
      setCharIndex((prevChar) =>
        isDeleting ? prevChar - 1 : prevChar + 1
      );
      setCurrentText(currentString.substring(0, charIndex));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts]);

  return (
    <div className='flex flex-col items-center justify-center text-center lg:mt-[50px] md:mt-[92.82px] sm:mt-[91px]'>
      <div className='flex flex-row gap-[40px] justify-center items-center'>
        <Image 
          src={'/cursor.svg'} 
          alt='cursor' 
          width={200} 
          height={200} 
          className='absolute lg:top-[210px] md:top-[265px] lg:left-[240px] md:left-[70px] -z-20 lg:w-[200px] lg:h-[200px] md:w-[160px] md:h-[160px] sm:hidden md:flex lg:flex cursor-shake' 
        />
        
        <div className='flex flex-row gap-[40px] justify-center items-center'>
        <div className='lg:h-[198px] md:h-[186px] sm:h-[118px] mx-auto w-[85%] lg:mb-[80px] sm:mb-[100px] md:mb-[180px]'> 
        <h1 className="lg:text-[108px] md:text-[98.67px] sm:text-[58.88px] sm:font-bold md:font-bold lg:font-black leading-tight text-[#ffffff] z-50">
          <span>{currentText}</span>
          <span className="blinking-caret"></span>
        </h1>
        </div>
      </div>
        
        <Image src={'/message.svg'} alt='message' width={200} height={200} className='absolute lg:-h-[200px] lg:w-[200px] md:h-[160px] md:w-[160px] lg:flex md:flex sm:hidden message-bubble lg:top-[130px] lg:right-[240px] -z-20 md:top-[130px] md:right-[100px]'/>
      </div>

      <p
        className={`flex justify-center items-center md:mt-6 lg:mt-6 sm:mt-[5.97px] lg:text-xl md:text-base sm:text-base text-[#ffffff] md:leading-[25.6px] sm:leading-[23.92px] lg:w-[977px] text-center md:w-[584.27px] sm:w-auto sm:px-12 md:px-0 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
      </p>

      <div className="flex md:flex-row lg:flex-row sm:flex-col sm:gap-[18px] lg:gap-4 md:gap-[15.57px] mt-5 justify-center items-center">
      <button
        className="bg-[#c088fb] flex items-center justify-center sm:py-3 md:py-2.5 sm:px-3 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#141414] font-medium md:text-base sm:text-sm transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] z-10"
      >
        Start your AI journey
      </button>
      <button
        className="bg-[#f4f4f4] flex items-center justify-center sm:py-3 sm:px-3 md:py-2.5 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#032400] font-medium md:text-base sm:text-sm transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#e0e0e0] z-10 md:w-auto sm:w-[155px]"
      >
        Upload Product
      </button>
      </div>
    </div>
  );
};

export default Hero;
