import Image from "next/image";
import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <Image
        className="h-[2.25rem]"
        src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
        height={480}
        width={480}
        loading="lazy"
        alt="Logo"
      /> 
      
    </NavLink>
  );
};

export default Logo;
