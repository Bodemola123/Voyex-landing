import React from "react";

export default function VideoCard({ title, duration, thumbnail }) {
  return (
    <div className="bg-black p-4 rounded-lg border border-gray-800">
      {/* Thumbnail */}
      <div className="w-full h-32 bg-gray-700 rounded-lg mb-4 overflow-hidden">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      {/* Duration */}
      <div className="text-xs text-gray-500">Duration: {duration}</div>
    </div>
  );
}