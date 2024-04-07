import React from "react";
import img2 from "../assets/img2.jpg";

function Orchestration() {
  return (
    <div className="h-full w-full mt-48 max-md:mt-20">
      <div className="flex max-md:flex-col">
        <div className="flex flex-col justify-center md:w-1/2 md:pr-4">
          <div className="text-2xl font-bold text-gray-800">
            Orchestration made simple
          </div>
          <div className="text-wrap font-semibold mt-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eos
            omnis ipsam voluptas, repudiandae reiciendis culpa quae delectus
            debitis minus modi itaque consequatur nobis libero! Sunt debitis
            enim ducimus commodi.
          </div>
        </div>
        <div className="md:p-10  max-md:p-4 md:px-10 md:w-1/2">
          <img src={img2} alt="img2" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default Orchestration;
