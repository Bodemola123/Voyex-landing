"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineLightBulb } from "react-icons/hi2";

const Whatweoffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Prevents multiple triggers
      mirror: false, // Avoids flickering on scroll
      offset: 100, // Ensures animations start earlier on scroll
    });
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center md:gap-[76.5px] sm:gap-[46.5px] sm:mt-72 md:mt-0">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center md:gap-[14px] sm:gap-2.5" data-aos="fade-up">
        <div className="rounded-[23px] sm:py-3 sm:px-3 md:py-2.5 md:px-9 bg-[#131314] text-[#f4f4f4]" data-aos="fade-in">
          <p>What We Offer</p>
        </div>
        <p className="font-bold lg:text-6xl md:text-5xl sm:text-2xl sm:px-2 md:px-0 text-center text-[#f4f4f4]">
          AI-Powered Tools to Simplify Your Workflow
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col justify-center items-center lg:gap-4 md:gap-[10.28px] sm:gap-[10.28px]" data-aos="fade-up">
        {/* Row 1 */}
        <div className="flex md:flex-row sm:flex-col justify-center items-center lg:gap-4 md:gap-[10.28px] sm:gap-[10.28px]" data-aos="fade-up">
          {/* Card 1 */}
          <Card title="AI Query Engine" description="Ask a question. We&apos;ll understand your intent and suggest the best tools — tailored to your specific need." />
          {/* Card 2 */}
          <Card title=" Prompt Suggestions " description="For every tool we recommend, we also give you the right way to use it — with clear, actionable prompts." />
        </div>

        {/* Row 2 */}
        <div className="flex md:flex-row sm:flex-col justify-center items-center lg:gap-4 md:gap-[10.28px] sm:gap-[10.28px]" data-aos="fade-up">
          {/* Card 3 */}
          <Card title="Templates" description="Use pre-built templates to kickstart your workflow. Whether it&apos;s content marketing, brainstorming, or design." />
          {/* Card 4 */}
          <Card title="Galacticmart" description="Explore the entire Voyex tool ecosystem — filter by category, discover new solutions, and build your personal toolkit." />
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, description }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px] sm:gap-[15.43px] transition-all duration-1000 ease-in-out border-[#ffffff20] lg:p-10 md:p-[25.71px] sm:p-[25.71px] lg:border md:border-[0.64px] sm:border-[0.64px] lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] sm:w-[290px] md:w-auto"
      data-aos="fade-in"
    >
      {/* Icon */}
      <div className="p-2.5 lg:w-[52px] sm:w-[42px] flex items-center justify-center lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] bg-[#ffffff]">
        <HiOutlineLightBulb className="lg:text-[24px] sm:text-[18px] text-[#0d0d0d]" />
      </div>
  
      {/* Title */}
      <h1 className="font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px] sm:leading-[24.34px]transition-colors duration-1000 ease-in-out group-hover:text-[#0d0d0d]">
        {title}
      </h1>

      {/* Description */}
      <span className="flex flex-col lg:w-[319px] md:w-[294.77px] sm:w-auto md:px-0 md:text-[14.79px] sm:text-[14.79px] text-center justify-center items-center font-normal lg:text-base text-[#ffffff] transition-colors duration-1000 ease-in-out group-hover:text-[#0d0d0d]">
        <p>{description}</p>
      </span>
    </div>
  );
};

export default Whatweoffer;
