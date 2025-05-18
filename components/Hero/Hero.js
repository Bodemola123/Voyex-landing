
// 'use client';
// import React, { useEffect, useState } from 'react';
// import "../../app/globals.css";
// import StarsCanvas from '../common/StarBackground';
// import CircularRings from '../Circular';

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Trigger fade-in effect on mount
//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 2000);
//   }, []);

//   return (
//     <div className="relative overflow-visible z-20 mt-12"> 
//       <div className="flex flex-col items-center justify-center text-center gap-[10px] relative">
//         <div className="flex flex-row justify-center items-center sm:mt-20 lg:mt-8">
//           <div className="lg:h-[322px] md:h-[198px] sm:h-[118px] mx-auto">
//             <p className="text-[#ffffff] font-semibold lg:px-[20px] lg:py-[9px] md:px-[15px] md:py-[6px] md:flex sm:hidden gap-2.5 rounded-[41px] bg-gradient-to-r from-[#C088FB] to-[#9747FF] w-fit md:text-xs lg:left-[150px] relative lg:top-[20px] md:top-[40px] md:left-[80px]">
//               Your Google for AI
//             </p>
//             <h1
//               className="lg:text-[165px] md:text-[98.67px] sm:text-[58.88px] sm:font-bold md:font-bold lg:font-black leading-[1.1] text-[#ffffff] z-20 lg:-mt-10 "
//               style={{ textShadow: "4px 4px 8px rgba(0,0,0,0.8)" }}
//             >
//               Ideas Into<br />Workflow
//             </h1>
//             <p className="bg-gradient-to-r relative from-[#46BA3C] to-[#00A766] text-[#0a0a0b] font-semibold lg:px-[20px] lg:py-[9px] md:px-[15px] md:py-[6px] md:flex sm:hidden gap-2.5 rounded-[41px] w-fit md:text-xs lg:left-[500px] lg:bottom-[180px] md:left-[292px] md:bottom-[108px]">
//               Find the right tools 
//             </p>
//           </div>
//         </div>

//         <p
//           className={`flex justify-center items-center md:mt-12 lg:mt-12 sm:mt-[5.97px] lg:text-xl md:text-base sm:text-base text-[#ffffff] md:leading-[25.6px] sm:leading-[23.92px] lg:w-[977px] z-20 text-center md:w-[584.27px] sm:w-auto sm:px-10 md:px-0 transition-opacity duration-1000 ${
//             isVisible ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           Voyex helps you find the right AI tools for your usecases. Find AI tools 
//           with just a query. It simplifies finding, using and querying AI tools and 
//           create your own mini agency.
//         </p>

//         <div className="flex mb-10 md:flex-row lg:flex-row sm:flex-col sm:gap-[18px] lg:gap-4 md:gap-[15.57px] mt-3 justify-center items-center">
//           <button className="bg-[#c088fb] flex items-center justify-center sm:py-3 md:py-2.5 sm:px-3 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#141414] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] md:w-auto lg:max-w-[269px] sm:w-[286px] z-20">
//             Start your AI journey
//           </button>
//           <button className="bg-[#f4f4f4] flex items-center justify-center sm:py-3 sm:px-3 md:py-2.5 md:px-9 rounded-3xl md:gap-2.5 lg:gap-2.5 sm:gap-[5.98px] text-[#032400] font-medium md:text-base sm:text-base transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#e0e0e0] z-20 md:w-auto lg:max-w-[217px] sm:w-[286px]">
//             Upload Product
//           </button>
//         </div>

//         {/* Background orbits with reduced scale and blur */}
//         <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter blur-[1px]">
//           <CircularRings />
//           <StarsCanvas />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// 'use client';
// import React, { useEffect, useState } from 'react';
// import "../../app/globals.css";
// import StarsCanvas from '../common/StarBackground';
// import CircularRings from '../Circular';

