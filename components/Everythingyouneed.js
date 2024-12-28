'use client';
import React, { useEffect } from 'react';
import '../app/globals.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Everythingyouneed = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:gap-16 md:gap-[43px] sm:gap-[43px] justify-center items-center">
      {/* Title Section */}
      <div className="flex flex-col lg:gap-5 md:gap-[13px] sm:gap-[13px] mt-44 text-center">
        <h1
          className="text-[#ffffff] lg:text-[54px] md:text-[38.03px] sm:text-[32px] lg:leading-[60px] md:leading-[38.57px] sm:leading-[38.57px] font-bold"
          data-aos="fade-up"
        >
          Everything you need
        </h1>
        <span className="text-[#ffffff] text-center lg:w-[1044px] md:w-[729px] sm:w-auto sm:px-10 md:px-0 lg:text-[22px] md:text-[15px] sm:text-[15px] font-normal">
          <p>
            It&apos;s like having a personal agency that manages everything,
            from content creation and social media strategies to technical
            tasks.
          </p>
        </span>
      </div>

      {/* Grid Section */}
      <div
        className="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-[10.28px] sm:gap-[10.28px] sm:w-auto sm:px-4  lg:w-[1144px] md:w-[729px] hover-scale"
        data-aos="fade-up"
      >
        {/* Card 1 */}
        <div className="lg:p-10 md:p-[25.71px] sm:p-[25.71px] lg:border md:border-[0.64px] sm:border-[0.64px] border-card lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px] sm:gap-[15.43px]">
          <div className="lg:p-5 md:p-[11.57px] sm:p-[11.57px] lg:w-[56px] md:w-[36px] sm:w-[36px] flex lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] bg-[#ffffff]">
            <Image
              src={'/Vector.svg'}
              alt="vec"
              width={15.63}
              height={15.63}
              className="md:w-[10.04px] md:h-[10.04px] sm:h-[10.04px] sm:w-[10.04px] lg:w-[15.63px] lg:h-[15.63px]"
            />
          </div>
          <h1 className="font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px] sm:leading-[24.34px] underline-hover">
            AI Query Engine
          </h1>
          <span className="flex flex-col lg:w-[319px] md:w-[294.77.px] sm:w-auto md:px-0 md:text-[14.79px] sm:text-[14.79px] text-center justify-center items-center font-normal lg:text-base text-[#ffffff]">
            <p>
              Voyex&apos;s AI query engine finds the best tools for your tasks,
              saving you time on research and maximizing efficiency.
            </p>
          </span>
        </div>

        {/* Card 2 */}
        <div className="lg:p-10 md:p-[25.71px] sm:p-[25.71px] lg:border md:border-[0.64px] sm:border-[0.64px] border-card lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] flex flex-col justify-center items-center bg-[#0d0d0d] lg:gap-6 md:gap-[15.43px] sm:gap-[15.43px]">
          <div className="lg:p-5 md:p-[11.57px] sm:p-[11.57px] lg:w-[56px] md:w-[36px] sm:w-[36px] flex lg:rounded-xl md:rounded-[6.43px] sm:rounded-[6.43px] bg-[#ffffff]">
            <Image
              src={'/Vector.svg'}
              alt="vec"
              width={15.63}
              height={15.63}
              className="md:w-[10.04px] md:h-[10.04px] sm:h-[10.04px] sm:w-[10.04px] lg:w-[15.63px] lg:h-[15.63px]"
            />
          </div>
          <h1 className="font-bold text-center text-[#ffffff] text-[18px] lg:leading-[23.03px] md:leading-[24.34px] sm:leading-[24.34px] underline-hover">
            Workflow Creation
          </h1>
          <span className="flex flex-col lg:w-[400px] md:w-[311.67px] sm:w-auto text-center justify-center items-center font-normal md:text-[14.79px] sm:text-[14.79px] lg:text-base text-[#ffffff]">
            <p>
              Voyex delivers the best tools and workflows, adapting with
              feedback to ensure tasks are completed efficiently from start to
              finish.
            </p>
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="lg:grid lg:grid-cols-3 lg:gap-2.5 md:gap-[6.43px] md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:gap-2.5 lg:max-w-[1144px] md:max-w-[729px] items-center justify-center"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:gap-2 lg:p-4 md:py-[10.93px] md:px-[10.28px] sm:px-[23.03px] border border-card bg-black lg:rounded-[13px] md:rounded-[8.36px] sm:rounded-[10px]">
          <Image
            src={'/Visual.svg'}
            alt="holo"
            width={311}
            height={242}
            className="lg:w-[311px] lg:h-[242px] md:w-[199.9px] md:h-[155.55px] sm:w-[263px] sm:h-[206px] sm:mx-auto md:mx-0"
          />
          <div className="flex flex-col lg:gap-[9px] md:gap-[5.79px] sm:gap-[5.79px] lg:w-auto md:w-[320.11px] sm:w-[298px] md:mx-0 sm:mx-auto">
            <h1 className="font-medium text-[#ffffff]">
              The Future of Automation: Agent-Based Workflows
            </h1>
            <p className="text-[#ffffffb3] sm:mb-5 md:mb-0 lg:w-auto">
              This is just the beginning. We're developing agent-based
              workflows that will allow you to
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-baseline justify-end 
          lg:pl-10 lg:gap-2 lg:pb-5 lg:col-span-2 lg:rounded-[13px] lg:w-auto lg:h-[400px] 
          md:pl-[25.71px] md:gap-2 md:pb-[11.1px] md:col-span-1 md:rounded-[6.43px] md:w-[370.23px] md:h-[304.19px] 
          sm:pl-[19.32px] sm:gap-[5.14px] sm:pb-[66.7px] sm:rounded-[6.43px] sm:w-auto sm:h-[400px] 
          border border-card
          md:bg-gradient-and-darkstar sm:bg-gradient-and-smview 
          bg-cover bg-no-repeat bg-center"
          data-aos="fade-up"
        >
          <h1 className="font-medium text-[#ffffff]">Automate campaigns</h1>
          <p className="text-[#ffffffb3] lg:w-[322px] md:w-[285.59px] sm:w-[285.59px]">
            Automated campaigns simplify marketing with personalized,
            data-driven strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Everythingyouneed;
