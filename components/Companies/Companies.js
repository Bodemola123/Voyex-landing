'use client';
import React, { useEffect } from 'react';
import '../../app/globals.css';
import Image from 'next/image';

const Companies = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.lazy-load');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Add fade-in when in view
          entry.target.classList.remove('fade-out'); // Remove fade-out if in view
        } else {
          entry.target.classList.add('fade-out'); // Add fade-out when out of view
          entry.target.classList.remove('fade-in'); // Remove fade-in if out of view
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the image is in view
    });

    images.forEach((img) => observer.observe(img));
  }, []);

  return (
    <div className='flex flex-col md:gap-10 sm:gap-[31.19px] sm:px-4 md:px-0 items-center justify-center'>
      <p className='text-center text-[#f4f4f4b3] md:mt-[103px] sm:mt-[89px]'>
        Trusted by the world&apos;s most innovative teams
      </p>
      <div className='grid lg:gap-2.5 md:gap-2 sm:gap-2 md:grid-cols-4 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4'>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/AcmeCorp.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/EchoValley.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/Quantum.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/Pulse.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/Outside.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/Apex.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/Celestial.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
        <div className='border border-card lg:px-10 lg:py-8 md:px-[31.19px] md:py-[24.95px] sm:px-[31.19px] sm:py-[24.95px] lg:gap-2.5 md:gap-2 sm:gap-2 rounded-xl'>
          <Image src={'/2twice.svg'} alt='acme' width={155} height={34} className='lazy-load lg:w-[155px] lg:h-[34px] md:w-[121px] md:h-[27px] sm:w-[121px] sm:h-[27px]' />
        </div>
      </div>
    </div>
  );
};

export default Companies;
