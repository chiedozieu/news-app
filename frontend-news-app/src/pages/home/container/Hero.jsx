import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="container mx-auto md:mt-16 px-4">
      <div className="w-full flex flex-col md:flex-row md:justify-between">
        <div className="hero1-1-4 flex flex-col md:w-[27%] p-4 md:p-0">
        <div className="md:hidden mb-4 relative">
            <input
              type="text"
              placeholder="Search news"
              className="w-full p-2 rounded-lg border border-[#00000028]"
            />
            <CiSearch className="text-2xl text-[#0000007c] absolute right-2 top-2 cursor-pointer"/>
          </div>
          <Link to="/" className="hero1-1/4 w-full group">
            <img
              className="w-full h-[200px] rounded-lg group-hover:scale-105 transition-all duration-500"
              src="https://picsum.photos/200"
              alt=""
            />
            <h1 className="mt-2 font-sans text-[#000000] font-semibold group-hover:opacity-70">
              UN General Assembly: The Wikimedia Foundation called on
              governments and the UN to ensure the future internet is shaped by
              communities for the public interest...
            </h1>
            <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          </Link>
          <Link
            to="/"
            className="hero1-2/4 flex justify-between my-4 group w-full"
          >
            <img
              className="w-[42%] h-[80px] rounded-lg group-hover:opacity-90"
              src="https://picsum.photos/201"
              alt=""
            />
            <p className="w-[55%] font-sans font-thin group-hover:underline">
              Wikimania 2024: The 19th edition of Wikimania took place in
              Katowice
            </p>
            <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          </Link>
          <div className="line h-[1px] w-full bg-[#0000004a] mt-2"></div>
          <Link
            to="/"
            className="hero1-3/4 w-full flex justify-between my-4 group"
          >
            <img
              className="w-[42%] h-[80px] rounded-lg group-hover:opacity-90"
              src="https://picsum.photos/202"
              alt=""
            />
            <p className="w-[55%] font-sans font-thin group-hover:underline">
              Israel-Hamas War: The conflict has led to spillover into numerous
              countries.
            </p>
          </Link>
          <div className="line h-[1px] w-full bg-[#0000004a] mt-2"></div>
          <Link
            to="/"
            className="hero1-4/4 w-full flex justify-between my-4 group"
          >
            <img
              className="w-[42%] h-[80px] rounded-lg group-hover:opacity-90"
              src="https://picsum.photos/203"
              alt=""
            />
            <p className="w-[55%] font-sans font-thin group-hover:underline">
              Russian Invasion of Ukraine: The ongoing conflict continues to
            
            </p>
          </Link>
        </div>

        <div className="hidden md:block vLine-1 h-[750px] w-[1px] bg-[#0000007c] mt-4"></div>

        <div className="hero2-1-3 flex flex-col md:w-[40%] w-full p-4 md:p-0">
          <Link to={"#"} className="hero2-1/3 group">
            <img
              src="https://picsum.photos/204"
              alt=""
              className="rounded-lg w-full h-[275px] md:h-[400px] group-hover:opacity-90"
            />
            <h1 className="mt-2 font-roboto text-2xl md:text-3xl text-[#000000] group-hover:opacity-60">
              Global Elections: Approximately 79 countries are expected to
              conduct national elections in 2024
            </h1>
          </Link>

          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link to={"#"} className="hero2-2/3 w-full flex gap-2 my-4 group">
            <img
              className="w-[25%] h-[80px] rounded-lg group-hover:opacity-90"
              src="https://picsum.photos/206"
              alt=""
            />
            <p className="font-sans font-thin w-[73%] group-hover:underline">
              Russian Invasion of Ukraine: The ongoing conflict continues to 
              escalate, with significant humanitarian and economic impacts
            </p>
          </Link>
          <div className="line h-[1px] bg-[#0000004a] mt-2"></div>
          <Link to={"#"} className="hero2-3/3 w-full flex gap-2 my-4 group">
            <img
              className="w-[25%] h-[80px] rounded-lg group-hover:opacity-90"
              src="https://picsum.photos/207"
              alt=""
            />
            <p className="font-sans font-thin w-[73%] group-hover:underline">
              Artificial Intelligence Act: The European Union passed the world's
              first comprehensive legal and regulatory framework for artificial
              intelligence
            </p>
          </Link>
        </div>

        <div className="hidden md:block vLine-2 h-[750px] w-[1px] bg-[#0000007c] mt-4"></div>

        <div className="hero3 w-full p-4 md:p-0 md:w-[27%]">
          <div className="mb-4 relative hidden md:block">
            <input
              type="text"
              placeholder="Search news"
              className="w-full p-2 rounded-lg border border-[#00000028]"
              
            />
            <CiSearch className="text-2xl text-[#0000007c] absolute right-2 top-2 cursor-pointer"/>
          </div>
          <h1 className="text-semibold font-sans mb-4 text-[#2d228f]">Trending</h1>
          <Link to='/' className="group w-full">
            <img
              src="https://picsum.photos/205"
              alt=""
              className="rounded-lg w-full h-[200px] mb-2 group-hover:scale-105 transition-all duration-500"
            />
            <p className="font-sans text-[#000000] font-bolder w-full group-hover:underline">
              Turkey Local Elections: The CHP won 37.8% of the vote, marking its
              first victory in a popular vote since 1977
            </p>
          </Link>
          <div>
            <div className="line h-[1px] bg-[#0000004a] my-2"></div>
            <Link to={"#"} className="font-sans text-[#000000] font-semibold w-full hover:underline">
              Global Elections: Approximately 79 countries are expected to
              conduct national elections in 2024, including eight out of ten of
              the world's most populous countries
            </Link>
            <div className="line h-[1px] bg-[#0000004a] my-2"></div>
            <Link to={"#"} className="font-sans text-[#000000] font-semibold w-full hover:underline">
              Global Elections: Approximately 79 countries are expected to
              conduct national elections in 2024, including eight out of ten of
              the world's most populous countries
            </Link>
            <div className="line h-[1px] bg-[#0000004a] my-2"></div>
            <Link to={"#"} className="font-sans text-[#000000] font-semibold w-full hover:underline">
              Global Elections: Approximately 79 countries are expected to
              conduct national elections in 2024, including eight out of ten of
              the world's most populous countries
            </Link>
          </div>
        </div>
      </div>
            <div className="line h-[1px] bg-[#0000004a] my-6"></div>
    </div>
  );
};

export default Hero;
