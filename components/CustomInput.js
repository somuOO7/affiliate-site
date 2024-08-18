import React from "react";

const CustomInput = ({ placeholder, isSecured, label }) => {
  return (
    <div>
      <p>{label}</p>
      <input
        type={isSecured ? "password" : "text"}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-sm rounded-md border-2 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default CustomInput;
