// 'use client';
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
//       className="flex flex-col gap-8 py-12 px-6 items-center mx-auto z-10 -mt-4 lg:mt-10"
//       data-aos="fade-up"
//     >
//       <div className="flex flex-col gap-4 items-center">
//         {/* "Use Templates" Button */}
//         <button
//           className="bg-[#131314] text-[#F4F4F4] font-medium px-6 py-2 rounded-full text-sm shadow-md hover transition-all duration-300"
//           data-aos="fade-up"
//         >
//           Use Templates
//         </button>

//         {/* Heading Section */}
//         <div className="flex flex-col items-center justify-center gap-2">
//           <h1
//             className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight text-center"
//             data-aos="zoom-in"
//           >
//             Get Started with our Templates options
//           </h1>

//           {/* Subheading Section */}
//           <span
//             className="text-[#ffffff] text-center max-w-3xl px-4 text-lg font-normal"
//             data-aos="fade-up"
//           >
//             <p>
//               We've curated a collection of templates to give you a head start. Explore the possibilities of AI and use these pre-built workflows to complete tasks effortlessly.
//             </p>
//           </span>
//         </div>
//       </div>

//       {/* Card Component */}
//       <div className="mt-8 flex items-center justify-center scale-90">
//         <Card />
//       </div>

//       {/* Button */}
//       <a href="https://voyex-app-dev-delta.vercel.app/templates">
//         <button
//           className="text-[#C088FB] bg-transparent font-medium text-lg flex justify-center items-center transition-transform duration-300 hover:scale-105"
//           data-aos="fade-up"
//         >
//           See All Templates
//         </button>
//       </a>
//     </div>
//   );
// };

// export default Templates;

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
      className="flex flex-col gap-10 py-16 px-4 lg:px-8 items-center mx-auto w-full max-w-6xl mt-16"
      data-aos="fade-up"
    >
      {/* Top Section */}
      <div className="flex flex-col gap-6 items-center text-center">
        {/* "Use Templates" Button */}
        <button
          className="bg-[#131314] text-[#F4F4F4] font-medium px-6 py-2 rounded-full text-sm shadow-md hover transition-all duration-300"
          data-aos="fade-up"
        >
          Use Templates
        </button>

        {/* Heading and Subheading */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight"
            data-aos="zoom-in"
          >
            Get Started with our Templates options
          </h1>

          <p
            className="text-[#ffffff] text-center max-w-3xl text-lg font-normal px-4"
            data-aos="fade-up"
          >
            We've curated a collection of templates to give you a head start. Explore the possibilities of AI and use these pre-built workflows to complete tasks effortlessly.
          </p>
        </div>
      </div>

      {/* Card Component */}
      <div className="flex items-center justify-center scale-90">
        <Card />
      </div>

      {/* "See All Templates" Button */}
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

