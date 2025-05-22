import React, { useState } from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { LuTags } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Categories from '../common/Categories';
import Conclusion from '../common/Conclusion';
import Image from 'next/image';

const ResultsModal = ({onClose, results}) => {

    const [activeTab, setActiveTab] = useState(`Conclusion`);
    const tabs =[
        {name: "Categories", icon: <BiCategoryAlt/>},
        {name:"Tags", icon: <LuTags/> },
        {name: "Price Range", icon: <AiOutlineDollarCircle/> },
        {name: "Conclusion"}
    ];

    const content = {
        "Categories": (
            <Categories results={results} />
        ),
"Tags": (
  <div className='p-6 bg-[#131314] rounded-3xl border border-[#D0D5DD1A] text-[#F4F4F4] space-y-4'>
    <h2 className="text-xl font-semibold">Tag Analysis</h2>
    <p className="text-sm">
      Your product shares tags with these top-performing tools:
    </p>
    <ul className="list-disc list-inside text-sm space-y-1">
      <li><span className="font-medium">CopyMaster Pro</span> — Tags: copywriting, AI content, branding</li>
      <li><span className="font-medium">AutoChat AI</span> — Tags: chatbot, automation, small business</li>
      <li><span className="font-medium">ShopGenie</span> — Tags: ecommerce, automation, SEO optimized</li>
    </ul>
    <p className="text-sm pt-2">
      Overlap with your tool: <span className="text-[#c088fb] font-medium">{results?.tags?.join(', ') || 'N/A'}</span>
    </p>
  </div>
),

"Price Range": (
  <div className='p-6 bg-[#131314] rounded-3xl border border-[#D0D5DD1A] text-[#F4F4F4] space-y-4'>
    <h2 className="text-xl font-semibold">Price Comparison</h2>
    <p className="text-sm">
      Your price range: <span className="text-[#c088fb] font-medium">{results?.price || 'N/A'}</span>
    </p>
    <div className="space-y-2 text-sm">
      <p><span className="font-medium">ToolX</span>: $15 - $35</p>
      <p><span className="font-medium">CreatorBoost</span>: $25 - $60</p>
      <p><span className="font-medium">MarketPilot</span>: $10 - $40</p>
    </div>
    <p className="text-sm pt-2">
      Your pricing is <span className="font-medium text-[#c088fb]">within the competitive range</span> for tools in the <span className="capitalize">{results?.category || 'your category'}</span> category.
    </p>
  </div>
),


        "Conclusion":(
            <Conclusion onclose={onclose} results={results}/>
        )


    }
  return (
    <div className="fixed inset-0 bg-[rgba(19,19,20,0.8)]  flex items-center justify-center z-50">
    <div className='bg-[#1C1D1F] p-[27px] h-full w-full flex flex-col gap-[29px] rounded-[41px] max-w-[957px] max-h-[683px] overflow-y-auto scrollbar-hide overflow-x-visible'>
        <div className='flex justify-between items-center'>
        <p className='text-left font-normal text-[27px] text-[#f4f4f4]'>Your Tool results are out</p>
        <button onClick={onClose}>
            <Image src={'/close-square.svg'} alt="Close" width={58} height={58} />
        </button>
        </div>
        <div className='flex flex-col gap-4'>
                  <div className="flex flex-row justify-between max-w-[60%] items-center bg-[#131314] rounded-2xl py-2 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
className={`flex items-center gap-2 text-base text-center font-medium ${
  activeTab === tab.name ? 'text-[#c088fb]' : 'text-[#F4F4F4]'
} hover:text-[#c088fb] transition-colors`}

          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>
      <div className="">{content[activeTab]}</div>
       </div>


    </div>
    </div>
  )
}

export default ResultsModal
