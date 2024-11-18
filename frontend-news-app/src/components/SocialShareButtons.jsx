import React from "react";
import { PiFacebookLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { LiaWhatsapp } from "react-icons/lia";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex items-center justify-end">
      <div className="flex gap-2">
        <Link
          to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
        >
          <PiFacebookLogoLight className="text-2xl text-[#3b5998] w-10 h-auto cursor-pointer" />
        </Link>
        <Link
          to={`https://www.instagram.com/sharer/sharer.php?u=${url} target="_blank"`}
          target="_blank"
        >
          <CiInstagram className="text-2xl text-[#962fbf] w-10 h-auto cursor-pointer" />
        </Link>
        <Link to={`https://api.whatsapp.com/send?text=${url}`} target="_blank">
          <LiaWhatsapp className="text-2xl text-[#25D366] w-10 h-auto cursor-pointer" />
        </Link>
        <Link
          to={`https://www.twitter.com/intent/tweet?url=${url}&text=${title} `}
          target="_blank"
        >
          <RiTwitterXFill className="text-2xl text-[#000000] w-10 h-auto cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SocialShareButtons;
