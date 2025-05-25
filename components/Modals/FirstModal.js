import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { FaCaretDown, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const categoryOptions = [
  'Audio-generators', 'Content Creation', 'Productivity', 'Design',
  'Marketing', 'Social', 'Video', 'Social-media', 'Video-generators',
  'Research-assistant', 'Image-genrators', 'Text-generators',
  'Website-builders', 'SEO'
];

const tagOptions = [
  'Website builder', 'AI Content', 'Small Business', 'SEO optimized',
  'Automation', 'ECommerce', 'Chatbot', 'Copywriting', 'Branding'
];

const FirstModal = ({ onClose, onGetAnalytics }) => {
  const [productName, setProductName] = useState('');
  const [lowerPrice, setLowerPrice] = useState(''); // Lower limit input
  const [upperPrice, setUpperPrice] = useState(''); // Upper limit input
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpenDropdown(null);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleAnalytics = () => {
    const productPrice = `${lowerPrice}-${upperPrice}`; // Combine both prices into one string
    const payload = {
      productName,
      selectedCategory,
      selectedTags,
      productPrice,
    };
    console.log('Submitting:', payload);

    onGetAnalytics(payload);
  };

  // Form is valid only if all inputs are filled and both price fields are numbers
  const isFormValid =
    productName.trim() !== '' &&
    selectedCategory.trim() !== '' &&
    selectedTags.length > 0 &&
    lowerPrice.trim() !== '' &&
    upperPrice.trim() !== '';

  return (
    <div className="relative bg-[#1C1D1F] p-[27px] items-center h-full w-full flex flex-col gap-[29px] rounded-[41px] max-w-[794px] max-h-[785px] overflow-y-scroll scrollbar-hide">
      <span className="flex items-center justify-center py-[23px] text-5xl font-bold text-[#f4f4f4]">
        Voyex
      </span>
      <div className="flex flex-col gap-[29px] items-center w-full">
        <h1 className="text-[30px] font-bold text-center text-[#f4f4f4]">
          Forecast Analytics for your tool
        </h1>
        <div className="flex flex-col gap-[29px] w-full max-w-[600px]">
          {/* Product Name */}
          <div className="space-y-1">
            <Label className="text-[#F4F4F4] text-sm font-medium">Product Name</Label>
            <Input
              placeholder="Your Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="rounded-[28px] bg-[#0a0a0b] placeholder:text-[#f4f4f4] text-[#f4f4f4] h-[56px] border-none focus:outline-none outline-none focus:ring-0"
            />
          </div>

          {/* Category */}
          <div className="space-y-1 relative">
            <Label className="text-[#F4F4F4] text-sm font-medium">Category</Label>
            <div
              className="w-full py-3 px-4 bg-[#0A0A0B] text-gray-300 rounded-[68px] cursor-pointer flex items-center justify-between"
              onClick={() => toggleDropdown('category')}
            >
              <span>{selectedCategory || 'Select category'}</span>
              <FaCaretDown />
            </div>
            {openDropdown === 'category' && (
              <div className="absolute z-10 mt-2 w-full bg-[#0A0A0B] max-h-48 overflow-y-auto rounded-2xl shadow-lg scrollbar-hide">
                {categoryOptions.map((category) => (
                  <div
                    key={category}
                    className="px-4 py-2 text-base text-white hover:bg-[#1f1f1f] cursor-pointer capitalize"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="space-y-1 relative">
            <Label className="text-[#F4F4F4] text-sm font-medium">Tags</Label>
            <div
              className="w-full py-3 px-4 bg-[#0A0A0B] text-[#f4f4f4] rounded-[68px] cursor-pointer flex items-center justify-between"
              onClick={() => toggleDropdown('tag')}
            >
              <span>
                {selectedTags.length > 0 ? selectedTags.join(', ') : 'Select tags'}
              </span>
              <FaCaretDown className="text-gray-300" />
            </div>
            {openDropdown === 'tag' && (
              <div className="absolute z-10 mt-2 w-full bg-[#0A0A0B] max-h-48 overflow-y-auto rounded-2xl shadow-lg scrollbar-hide">
                {tagOptions.map((tag) => (
                  <div
                    key={tag}
                    className="px-4 py-2 text-base text-white capitalize hover:bg-[#1f1f1f] cursor-pointer flex justify-between items-center"
                    onClick={() => toggleTag(tag)}
                  >
                    <span>{tag}</span>
                    {selectedTags.includes(tag) && <FaCheck className="text-[#c088fb]" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Range (Two inputs) */}
          <div className="space-y-1">
            <Label className="text-[#F4F4F4] text-sm font-medium">Price Range (in dollars)</Label>
            <div className="flex gap-4">
              <Input
                placeholder="Min e.g., 5"
                value={lowerPrice}
                onChange={(e) => setLowerPrice(e.target.value)}
                className="flex-1 rounded-[28px] bg-[#0a0a0b] placeholder:text-[#f4f4f4] text-[#f4f4f4] h-[56px] border-none focus:outline-none"
              />
              <Input
                placeholder="Max e.g., 10"
                value={upperPrice}
                onChange={(e) => setUpperPrice(e.target.value)}
                className="flex-1 rounded-[28px] bg-[#0a0a0b] placeholder:text-[#f4f4f4] text-[#f4f4f4] h-[56px] border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleAnalytics}
            disabled={!isFormValid}
            className={`px-[21px] w-[378px] mx-auto py-2.5 h-[42px]  rounded-3xl text-base font-medium text-[#0a0a0b] border border-[#FFFFFF26] transition  ${
              isFormValid ? 'hover:scale-105 bg-[#c088fb]' : 'bg-[#c088fb] opacity-70'
            }`}
          >
            Get Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstModal;
