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
//       className="flex flex-col lg:gap-[53px] md:gap-[37.81px] sm:gap-[37.87px] sm:py-[84px] sm:px-[30px] lg:p-28 md:px-[0px] md:py-[84px] justify-center items-center opacity-[0.89] mx-auto z-10 -mt-[300px]"
//       style={{
//         background: 'linear-gradient(180deg, #A46EDB 0%, #010101 9.46%)',
//         backgroundImage: "url('/Ellipse.svg')", 
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//       data-aos="fade-up"
//     >
//       <div className="flex flex-col lg:gap-6 md:gap-[17.12px] sm:gap-[17.12px] justify-center items-center">
//         {/* Heading Section */}
//         <div className='flex flex-col items-center justify-center md:gap-[5.71px] lg:gap-2 sm:gap-[5.71px]'>
//           <p className="text-[#C088fb] font-medium text-[18.44px]">Use Templates</p>
//           <h1 
//             className="text-[#ffffff] font-medium lg:text-5xl md:text-[34.25px] sm:text-[32px] text-center"
//             data-aos="zoom-in"
//           >
//             Get Started with our Templates options
//           </h1>
          
//           {/* Subheading Section - Styled as per your example */}
//           <span 
//             className="text-[#ffffff] text-center lg:w-[1044px] md:w-[729px] sm:w-auto sm:px-10 md:px-0 lg:text-[22px] md:text-[15px] sm:text-[15px] font-normal"
//             data-aos="fade-up"
//           >
//             <p>
//               We&apos;ve curated a collection of templates to give you a head start. Explore the possibilities of AI and use these pre-built workflows to complete tasks effortlessly.
//             </p>
//           </span>
//         </div>

//         {/* Button */}
//         <button 
//           className="border border-card sm:text-sm md:text-sm lg:px-9 md:px-[24.97px] sm:px-[24.97px] sm:py-[10px] lg:py-2.5 md:py-[10px] flex justify-center items-center lg:gap-2.5 md:gap-2 sm:gap-2 bg-[#C088FB] text-black font-medium lg:rounded-3xl md:rounded-[19.26px] sm:rounded-[19.26px] shadow-[0_0_20px_5px_rgba(192,136,251,0.5)] hover:shadow-[0_0_30px_10px_rgba(192,136,251,0.8)] transition-transform duration-300 md:w-auto lg:max-w-[239px] sm:w-[236px] hover:scale-105"
//           data-aos="fade-up"
//         >
//           See All Templates
//         </button>
//       </div>

//       {/* Card Component */}
//       <div className="lg:mt-14 md:mt-[37.81px] sm:mt-[37.81px] flex items-center justify-center sm:px-0 md:px-2 lg:px-0">
//         <Card />
//       </div>
//     </div>
//   );
// };

// export default Templates;



'use client'
// Templates Component with Micro-Interactions
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
    className="flex flex-col lg:gap-[53px] md:gap-[37.81px] sm:gap-[37.87px] sm:py-[84px] sm:px-[30px] lg:p-28 md:px-[0px] md:py-[84px] justify-center items-center opacity-[0.89] mx-auto z-10 -mt-4"
    data-aos="fade-up"
    >
      <div className="flex flex-col lg:gap-6 md:gap-[17.12px] sm:gap-[17.12px] justify-center items-center">
        {/* Heading Section */}
        <div className='flex flex-col items-center justify-center md:gap-[5.71px] lg:gap-2 sm:gap-[5.71px]'>
          <h1 
            className="text-[#ffffff] font-medium lg:text-5xl md:text-[34.25px] sm:text-[32px] text-center"
            data-aos="zoom-in"
          >
            Get Started with our Templates options
          </h1>
          
          {/* Subheading Section */}
          <span 
            className="text-[#ffffff] text-center lg:w-[1044px] md:w-[729px] sm:w-auto sm:px-10 md:px-0 lg:text-[22px] md:text-[15px] sm:text-[15px] font-normal"
            data-aos="fade-up"
          >
            <p>
              We&apos;ve curated a collection of templates to give you a head start. Explore the possibilities of AI and use these pre-built workflows to complete tasks effortlessly.
            </p>
          </span>
        </div>

        {/* Button */}
        <a href="https://voyex-app-dev-delta.vercel.app/templates">
  <button 
    className="bg-[#C088FB] text-black font-medium lg:px-9 md:px-[24.97px] sm:px-[24.97px] sm:py-[10px] lg:py-2.5 md:py-[10px] flex justify-center items-center lg:gap-2.5 md:gap-2 sm:gap-2 rounded-3xl transition-transform duration-300 md:w-auto lg:max-w-[239px] sm:w-[236px] hover:scale-105"
    data-aos="fade-up"
  >
    See All Templates
  </button>
</a>

      </div>

      {/* Card Component */}
      <div className="lg:mt-14 md:mt-[37.81px] sm:mt-[37.81px] flex items-center justify-center sm:px-0 md:px-2 lg:px-0">
        <Card />
      </div>
    </div>
  );
};

export default Templates;
