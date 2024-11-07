import React from "react";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="container mx-auto px-4 mt-16">
      <h1 className="text-2xl font-extrabold text-[#3d56f8] mb-8">Politics</h1>
      <div className="hero1-3 w-full flex flex-col md:flex-row md:justify-between">
        <Link
          to="/"
          className="hero1-1/1 flex flex-col gap-2 md:w-[40%] w-full h-full p-2 group"
        >
          <img
            src="https://picsum.photos/209"
            alt=""
            className="w-full h-[70%] group-hover:opacity-80"
          />
          <p className="w-full mt-4 group-hover:underline">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            voluptas nisi dolorem harum delectus ipsam cum quod quis
            necessitatibus sint!
          </p>
        </Link>
        <div className="hidden md:block vLine-1 h-full w-[1px] bg-[#0000007c] mt-4"></div>
        
        <div className="hero2-1-3 flex flex-col gap-4 md:w-[27%] w-full">
          <Link to="/" className="w-full p-2 group flex flex-col gap-2">
            <img
              src="https://picsum.photos/210"
              alt=""
              className="w-full md:h-[150px] group-hover:opacity-80"
            />
            <p className="w-full group-hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link
            to={"#"}
            className="font-sans text-[#000000] font-semibold w-full hover:underline"
          >
            Global Elections: Approximately 79 countries are expected to conduct
            national elections in 2024, including eight out of ten of the
            world's most populous countries
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link
            to={"#"}
            className="font-sans text-[#000000] font-semibold w-full hover:underline"
          >
            Global Elections: Approximately 79 countries are expected to conduct
            national elections in 2024, including eight out of ten of the
            world's most populous countries
          </Link>
        </div>
        <div className="hidden md:block vLine-1 h-[490px] w-[1px] bg-[#0000007c] mt-4"></div>

        <div className="hero3-1-3 flex flex-col gap-2 md:w-[27%] w-full h-full">
          <Link to="/" className="w-full p-2 group flex flex-col gap-2">
            <img
              src="https://picsum.photos/211"
              alt=""
              className="w-full h-[150px] group-hover:opacity-80"
            />
            <p className="w-full group-hover:underline">
              Lorem ipsum dolor sit amet, elit. Praesentium, doloremque in
              similique .
            </p>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link
            to={"#"}
            className="font-sans text-[#000000] font-semibold w-full hover:underline"
          >
            Global Elections: Approximately 79 countries are expected to conduct
            national elections in 2024, including eight out of ten of the
            world's most populous countries
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link
            to={"#"}
            className="font-sans text-[#000000] font-semibold w-full hover:underline"
          >
            Global Elections: Approximately 79 countries are expected to conduct
            national elections in 2024, including eight out of ten of the
            world's most populous countries
          </Link>
        </div>
      </div>
      <div className="line h-[1px] bg-[#0000004a] my-6"></div>
    </div>
  );
};

export default Hero2;
