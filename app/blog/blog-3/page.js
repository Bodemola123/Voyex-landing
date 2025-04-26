"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Final from "@/components/blog-page/Final";
import CTA from "@/components/blog-page/CTA";

const Blog3 = () => {
  return (
    // <div className="text-white min-h-screen -py-2 px-6 lg:px-20">
    //   {/* Header Section */}
    //   <Header />

    <div className="text-white min-h-screen">
    {/* Header Section */}
    <div className=" top-0 left-0 w-full z-50 ">
      <Header />
    </div>

    {/* Main Content */}
    <div className="pt-[72px] px-6 lg:px-20">

      <div className="max-w-5xl mx-auto">
        {/* Blog Card Image Section */}
        <div className="w-full h-[80vh] overflow-hidden mt-12 mb-12 lg:h-[80vh] md:h-[65vh] sm:h-[35vh]">
          <img
            src="/blog1.png"
            alt="Blog Card"
            className="w-full object-cover object-bottom"
            style={{ height: "150%", marginTop: "-20%" }}
          />
        </div>

        {/* Blog Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#131314] text-[#C088FB] text-xs font-semibold px-3 py-1 rounded-full">
                AI
              </span>
              <span className="bg-[#131314] text-[#C088FB] text-xs font-semibold px-3 py-1 rounded-full">
                Marketing
              </span>
            </div>
            <span className="text-gray-400 text-sm transform -translate-x-4">
              4 Mins Read
            </span>
          </div>
          <p
            className="text-[#F4F4F4] text-[16px] leading-[24px] font-semibold mb-2"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Published: 26 April, 2025
          </p>
          <h1
            className="font-bold text-[64px] leading-[100%] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "Aeonik TRIAL, sans-serif" }}
          >

           The Real Benefits of AI Tools (And How to Start Using Them Today)

          </h1>
        </div>

        {/* Blog Content */}
        <div className="space-y-14">
          {/* Title Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Title:
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
               How AI Tools Can Boost Your Productivity — Even If You're Not a Techie
            </p>
          </div>

          {/* Intro Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Intro:
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
            AI isn&apos;t just for developers or data scientists anymore. Today, AI tools are helping entrepreneurs write better copy,<span className="block mt-2"></span> designers brainstorm ideas, and marketers automate workflows. And the best part? You don’t need to be technical to use<span className="block mt-2"></span> them.

            </p>
          </div>

          {/* What Is Voyex Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              What Can AI Help You Do?
            </h2>
            <ul className="list-disc list-inside text-[18px] space-y-6 leading-[100%] font-normal text-[#FFFFFF]">
    <li>Generate content (blog posts, emails, product descriptions)</li>
    <li>Create videos, voiceovers, and visuals in minutes</li>
    <li>Automate repetitive tasks like scheduling, research, and summaries</li>
    <li>Analyze data or organize large documents</li>
  </ul>
          </div>

                    {/* Why This Matters Section */}
                    <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Why Most People Struggle to Start
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              The problem isn&apos;t the tools — it&apos;s figuring out which one to use, and how. That&apos;s where platforms like Voyex come in.
            </p>
          </div>

          {/* Step-by-Step Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
             How to Start Using AI Today
            </h2>
            <ol className="list-decimal list-inside space-y-6 text-[18px] leading-[100%] font-normal text-[#FFFFFF]">
              <li>
                <span className="font-semibold">Identify a task you do often</span>  (e.g., writing, planning, analyzing)
              </li>
              <li>
                <span className="font-semibold">Visit Voyex </span> and enter your query
              </li>
              <li>
                <span className="font-semibold">Follow the suggestions — </span>tools, prompts, and templates tailored to your task
              </li>
              <li>
                <span className="font-semibold">Test and explore — </span>you&apos;ll be surprised how much time you save
              </li>
            </ol>
          </div>

          {/* Closing Line Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
             Takeaway:

            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
            AI tools are not a replacement for your work — they’re a force multiplier. And the sooner you start, the sooner you’ll see the<span className="block mt-2"></span> difference.
            </p>
          </div>
        </div>
      </div>

    
{/* CTA Section */}
<div className="sm:mt-[700px] lg:mt-[600px] relative z-10">
        <CTA />
      </div>

      {/* Final Section */}
      <div className="sm:mt-[-400px] lg:mt-[20px]">
  <Final />
</div>
    </div>
    </div>
  );
};

export default Blog3;
