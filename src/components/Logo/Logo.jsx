import Image from "next/image";
import Link from "next/link";
import React from "react";


const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="h-[2.25rem] w-auto" 
        src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
        width={500}
        height={500}
        priority
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
