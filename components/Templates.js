'use client';
import React, { useEffect } from 'react';
import '../app/globals.css';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Templates = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className="flex flex-col gap-8 py-12 px-6 items-center mx-auto z-10 -mt-4 lg:mt-10"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-4 items-center">
        {/* "Use Templates" Button */}
        <button
          className="bg-[#131314] text-[#F4F4F4] font-medium px-6 py-2 rounded-full text-sm shadow-md hover transition-all duration-300"
          data-aos="fade-up"
        >
          Use Templates
        </button>

        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-2">
          <h1
            className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight text-center"
            data-aos="zoom-in"
          >
            Get Started with our Templates options
          </h1>

          {/* Subheading Section */}
          <span
            className="text-[#ffffff] text-center max-w-3xl px-4 text-lg font-normal"
            data-aos="fade-up"
          >
            <p>
              We've curated a collection of templates to give you a head start. Explore the possibilities of AI and use these pre-built workflows to complete tasks effortlessly.
            </p>
          </span>
        </div>
      </div>

      {/* Card Component */}
      <div className="mt-8 flex items-center justify-center scale-90">
        <Card />
      </div>

      {/* Button */}
      <a href="https://voyex-app-dev-delta.vercel.app/templates">
        <button
          className="text-[#C088FB] bg-transparent font-medium text-lg flex justify-center items-center transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          See All Templates
        </button>
      </a>
    </div>
  );
};

export default Templates;




// 'use client'
// // Templates Component with Micro-Interactions
// import React, { useEffect } from 'react';
// import '../app/globals.css';
// import Card from './Card';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Templates = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <div 
//     className="flex flex-col lg:gap-[53px] md:gap-[37.81px] sm:gap-[37.87px] sm:py-[84px] sm:px-[30px] lg:p-28 md:px-[0px] md:py-[84px] justify-center items-center opacity-[0.89] mx-auto z-10 -mt-4"
//     data-aos="fade-up"
//     >
//       <div className="flex flex-col lg:gap-6 md:gap-[17.12px] sm:gap-[17.12px] justify-center items-center">

//          {/* "Use Templates" Button */}
//          <button 
//           className="bg-[#131314] text-[#F4F4F4] font-medium px-6 py-2 rounded-full text-sm shadow-md hover transition-all duration-300 mt-2"
//           data-aos="fade-up"
//         >
//           Use Templates
//         </button>

//         {/* Heading Section */}
//         <div className='flex flex-col items-center justify-center md:gap-[5.71px] lg:gap-2 sm:gap-[5.71px]'>
//           <h1 
//             className="text-[#ffffff] font-medium lg:text-5xl md:text-[34.25px] sm:text-[32px] text-center"
//             data-aos="zoom-in"
//           >
//             Get Started with our Templates options
//           </h1>
          
//           {/* Subheading Section */}
//           <span 
//             className="text-[#ffffff] text-center lg:w-[1044px] md:w-[729px] sm:w-auto sm:px-10 md:px-0 lg:text-[22px] md:text-[15px] sm:text-[15px] font-normal"
//             data-aos="fade-up"
//           >
//             <p>
//               We&apos;ve curated a collection of templates to give you a head start. Explore the possibilities of AI and use these pre-built workflows to complete tasks effortlessly.
//             </p>
//           </span>
//         </div>

//       </div>

//       {/* Card Component */}
//       {/* <div className="lg:mt-2 md:mt-[37.81px] sm:mt-[37.81px] flex items-center justify-center sm:px-0 md:px-2 lg:px-0">
//         <Card />
//       </div> */}
//        <div className="lg:-mt-3 md:mt-[20px] sm:mt-[20px] flex items-center justify-center sm:px-0 md:px-2 lg:px-0 scale-90">
//         <Card />
//       </div>

//        {/* Button */}
//        <a href="https://voyex-app-dev-delta.vercel.app/templates">
//   <button 
//     className="text-[#C088FB] bg-transparent -mt-4 font-medium lg:text-lg md:text-base sm:text-base flex justify-center items-center transition-transform duration-300 hover:scale-105"
//     data-aos="fade-up"
//   >
//     See All Templates
//   </button>
// </a>

//     </div>
//   );
// };

// export default Templates;
