import React from 'react';
import '../../app/globals.css'
const CTA = () => {


  return (
    <div className='flex flex-col lg:gap-2.5 md:gap-[6.08px] z-10 lg:px-[170px] md:px-[70.42px] lg:rounded-lg md:rounded-[6.08px] border border-white/15 mx-auto relative lg:top-[-315px] md:top-[-225px]  justify-center items-center lg:w-[1100px] lg:h-[473px] md:w-[669.17px] md:h-[341.27px]' style={{
      background: 'linear-gradient(180.17deg, rgba(2, 1, 3, 0) 0%, #020103 90%), url("/pattern.svg")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <h1 className='text-center text-[#ffffff] font-medium lg:text-[56px] md:text-[34.07px] mt-10'>
        Are You an AI Tool Developer
      </h1>
      <h1 className='text-center text-[#ffffff] font-medium lg:text-[56px] md:text-[34.07px]'>
        or Product Owner?
      </h1>
      <p className="lg:text-base md:text-[13px] lg:w-[1024px] md:w-[622.93px] text-center text-[#ffffffb3]">
      Don&apos;t miss out on the momentum with Voyex. List your product or tool today and be part of the AI revolution. 
      <strong style={{ fontWeight: 'bold' }}> We&apos;re offering free listing opportunities </strong> 
      for our first few partners. Voyex acts as the Google for AI—don&apos;t let your tool go unnoticed. By partnering with us, your tool becomes a key part of our workflow recommendations, ensuring it reaches users who need it most
    </p>
    <button className='lg:mt-[55px] md:mt-[5px] lg:rounded-[27px] md:rounded-[16.43px] flex font-medium bg-[#f4f4f4] text-[#032400] lg:px-[35px] md:px-[21.29px] lg:py-2.5 md:py-3 lg:gap-2.5 md:gap-[6.08px]'>Get started</button>
    </div>
  );
};

export default CTA;