// const Hero = () => {
//   const titles = [
//     { text: 'Turn your ideas into ', keyword: 'Workflow' },
//     { text: 'Find the right ', keyword: 'Tools' },
//     { text: 'Your ', keyword: 'Google for AI' },
//   ];

//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[currentTitleIndex];
//     const fullText = currentTitle.text + currentTitle.keyword;

//     const typingSpeed = 100;
//     const deletingSpeed = 50;
//     const pauseTime = 1000;

//     const handleTyping = () => {
//       setDisplayedText((prev) => {
//         const updatedText = isDeleting
//           ? fullText.substring(0, prev.length - 1)
//           : fullText.substring(0, prev.length + 1);

//         return updatedText;
//       });

//       if (!isDeleting && displayedText === fullText) {
//         setTimeout(() => setIsDeleting(true), pauseTime);
//       } else if (isDeleting && displayedText === '') {
//         setIsDeleting(false);
//         setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
//       }
//     };

//     const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

//     return () => clearTimeout(timer);
//   }, [displayedText, isDeleting, currentTitleIndex]);

//   const currentTitle = titles[currentTitleIndex];
//   const mainText = currentTitle.text;
//   const keyword = currentTitle.keyword;

//   const splitIndex = displayedText.length < mainText.length
//     ? displayedText.length
//     : mainText.length;

//   const mainTextDisplayed = displayedText.substring(0, splitIndex);
//   const keywordDisplayed = displayedText.substring(splitIndex);

//   return (
//     <div className="relative overflow-visible z-20 mt-12">
//       <div className="flex flex-col items-center justify-center mt-20 text-center gap-6 transition-opacity duration-1000 h-full">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug">
//           {mainTextDisplayed}
//           <span className="text-purple-400">{keywordDisplayed}</span>
//         </h1>

//         <p className="text-gray-300 text-base md:text-lg max-w-[600px]">
//         Voyex helps you find the right AI tools for your usecases. Find AI tools 
// with just a query. It simplifies finding, using and querying AI tools and 
// create your own mini agency. 
//         </p>

//         <div className="flex gap-4 mt-4">
//           <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
//             Start your AI Journey
//           </button>
//           <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
//             Upload Product
//           </button>

//            {/* Background orbits with reduced scale and blur */}
//          <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter blur-[1px]">
//            <CircularRings />
//            <StarsCanvas />
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import "../../app/globals.css";
// import StarsCanvas from '../common/StarBackground';
// import CircularRings from '../Circular';

// const Hero = () => {
//   const titles = [
//     { text: 'Turn your ideas into', keyword: 'Workflow' },
//     { text: 'Find the right', keyword: 'Tools' },
//     { text: 'Your', keyword: 'Google for AI' },
//   ];

//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[currentTitleIndex];
//     const fullText = currentTitle.text + ' ' + currentTitle.keyword;

//     const typingSpeed = 90; // slow typing
//     const deletingSpeed = 80; // slower untyping
//     const pauseTime = 1000; // pause at full text

//     const handleTyping = () => {
//       setDisplayedText(prev => {
//         const updatedText = isDeleting
//           ? fullText.substring(0, prev.length - 1)
//           : fullText.substring(0, prev.length + 1);

//         return updatedText;
//       });

//       if (!isDeleting && displayedText === fullText) {
//         setTimeout(() => setIsDeleting(true), pauseTime);
//       } else if (isDeleting && displayedText === '') {
//         setIsDeleting(false);
//         setCurrentTitleIndex(prev => (prev + 1) % titles.length);
//       }
//     };

//     const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
//     return () => clearTimeout(timer);
//   }, [displayedText, isDeleting, currentTitleIndex]);

//   const currentTitle = titles[currentTitleIndex];
//   const mainText = currentTitle.text;
//   const keyword = currentTitle.keyword;

//   const mainTextLength = mainText.length;

