'use client';
import { u } from "maath/dist/misc-19a3ec46.esm";
import React, { useEffect, useRef, useState } from "react";

const CircularRings = () => {
  const canvasRef = useRef(null);
  const [screenSize, setScreenSize] = useState(0);
  const images = [
     "/jupp.png",
     "/earr.png",
     "/satt.png",
     "/marr.png",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      setScreenSize(window.innerWidth);
      canvas.width = window.innerWidth * 2 ;
      canvas.height = window.innerHeight * 2;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // let ringCount = 2;
    // let ringSpacing = 110;
    // let baseRadius = 120;
    const ringCount = images.length;
    let ringSpacing = 80;
    let baseRadius = 90;

    if (screenSize >= 768) {  
      ringSpacing = 100;      
      baseRadius = 120;       
    }

    if (screenSize >= 1024) {
      // ringCount = 4;
      ringSpacing = 110;
      baseRadius = 140;
    }

    if (screenSize < 768) {
      ringSpacing = 60;
      baseRadius = 70;
    }

    const items = images.map((src, index) => {
      // const ringIndex = Math.floor(Math.random() * ringCount) + 1;
      const ringIndex = index + 1;
      const angle = Math.random() * Math.PI * 2;
      const radius = ringIndex * ringSpacing + baseRadius;
      const speed = 0.005 + Math.random() * 0.001;

      return { src, angle, radius, speed };
    });

    const loadedImages = new Map();

    const drawRings = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= ringCount; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, i * ringSpacing + baseRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawItems = () => {
      items.forEach((item) => {
        const x = centerX + Math.cos(item.angle) * item.radius;
        const y = centerY + Math.sin(item.angle) * item.radius;

        if (!loadedImages.has(item.src)) {
          const img = new window.Image();
          img.src = item.src;
          img.onload = () => loadedImages.set(item.src, img);
        } else {
          const img = loadedImages.get(item.src);
          ctx.drawImage(img, x - 15, y - 15, 30, 30); // Adjust size here
        }

        item.angle += item.speed;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawRings();
      drawItems();
      requestAnimationFrame(animate);
    };

    animate();
  }, [screenSize]);

  return (  
    <div className="absolute inset-0 w-[200vw] h-[200vh] left-[-50vw] top-[-50vh] overflow-visible -z-10">
  <canvas ref={canvasRef} className="block w-full h-full" />
</div>
);
};

export default CircularRings;