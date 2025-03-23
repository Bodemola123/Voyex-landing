'use client';
import React, { useEffect, useRef, useState } from "react";

const CircularRings = () => {
  const canvasRef = useRef(null);
  const [screenSize, setScreenSize] = useState(0);
  const images = [
    "/azure.svg",
    "/chatgpt.svg",
    "/claude.svg",
    "/copyai.svg",
    "/figma.svg",
    "/google.svg",
    "/microsoft.svg",
    "/spotify.svg",
    "/pi.svg",
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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

    let ringCount = 2;
    let ringSpacing = 110;
    let baseRadius = 120;

    if (screenSize >= 768) {
      ringCount = 4;
      ringSpacing = 120;
      baseRadius = 150;
    }

    if (screenSize >= 1024) {
      ringCount = 4;
      ringSpacing = 150;
      baseRadius = 196;
    }

    const items = images.map((src, index) => {
      const ringIndex = Math.floor(Math.random() * ringCount) + 1;
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
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} style={{ display: "block", zIndex: -10 }} />
    </div>
  );
};

export default CircularRings;
