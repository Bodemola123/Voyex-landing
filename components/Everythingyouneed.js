// 'use client';
// import React, { useState, useEffect } from 'react';
// import '../app/globals.css';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { IoMdArrowForward } from "react-icons/io";
// import { HiOutlineLightBulb } from "react-icons/hi2";

// const Everythingyouneed = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true); // Track fade state
//   const [activeIndex, setActiveIndex] = useState(null);

//   // features content
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

//   // Carousel logic
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     const interval = setInterval(() => {
//       setFade(false); // Start fading out
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
//         setFade(true); // Fade in the new content
//       }, 500); // Wait for fade-out before updating index
//     }, 5000); // Change text every 5 seconds (slower speed)

//     return () => clearInterval(interval);
//   }, []);

//   // Handle carousel button clicks
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselContent.length) % carouselContent.length);
//   };

//   return (
//     <div className="flex flex-col lg:gap-10 md:gap-[43px] sm:gap-[43px] justify-center items-center sm:px-4 md:px-0 sm:-mt-[200px] md:-mt-0">
//       {/* Title Section */}
//       <div className="flex flex-col lg:gap-5 md:gap-[13px] sm:gap-[13px] mt-44 text-center">
//         <h1
//           className="text-[#ffffff] lg:text-[54px] md:text-[38.03px] sm:text-[32px] lg:leading-[60px] md:leading-[38.57px] sm:leading-[38.57px] font-bold"
//           data-aos="fade-up"
//         >

//            Navigate the AI Landscape Easily

//         </h1>
//         <span className="text-[#ffffff] text-center lg:w-[1044px] md:w-[729px] sm:w-auto sm:px-10 md:px-0 lg:text-[22px] md:text-[15px] sm:text-[15px] font-normal">
//           <p>
//           Find everything you need to get from A to B. Did you check? There must be a tool for it 
//          </p>
//         </span>
//       </div>

//       {/* Grid Section */}
//       <div
//         className="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-[10.28px] sm:gap-[10.28px] sm:w-auto sm:px-4 lg:w-[1144px] md:w-[729px]"
//         data-aos="fade-up"
//       >

//       {/* Card 1 */}
//     <div className="lg:p-10 md:p-[25.71px] sm:p-[25.71px] lg:border md:border-[0.64px] sm:border-[0.64px] border-card lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px] sm:gap-[15.43px] transition-all duration-1000 ease-in-out group cursor-pointer">
//     <div className="p-2.5 w-[52px] flex items-center justify-center lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] bg-[#ffffff] transition-all duration-1000 ease-in-out">
//     <HiOutlineLightBulb className="text-[24px] text-[#0d0d0d] transition-colors duration-1000 ease-in-out" />
//     </div>
//     <div className="relative inline-block">
//     <h1 className="font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
//     AI Query Engine
//     </h1>
//     <div className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
//     </div>
//     <span className="flex flex-col lg:w-[400px] md:w-[311.67px] sm:w-auto text-center justify-center items-center font-normal md:text-[14.79px] sm:text-[14.79px] lg:text-base text-[#ffffff] transition-colors duration-1000 ease-in-out">
//     <p>
//     Voyex&apos;s AI query engine trained to provide you accurate tools to get your work 
//     done. Define your requirements and get tools, guides and workflows.
//     </p>
//     </span>
//     </div>

//         {/* Card 2 */}
//         <div className="lg:p-10 md:p-[25.71px] sm:p-[25.71px] lg:border md:border-[0.64px] sm:border-[0.64px] border-card lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px] sm:gap-[15.43px] transition-all duration-1000 ease-in-out group cursor-pointer">
//         <div className="p-2.5 w-[52px] flex items-center justify-center lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] bg-[#ffffff] transition-all duration-1000 ease-in-out ">
//         <HiOutlineLightBulb className="text-[24px] text-[#0d0d0d] transition-colors duration-1000 ease-in-out " />
//         </div>
//         <div className="relative inline-block">
//         <h1 className="font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px] sm:leading-[24.34px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
//         Workflow Creation
//         </h1>
//         <div className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></div>
//         </div>
//         <span className="flex flex-col lg:w-[400px] md:w-[311.67px] sm:w-auto text-center justify-center items-center font-normal md:text-[14.79px] sm:text-[14.79px] lg:text-base text-[#ffffff] transition-colors duration-1000 ease-in-out">
//         <p>
//         Use the tools like a pro and get work 
//         done even faster. Prompt recommendation to get accurate results on 
//         suggested tools.
//        </p>
//        </span>
//        </div> 
//       </div>


