"use client";
import React from "react";

const Avatar = ({ name, isOnline, imageUrl }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative flex-shrink-0">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {isOnline && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
};

export default Avatar;