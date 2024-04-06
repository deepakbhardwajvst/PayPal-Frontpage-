"use client"
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from './../Logo/Logo';
import Link from "next/link";
import ButtonOne from "../ButtonOne/ButtonOne";
import Menu from "../Menu/Menu";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  return (
    <nav>
      <div className="flex justify-between items-center px-4 py-3 lg:py-5 lg:px-8 border-b border-[#e6e0d9]">
        <div className="flex">
          <div>
            {/* Logo */}
            <Logo />
          </div>
          <div className="navigations hidden ml-8 lg:flex gap-8 font-medium items-center text-[#353f52]">
            {/* All Navigations */}
            <Link href="#">Personal</Link>
            <Link href="#">Business</Link>
            <Link href="#">Developer</Link>
            <Link href="#">Help</Link>
          </div>
        </div>
        <div className="flex gap-3 items-center text-xs sm:text-sm  lg:text-base">
          <ButtonOne>My PayPal</ButtonOne>
          <ButtonOne>Log out</ButtonOne>
          <div
            onClick={handleClick}
            className="lg:hidden cursor-pointer h-10 w-10 grid place-items-center rounded-full duration-300 ease-in-out text-darkBlue border border-transparent hover:border-[#e6e0d9]"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      {isMenuOpen && <Menu />}
    </nav>
  );
};

export default Navbar;
