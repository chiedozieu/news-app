import React from "react";
import { images } from "../constants";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="bg-black">
      <footer className="container mx-auto p-4">
        <div className="m-4 flex justify-end">
          <Link to="/">
            <img className="w-24 h-24 " src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className="line h-[1px] bg-[#e8dfdf4a] my-6"></div>
        <div className="text-white p-4">
          <ul className=" flex flex-col md:flex-row gap-4 lg:gap-8 font-roboto text-base flex-wrap">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/lifestyle">Lifestyle</Link>
            </li>
            <li>
              <Link to="/politics">Politics</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/church">Church life</Link>
            </li>
            <li>
              <Link to="/tech">Tech</Link>
            </li>
            <li>
              <Link to="/arts">Arts & Culture</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </div>
        
        <div className="subs flex flex-col md:flex-row md:w-[40%] md:h-[60px] items-center my-6">
          <div className="md:w-[70%] py-2 h-[60px] w-full">
            <input
              type="text"
              className="p-2 w-full h-full"
              placeholder="Email"
            />
          </div>
          <button className="bg-[#345cd3] text-white p-2 md:w-[30%] w-full flex gap-2 items-center md:justify-center justify-evenly h-[45px] group">
            <PiEnvelopeSimpleThin
              className="cursor-pointer text-white group-hover:scale-125 transition-all duration-500"
              title="Subscribe"
              size={30}
            />
            <span className="md:hidden lg:block">Subscribe</span>
          </button>
        </div>

        <div className="text-white flex gap-6 p-4 justify-end">
          <p>Follow UG News </p>
          <div className=" flex gap-4">
            <CiFacebook
              size={25}
              className="cursor-pointer hover:border transition-all duration-500"
            />
            <PiYoutubeLogoThin
              size={25}
              className="cursor-pointer hover:border transition-all duration-500"
            />
            <RiTwitterXFill
              size={25}
              className="cursor-pointer hover:border transition-all duration-500"
            />
            <CiLinkedin
              size={25}
              className="cursor-pointer hover:border transition-all duration-500"
            />
            <CiInstagram
              size={25}
              className="cursor-pointer hover:border transition-all duration-500"
            />
          </div>
        </div>
        <div className="line h-[1px] bg-[#e8dfdf4a] my-6"></div>
        <div className="text-white">
          <p className="text-sm font-roboto">
            Copyright &copy; 2024 | All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
