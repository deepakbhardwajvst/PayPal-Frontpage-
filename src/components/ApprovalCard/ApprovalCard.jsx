import React from "react";


function ApprovalCard() {
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="flex max-md:flex-col ">
        <div className="p-10 px-12 md:w-1/2">
          <img src="/img2.jpg"alt="img2" className="rounded-xl" />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 md:pr-4 p-10">
          <div className="text-2xl font-bold text-gray-800">
            Boost approval rates
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

export default ApprovalCard;
