
'use client'
import React from 'react';
import '../../app/globals.css';

const CTA = () => {
  return (
    <div
      className="flex flex-col items-center justify-center z-10 px-4 md:px-12 mx-auto relative lg:top-[-500px] md:top-[-300px] sm:top-[-300px] lg:max-w-[980px] xl:max-w-[1138px] mt-40 mb-40 w-full"
      data-aos="fade-up"
    >
      {/* "Our Audience" Label */}
      {/* <div className="bg-[#131314] text-[#F4F4F4] text-sm font-medium px-5 py-1 rounded-full mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our Audience
      </div> */}

      {/* Heading */}
      <h1 className="text-center text-white font-bold lg:text-[42px] md:text-[36px] sm:text-[32px] mb-8 leading-tight"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Are You an AI Tool Developer <br /> or Product Owner?
      </h1>

      {/* Cards Container */}
       
       <div className="w-full bg-[#0D0D0D] border border-[#333] rounded-xl p-6 md:p-8 flex flex-col md:flex-row">
        {/* Section 1 */}
        <div className="flex-1 text-white mb-6 md:mb-0 md:mr-8">
          <p className="text-[#F4F4F4] text-xl font-semibold mb-2">01</p>
          <h3 className="text-lg font-bold mb-1">Get Discovered : Voyex acts as the Google for AI</h3>
          <p className="text-[#B0B0B0] text-sm">Don&apos;t let your tool go unnoticed. Get Discovered by users who need it most.</p>
        </div>

        {/* Section 2 */}
        <div className="flex-1 text-white mb-6 md:mb-0 md:mr-8">
          <p className="text-[#F4F4F4] text-xl font-semibold mb-2">02</p>
          <h3 className="text-lg font-bold mb-1">Don&apos;t miss out on the momentum with Voyex.</h3>
          <p className="text-[#B0B0B0] text-sm">List your product or tool today and be a part of the AI Revolution.</p>
        </div>

        {/* Section 3 */}
        <div className="flex-1 text-white">
          <p className="text-[#F4F4F4] text-xl font-semibold mb-2">03</p>
          <h3 className="text-lg font-bold mb-1">Free Listing Opportunities for our first few partners </h3>
          <p className="text-[#B0B0B0] text-sm">Be among the first to join Voyex and enjoy featured free listing opportunities.</p>
        </div>
      </div>

      {/* CTA Button */}
      {/* <button className="mt-8 bg-white text-black text-sm font-medium px-6 py-2 rounded-full">
        Mail us Today!
      </button> */}
      <button
  className="mt-8 bg-white text-black text-sm font-medium px-6 py-2 rounded-full"
  onClick={() => window.location.href = 'https://voyex-landing.vercel.app/contact-us'}
>
  Mail us Today!
</button>

    </div>
  );
};

export default CTA;