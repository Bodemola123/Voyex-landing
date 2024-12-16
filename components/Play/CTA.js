import React from 'react';
import '../../app/globals.css'
const CTA = () => {


  return (
    <div className='flex flex-col gap-2.5 z-40 -mt-[240px] px-[100px] rounded-lg border border-card mx-auto justify-center items-center' style={{
      background: 'linear-gradient(180.17deg, rgba(2, 1, 3, 0) 15.64%, #020103 99.86%), url("/pattern.svg")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '1100px',
      height: '473px' 
    }}>
      <h1 className='text-center text-[#ffffff] font-medium text-[56px]'>
        Are You an AI Tool Developer
      </h1>
      <h1 className='text-center text-[#ffffff] font-medium text-[56px]'>
        or Product Owner?
      </h1>
      <p className="text-base text-center text-[#ffffff]">
      Don&apos;t miss out on the momentum with Voyex. List your product or tool today and be part of the AI revolution. 
      <strong style={{ fontWeight: 'bold' }}> We&apos;re offering free listing opportunities </strong> 
      for our first few partners. Voyex acts as the Google for AI—don&apos;t let your tool go unnoticed. By partnering with us, your tool becomes a key part of our workflow recommendations, ensuring it reaches users who need it most
    </p>
    <button className='mt-[55px] rounded-[27px] flex font-medium bg-[#f4f4f4] text-[#032400] px-[35px] py-2.5 gap-2.5'>Get started</button>
    </div>
  );
};

export default CTA;
