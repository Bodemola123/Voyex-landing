'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const FAQ = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Array of questions and answers
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

  // Function to toggle the answer for the clicked question
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current open answer if clicked again
    } else {
      setOpenIndex(index); // Open the clicked answer
    }
  };

  return (
    <div className='mt-[-100px] flex flex-col px-[262px] justify-center items-center text-[#ffffff]' >
      <h1 className='font-bold text-[54px] text-center'>Frequently asked questions</h1>
    <div className="mt-[47px]">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b py-[30px] w-[675px] border-white/20">
          <div
            className="flex justify-between cursor-pointer text-xl font-medium text-[#ffffff]"
            onClick={() => handleToggle(index)}
          >
            <div>{faq.question}</div>
            <Image src={'/Plus.svg'} alt='plus' width={18.75} height={18.75}/>
          </div>
          {openIndex === index && (
            <div className="mt-4 text-[#ffffff]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    <p className='mt-[47px] font-medium text-[18.44px] text-[#C088fb] text-center'>See More</p>
    </div>
  );
};

export default FAQ;