//       <div className="relative flex flex-col items-center bg-black p-8 rounded-xl border border-gray-800">
//       {/* Header Section */}
//       <div className="w-full flex flex-col items-center">
//         <div className="flex items-center space-x-4">
//           <div className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//             Coming Soon
//           </div>
//           <h2 className="text-3xl font-bold text-white text-center">
//             Future of Automation (Agent-based Workflows)
//           </h2>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center mt-6">
//         {/* Features List */}
//         <div className="relative lg:w-1/2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-8 text-white">
//           <ul className="space-y-4 relative">
//             {/* Side Slider */}
//             {activeIndex !== null && (
//               <div
//                 className="absolute left-0 w-1 bg-purple-500 transition-all duration-300"
//                 style={{
//                   top: `${activeIndex * 60}px`,
//                   height: "40px",
//                 }}
//               />
//             )}

//             {/* List Items */}
//             {features.map((feature, index) => (
//               <li
//                 key={index}
//                 className="relative group hover-trigger cursor-pointer flex items-center space-x-2"
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               >
//                 <span className="text-lg font-semibold">{feature.title}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Content Display Card */}
//         <div
//           className={`lg:w-1/2 flex justify-center mt-6 lg:mt-0 bg-white text-black p-6 rounded-lg shadow-lg transition-all duration-300 ${
//             activeIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-90 hidden"
//           }`}
//         >
//           <p className="text-gray-800">{activeIndex !== null ? features[activeIndex].description : ""}</p>
//         </div>
//       </div>
// </div>
// </div>
//   );
// };

// export default Everythingyouneed;  



// 'use client';
// import React, { useState, useEffect,useRef } from 'react';
// import dynamic from 'next/dynamic';
// import '../app/globals.css';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { IoMdArrowForward } from "react-icons/io";
// import { HiOutlineLightBulb } from "react-icons/hi2";

// const Everythingyouneed = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const featureRefs = useRef([]);
//   const [indicatorHeight, setIndicatorHeight] = useState(0);
//   const [indicatorTop, setIndicatorTop] = useState(0);
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


//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Read the index from data-index
//             const index = Number(entry.target.getAttribute('data-index'));
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

//   useEffect(() => {
//     if (activeIndex !== null && descRefs.current[activeIndex]) {
//       const descriptionElement = descRefs.current[activeIndex];
//       const featureElement = featureRefs.current[activeIndex];

//       if (descriptionElement && featureElement) {
//         setIndicatorHeight(descriptionElement.scrollHeight); // Set height to match the description
//         setIndicatorTop(featureElement.offsetTop); // Set top position to align with the feature
//       }
//     } else {
//       setIndicatorHeight(0);
//       setIndicatorTop(0);
//     }
//   }, [activeIndex]);

//   return (
//     <div className="flex flex-col lg:gap-10 md:gap-8 sm:gap-6 justify-center items-center px-4 md:px-0">
//       {/* Title Section */}
//       <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 text-center mt-20">
//         <h1 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight"
//             data-aos="fade-up">
//           Navigate the AI Landscape Easily
//         </h1>
//         <p className="text-white lg:text-xl md:text-lg sm:text-base font-normal max-w-[1044px] mx-auto">
//           Find everything you need to get from A to B. Did you check? There must be a tool for it
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-[1144px] px-4 md:px-6 lg:px-8"
//            data-aos="fade-up">
//         {/* Card 1 */}
//         <div className="p-8 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-6 group">
//           <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
//             <HiOutlineLightBulb className="text-2xl text-black" />
//           </div>
//           <div className="relative inline-block">
//             <h2 className="font-bold text-white text-lg text-center">
//               <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
//                              after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 
//                              group-hover:after:w-full">
//                 AI Query Engine
//               </span>
//             </h2>
//           </div>
//           <p className="text-white text-center max-w-[400px]">
//             Trained to provide you accurate tools to get your work 
//             done. Define your requirements and get tools, guides and workflows.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="p-8 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-6 group">
//           <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
//             <HiOutlineLightBulb className="text-2xl text-black" />
//           </div>
//           <div className="relative inline-block">
//             <h2 className="font-bold text-white text-lg text-center">
//               <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
//                              after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 
//                              group-hover:after:w-full">
//                 Prompt Recommendation Engine 
//               </span>
//             </h2>
//           </div>
//           <p className="text-white text-center max-w-[400px]">
//             Use the tools like a pro and get work done even faster. Prompt recommendation 
//             to get accurate results on suggested tools.
//           </p>
//         </div>
//       </div>

    
//       <div className="relative flex flex-col lg:flex-row items-center p-6 rounded-xl border border-gray-800 bg-[#0d0d0d] w-full max-w-[1090px] mt-[-18px]" data-aos="fade-up">
//       <div className="flex flex-col items-start justify-center ml-10 lg:w-1/2 text-left">
//     <h2 className="text-3xl font-bold text-white leading-tight">
//       Future of Automation
//     </h2>
//     <div className="flex items-center gap-2 mt-2">
//       <h3 className="text-base font-medium text-gray-400">
//         (Agent Based Workflows)
//       </h3>
//       <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//         Coming Soon
//       </span>
//     </div>
//   </div>

