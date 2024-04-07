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
          
        </div>
      </div>
    </div>
  );
}

export default ManageRisk;
