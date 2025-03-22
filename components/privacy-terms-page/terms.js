import React from "react";
import Header from "../../components/Header/Header";

const Terms = () => {
  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

     {/* Centered Content */}
<div className="flex-grow flex items-center justify-center">
  <div className="max-w-3xl w-full px-6 text-center">
    
    {/* Language Selector (Now Above the Published Date) */}
    <div className="flex justify-center mb-2">
      <button className="bg-[#343434] text-white px-6 py-2 rounded-full text-sm flex items-center justify-center gap-2 shadow-md border border-[#3c3c3c]">
        Select Language <span className="text-[#AAB2C6]">▾</span>
      </button>
    </div>

    {/* Published Date */}
    <p className="text-400 text-sm mt-6">Published: 27 February, 2025</p>

    {/* Title */}
    <h2 className="text-5xl font-bold tracking-wide mt-4 mb-4">Terms of Use</h2>

    {/* Effective Date */}
    <p className="text-400 text-sm">Effective: December 11, 2024 (previous version)</p>

          {/* Terms Content */}
          <div className="mt-6 text-gray-300 leading-relaxed text-left text-lg">
            <p>Thank you for using OpenAI!</p>
            <p className="mt-4">
              These Terms of Use apply to your use of ChatGPT, DALL-E, and OpenAI’s other services for individuals,
              along with any associated software applications and websites (all together, “Services”). These Terms form
              an agreement between you and OpenAI, L.L.C., a Delaware company, and they include our
              <a href="#" className="text-blue-400 hover:underline"> Service Terms </a>
              and important provisions for resolving disputes through arbitration. By using our Services, you agree to
              these Terms.
            </p>
            <p className="mt-4">
              If you reside in the European Economic Area, Switzerland, or the UK, your use of the Services is governed by
              <a href="#" className="text-blue-400 hover:underline"> these terms </a>.
            </p>
            <p className="mt-4">
              Our
              <a href="#" className="text-blue-400 hover:underline"> Business Terms </a>
              govern use of ChatGPT Enterprise, our APIs, and our other services for businesses and developers.
            </p>
            <p className="mt-4">
              Our
              <a href="/privacy" className="text-blue-400 hover:underline"> Privacy Policy </a>
              explains how we collect and use personal information. Although it does not form part of these Terms, it is an important document that you should read.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;