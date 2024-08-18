import React from "react";

const CustomButton = ({ title }) => {
  return (
    <button className="bg-green-500 py-2 w-full rounded-md text-white font-bold transition-all hover:bg-green-600">
      {title}
    </button>
  );
};

export default CustomButton;
