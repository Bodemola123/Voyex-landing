
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import '../app/globals.css';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { IoMdArrowForward } from 'react-icons/io';
// import { HiOutlineLightBulb } from 'react-icons/hi2';

// const Everythingyouneed = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const featureRefs = useRef([]);
//   const descRefs = useRef([]);

//   const features = [
//     {
//       title: "Ask Deeper Questions",
//       description: "Uncover insights with advanced AI for thoughtful, impactful decision-making.",
//     },
//     {
//       title: "Automate Campaigns",
//       description: "Automate campaigns to simplify marketing with personalized, data-driven strategies.",
//     },
//     {
//       title: "Track Performance Metrics",
//       description: "Monitor key metrics in real-time for continuous strategic optimization.",
//     },
//     {
//       title: "Run Workflows Using Multiple AI Tools",
//       description: "Streamline processes by integrating AI tools for maximum operational efficiency.",
//     },
//   ];

//   // Initialize AOS and set up IntersectionObserver on feature elements
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number(entry.target.getAttribute("data-index"));
//             setActiveIndex(index);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     featureRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="flex flex-col lg:gap-10 md:gap-8 sm:gap-6 justify-center items-center px-4 md:px-0">
//       {/* Title Section */}
//       <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 text-center mt-20" data-aos="fade-up">
//         <h1 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight">
//           Navigate the AI Landscape Easily
//         </h1>
//         <p className="text-white lg:text-xl md:text-lg sm:text-base font-normal max-w-[1044px] mx-auto">
//           Find everything you need to get from A to B. Did you check? There must be a tool for it
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div
//         className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full max-w-[1050px] px-4 md:px-6 lg:px-8 "
//         data-aos="fade-up"
//       >
//         {/* Card 1 */}
//         <div className="p-5 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-4 group h-[210px]">
//           <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
//             <HiOutlineLightBulb className="text-2xl text-black" />
//           </div>
//           <div className="relative inline-block">
//             <h2 className="font-bold text-white text-base text-center">
//               <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
//                 AI Query Engine
//               </span>
//             </h2>
//           </div>
//           <p className="text-white text-center max-w-[400px]">
//             Trained to provide you accurate tools to get your work done. Define your requirements and get tools, guides and workflows.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="p-5 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-4 group h-[210px]">
//           <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
//             <HiOutlineLightBulb className="text-2xl text-black" />
//           </div>
//           <div className="relative inline-block">
//             <h2 className="font-bold text-white text-base text-center">
//               <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
//                 Prompt Recommendation Engine
//               </span>
//             </h2>
//           </div>
//           <p className="text-white text-center max-w-[400px]">
//             Use the tools like a pro and get work done even faster. Prompt recommendation to get accurate results on suggested tools.
//           </p>
//         </div>
//       </div>

//         {/* Future of Automation Section */}
//         <div
//           className="relative flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-[#0d0d0d] w-full max-w-[987px] mt-[-25px]"
//           data-aos="fade-up"
//         >
//           <div className="flex flex-col items-start justify-center text-left mt-[10px]">
//             <h2 className="text-3xl font-bold text-white leading-tight">
//               Future of Automation
//             </h2>
//             <div className="flex items-center gap-2 mt-2">
//               <h3 className="text-base font-medium text-gray-400">
//                 (Agent Based Workflows)
//               </h3>
//               <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Coming Soon
//               </span>
//             </div>
//           </div>

//           {/* Features Section aligned horizontally in the next line */}
//           <div className="flex flex-row justify-center gap-4 mt-10 mb-2">
//             {features.map((feature, index) => (
//               <button
//                 key={index}
//                 data-index={index}
//                 ref={(el) => (featureRefs.current[index] = el)}
//                 className={`flex flex-col items-center justify-center p-3 bg-[#F4F4F4] text-#0A0A0B rounded-3xl shadow-md w-[200px] h-[90px] cursor-pointer hover:bg-[#F4F4F4] transition-all ${
//                   activeIndex === index ? "ring-2 ring-purple-500" : ""
//                 }`}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//                 aria-label={`Feature: ${feature.title}`}
//               >
//                 <h3 className="text-md font-semibold">{feature.title}</h3>
//               </button>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(Everythingyouneed), { ssr: false });


'use client';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '../app/globals.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowForward } from 'react-icons/io';
import { HiOutlineLightBulb } from 'react-icons/hi2';