// {/* 
//   <div className="flex flex-col lg:flex-row w-full gap-8">
//     <div className="lg:w-1/2 relative"> */}
//     {/* Right Section: Features List */}
//   <div className="flex flex-col lg:w-1/2 relative">

//       {/* Side Slider */}
//       {activeIndex !== null && (
//             <div
//               className="absolute transition-all duration-500"
//               style={{
//                 top: `${indicatorTop}px`,
//                 left: '-20px', // Adjust this value to position the slider beside the description
//                 height: `${indicatorHeight}px`,
//                 maxHeight:'120px'
//               }}
//             >
//               <div className="w-1 bg-purple-500 h-full"></div>
//             </div>
//           )}

//       <ul className="space-y-16">
//       {features.map((feature, index) => (
//   <li
//     key={index}
//     data-index={index}
//     ref={(el) => (featureRefs.current[index] = el)}
//     className="feature-item cursor-pointer pl-6 relative"
//     onMouseEnter={() => setActiveIndex(index)}
//     onMouseLeave={() => setActiveIndex(null)}
//   >
    
//                   {/* {Title} */}
//     <h3
//                   className={`text-lg font-semibold transition-colors duration-300 ${
//                     activeIndex === index ? "text-black" : "text-white"
//                   }`}
//                 >
//                   {feature.title}
//                 </h3>
// {/* Title and Description Panel */}
// <div
//   ref={(el) => (descRefs.current[index] = el)}
//   className={`feature-content overflow-hidden transition-all duration-500 ease-in-out bg-[#F4F4F4] rounded-lg p-5 mt-2 ${
//     activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//   }`}
//   style={{
//     maxHeight: activeIndex === index ? `${descRefs.current[index]?.scrollHeight}px` : "0",
//   }}
// >
//   <h3
//     className={`text-lg font-semibold transition-colors duration-300 ${
//       activeIndex === index ? "text-black" : "text-white"
//     }`}
//   >
//     {feature.title}
//   </h3>
//   <p className="text-[#0A0A0B] text-lg mt-2">{feature.description}</p>
// </div>
//               </li>
//             ))}
//       </ul>
//     </div>

//   </div>
// </div>

  
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
    <div className="flex flex-col lg:gap-10 md:gap-8 sm:gap-6 justify-center items-center px-4 md:px-0">
      {/* Title Section */}
      <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-3 text-center mt-20" data-aos="fade-up">
        <h1 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight">
          Navigate the AI Landscape Easily
        </h1>
        <p className="text-white lg:text-xl md:text-lg sm:text-base font-normal max-w-[1044px] mx-auto">
          Find everything you need to get from A to B. Did you check? There must be a tool for it
        </p>
      </div>

      {/* Grid Section */}
      <div
        className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full max-w-[1050px] px-4 md:px-6 lg:px-8 "
        data-aos="fade-up"
      >
        {/* Card 1 */}
        <div className="p-5 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-4 group h-[210px]">
          <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
            <HiOutlineLightBulb className="text-2xl text-black" />
          </div>
          <div className="relative inline-block">
            <h2 className="font-bold text-white text-base text-center">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                AI Query Engine
              </span>
            </h2>
          </div>
          <p className="text-white text-center max-w-[400px]">
            Trained to provide you accurate tools to get your work done. Define your requirements and get tools, guides and workflows.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 border border-card rounded-xl flex flex-col items-center bg-[#0d0d0d] gap-4 group h-[210px]">
          <div className="p-2.5 w-[52px] rounded-xl bg-white flex items-center justify-center">
            <HiOutlineLightBulb className="text-2xl text-black" />
          </div>
          <div className="relative inline-block">
            <h2 className="font-bold text-white text-base text-center">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Prompt Recommendation Engine
              </span>
            </h2>
          </div>
          <p className="text-white text-center max-w-[400px]">
            Use the tools like a pro and get work done even faster. Prompt recommendation to get accurate results on suggested tools.
          </p>
        </div>
      </div>

        {/* Future of Automation Section */}
        <div
          className="relative flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-[#0d0d0d] w-full max-w-[987px] mt-[-25px]"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start justify-center text-left mt-[30px]">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Future of Automation
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <h3 className="text-base font-medium text-gray-400">
                (Agent Based Workflows)
              </h3>
              <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Features Section aligned horizontally in the next line */}
          <div className="flex flex-row justify-center gap-4 mt-10 mb-8">
            {features.map((feature, index) => (
              <button
                key={index}
                data-index={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`flex flex-col items-center justify-center p-3 bg-[#F4F4F4] text-#0A0A0B rounded-3xl shadow-md w-[200px] h-[90px] cursor-pointer hover:bg-[#F4F4F4] transition-all ${
                  activeIndex === index ? "ring-2 ring-purple-500" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                aria-label={`Feature: ${feature.title}`}
              >
                <h3 className="text-md font-semibold">{feature.title}</h3>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Everythingyouneed), { ssr: false });