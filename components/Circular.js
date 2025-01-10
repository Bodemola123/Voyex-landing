'use client'

// CircularRings.jsx

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CircularRings = () => {
  const canvasRef = useRef(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      setScreenSize(window.innerWidth);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call initially to set canvas size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Set defaults for mobile, can be adjusted for different screen sizes
    let ringCount = 2; // Default for mobile
    let ringSpacing = 70; // Default ring spacing
    let baseRadius = 130; // Default starting radius

    if (screenSize >= 768) { // For tablets and larger (md breakpoint)
      ringCount = 4; // 4 rings for tablets
      ringSpacing = 120; // Adjusted ring spacing
      baseRadius = 150; // Larger base radius
    }

    if (screenSize >= 1024) {
      ringCount = 4; // For larger screens (laptop view)
      ringSpacing = 150; // Further adjusted ring spacing
      baseRadius = 200; // Larger base radius for desktop
    }
    // Draw rings based on the current settings
    const drawRings = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;

      for (let i = 1; i <= ringCount; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, i * ringSpacing + baseRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawRings();
      requestAnimationFrame(animate);
    };

    animate();
  }, [screenSize]); // Re-run when screen size changes

  return (
    <div className="relative w-full h-full">
      {/* Circular Rings Canvas */}
      <canvas ref={canvasRef} style={{ display: "block", zIndex: -10 }} />

      {/* Animate Component (Images rotating) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden z-10">
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
    </div>
  );
};

export default CircularRings;
