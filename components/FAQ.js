'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How do I access Voyex?",
      answer: "You can access Voyex through the app. Start typing your query, explore the templates, or browse all the tools in our marketplace. You can even make a few searches without signing in."
    },
    {
      question: "What all can I search on Voyex?",
      answer: "You can possibly search about any usecase that you want help with, it can be “I want to do marketing for a product”, “I want to create content to be posted on my social media”, “I want to build a website for my new launch."
    },
    {
      question: "How does Voyex know about the specific needs?",
      answer: "Our model asks relevant questions after you enter your query to refine the results. We also consider your user profile to provide personalized tool suggestions."
    },
    {
      question: "Is my Data safe with Voyex?",
      answer: "Yes, your data is completely safe as we do not sell or showcase any personal info of our users to anyone."
    },
    {
      question:"How can I create workflow and access the tools?",
      answer: "You can currently access workflow in the chatbot and even access the tools by clicking on the link and being redirected. We are working on building automated workflows and also building UI for some tools."
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
    <div className='lg:-mt-[200px] md:-mt-[100px] sm:mt-[-80px] flex flex-col justify-center items-center text-[#ffffff]'>
      <h1 className="text-white lg:text-[54px] md:text-[38px] sm:text-[32px] font-bold leading-tight text-center">
        Frequently asked Questions
      </h1>
      <div className="mt-[47px]">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b py-[30px] md:w-[675px] sm:w-auto border-white/20">
            <div
              className="flex justify-between items-center cursor-pointer md:text-xl sm:text-lg font-medium text-[#ffffff] hover:text-[#C088fb] transition-colors duration-300 sm:px-4 md:px-0"
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
              className={`md:mt-4 sm:mt-5 sm:px-4 md:px-0 text-[#ffffff] overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
              aria-hidden={openIndex !== index}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <p className='mt-[47px] sm:hidden font-medium text-[18.44px] text-[#C088fb] text-center'>See More</p>
    </div>
  );
};

export default FAQ;
