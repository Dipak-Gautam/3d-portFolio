import React from "react";
import { styles } from "../styles";
import { CiLocationOn } from "react-icons/ci";

import { TfiEmail } from "react-icons/tfi";
import { SlPhone } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className={` w-full  items-center py-5  bg-primary px-10  md:px-32 mt-10`}
    >
      <div className="flex justify-between text-xs md:text-sm text-secondary">
        <div className="space-y-3">
          <div className="flex  items-center space-x-3  hover:text-white cursor-pointer">
            <CiLocationOn size={25} />
            <div>Deep, Pokhara Nepal</div>
          </div>
          <div className="flex  items-center space-x-3  hover:text-white cursor-pointer">
            <TfiEmail size={22} />
            <div>anjangautam095@gmail.com</div>
          </div>
          <div className="flex  items-center space-x-3  hover:text-white cursor-pointer">
            <SlPhone size={22} />
            <div>+977-9766607321</div>
          </div>
        </div>
        <div className="space-y-3 hidden md:flex md:flex-col ">
          <a
            href="https://www.facebook.com/boma.colo/"
            target="_blank"
            className="flex  items-center space-x-3 hover:text-white cursor-pointer"
          >
            <CiFacebook size={28} />
            <div>Boma Colo</div>
          </a>
          <a
            href="https://www.linkedin.com/in/dipak-gautam-6613b72b5/"
            target="_blank"
            className="flex  items-center space-x-3  hover:text-white cursor-pointer"
          >
            <AiOutlineLinkedin size={25} />
            <div>Dipak Gautam</div>
          </a>
          <div className="flex  items-center space-x-3 hover:text-white cursor-pointer">
            <FaWhatsapp size={25} />
            <div>+977-9814132234</div>
          </div>
        </div>
      </div>
      <div className="border border-b text-secondary mt-4  mb-3  " />
      <div className="text-secondary text-[10px] md:text-sm font-sans font-semibold justify-center text-center">
        © 2024 - All Rights Reserved | Created By Dipak gautam
      </div>
    </div>
  );
};

export default Footer;
