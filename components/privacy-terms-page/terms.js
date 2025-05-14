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
       
        {/* Dates & Title */}
        <p className="text-sm text-[#F4F4F4] -mt-2 mb-2">Published: 18 April, 2025</p>
        <h1 className="text-5xl font-extrabold mt-2 mb-2">Terms & Conditions</h1>
        <p className="text-md text-[#F4F4F4] mb-6 mt-2">
          Effective: April 18, 2025 (previous version)
        </p>

        {/* Intro Paragraph */}
        <p className="max-w-[600px] text-gray-200 text-center mt-20  text-lg">
          Welcome to Voyex. By using our website or services, you agree to these Terms & Conditions.
        </p>
      </div>

       {/* Terms Content */}
       <div className="max-w-[760px] mx-auto px-10 py-12 space-y-10 -mt-10 text-gray-200">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-left">1. Service Overview</h2>
          <p>
            Voyex is a discovery and recommendation platform for AI tools. Users input their goals or queries, and we suggest tools that may help achieve those goals.
            <br />
            <br />
            We <strong><em>do not host, own, or operate</em></strong> the tools listed on our platform.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-left">2. No Liability for Third-Party Tools</h2>
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
          <h2 className="text-3xl font-bold text-left">3. Content Disclaimer</h2>
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
          <h2 className="text-3xl font-bold text-left">4. Use of Platform</h2>
          <p>By using Voyex, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Misuse the platform for harmful, illegal, or abusive purposes</li>
            <li>Attempt to reverse–engineer or clone the service</li>
            <li>Hold Voyex liable for any loss incurred from using external tools</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-left">5. Changes to the Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the platform after changes means you accept the revised terms.
          </p>
        </div>
      </div>
      </div>
  );
};

export default Terms;
