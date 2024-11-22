import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/user";

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
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
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
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex items-center"
            onClick={toggleDropdown}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 lg:group-hover:block pt-2 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent rounded-lg shadow-lg overflow-hidden">
              {item.items.map((pageItems, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="flex flex-col px-4 py-2 hover:bg-[#1d1d7d] lg:hover:bg-dark-hard text-[#fff] hover:text-white lg:text-dark-soft "
                  >
                    {pageItems}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};
const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch()


  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <section className="sticky top-0 left-0 right-0 z-10 bg-white">
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

          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <div className="register">
              {userState.userInfo ? (
                `Welcome ${userState.userInfo.name}!`
              ) : (
                <Link
                  to="/register"
                  className={`${
                    userState.userInfo
                      ? "cursor-none"
                      : "bg-[#000] border-r text-white px-5 py-3 lg:hover:bg-[#000000b8] hover:bg-[#0000005f]"
                  } `}
                >
                  Register
                </Link> 
              )}
            </div>

            <div className="signin">
              {userState.userInfo ? (
                <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      <button
                        className="px-4 py-2 flex items-center"
                        onClick={() => setProfileDropdown(!profileDropdown)}
                      >
                        <span>Profile</span>
                        <MdKeyboardArrowDown />
                      </button>
                      <div
                        className={`${
                          profileDropdown ? "block" : "hidden"
                        } lg:hidden transition-all duration-500 lg:group-hover:block pt-2 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full w-max`}
                      >
                        <ul className="bg-dark-soft lg:bg-transparent rounded-lg shadow-lg overflow-hidden">
                          <button type="button" className="flex flex-col px-4 py-2 hover:bg-[#1d1d7d] lg:hover:bg-dark-hard text-[#fff] hover:text-white lg:text-dark-soft ">
                            Dashboard
                          </button>
                          <button onClick={logoutHandler} type="button" className="flex flex-col w-full px-4 py-2 hover:bg-[#1d1d7d] lg:hover:bg-dark-hard text-[#fff] hover:text-white lg:text-dark-soft ">
                            Logout
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link className="bg-[#fff] text-black px-5 py-3 hover:bg-[#000000b8] hover:text-white">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
