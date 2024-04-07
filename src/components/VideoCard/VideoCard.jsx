import React from "react";
import { FaArrowRight } from "react-icons/fa";
function VideoCard() {
  return (
    <div className="h-full w-full mt-64 max-md:mt-20">
      <div className="flex max-md:flex-col">
        <div className="md:p-10 px-12 md:w-2/3 relative">
          <img src="/img2.jpg" alt="img2" className="rounded-xl" />
        </div>
        <div className="flex flex-col max-md:p-10 justify-center md:w-1/2 pr-4">
          <div className="text-2xl font-bold text-gray-800">
            Your partner for innovation
          </div>
          <div className="text-wrap font-semibold mt-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eos
            omnis ipsam voluptas, repudiandae reiciendis culpa quae delectus
            debitis minus modi itaque consequatur nobis libero! Sunt debitis
            enim ducimus commodi.
          </div>
          <div className="flex font-semibold text-blue-600 mt-8">
            Learn more about managing risk
            <div className="mt-1 mx-2 cursor-pointer ">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
