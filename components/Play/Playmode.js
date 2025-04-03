'use client';
// import React, { useRef } from 'react';
// import '../././../app/globals.css';

// const Playmode = () => {
//   return (
//     <div className="relative z-50 flex flex-col justify-center items-center h-screen gap-4 ">
//       {/* Title */}
//       <div className="text-center text-white font-bold text-4xl md:text-5xl mt-40">
//         How Voyex Works
//       </div>

//       {/* Video Container */}
//       <div className="w-full max-w-4xl flex-grow flex items-center">
//         <div className="relative w-full aspect-video">
//           <iframe
//             src="https://www.youtube.com/embed/c0m6yaGlZh4?si=NjP4Fmf-ws2e3i4x&autoplay=1&loop=1&playlist=c0m6yaGlZh4&cc_load_policy=1&mute=1"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//             className="absolute inset-0 w-full h-full rounded-lg border border-[rgb(49,49,49)] border-opacity-100"
//             style={{ backgroundColor: "black" }}
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Playmode;

// filepath: c:\Users\nisar\Voyex-landing\components\Play\Playmode.js
import React, { useEffect, useState } from 'react';
import '../././../app/globals.css';

const Playmode = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  return (
    <div className="relative z-50 flex flex-col justify-center items-center h-screen gap-4 ">
      {/* Title */}
      <div className="text-center text-white font-bold text-4xl md:text-5xl mt-40">
        How Voyex Works
      </div>

      {/* Video Container */}
      <div className="w-full max-w-4xl flex-grow flex items-center">
        <div className="relative w-full aspect-video">
          {isClient && (
            <iframe
              src="https://www.youtube.com/embed/c0m6yaGlZh4?si=NjP4Fmf-ws2e3i4x&autoplay=1&loop=1&playlist=c0m6yaGlZh4&cc_load_policy=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg border border-[rgb(49,49,49)] border-opacity-100"
              style={{ backgroundColor: "black" }}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playmode;