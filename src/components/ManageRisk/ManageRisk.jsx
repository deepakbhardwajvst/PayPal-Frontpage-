import React from "react";
import img2 from "../assets/img2.jpg";
import { FaArrowRight } from "react-icons/fa";

function ManageRisk() {
  return (
    <div className="h-full w-full bg-gray-100 p-6">
      <div className="flex max-md:flex-col ">
        <div className="p-10 px-12 md:w-1/2">
          <img src={img2} alt="img2" className="rounded-xl" />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 p-6">
          <div className="text-2xl font-bold text-gray-800">
            Manage risk and compliance
          </div>
          <div className="text-wrap font-semibold mt-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eos
            omnis ipsam voluptas, repudiandae reiciendis culpa quae delectus
            debitis minus modi itaque consequatur nobis libero! Sunt debitis
            enim ducimus commodi.
          </div>
          <div className="flex  font-semibold text-blue-600 mt-8">
            Learn more about managing risk
            <span className="mt-1 mx-2">
              <FaArrowRight />
            </span>
          </div>
          <div className="mx-8 p-2 flex flex-col gap-8">
            <WhyPaypal />
            <div className=" flex font-semibold text-blue-600 text-wrap">
              About Fraud Protection
              <div className="m-1">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageRisk;
