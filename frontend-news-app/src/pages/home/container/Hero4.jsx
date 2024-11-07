import React from "react";
import { Link } from "react-router-dom";

const Hero4 = () => {
  return (
    <div className="container mx-auto px-4 mt-16 mb-24">
      <div className="w-full md:flex md:justify-between h-full">
        <div className="hero1-1-4 flex flex-col gap-2 md:w-[40%] w-full md:h-full p-2">
          <Link to="/" className="hero1-1/4 flex gap-2 w-full md:h-[25%] group ">
            <img
              src="https://picsum.photos/214"
              alt=""
              className="h-full w-[30%] group-hover:opacity-80"
            />
            <div className="h-full">
              <h1 className="text-[1rem] font-thick text-[#f32f7e]">
                Culinary
              </h1>
              <p className="w-full group-hover:underline ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                 
              </p>
            </div>
          </Link>

          <div className="flex line h-[1px] bg-[#0000004a] mt-2 w-full"></div>

          <Link to="/" className="hero1-2/4 flex gap-2 w-full md:h-[25%] group ">
            <img
              src="https://picsum.photos/215"
              alt=""
              className="h-full w-[30%] group-hover:opacity-80"
            />
            <div className="h-full">
              <h1 className="text-[1rem] font-thick text-[#752094]">
                Music & Culture
              </h1>
              <p className="w-full group-hover:underline ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                
              </p>
            </div>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2 w-full"></div>
          <Link to="/" className="hero1-3/4 flex gap-2 w-full md:h-[25%] group ">
            <img
              src="https://picsum.photos/216"
              alt=""
              className="h-full w-[30%] group-hover:opacity-80"
            />
            <div className="h-full">
              <h1 className="text-[1rem] font-thick text-[#273fc6]">
                Church Life
              </h1>
              <p className="w-full group-hover:underline ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                
              </p>
            </div>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2 w-full"></div>

          <Link to="/" className="hero1-4/4 flex gap-2 w-full md:h-[25%] group ">
            <img
              src="https://picsum.photos/217"
              alt=""
              className="h-full w-[30%] group-hover:opacity-80"
            />
            <div className="h-full">
              <h1 className="text-[1rem] font-thick text-[#0f1747]">Fashion</h1>
              <p className="w-full group-hover:underline ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              
              </p>
            </div>
          </Link>
        </div>
        <div className="hidden md:block vLine-1 h-full w-[1px] bg-[#0000007c] mt-4"></div>
        <div className="hero2-1-3 flex flex-col gap-4 md:w-[20%]">
          <Link to={"/"} className="hero2-1/3 w-full p-2 group">
            <img
              src="https://picsum.photos/219"
              alt=""
              className="w-full h-[150px] group-hover:opacity-80 mb-2"
            />
            <p className="w-full group-hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link
            to={"#"}
            className="hero2-2/3 font-sans text-[#000000] font-semibold w-full hover:underline"
          >
            Global Elections: Approximately 79 countries are expected to conduct
            national elections in 2024,
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link
            to={"#"}
            className="hero2-3/3 font-sans text-[#000000] font-semibold w-full hover:underline"
          >
            Global Elections: Approximately 79 countries are expected to conduct
            national elections in 2024, including
          </Link>
        </div>
        <div className="hidden md:block vLine-1 h-full w-[1px] bg-[#0000007c] mt-4"></div>
        <div className="hero3-1-3 flex flex-col gap-4 md:w-[30%] w-full">
          <Link to={"/"} className="hero3-1/3 w-full p-2 group md:h-[50%]">
            <img
              src="https://picsum.photos/220"
              alt=""
              className="w-full h-[150px] group-hover:opacity-80 mb-2"
            />
            <p className="w-full group-hover:underline font-sans text-[#000000] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Link>

          <div className="line h-[1px] bg-[#0000004a] mt-2 w-full"></div>

          <Link to="/" className="hero3-2/3 flex gap-2 w-full group md:h-[25%]">
            <img
              src="https://picsum.photos/222"
              alt=""
              className="h-full w-[30%] group-hover:opacity-80"
            />
            <div className="h-full flex flex-col gap-4">
              <h1 className="text-[1rem] font-thick text-[#030303]">Dance</h1>
              <p className="w-full group-hover:underline h-full overflow-hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                voluptas nisi dolorem
              </p>
            </div>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2 w-full"></div>

          <Link to="/" className="hero3-3/3 flex gap-2 w-full group md:h-[25%]">
            <img
              src="https://picsum.photos/223"
              alt=""
              className="h-full w-[30%] group-hover:opacity-80"
            />
            <div className="h-full flex flex-col gap-2">
              <h1 className="text-[1rem] font-thick text-[#030303]">Gaming</h1>
              <p className="w-full group-hover:underline h-full overflow-hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              </p>
            </div>
          </Link>
        </div>
      <div className="line h-[1px] bg-[#0000004a] mt-4"></div>
      </div>
    </div>
  );
};

export default Hero4;
