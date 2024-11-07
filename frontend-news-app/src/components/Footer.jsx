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
      <footer className="container mx-auto p-4 ">
        <div className="m-4 flex justify-between">
          <Link to='/'><img className="w-24 h-24 " src={images.logo} alt="logo" /></Link>
        </div>
        <div className="line h-[1px] bg-[#e8dfdf4a] my-6"></div>
        <div className="text-white p-4">
          <ul className=" flex flex-col md:flex-row gap-4 lg:gap-8 font-roboto text-base flex-wrap">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/article">Article</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/lifestyle">Lifestyle</Link></li>
            <li><Link to='/politics'>Politics</Link></li>
            <li><Link to='/entertainment'>Entertainment</Link></li>
            <li><Link to='/church'>Church life</Link></li>
            <li><Link to='/tech'>Tech</Link></li>
            <li><Link to='/arts'>Arts & Culture</Link></li>
            <li><Link to='/people'>People</Link></li>
          </ul>
        </div>
        <div className="my-6 w-full md:w-[40%] relative p-4">
          <input
            type="text"
            className="p-2 rounded-lg w-full"
            placeholder="Enter your email"
          />
          <PiEnvelopeSimpleThin
            className="text-3xl cursor-pointer absolute right-6 top-5 text-[#3d56f8] hover:scale-125 transition-all duration-500"
            title="Subscribe"
          />
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
