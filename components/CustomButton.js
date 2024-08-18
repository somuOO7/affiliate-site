"use client";
import React from "react";

const CustomButton = ({ title, onClick }) => {
  const handleClikc = () => {
    print("hello");
  };
  return (
    <button
      onClick={onClick}
      className="bg-green-500 py-2 w-full rounded-md text-white font-bold transition-all hover:bg-green-600 animate-wiggle"
    >
      {title}
    </button>
  );
};

export default CustomButton;
