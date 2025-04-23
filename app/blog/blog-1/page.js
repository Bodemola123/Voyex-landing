"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Final from "@/components/blog-page/Final";
import CTA from "@/components/about-us-page/CTA";

const Blog1 = () => {
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
            Published: 27 February, 2025
          </p>
          <h1
            className="font-bold text-[64px] leading-[100%] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "Aeonik TRIAL, sans-serif" }}
          >
            How Voyex Helps You Bring AI into Everyday Workflows
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
              Title
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              Bringing AI into Your Daily Workflow — Made Simple with Voyex
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
              AI is no longer reserved for tech teams or enterprise labs. From
              solopreneurs to creative teams, more people are looking for{" "}
              <span className="block mt-2">
                ways to bring AI into their everyday tasks — whether it’s
                writing, marketing, research, or productivity.
              </span>{" "}
              <span className="block mt-2">That’s exactly where Voyex comes in.</span>
            </p>
          </div>

          {/* What Is Voyex Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              What Is Voyex?
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              Voyex is an AI tool discovery platform that helps users find the
              right tools for the right job. Whether you're launching a{" "}
              <span className="block mt-2">
                product, building content, or automating a process — Voyex
                guides you from idea to action.
              </span>
            </p>
          </div>

          {/* Step-by-Step Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              How Voyex Enhances Your Day-to-Day Work
            </h2>
            <ol className="list-disc list-inside space-y-6 text-[18px] leading-[100%] font-normal text-[#FFFFFF]">
              <li>
                <span className="font-semibold">Instant Discovery:</span> Just
                ask what you need to do — like "write ad copy" or "build a
                landing page" — and Voyex{" "}
                <span className="block mt-2">
                  recommends tools made for the task.
                </span>
              </li>
              <li>
                <span className="font-semibold">Prompt Suggestions:</span> Get
                tailored prompts that work out of the box, so you don’t waste
                time figuring out how{" "}
                <span className="block mt-2">to talk to AI.</span>
              </li>
              <li>
                <span className="font-semibold">Pre-Built Templates:</span>{" "}
                Browse templates for common tasks like social media planning,
                product research, and{" "}
                <span className="block mt-2"> more — all powered by AI.</span>
              </li>
            </ol>
          </div>

          {/* Why This Matters Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Why It Matters
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              You no longer have to guess which tools to use or how to use them.
              Voyex shortens the distance between your goals and{" "}
              <span className="block mt-2">
                the AI tools that can help achieve them.
              </span>
            </p>
          </div>

          {/* Closing Line Section */}
          <div>
            <h2
              className="text-[32px] leading-[100%] tracking-[-0.02em] font-bold mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Final Thought:
            </h2>
            <p
              className="text-[18px] leading-[100%] font-normal text-[#FFFFFF]"
              style={{ fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}
            >
              Voyex brings AI into your workflow — not as an extra layer, but as
              a natural extension of how you already work. And it’s just{" "}
              <span className="block mt-2">getting started.</span>
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

export default Blog1;