const Everythingyouneed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const featureRefs = useRef([]);
  const descRefs = useRef([]);

  const features = [
    {
      title: "Ask Deeper Questions",
      description: "Uncover insights with advanced AI for thoughtful, impactful decision-making.",
    },
    {
      title: "Automate Campaigns",
      description: "Automate campaigns to simplify marketing with personalized, data-driven strategies.",
    },
    {
      title: "Track Performance Metrics",
      description: "Monitor key metrics in real-time for continuous strategic optimization.",
    },
    {
      title: "Run Workflows Using Multiple AI Tools",
      description: "Streamline processes by integrating AI tools for maximum operational efficiency.",
    },
  ];

  // Initialize AOS and set up IntersectionObserver on feature elements
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // <div className="flex flex-col lg:gap-10 md:gap-8 sm:gap-6 justify-center items-center px-4 lg:px-0">
    <div className="flex flex-col justify-center items-center px-4 lg:px-8 lg:-mt-[100px] sm:-mt-[100px] ">
      {/* Title Section */}
      <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 text-center mt-20" data-aos="fade-up">
        <h1 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight">
          Navigate the AI Landscape Easily 
        </h1>
        <p className="text-white lg:text-xl md:text-lg sm:text-base font-normal max-w-[1044px] mx-auto">
          Find everything you need to get from A to B. Did you check? There must be a tool for it
        </p>
      </div>

      {/* grid section */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full sm:max-w-[425px] md:max-w-[838px] lg:max-w-[980px] xl:max-w-[1144px] mt-10" data-aos="fade-up">

        {/* Card 1 */}
        <div className="p-5 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-4 group h-[210px]">
          <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
            <HiOutlineLightBulb className="text-2xl text-black" />
          </div>
          <div className="relative inline-block">
            <h2 className="font-bold text-white md:text-base sm:text-sm text-center">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                AI Query Engine
              </span>
            </h2>
          </div>
          <p className="text-white text-center max-w-[400px] lg:text-base md:text-sm sm:text-xs">
            Trained to provide you accurate tools to get your work done. Define your requirements and get tools, guides and workflows.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-4 group h-[210px]">
          <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
            <HiOutlineLightBulb className="text-2xl text-black" />
          </div>
          <div className="relative inline-block">
            <h2 className="font-bold text-white md:text-base sm:text-sm text-center">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Prompt Recommendation Engine
              </span>
            </h2>
          </div>
          <p className="text-white text-center max-w-[400px] lg:text-base md:text-sm sm:text-xs">
            Use the tools like a pro and get work done even faster. Prompt recommendation to get accurate results on suggested tools.
          </p>
        </div>
      </div>

        {/* Future of Automation Section */}
        {/* <div
          className="relative flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-[#0d0d0d] w-full max-w-[964px] mt-[20px]"
          data-aos="fade-up"
        > */}
        <div
  className="relative flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-[#0d0d0d] w-full  sm:max-w-[425px] md:max-w-[838px] lg:max-w-[980px] xl:max-w-[1144px] mt-[20px]"
  data-aos="fade-up"
>

          <div className="flex flex-col items-start justify-center text-left mt-[10px]">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Future of Automation
            </h2>
            <div className="flex items-center md:justify-center gap-2 sm:justify-between mt-2">
              <h3 className="md:text-base sm:text-xs font-medium text-gray-400">
                (Agent Based Workflows)
              </h3>
              <span className="bg-red-500 text-white md:text-xs sm:text-[10px] font-semibold md:px-3 sm:px-1 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>

          
        {/* <div className="flex flex-col xl:flex-row justify-center gap-4 mt-10 mb-2"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10 mb-2">
  {features.map((feature, index) => (
    <button
      key={index}
      data-index={index}
      ref={(el) => (featureRefs.current[index] = el)}
      className="flex flex-col lg:flex-row items-center justify-center p-3 bg-[#F4F4F4] text-[#0A0A0B] rounded-3xl shadow-md w-[200px] h-[90px] cursor-pointer transition-all hover:ring-2 hover:ring-purple-500"
      aria-label={`Feature: ${feature.title}`}
    >
      <h3 className="text-md font-semibold text-center">{feature.title}</h3>
    </button>
  ))}
</div>
        
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Everythingyouneed), { ssr: false });