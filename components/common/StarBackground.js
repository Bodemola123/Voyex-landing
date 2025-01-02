"use client";

import React, { useRef, useEffect } from "react";

const generateStars = (count, width, height) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    // Spread stars randomly across the screen
    const x = Math.random() * width - width / 2;  // Random X position within screen width
    const y = Math.random() * height - height / 2;  // Random Y position within screen height
    const z = Math.random() * 1000 - 500;  // Adjust depth for visibility

    // Randomly choose rotation direction (1 for clockwise, -1 for counterclockwise)
    const spinDirection = Math.random() > 0.5 ? 1 : -1; 

    stars.push({ x, y, z, spinDirection });
  }
  return stars;
};

const StarBackground = () => {
  const canvasRef = useRef();
  const stars = useRef([]);
  const rotationX = useRef(0);
  const rotationY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    stars.current = generateStars(250, innerWidth, innerHeight);

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) / 2;  // Adjust scale to make stars more visible

      stars.current.forEach((star) => {
        const { x, y, z, spinDirection } = star;

        // Apply rotation around the Y and X axis (spin effect)
        const rotatedX = x * Math.cos(rotationY.current) - z * Math.sin(rotationY.current);
        const rotatedZ = x * Math.sin(rotationY.current) + z * Math.cos(rotationY.current);

        const rotatedY = y * Math.cos(rotationX.current) - rotatedZ * Math.sin(rotationX.current);
        const finalZ = y * Math.sin(rotationX.current) + rotatedZ * Math.cos(rotationX.current);

        // Perspective projection
        const perspective = scale / (scale + finalZ); // Use positive values to bring stars into view
        const screenX = centerX + rotatedX * perspective;
        const screenY = centerY + rotatedY * perspective;

        // Draw the star with reduced size (radius of 0.75 instead of 1)
        context.beginPath();
        context.arc(screenX, screenY, 0.75, 0, 2 * Math.PI);  // Reduced size to 0.75
        context.fillStyle = "#FFFFFF";  // White stars
        context.fill();

        // Apply random spin direction for each star
        rotationY.current += spinDirection * 0.00015;  // Slower speed of rotation
      });

      rotationX.current += 0.00015;  // Slower speed of X-axis rotation
      // rotationY.current += 0.001;  // Rotation handled by individual stars

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.current = generateStars(250, canvas.width, canvas.height);
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
