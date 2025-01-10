'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CircularRings = () => {
  const canvasRef = useRef(null);
  const [screenSize, setScreenSize] = useState(0); // Start with a default value (0 or another placeholder)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run this block in the client-side environment
      setScreenSize(window.innerWidth); // Set the actual screen width
    }
  }, []); // Empty dependency array ensures this only runs once on mount

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
    if (screenSize === 0) return; // Don't run the drawing logic if screenSize isn't set yet

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Set defaults for mobile, can be adjusted for different screen sizes
    let ringCount = 2; // Default for mobile
    let ringSpacing = 110; // Default ring spacing
    let baseRadius = 120; // Default starting radius

    if (screenSize >= 768) { // For tablets and larger (md breakpoint)
      ringCount = 4; // 2 rings for tablets
      ringSpacing = 120; // Adjusted ring spacing
      baseRadius = 150; // Larger base radius
    }

    if (screenSize >= 1024) {
      ringCount = 4;
      ringSpacing = 150;
      baseRadius = 200;
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
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
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
          <div className="absolute w-full h-full animate-3 -z-10">
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