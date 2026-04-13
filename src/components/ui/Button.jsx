import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = ({ children }) => {
  return (
    <>
      <button className="bg-[#0C9458] text-white py-1 px-4 rounded-3xl hover:bg-[#0A7A4A]">
        {children} <MdOutlineArrowOutward className="inline-block w-6 h-6 bg-white rounded-4xl mb-1 ml-1 text-black text-sm p-1" />
      </button>
    </>
  );
};

export default Button;
