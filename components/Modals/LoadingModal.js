import React, { useEffect, useState } from 'react';

const LoadingModal = ({ payload, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          onComplete && onComplete(generateDummyResult(payload));
          return 100;
        }
        return oldProgress + 1; // increase by 1% every tick
      });
    }, 30); // adjust speed here (30ms per 1%)

    return () => clearInterval(interval);
  }, [payload, onComplete]);

  // Dummy API response based on payload
  const generateDummyResult = (data) => ({
    name: data.productName,
    message: `Results for ${data.productName}`,
    category: data.selectedCategory,
    tags: data.selectedTags,
    price: data.productPrice,
    // Add more simulated data if needed
  });

  return (
      <div className="bg-[#1C1D1F] p-[27px] items-center h-full w-full flex flex-col gap-[29px] rounded-[41px] max-w-[794px] max-h-[785px] overflow-y-scroll scrollbar-hide">
        <span className="flex items-center justify-center py-[23px] text-5xl font-bold text-[#f4f4f4]">
          Voyex
        </span>
        <div className="flex flex-row items-center justify-between py-[71px] w-full max-w-[900px]">
          <div className="flex flex-col gap-6 items-start flex-grow">
            <p className="text-2xl font-medium text-[#ffffff]">Analyzing...</p>
            <p className="text-base font-normal text-[#ffffff]">
              Wait while voyex analyzer forecast your product's output
            </p>
<div className="bg-[#ffffff] w-[354px] h-[14px] rounded-[25px] overflow-hidden">
  <div
    style={{
      width: progress === 100 ? '101%' : `${progress}%`,
      height: '100%',
      backgroundImage: 'linear-gradient(89.86deg, #C088FB 0.12%, #725195 80.93%)',
      transition: progress === 100 ? 'none' : 'width 0.3s ease',
    }}
  />
</div>

          </div>
          <span className="text-[107px] font-medium text-white">{progress}%</span>
        </div>
      </div>
  );
};

export default LoadingModal;
