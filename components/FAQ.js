'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Voyex?",
      answer: "Voyex is an AI-driven platform that helps you discover and integrate AI tools into your workflow."
    },
    {
      question: "How can I list my AI tool on Voyex?",
      answer: "You can list your AI tool by partnering with us. We offer free listing opportunities for our first few partners."
    },
    {
      question: "What benefits do I get by partnering with Voyex?",
      answer: "By partnering with Voyex, your tool becomes a key part of our workflow recommendations, ensuring it reaches users who need it most."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support via email at support@voyex.com or through our website contact form."
    }
  ];

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className='md:mt-[-50px] sm:mt-[50px] flex flex-col justify-center items-center text-[#ffffff]'>
      <h1 className='font-bold lg:text-[54px] md:text-[48px] sm:text-[32px] text-center'>Frequently asked questions</h1>
      <div className="mt-[47px]">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b py-[30px] md:w-[675px] sm:w-auto border-white/20">
            <div
              className="flex justify-between items-center cursor-pointer md:text-xl sm:text-lg font-medium text-[#ffffff] hover:text-[#C088fb] transition-colors duration-300 sm:px-2 md:px-0"
              onClick={() => handleToggle(index)}
              tabIndex={0} // Make clickable with keyboard
              aria-expanded={openIndex === index ? "true" : "false"}
              aria-controls={`faq-answer-${index}`}
            >
              <div>{faq.question}</div>
              <Image
                src={openIndex === index ? '/Plus.svg' : '/Plus.svg'}
                alt={openIndex === index ? 'minus' : 'plus'}
                width={18.75}
                height={18.75}
                className="transition-transform duration-300 transform"
                style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
              />
            </div>
            <div
              id={`faq-answer-${index}`}
              className={`md:mt-4 sm:mt-5 sm:px-2 md:px-0 text-[#ffffff] overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
              aria-hidden={openIndex !== index}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <p className='mt-[47px] sm:hidden md:flex font-medium text-[18.44px] text-[#C088fb] text-center'>See More</p>
    </div>
  );
};

export default FAQ;
