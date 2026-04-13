import { useState } from "react";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

const Accordion = ({
  idx,
  title,
  description,
  children,
  isCollapsed = false,
}) => {
  const [collapse, setCollapse] = useState(isCollapsed);

  return (
    <div className="accordion">
      {/* Header row */}
      <div
        className="title flex items-center flex-wrap gap-3 md:gap-0 cursor-pointer py-4"
        onClick={() => setCollapse(!collapse)}
      >
        {/* Number + Title */}
        <div className="flex items-center gap-3 w-full sm:w-56 shrink-0">
          <h2 className="text-lg font-bold shrink-0">0{idx}</h2>
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>

        {/* Description — visible on sm+ inline */}
        <p className="hidden sm:block text-sm text-gray-500 flex-1 md:w-lg">
          {description}
        </p>

        {/* Arrow */}
        <span
          className={`ml-auto self-start sm:self-center text-xl w-7 h-7 flex items-center justify-center rounded-full border transition-colors duration-200
  ${!collapse ? "bg-green-300 border-green-400 text-white" : "bg-white border-gray-400 text-black"}`}
        >
          {collapse ? <IoIosArrowRoundDown /> : <IoIosArrowRoundUp />}
        </span>
      </div>

      {/* Description — visible on mobile only, below the row */}
      <p className="block sm:hidden text-sm text-gray-500 pb-2 pl-7">
        {description}
      </p>

      {/* Body */}
      <div className={collapse ? "block" : "hidden"}>
        <div className="mx-2 sm:mx-5 my-4">{children}</div>
      </div>

      <hr className="border-[#0C9458] border-[1px]" />
    </div>
  );
};

export default Accordion;
