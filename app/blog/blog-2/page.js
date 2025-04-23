"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Final from "@/components/blog-page/Final";
import CTA from "@/components/blog-page/CTA";

const Blog2 = () => {
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
        <div className="w-full h-[80vh] overflow-hidden mt-12 mb-12">
          <img
            src="/blogcard.png"
            alt="Blog Card"
            className="w-full object-cover object-bottom"
            style={{ height: "150%", marginTop: "-25%" }}
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
            Published: 27 February, 2025
          </p>
          <h1
            className="font-bold text-[64px] leading-[100%] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "Aeonik TRIAL, sans-serif" }}
          >
            Behind the Scenes — How the Voyex Query Engine Works
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
               How the Voyex Query Engine Understands You (And Finds the Right AI Tools)
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
               One of the most powerful features of Voyex is its Query Engine — a smart system that understands what you want to do,<span className="block mt-2"></span> then guides you to the best tools to get it done. But how does it actually work?
            </p>
          </div>

          {/* What Is Voyex Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
             What Is the Query Engine?
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
             It’s not a search bar. It’s a smart assistant that interprets your intent and helps clarify your goals through guided follow-up<span className="block mt-2"></span> questions.
            </p>
          </div>

          {/* Step-by-Step Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
             Step-by-Step: How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-6 text-[18px] leading-[100%] font-normal text-[#FFFFFF]">
              <li>
                <span className="font-semibold">You Enter a Query: </span>  For example, “I want to market my product.”
              </li>
              <li>
                <span className="font-semibold">Voyex Asks Smart Questions: </span>  What kind of product? What marketing channels? Any visuals needed?
              </li>
              <li>
                <span className="font-semibold">We Narrow the Context: </span> Based on your answers, we understand the use case more clearly.
              </li>
              <li>
                <span className="font-semibold">We Recommend Tools: </span> From video generators to ad copywriters, we match the right tools to your exact need.
              </li>
            </ol>
          </div>

          {/* Why This Matters Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
             Why This Matters
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              Most platforms throw a list of tools at you and hope something sticks. Voyex uses intent-driven matching, so your<span className="block mt-2"></span> recommendations are specific, useful, and directly applicable.
            </p>
          </div>

          {/* Closing Line Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
             Closing Line:

            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              The Query Engine is your shortcut to using AI meaningfully — with less trial-and-error, and more actual output.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-[600px]">
          <CTA />
        </div>

      {/* Final Section */}
      <div className="mt-0">
  <Final />
</div>
    </div>
    </div>
  );
};

export default Blog2;
