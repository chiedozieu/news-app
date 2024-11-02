import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemInfo = [
  {
    name: "Home",
    type: "link",
  },
  {
    name: "Articles",
    type: "link",
  },
  {
    name: "Pages",
    type: "dropdown",
    items: ["About us", "Contact us"],
  },
  {
    name: "Pricing",
    type: "link",
  },
  {
    name: "Faq",
    type: "link",
  },
];
const NavItems = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          <a href="/" className="px-4 py-2 flex items-center">
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </a>
          <div className="hidden transition-all duration-500 group-hover:block pt-2 absolute bottom-0 right-0 transform translate-y-full w-max">
            <ul className="bg-white rounded-lg shadow-lg overflow-hidden">
              {item.items.map((pageItems, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      className="flex flex-col px-4 py-2 hover:bg-dark-hard text-[#000] hover:text-white lg:text-dark-soft "
                    >
                      {pageItems}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};
const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div className="">
          <img className="w-14 h-14" src={images.logo} alt="logo" />
        </div>
        <div className="z-50 lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose
              className=" w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu
              className=" w-6 h-6"
              onClick={navVisibilityHandler}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard text-[#fff] lg:text-inherit lg:bg-transparent flex flex-col w-full lg:w-auto justify-center lg:flex-row fixed top-0 bottom-0 lg:static lg:justify-end items-center gap-9 z-49`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-y-4">
            {navItemInfo.map((item, index) => (
              <ul className="" key={index}>
                <NavItems item={item} />
              </ul>
            ))}
          </div>

          <div>
            <button className="bg-[#000] border-r text-white px-5 py-2 lg:hover:bg-[#000000b8] hover:bg-[#0000005f]">
              Register
            </button>
            <button className="bg-[#fff] text-black px-5 py-2 hover:bg-[#000000b8] hover:text-white">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
