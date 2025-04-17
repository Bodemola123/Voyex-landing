"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header/Header";

const Terms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="min-h-screen text-white font-sans bg-cover bg-center">
      <Header />

      {/* Top Info Section */}
      <div className="flex flex-col items-center justify-center mt-18 text-center px-4 pt-12 pb-16">
        {/* Language Selector */}
        <div ref={dropdownRef} className="mb-6">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="bg-[#313131] text-white text-sm rounded-full px-4 py-2  flex items-center gap-2"
  >
    {selectedLanguage}
    <svg
      className="w-3 h-3 text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.174l3.71-3.944a.75.75 0 111.08 1.04l-4.25 4.52a.75.75 0 01-1.08 0l-4.25-4.52a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </button>
          {isOpen && (
            <div className="absolute mt-2 bg-white text-black rounded-md shadow-md">
              <div
                onClick={() => {
                  setSelectedLanguage("English");
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                English
              </div>
              <div
                onClick={() => {
                  setSelectedLanguage("Hindi");
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Hindi
              </div>
            </div>
          )}
        </div>

        {/* Dates & Title */}
        <p className="text-sm text-[#F4F4F4] -mt-2 mb-2">Published: 27 February, 2025</p>
        <h1 className="text-6xl font-extrabold mt-2 mb-2">Terms of Use</h1>
        <p className="text-md text-[#F4F4F4] mb-6 mt-2">
          Effective: December 11, 2024 (previous version)
        </p>

        {/* Intro Paragraph */}
        <p className="max-w-[600px] text-gray-200 text-left mt-20 mr-[84px] text-lg">
          Welcome to Voyex. By using our website or services, you agree to these Terms & Conditions.
        </p>
      </div>

       {/* Terms Content */}
       <div className="max-w-[760px] mx-auto px-10 py-12 space-y-10 -mt-10 text-gray-200">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold ml-4">1. Information we collect</h2>
          <p>
            Voyex is a discovery and recommendation platform for AI tools. Users input their goals or queries, and we suggest tools that may help achieve those goals.
            <br />
            We <strong><em>do not host, own, or operate</em></strong> the tools listed on our platform.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold ml-4">2. No Liability for Third-Party Tools</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Voyex <strong><em>does not guarantee</em></strong> the accuracy, reliability, or safety of any tool recommended on the platform.
            </li>
            <li>
              We are not responsible for any <strong><em>data loss, privacy issues, inappropriate results, or technical errors</em></strong> caused by third-party services.
            </li>
            <li>
              Users must <strong><em>review and agree</em></strong> to the terms of each tool before using it.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold ml-4">3. Content Disclaimer</h2>
          <p>
            Prompt suggestions, templates, and workflows are for informational purposes only. The final output and its consequences depend on the tools being used.
          </p>
          <p>Voyex does not take responsibility for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Generated content from third–party AI tools</li>
            <li>Business decisions made based on tool suggestions</li>
            <li>Any legal, ethical, or financial outcome of using a recommended service</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold ml-4">4. Use of Platform</h2>
          <p>By using Voyex, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Misuse the platform for harmful, illegal, or abusive purposes</li>
            <li>Attempt to reverse–engineer or clone the service</li>
            <li>Hold Voyex liable for any loss incurred from using external tools</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold ml-4">5. Changes to the Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the platform after changes means you accept the revised terms.
          </p>
        </div>
      </div>
      </div>
  );
};

export default Terms;
