import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "./Menu";
import Logo from './../Logo/Logo';
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
          <div className="navigations hidden ml-8 lg:flex gap-8 items-center text-[#001c64]">
            {/* All Navigations */}
            <NavLink>Personal</NavLink>
            <NavLink>Business</NavLink>
            <NavLink>Developer</NavLink>
            <NavLink>Help</NavLink>
          </div>
        </div>
        <div className="flex gap-3 items-center text-xs sm:text-sm lg:text-base">
          <Button>My PayPal</Button>
          <Button>Log out</Button>
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
