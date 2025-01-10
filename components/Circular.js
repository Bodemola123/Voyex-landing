'use client';

import React, { useEffect, useRef, useState } from "react";

const CircularRings = () => {
  const canvasRef = useRef(null);
  const [screenSize, setScreenSize] = useState(0); // Default to 0 until client-side
  const [images, setImages] = useState([]);
  const [angle, setAngle] = useState(0);

  // Speed for each image's rotation
  const imageSpeeds = [0.002, 0.004, 0.006]; // Different speeds for images

  // Ensure the window reference is available only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth); // Now this will only run on the client
    }
  }, []); // Empty dependency array ensures this runs only once after mount

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
    // Preload images (example)
    const loadImages = () => {
      const img1 = new Image();
      img1.src = "/gemini.png"; // Replace with actual image paths
      const img2 = new Image();
      img2.src = "/synthesia.png";
      const img3 = new Image();
      img3.src = "/chatgpt.svg";
      // Add more images as needed

      img1.onload = () => setImages((prevImages) => [...prevImages, img1]);
      img2.onload = () => setImages((prevImages) => [...prevImages, img2]);
      img3.onload = () => setImages((prevImages) => [...prevImages, img3]);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return; // Skip drawing if images are not loaded yet

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Set defaults for mobile, can be adjusted for different screen sizes
    let ringCount = 2; // Default for mobile
    let ringSpacing = 110; // Default ring spacing
    let baseRadius = 120; // Default starting radius

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

    // Draw rings and images around them
    const drawRings = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;

      for (let i = 1; i <= ringCount; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, i * ringSpacing + baseRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Only one image per ring
        if (images.length > 0 && images[i - 1]) { // Check if image exists
          const ringRadius = i * ringSpacing + baseRadius;
          const image = images[i - 1]; // One image for each ring

          // Apply different rotation speeds to images
          const x = centerX + Math.cos(angle * imageSpeeds[i - 1]) * ringRadius;
          const y = centerY + Math.sin(angle * imageSpeeds[i - 1]) * ringRadius;

          const imageSize = 24; // Set image size to 24x24px
          ctx.drawImage(image, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setAngle(prevAngle => prevAngle + 0.002); // Slow rotation speed (500% slower)
      drawRings();
      requestAnimationFrame(animate);
    };

    animate();
  }, [screenSize, images, angle]); // Re-run when screen size or images change

  return <canvas ref={canvasRef} style={{ display: "block", zIndex: -10 }} />;
};

export default CircularRings;