//   return (
//     <div className="relative overflow-visible z-20 mt-12">
//       <div className="flex flex-col items-center justify-center mt-20 text-center gap-6 transition-opacity duration-1000 h-full ">
//         <h1 className="text-5xl md:text-7xl font-bold text-white leading-snug absolute -top-16 mt-40">
//           {displayedText.length <= mainTextLength ? (
//             <>
//               {displayedText}
//             </>
//           ) : (
//             <>
//               {mainText}
//               <br />
//               <span className="text-purple-400">
//                 {displayedText.slice(mainTextLength + 1)}
//               </span>
//             </>
//           )}
//         </h1>

//         <p className="text-gray-300 text-base md:text-lg max-w-[600px] mt-40">
//         Voyex helps you find the right AI tools for your usecases. Find AI tools 
// with just a query. It simplifies finding, using and querying AI tools and 
// create your own mini agency. 
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-4">
//           <button className="bg-[#C088FB] text-[#0A0A0B] px-6 py-3 rounded-full font-medium hover transition">
//             Start your AI Journey
//           </button>
//           <button className="bg-[#F4F4F4] text-[#0A0A0B] px-6 py-3 rounded-full font-medium hover transition">
//            Upload Product
//           </button>

//            {/* Background orbits with reduced scale and blur */}
//            <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter">
//             <CircularRings />
//            <StarsCanvas />
//            </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Hero; 



// 'use client';
// import React, { useEffect, useState } from 'react';
// import "../../app/globals.css";
// import StarsCanvas from '../common/StarBackground';
// import CircularRings from '../Circular';

// const titles = [
//   {
//     text: 'Turn your Ideas into ',
//     keyword: 'Workflow',
//     typewriter: true,
//   },
//   {
//     text: 'Discover and use the',
//     keyword: 'tools that align with your goals ',
//     typewriter: true,
//   },
//   {
//     text: ' at your fingertips.',
//     keyword: 'Your AI powered Agency ',
//     typewriter: true,
//   },
// ];

// const Hero = () => {
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
//   const [typedKeyword, setTypedKeyword] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Typewriter effect for "Workflow" only in the first title
//   useEffect(() => {
//     if (!titles[currentTitleIndex].typewriter) return;

//     const keyword = titles[currentTitleIndex].keyword;
//     const typingSpeed = 90;
//     const deletingSpeed = 80;
//     const pauseTime = 1200;

//     let timer;
//     if (!isDeleting && typedKeyword.length < keyword.length) {
//       timer = setTimeout(() => {
//         setTypedKeyword(keyword.substring(0, typedKeyword.length + 1));
//       }, typingSpeed);
//     } else if (!isDeleting && typedKeyword.length === keyword.length) {
//       timer = setTimeout(() => setIsDeleting(true), pauseTime);
//     } else if (isDeleting && typedKeyword.length > 0) {
//       timer = setTimeout(() => {
//         setTypedKeyword(keyword.substring(0, typedKeyword.length - 1));
//       }, deletingSpeed);
//     } else if (isDeleting && typedKeyword.length === 0) {
//       setIsDeleting(false);
//       setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
//     }
//     return () => clearTimeout(timer);
//   }, [typedKeyword, isDeleting, currentTitleIndex]);

//   // When switching to a non-typewriter title, auto-advance after a pause
//   useEffect(() => {
//     if (!titles[currentTitleIndex].typewriter) {
//       const timer = setTimeout(() => {
//         setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
//         setTypedKeyword('');
//         setIsDeleting(false);
//       }, 2200);
//       return () => clearTimeout(timer);
//     } else {
//       setTypedKeyword('');
//       setIsDeleting(false);
//     }
//   }, [currentTitleIndex]);

//   // Render logic
//   const current = titles[currentTitleIndex];

