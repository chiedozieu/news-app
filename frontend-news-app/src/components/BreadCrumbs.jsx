import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center overflow-x-auto py-4 whitespace-nowrap">
      {data.map((item, index) => (
        <div key={index} className="text-[#00000085] text-xs font-roboto md:text-sm">
          <Link to={item.link} className="flex items-center cursor-pointer hover:text-[#000000]">
            {item.name}
            {index !== data.length - 1 && (
              <MdKeyboardDoubleArrowRight size={20} />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
