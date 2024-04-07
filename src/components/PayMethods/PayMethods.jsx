import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { SiSamsungpay } from "react-icons/si";
import { FaAmazonPay } from "react-icons/fa";


function PayMethods() {
  return (
    <div className="w-full h-full mt-48 max-md:mt-20">
      <div className="flex gap-6 text-gray-800 max-md:flex-wrap ">
        <div className="flex flex-col md:w-1/2">
          <div className="font-semibold md:text-6xl max-md:text-4xl   max-md:text-center">
            Offer a range of payment method worldwide
          </div>
          <div className=" flex text-gray-600 flex-col md:text-3xl font-medium mt-6 text-wrap gap-4">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto corrupti consequuntur harum voluptatem neque,
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              beatae ullam numquam perspiciatis hic omnis error porro
            </div>
            <div className="text-blue-600 text-3xl flex font-medium  max-md:items-center">
              More about payment methods
              <div className="m-2 ">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 md:p-6 max-md:p-1 md:w-1/2 rounded-xl">
          <div className=" flex flex-wrap md:gap-8  max-md:gap-4 justify-center ">
            <FaCcAmex className="text-6xl" />
            <FaCcVisa className="text-6xl" />
            <FaCcMastercard className="text-6xl" />
            <FaCcDiscover className="text-6xl" />
            <FaCcPaypal className="text-6xl" />
            <FaGooglePay className="text-6xl" />
            <FaApplePay className="text-6xl" />
            <SiSamsungpay className="text-6xl" />
            <FaAmazonPay className="text-6xl" />
            <FaCcAmex className="text-6xl" />
            <FaCcVisa className="text-6xl" />
            <FaCcMastercard className="text-6xl" />
            <FaCcDiscover className="text-6xl" />
            <FaCcPaypal className="text-6xl" />
            <FaGooglePay className="text-6xl" />
            <FaApplePay className="text-6xl" />
            <SiSamsungpay className="text-6xl" />
            <FaAmazonPay className="text-6xl" />
            <FaCcAmex className="text-6xl" />
            <FaCcVisa className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayMethods;
