// "use client"
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Howitworks = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false, // Ensures animation runs again when scrolling back
//       mirror: true // Re-triggers animation when scrolling back
//     });
//   }, []);

//   return (
//     <div className='flex flex-col md:gap-[86px] sm:gap-[56px] h-[50vh] md:mt-32 sm:mt-80 md:px-9 sm:px-5'>
//       <div className='flex flex-col items-center justify-center md:gap-[14px] sm:gap-5' data-aos='fade-up'>
//         <div className='rounded-[23px] sm:py-3 sm:px-3 md:py-2.5 md:px-9 bg-[#131314] text-[#f4f4f4]' data-aos='fade-in'>
//           <p>How it works?</p>
//         </div>
//         <p className='font-bold lg:text-6xl md:text-5xl sm:text-3xl text-center text-[#f4f4f4]'>Why Choose Voyex?</p>
//       </div>
      
//       <div className='flex items-center justify-center md:flex-row sm:flex-col md:px-6 sm:px-4 sm:py-5 md:py-8 md:gap-7 sm:gap-5 bg-[#0d0d0d] border border-[#ffffff20] md:rounded-2xl sm:rounded-[10px] text-[#f4f4f4]' data-aos='fade-up'>
//   {[
//     {
//       number: "01",
//       title: "Built for Action",
//       desc: "We don't overwhelm you with options — we guide you to outcomes. Every recommendation is made with your task in mind.",
//     },
//     {
//       number: "02",
//       title: "Smart & Contextual",
//       desc: "We ask the right follow-up questions to truly understand what you need — and tailor results accordingly.",
//     },
//     {
//       number: "03",
//       title: "Enterprise-Grade Security",
//       desc: "Data privacy and security at the core of our platform. We prioritize safeguarding your data at every step of the way. append this in third",
//     },
//   ].map((item, index) => (
//     <div
//       key={index}
//       className='flex flex-col gap-2 justify-start items-start md:w-1/3 sm:w-full'
//       data-aos='fade-in'
//       data-aos-delay={index * 200}
//     >
//       <div className='flex flex-col gap-2.5 min-h-[80px]'>
//         <p className='font-black md:text-2xl sm:text-xl'>{item.number}</p>
//         <p className='font-bold md:text-2xl sm:text-xl leading-snug min-h-[60px]'>
//           {item.title}
//         </p>
//       </div>
//       <p className='font-normal md:text-base sm:text-sm leading-relaxed min-h-[96px]'>
//         {item.desc}
//       </p>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// };

// export default Howitworks;



'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Howitworks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  const data = [
    {
      number: "01",
      title: "🎯 Built for Action",
      desc: "We don't overwhelm you with options - we guide you to outcomes. Every recommendation is made with your task in mind.",
    },
    {
      number: "02",
      title: "🧠 Smart & Contextual",
      desc: "We ask the right follow-up questions to truly understand what you need — and tailor results accordingly.",
    },
    {
      number: "03",
      title: "🛡️ Enterprise-Grade Security",
      desc: "Data privacy and security at the core of our platform. We prioritize safeguarding your data at every step of the way.",
    },
  ];

  return (
    <div className='flex flex-col lg:mt-40 md:gap-[86px] sm:gap-[56px] h-auto md:mt-32 sm:mt-80 md:px-9 sm:px-5'>
      <div className='flex flex-col items-center justify-center md:gap-[14px] sm:gap-5' data-aos='fade-up'>
        <div className='rounded-[23px] sm:py-3 sm:px-3 md:py-2.5 md:px-9 bg-[#131314] text-[#f4f4f4]' data-aos='fade-in'>
          <p>How it works?</p>
        </div>
        <p className='font-bold lg:text-6xl md:text-5xl sm:text-3xl text-center text-[#f4f4f4]'>Why Choose Voyex?</p>
      </div>

      <div className='flex items-start justify-between max-w-[1380px] lg:ml-8  md:flex-row sm:flex-col md:px-6 sm:px-4 sm:py-5 md:py-8 md:gap-6 sm:gap-5 bg-[#0d0d0d] border border-[#ffffff20] md:rounded-2xl sm:rounded-[10px] text-[#f4f4f4]' data-aos='fade-up'>
  {data.map((item, index) => (
    <div
      key={index}
      className='flex flex-col md:w-1/3 sm:w-full px-2'
      data-aos='fade-in'
      data-aos-delay={index * 200}
    >
      <p className='font-black md:text-2xl sm:text-xl mb-1'>{item.number}</p>
      <p className='font-bold md:text-xl sm:text-lg leading-tight mb-2'>{item.title}</p>
      <div className="line-clamp-3 text-sm md:text-base leading-snug overflow-hidden">
        {item.desc}
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Howitworks;
