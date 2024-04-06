import Link from "next/link";
import React from "react";
import Button from '@mui/material/Button';


const Footer = () => {
  return (
    <footer className="px-8 py-[4vw]">
      <img
        className="h-12 mb-10"
        src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg"
      />
      <div className="flex justify-between items-center flex-wrap gap-5">
        <ul className="flex gap-6 flex-wrap">
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Home</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Contact</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Fees</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Security</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Apps</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Shops</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Enterprise</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Partners</Link></Button>
          </li>
        </ul>
        <div>
          <img
            className="w-6 h-4 cursor-pointer"
            src="https://flagemoji.net/img/flags/usa-flag.png"
            alt="us-flag"
          />
        </div>
      </div>
      <div className="w-full h-[1px] my-5">
        <hr />
      </div>
      <div className="flex justify-between items-center flex-wrap gap-0 md:gap-5">
        <ul className="flex gap-6 flex-wrap">
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">About</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Newsroom</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Jobs</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Investor Relations</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Values in Action</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Public Policy</Link></Button>
          </li>
        </ul>
        <div className="w-full h-[1px] my-5 block md:hidden">
          <hr />
        </div>
        <ul className="flex gap-6 flex-wrap">
          <li className="text-sm text-[#545D68]">&copy; 1999-2024</li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Accessibility</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Privacy</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Cookies</Link></Button>
          </li>
          <li className="text-darkBlue hover:underline text-sm font-bold">
            <Button><Link href="/" className=" text-darkBlue font-semibold">Legal</Link></Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