//   return (
//     <div className="relative overflow-visible z-20 mt-12">
//       <div className="flex flex-col items-start justify-center mt-32 text-left gap-8 transition-opacity duration-1000 h-full max-w-3xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold text-white leading-snug mb-2">
//           {current.typewriter ? (
//             <>
//               {current.text}
//               <span className="text-purple-400">
//                 {typedKeyword}
//                 <span className="animate-pulse">|</span>
//               </span>
//             </>
//           ) : (
//             current.text
//           )}
//         </h1>
//         <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-6">
//           Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
//         </p>
//         <div className="flex gap-4 mt-2">
//           <button className="bg-[#C088FB] text-[#0A0A0B] px-6 py-3 rounded-full font-medium hover:scale-105 transition">
//             Start your AI Journey
//           </button>
//           <button className="bg-[#F4F4F4] text-[#0A0A0B] px-6 py-3 rounded-full font-medium hover:scale-105 transition">
//             Upload Product
//           </button>
//         </div>
//         {/* Background orbits with reduced scale and blur */}
//         <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter">
//           <CircularRings />
//           <StarsCanvas />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import "../../app/globals.css";
// import StarsCanvas from '../common/StarBackground';
// import CircularRings from '../Circular';

// const titles = [
//   {
//     text: 'Turn your Ideas into ',
//     keyword: 'Workflow',
//     typewriter: true,
//     showTextAfter: false,
//   },
//   {
//     text: 'Discover and use the',
//     keyword: ' tools that align with your goals',
//     typewriter: true,
//     showTextAfter: false,
//   },
//   {
//     text: ' at your fingertips.',
//     keyword: 'Your AI powered Agency',
//     typewriter: true,
//     showTextAfter: true, // Show text after keyword
//   },
// ];

// const Hero = () => {
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
//   const [typedKeyword, setTypedKeyword] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     if (!titles[currentTitleIndex].typewriter) return;

//     const keyword = titles[currentTitleIndex].keyword;
//     const typingSpeed = 90;
//     const deletingSpeed = 80;
//     const pauseTime = 1200;

//     let timer;
//     if (!isDeleting && typedKeyword.length < keyword.length) {
//       timer = setTimeout(() => {
//         setTypedKeyword(keyword.substring(0, typedKeyword.length + 1));
//       }, typingSpeed);
//     } else if (!isDeleting && typedKeyword.length === keyword.length) {
//       timer = setTimeout(() => setIsDeleting(true), pauseTime);
//     } else if (isDeleting && typedKeyword.length > 0) {
//       timer = setTimeout(() => {
//         setTypedKeyword(keyword.substring(0, typedKeyword.length - 1));
//       }, deletingSpeed);
//     } else if (isDeleting && typedKeyword.length === 0) {
//       setIsDeleting(false);
//       setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
//     }
//     return () => clearTimeout(timer);
//   }, [typedKeyword, isDeleting, currentTitleIndex]);

//   useEffect(() => {
//     setTypedKeyword('');
//     setIsDeleting(false);
//   }, [currentTitleIndex]);

//   const current = titles[currentTitleIndex];

//   return (
//     <div className="relative overflow-visible z-20 mt-12">
//       <div className="flex flex-col items-start justify-center mt-32 text-left gap-8 transition-opacity duration-1000 h-full max-w-3xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold text-white leading-snug mb-2">
//           {/* Special handling for the third title */}
//           {current.showTextAfter ? (
//             <>
//               <span className="text-purple-400">
//                 {typedKeyword}
//                 <span className="animate-pulse">|</span>
//               </span>
//               {typedKeyword.length === current.keyword.length && (
//                 <span className="text-white">{current.text}</span>
//               )}
//             </>
//           ) : (
//             <>
//               {current.text}
//               <span className="text-purple-400">
//                 {typedKeyword}
//                 <span className="animate-pulse">|</span>
//               </span>
//             </>
//           )}
//         </h1>
//         <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-6">
//           Voyex is your superapp for finding the right AI tools and workflows tailored to your use case. Describe your needs, and it helps you build a mini agency effortlessly.
//         </p>
//         <div className="flex gap-4 mt-2">
//           <button className="bg-[#C088FB] text-[#0A0A0B] px-6 py-3 rounded-full font-medium hover:scale-105 transition">
//             Start your AI Journey
//           </button>
//           <button className="bg-[#F4F4F4] text-[#0A0A0B] px-6 py-3 rounded-full font-medium hover:scale-105 transition">
//             Upload Product
//           </button>
//         </div>
//         {/* Background orbits with reduced scale and blur */}
//         <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter">
//           <CircularRings />
//           <StarsCanvas />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


