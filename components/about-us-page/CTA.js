'use client'
import React from 'react';
import '../../app/globals.css';

const CTA = () => {
  return (
    <div
      className="flex flex-col lg:gap-2.5 md:gap-[6.08px] sm:gap-2.5 z-10 lg:px-[170px] md:px-[70.42px] sm:px-[35px] lg:rounded-lg md:rounded-[6.08px] sm:rounded-[10px] border border-white/15 mx-auto relative lg:top-[-315px] md:top-[-145px] sm:top-[-200px] justify-center items-center lg:max-w-[1100px] lg:h-[473px] md:max-w-[669.17px] md:h-[341.27px] sm:w-[full] sm:h-[513px] hover:border-white/30 transition-all duration-300"
      style={{
        background: 'linear-gradient(180.17deg, rgba(2, 1, 3, 0) 0%, #020103 90%), url("/pattern.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-center text-[#ffffff] font-medium lg:text-[56px] md:text-[34.07px] sm:text-[26px] mt-10 sm:w-4/5 sm:px- md:w-[479.97px] lg:w-[789px] hover:scale-105 transition-transform duration-300">
        Are You an AI Tool Developer or Product Owner?
      </h1>

      <p
        className="lg:text-base md:text-[13px] sm:text-sm lg:w-[1024px] md:w-[622.93px] text-center text-[#ffffffb3] sm:w-auto md:px-0 hover:scale-105 transition-transform duration-300"
      >
Whether you&apos;re an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
      </p>

      <button
        className="lg:mt-[55px] md:mt-[15px] sm:mt-[5px] sm:mb-2 md:mb-0 lg:rounded-[27px] md:rounded-[16.43px] sm:rounded-[23px] flex font-medium bg-[#f4f4f4] text-[#032400] lg:px-[35px] md:px-[21.29px] sm:px-[21.29px] sm:py-3 lg:py-2.5 md:py-3 lg:gap-2.5 md:gap-[6.08px] sm:gap-[6.08px] hover:scale-105  hover:bg-gradient-to-r hover:from-[#e4e4e4] hover:to-[#ffffff] transition-all duration-300"
      >
        Get started
      </button>
    </div>
  );
};

export default CTA;


// import React from 'react';
// import '../../app/globals.css';

// const CTA = () => {
//   return (
//     <div
//       className="flex flex-col lg:gap-8 md:gap-6 sm:gap-4 z-10 lg:px-[170px] md:px-[70.42px] sm:px-[35px] lg:rounded-lg md:rounded-[6.08px] sm:rounded-[10px] border border-white/15 mx-auto relative lg:top-[-315px] md:top-[-145px] sm:top-[-200px] justify-center items-center lg:max-w-[1100px] lg:h-auto md:max-w-[669.17px] sm:w-full hover:border-white/30 transition-all duration-300"
//       style={{
//         background: 'linear-gradient(180.17deg, rgba(2, 1, 3, 0) 0%, #020103 90%), url("/pattern.svg")',
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* "Our Audience" Label */}
//       <div className="bg-[#131314] text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
//         Our Audience
//       </div>

//       {/* Heading */}
//       <h1 className="text-center text-[#ffffff] font-medium lg:text-[56px] md:text-[34.07px] sm:text-[26px] mt-4 sm:w-4/5 md:w-[479.97px] lg:w-[789px] hover:scale-105 transition-transform duration-300">
//         Are You an AI Tool Developer or Product Owner?
//       </h1>

//       {/* Subheading */}
//       <p
//         className="lg:text-base md:text-[13px] sm:text-sm lg:w-[1024px] md:w-[622.93px] text-center text-[#ffffffb3] sm:w-auto md:px-0 hover:scale-105 transition-transform duration-300 mt-4"
//       >
//         Whether you&apos;re an entrepreneur, a growing startup, or an enterprise, Voyex is here to help you harness the power of AI.
//       </p>

//       {/* Cards Section */}
//       <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-8 w-full">
//         {/* Card 1 */}
//         <div className="p-6 bg-[#0d0d0d] rounded-lg border border-white/10 text-center">
//           <h2 className="text-white text-lg font-bold mb-2">01</h2>
//           <h3 className="text-white text-base font-semibold mb-2">AI-Driven Efficiency</h3>
//           <p className="text-[#ffffffb3] text-sm">
//             Automate tasks, optimize workflows, and boost productivity.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="p-6 bg-[#0d0d0d] rounded-lg border border-white/10 text-center">
//           <h2 className="text-white text-lg font-bold mb-2">02</h2>
//           <h3 className="text-white text-base font-semibold mb-2">Seamless Integration</h3>
//           <p className="text-[#ffffffb3] text-sm">
//             Connect Voyex AI tools with your existing software effortlessly.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="p-6 bg-[#0d0d0d] rounded-lg border border-white/10 text-center">
//           <h2 className="text-white text-lg font-bold mb-2">03</h2>
//           <h3 className="text-white text-base font-semibold mb-2">Enterprise-Grade Security</h3>
//           <p className="text-[#ffffffb3] text-sm">
//             Data privacy and security at the core of our platform.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTA;