import React from "react";

export default function ArticleCard({ title, description, tags, readTime, date, image, imagePosition }) {
  const defaultImagePosition = "center 70%";

  return (
    <div className="bg-[#0d0d0d] p-4 flex flex-col rounded-2xl border border-[#ffffff20] cursor-pointer hover:bg-gray-900 transition duration-200 h-[450px] sm:h-[400px] md:h-[420px] lg:h-[400px]">
      {/* Image Section */}
      <div className="h-40 w-full rounded-lg overflow-hidden mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition || defaultImagePosition }}
          />
        ) : (
          <div className="bg-[#d9d9d9] w-full h-full"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-4">
          {/* Tags and ReadTime */}
          <div className="flex flex-row justify-between items-center flex-wrap gap-2">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-[#131314] px-2.5 py-1 rounded-xl text-[#c088fb] text-sm font-medium capitalize">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm text-[#f4f4f4] font-medium whitespace-nowrap">{readTime}</span>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xl md:text-2xl text-[#f4f4f4] font-bold line-clamp-2">{title}</h3>
            <p className="text-xs md:text-sm text-[#f4f4f4] line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Date */}
        <div className="mt-4">
          <span className="text-xs md:text-sm text-[#b0b0b0]">{date}</span>
        </div>
      </div>
    </div>
  );
}
