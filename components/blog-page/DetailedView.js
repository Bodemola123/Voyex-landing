import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function DetailedView({ selectedItem, onBack }) {
  if (!selectedItem) return null;

  return (
    <div className=" flex flex-col p-6 text-white bg-[#0d0d0d] rounded-xl">
      {/* Back Button */}
      <button onClick={onBack} className="text-white lg:text-xl sm:text-lg mb-4 flex items-center gap-2">
        <FaArrowLeft /> Back
      </button>

      {/* Image */}
      {selectedItem.image && selectedItem.image !== "No Content Available" ? (
        <div
          className="w-full h-80 rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${selectedItem.image})` }}
        ></div>
      ) : (
        <div className="w-full h-80 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}

      {/* Title */}
      <h2 className="lg:text-3xl sm:text-2xl font-bold mt-4">{selectedItem.title}</h2>

      {/* Content */}
      <p className="text-gray-300 mt-2 lg:text-lg">{selectedItem.content}</p>
    </div>
  );
}
