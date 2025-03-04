import React from "react";

export default function ArticleCard({ title, description, tags, readTime, date, image }) {
  return (
    <div className="bg-[#0d0d0d] p-4 flex flex-col gap-4 rounded-2xl border border-[#ffffff20] cursor-pointer hover:bg-gray-900 transition duration-200 h-[400px] relative">
      {/* Article Image */}
      <div className="h-32 w-full rounded-lg overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover object-center" />
        ) : (
          <div className="bg-[#d9d9d9] w-full h-full"></div>
        )}
      </div>
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex flex-row justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#131314] px-2.5 py-1 rounded-xl text-[#c088fb] text-sm font-medium capitalize">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-[#f4f4f4] font-medium">{readTime}</span>
        </div>
        <div className="flex flex-col gap-2.5">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 line-clamp-2">{title}</h3>
          {/* Description */}
          <p className="text-sm text-[#f4f4f4] mb-2 line-clamp-3">{description}</p>
        </div>
      </div>
      {/* Meta Info - Date always at bottom left */}
      <span className="absolute bottom-4 left-4 text-sm">{date}</span>
    </div>
  );
}