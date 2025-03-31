// 'use client'
// import React from 'react';
// import '../../app/globals.css';

// const CTA = () => {
//   return (
//     <div
//       className="flex flex-col lg:gap-2.5 md:gap-[6.08px] sm:gap-2.5 z-10 lg:px-[170px] md:px-[70.42px] sm:px-[35px] lg:rounded-lg md:rounded-[6.08px] sm:rounded-[10px] border border-white/15 mx-auto relative lg:top-[-315px] md:top-[-145px] sm:top-[-200px] justify-center items-center lg:max-w-[1100px] lg:h-[473px] md:max-w-[669.17px] md:h-[341.27px] sm:w-[full] sm:h-[513px] hover:border-white/30 transition-all duration-300"
//       style={{
//         background: 'linear-gradient(180deg, rgba(2, 1, 3, 0) 0%, #020103 90%), url("/pattern.svg")',
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
  
//       <h1 className="text-center text-[#ffffff] font-medium lg:text-[56px] md:text-[34.07px] sm:text-[26px] mt-10 sm:w-4/5 sm:px- md:w-[479.97px] lg:w-[789px] hover:scale-105 transition-transform duration-300">
//         Are You an AI Tool Developer or Product Owner?
//       </h1>

//       <p
//         className="lg:text-base md:text-[13px] sm:text-sm lg:w-[1024px] md:w-[622.93px] text-center text-[#ffffffb3] sm:w-auto md:px-0 hover:scale-105 transition-transform duration-300"
//       >
// Whether you&apos;re an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
//       </p>

//       <button
//         className="lg:mt-[55px] md:mt-[15px] sm:mt-[5px] sm:mb-2 md:mb-0 lg:rounded-[27px] md:rounded-[16.43px] sm:rounded-[23px] flex font-medium bg-[#f4f4f4] text-[#032400] lg:px-[35px] md:px-[21.29px] sm:px-[21.29px] sm:py-3 lg:py-2.5 md:py-3 lg:gap-2.5 md:gap-[6.08px] sm:gap-[6.08px] hover:scale-105  hover:bg-gradient-to-r hover:from-[#e4e4e4] hover:to-[#ffffff] transition-all duration-300"
//       >
//         Get started
//       </button>
//     </div>
//   );
// };

// export default CTA;



'use client'
import React from 'react';
import '../../app/globals.css';

const CTA = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center mx-auto z-10 
      lg:max-w-[1100px] lg:h-[473px] md:max-w-[669.17px] md:h-[341.27px] sm:w-full sm:h-[513px]
      lg:px-[170px] md:px-[70.42px] sm:px-[35px] border border-white/15 
      lg:rounded-lg md:rounded-[6.08px] sm:rounded-[10px] hover:border-white/30 transition-all duration-300 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(2, 1, 3, 0) 0%, #020103 90%), url("/pattern.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 glow-gradient"></div>

      <h1 className="relative text-center text-white font-medium lg:text-[56px] md:text-[34.07px] sm:text-[26px] mt-10 sm:w-4/5 md:w-[479.97px] lg:w-[789px] hover:scale-105 transition-transform duration-300">
        Are You an AI Tool Developer or Product Owner?
      </h1>

      <p className="relative lg:text-base md:text-[13px] sm:text-sm text-center text-[#ffffffb3] sm:w-auto md:px-0 hover:scale-105 transition-transform duration-300">
        Whether you're an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
      </p>

      <button className="relative lg:mt-[55px] md:mt-[15px] sm:mt-[5px] sm:mb-2 md:mb-0 lg:rounded-[27px] md:rounded-[16.43px] sm:rounded-[23px] flex font-medium bg-[#f4f4f4] text-[#032400] lg:px-[35px] md:px-[21.29px] sm:px-[21.29px] sm:py-3 lg:py-2.5 md:py-3 lg:gap-2.5 md:gap-[6.08px] sm:gap-[6.08px] hover:scale-105 hover:bg-gradient-to-r hover:from-[#e4e4e4] hover:to-[#ffffff] transition-all duration-300">
        Get started
      </button>
    </div>
  );
};

export default CTA;
