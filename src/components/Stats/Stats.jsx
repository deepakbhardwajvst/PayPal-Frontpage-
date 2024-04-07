import React from "react";

function Stats() {
  return (
    <div className="w-full h-full mt-48 max-md:mt-20">
      <div className="flex flex-wrap justify-center max-md:flex-col max-md:justify-center gap-8">
        <div className="flex flex-col  md:w-1/2 gap-8">
          <div className=" text-9xl max-md:text-5xl font-bold text-blue-900 ">
            401%
          </div>
          <div className="font-medium text-3xl max-md:text-xl">
            ROI for the composite merchant,estimated by forester with paypal
            enterprise payment solutions
          </div>
        </div>
        <vr className="w-px max-lg:hidden bg-gray-400 border-0" />
        <div className="flex flex-col gap-8  md:w-5/12">
          <div className=" text-5xl font-bold text-blue-900 ">30%</div>
          <div className="font-medium   text-3xl max-md:text-xl">
            Increase in conversion rate for merchants using paypal checkout
          </div>
          <hr className="h-px max-md:hidden bg-gray-400 border-0" />
          <div className=" text-5xl font-bold text-blue-900 ">4bps</div>
          <div className="font-medium  text-3xl max-md:text-xl">
            In the US,Lorem ipsum, dolor sit amet consectetur adipisicing
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
