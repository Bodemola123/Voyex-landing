// "use client"
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { HiOutlineLightBulb } from 'react-icons/hi2';

// const Mission = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false, // Ensures animation runs again when scrolling back
//       mirror: true // Re-triggers animation when scrolling back
//     });
//   }, []);

//   return (
//     <div className='flex md:flex-row sm:flex-col-reverse items-center justify-center lg:gap-9 md:gap-6 sm:gap-6 md:px-5 sm:px-5 h-screen'>
//       <div className='flex flex-col md:gap-[23px] sm:gap-4 items-center justify-center sm:ml-0'>
//         {["Identify exactly what they need.", "Understand how to use AI to achieve it.", "Get real results — fast."].map((text, index) => (
//           <div
//             key={index}
//             data-aos='fade-up'
//             className='flex flex-row items-center justify-start md:py-4 sm:py-2 sm:px-2 md:pl-7 md:pr-2 border rounded-[10px] border-[#ffffff20] bg-[#0d0d0d] md:gap-6 sm:gap-4 transition-all duration-500 ease-in-out hover:bg-[#ffffff] hover:shadow-lg hover:-translate-y-1 group lg:w-[538px] md:w-[458px] sm:w-[290px]'
//           >
//             <div className='p-2.5 lg:w-[52px] sm:w-[42px] flex items-center justify-center lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] bg-[#ffffff] transition-transform duration-500 ease-in-out'>
//               <HiOutlineLightBulb className='lg:text-[24px] sm:text-[18px] text-[#0d0d0d] transition-colors duration-500 ease-in-out ' />
//             </div>
//             <p className='lg:text-lg sm:text-sm text-[#ffffff] font-bold transition-colors duration-500 ease-in-out group-hover:text-[#0d0d0d]'>
//               {text}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className='flex flex-col md:gap-6 sm:gap-4 lg:max-w-[701px] md:max-w-[381px] sm:max-w-[300px]'>
//         <h1 data-aos='fade-right' className='font-bold text-[#f4f4f4] lg:text-6xl md:text-3xl sm:text-3xl relative after:block after:w-0 after:h-1 after:bg-[#f4f4f4] after:transition-all after:duration-700 after:ease-in-out after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:mx-auto hover:after:w-full'>
//           Mission Statement
//         </h1>
//         <p data-aos='fade-left' className='italic font-normal text-[#f4f4f4] lg:text-3xl md:text-base sm:text-base'>
//         To make AI practical, personal, and productive for everyone.
// We&apos;re not building another AI tool — we&apos;re building the engine that helps you find the right ones.
// At Voyex, our mission is to simplify the AI landscape by enabling users to: From startups to solo creators to large enterprises, we&apos;re making AI more accessible, more intuitive, and more effective.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Mission;



"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineLightBulb } from 'react-icons/hi2';

const Mission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const missionPoints = [
    "Identify exactly what they need.",
    "Understand how to use AI to achieve it.",
    "Get real results — fast.",
  ];

  return (
    <section className="h-screen flex md:flex-row sm:flex-col-reverse items-center justify-center gap-6 px-5 lg:gap-9">
      {/* Left: Mission Points */}
      <div className="flex flex-col gap-6 items-center justify-center">
  {missionPoints.map((point, index) => (
    <div
      key={index}
      data-aos="fade-up"
      className="flex items-center justify-start border border-[#ffffff20] rounded-[10px] bg-[#0d0d0d] transition-all duration-500 ease-in-out lg:w-[538px] md:w-[458px] sm:w-[290px] py-4 px-4 gap-4"
    >
      <div className="flex items-center justify-center p-2.5 bg-white rounded-xl">
        <HiOutlineLightBulb className="text-[#0d0d0d] lg:text-2xl sm:text-lg" />
      </div>
      <p className="text-white font-bold lg:text-lg sm:text-sm">
        {point}
      </p>
    </div>
  ))}
</div>

      {/* Right: Mission Text */}
      <div className="flex flex-col gap-4 lg:max-w-[701px] md:max-w-[381px] sm:max-w-[300px]">
      <h1 data-aos='fade-right' className='font-bold text-[#f4f4f4] lg:text-6xl md:text-3xl sm:text-3xl relative after:block after:w-0 after:h-1 after:bg-[#f4f4f4] after:transition-all after:duration-700 after:ease-in-out after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:mx-auto hover:after:w-full'>
          Mission Statement
        </h1>
        <p data-aos='fade-left' className=' font-normal text-[#f4f4f4] lg:text-2xl md:text-base sm:text-base'>
        To make AI practical, personal, and productive for everyone.
We&apos;re not building another AI tool — we&apos;re building the engine that helps you find the right ones.
At Voyex, our mission is to simplify the AI landscape by enabling users to: From startups to solo creators to large enterprises, we&apos;re making AI more accessible, more intuitive, and more effective.
        </p>
      </div>
    </section>
  );
};

export default Mission;
