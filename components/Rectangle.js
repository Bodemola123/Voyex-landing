'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Rectangle = () => {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);
  
  return (
    <div 
      className="relative md:top-[-40px] sm:top-[-160px] opacity-[0.37] border-b-0 -z-20 flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #200D42 36.21%, #4F21A1 68.68%, #A46EDB 86.54%)',
        height: '450px',
        width: '100%', 
      }}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      {/* Hover effect with a subtle opacity change */}
      <div className="w-full h-full bg-cover bg-no-repeat bg-center hover:opacity-75 transition-opacity ease-in-out">
        {/* Parallax effect using a background-position shift */}
        <div className="absolute w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/your-image.jpg)',
            backgroundPosition: 'center center',
            transform: 'scale(1.1)',  // Slightly zoom in the background
          }}
        ></div>
      </div>
    </div>
  )
}

export default Rectangle;
