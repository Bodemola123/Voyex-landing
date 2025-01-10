import Image from "next/image";
import React from "react";

function Animate() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-10">
      {/* Restrict the rotation area */}
      <div className="relative w-[80vw] h-[80vw]">
        {/* ChatGPT Image */}
        <div className="absolute w-full h-full animate-1">
          <Image
            className="absolute right-[20%] top-[20%] bg-contain"
            src="/chatgpt.svg"
            alt="chatgpt image"
            width={20}
            height={20}
          />
        </div>

        {/* Gemini Image */}
        <div className="absolute w-full h-full animate-2">
          <Image
            className="absolute left-[30%] top-[50%] bg-contain"
            src="/gemini.png"
            alt="gemini image"
            width={24}
            height={24}
          />
        </div>

        {/* Synthesia Image */}
        <div className="absolute w-full h-full animate-3">
          <Image
            className="absolute right-[10%] bottom-[10%] bg-contain"
            src="/synthesia.png"
            alt="synthesia image"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
}

export default Animate;
