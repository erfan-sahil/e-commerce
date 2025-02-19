"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/frontend_assets/logo.png";
import searchIcon from "../../../assets/frontend_assets/search_icon.png";
import basketIcon from "../../../assets/frontend_assets/basket_icon.png";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center py-5">
      <Image src={logo} alt="logo" width={150} height={140} />
      <ul className="flex items-center gap-10">
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-[#49557e] hover:text-orange-500 transition-all duration-200"
          }`}
        >
          Home
        </Link>
        <Link
          href="/#menu"
          className={`${
            pathname === "/menu"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-[#49557e] hover:text-orange-500 transition-all duration-200"
          }`}
        >
          Menu
        </Link>
        <Link
          href="/#food-item"
          className={`${
            pathname === "/food-item"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-[#49557e] hover:text-orange-500 transition-all duration-200"
          }`}
        >
          Food Item
        </Link>
        <Link
          href="/#contact-us"
          className={`${
            pathname === "/contact-us"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-[#49557e] hover:text-orange-500 transition-all duration-200"
          }`}
        >
          Contact us
        </Link>
      </ul>
      <div className="flex items-center gap-8">
        <Image src={searchIcon} alt="search icon" />

        <Link href="/cart">
          <Image src={basketIcon} alt="basket icon" />
        </Link>

        <Link
          href="/login"
          className="text-[#49557e] border border-orange-800 rounded-3xl hover:bg- py-2 px-5 hover:bg-[#fff4f2] transition-all duration-300 transform hover:scale-105"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
