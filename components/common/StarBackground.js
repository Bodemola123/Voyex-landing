"use client";

import React, { useRef, useEffect } from "react";

const generateStars = (count, radius) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    stars.push({ x, y, z });
  }
  return stars;
};

const StarBackground = () => {
  const canvasRef = useRef();
  const stars = useRef(generateStars(250, 1.2));

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let rotationX = 0;
    let rotationY = 0;

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) / 3;

      stars.current.forEach((star) => {
        const { x, y, z } = star;

        // Apply rotation
        const rotatedX =
          x * Math.cos(rotationY) - z * Math.sin(rotationY);
        const rotatedZ =
          x * Math.sin(rotationY) + z * Math.cos(rotationY);

        const rotatedY =
          y * Math.cos(rotationX) - rotatedZ * Math.sin(rotationX);
        const finalZ =
          y * Math.sin(rotationX) + rotatedZ * Math.cos(rotationX);

        const perspective = scale / (scale - finalZ);
        const screenX = centerX + rotatedX * perspective * scale;
        const screenY = centerY + rotatedY * perspective * scale;

        // Draw the star
        context.beginPath();
        context.arc(screenX, screenY, 0.8, 0, 2 * Math.PI);
        context.fillStyle = "#464645";
        context.fill();
      });

      rotationX += 0.001;
      rotationY += 0.001;
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0"
    />
  );
};

export default StarBackground;