'use client';
import React, { useEffect, useState } from 'react';
import "../../app/globals.css";
import StarsCanvas from '../common/StarBackground';
import CircularRings from '../Circular';

const titles = [
  {
    text: 'Your Google for AI\n ',
    keyword: 'Find exactly what you need',
    typewriter: true,
    showTextAfter: false,
  },
  {
    text: 'Find the right tools\n',
    keyword: 'that align with your goals',
    typewriter: true,
    showTextAfter: false,
  },
  {
    text: ' at your fingertips.',
    keyword: 'Your AI powered Agency',
    typewriter: true,
    showTextAfter: true,
  },
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedKeyword, setTypedKeyword] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!titles[currentTitleIndex].typewriter) return;

    const keyword = titles[currentTitleIndex].keyword;
    const typingSpeed = 90;
    const deletingSpeed = 80;
    const pauseTime = 1200;

    let timer;
    if (!isDeleting && typedKeyword.length < keyword.length) {
      timer = setTimeout(() => {
        setTypedKeyword(keyword.substring(0, typedKeyword.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedKeyword.length === keyword.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && typedKeyword.length > 0) {
      timer = setTimeout(() => {
        setTypedKeyword(keyword.substring(0, typedKeyword.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && typedKeyword.length === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [typedKeyword, isDeleting, currentTitleIndex]);

  useEffect(() => {
    setTypedKeyword('');
    setIsDeleting(false);
  }, [currentTitleIndex]);

  const current = titles[currentTitleIndex];

  return (
     <div className="relative overflow-visible z-20 w-full px-2">
  
      <div className="flex flex-col text-left gap-8 transition-opacity duration-1000 h-full mx-auto lg:w-[980px] xl:w-[1280px] md:w-[600px]">
      <h1 
  className="sm:text-[28.2px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    lineHeight: '1.2',
    minHeight: '2.4em',
  }}
>

          {current.showTextAfter ? (
            <>
              <span className="text-purple-400 block whitespace-nowrap">
                {typedKeyword}
                <span className="animate-pulse">|</span>
              </span>
              {typedKeyword.length === current.keyword.length && (
                <span className="text-white block">{current.text}</span>
              )}
            </>
          ) : (
            <>
              <span className="block whitespace-normal">{current.text}</span>
              <span className="text-purple-400 block whitespace-nowrap">
                {typedKeyword}
                <span className="animate-pulse">|</span>
              </span>
            </>
          )}
        </h1>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-2xl sm:text-base">
          Voyex helps you find the right AI tools for your usecases. Find AI tools with just a query. It simplifies finding, using and querying AI tools and create your own mini agency.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#C088FB] text-[#0A0A0B] lg:px-6 lg:py-3 md:px-5 md:py-2 sm:px-3.5 sm:py-2 rounded-full lg:font-medium font-base lg:text-lg  sm:text-sm md:text-base hover:scale-105 transition">
            Start your AI Journey
          </button>
          <button className="bg-[#F4F4F4] text-[#0A0A0B] lg:px-6 lg:py-3 md:px-5 md:py-2 sm:px-3.5 sm:py-2 rounded-full lg:font-medium font-base lg:text-lg sm:text-sm md:text-base hover:scale-105 transition">
            Upload Product
          </button>
        </div>
        {/* Background orbits with reduced scale and blur */}
        <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter">
            {/* <CircularRings /> */}
           <StarsCanvas />
           </div>
      </div>
    </div>
  );
};

export default Hero;