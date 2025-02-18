import React from "react";
import logo from "../../../assets/frontend_assets/logo.png";
import Image from "next/image";
import facebook from "../../../assets/frontend_assets/facebook_icon.png";
import twitter from "../../../assets/frontend_assets/twitter_icon.png";
import linkedin from "../../../assets/frontend_assets/linkedin_icon.png";
const Footer = () => {
  return (
    <div
      id="contact-us"
      className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-8 py-5 px-[8vw] pt-[80px] mt-20"
    >
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <Image src={logo} alt="logo" />
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam
            sit est in tenetur!
          </p>
          <div className="flex items-center gap-4 mt-5">
            <Image src={facebook} alt="facebook icon" />
            <Image src={twitter} alt="twitter icon" />
            <Image src={linkedin} alt="linkedin icon" />
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold">COMPANY</h2>
          <ul className="flex flex-col gap-2 mt-3">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2 mt-3">
            <li>01310000000</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full pt-5 text-[#d9d9d9] " />
      <p>
        Copywrite &copy; 2025 Tomato. All rights reserved. Designed by Tomato
      </p>
    </div>
  );
};

export default Footer;
