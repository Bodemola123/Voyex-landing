"use client";
import React from "react";
import "../../app/globals.css";

const Sponsorships = () => {
  return (
    <section className="sponsorship-container relative flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-16 max-w-7xl mx-auto mt-[-150px] mb-[150px] overflow-hidden">
      
      {/* Left Side - Heading */}
      <h2 className="relative font-bold text-4xl uppercase md:text-6xl tracking-tight leading-tight md:w-2/5 text-neon hover:scale-110">
        Sponsorships & Partnerships
      </h2>

      {/* Right Side - Description */}
      <p className="relative text-lg md:text-xl text-white md:w-2/4 text-center leading-relaxed opacity-90 hover:scale-110">
        Voyex is backed by industry leaders. Explore our sponsors and partners, 
        and see how we’re making AI accessible to everyone.
      </p>

    </section>
  );
};

export default Sponsorships;
