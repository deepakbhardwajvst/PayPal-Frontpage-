import React from "react";
import Button from '@mui/material/Button';
function Hero() {
  return (
    <div className="w-full h-full p-2 mt-10 max-md:mt-5 ">
      <div className="flex flex-col  items-center justify-between">
        <span className="text-5xl max-md:text-2xl font-medium">
          Global Payment
        </span>
        <span className="text-5xl max-md:text-2xl text-center font-medium">
          processing solutions
        </span>
        <div className="flex flex-col text-balance text-center">
          <span className="font-medium mt-5">
            Grow optimise your business with a flexible,end-to-end payments
            platform
          </span>
          <span className="font-medium">powered by Braintree technology</span>
        </div>
        <Button
          variant="outlined"
          className="bg-blue-900 md:mt-10  text-white px-4 max-md:mt-5  p-3 rounded-full "
        >
          Connect with a Payments Expert
        </Button>
      </div>
      <div className="mt-16 bg-gray-100 max-md:p-4 rounded-xl">
        <div class="mt-3  flex -space-x-2 relative flex-wrap max-md:gap-4 max-md:justify-center ">
          <img
            class="inline-block w-7/12  rounded-xl hover:scale-105 hover:z-10 transition duration-500 ease-in-out"
            src="/img1.jpg"
            alt=""
          />
          <img
            class="inline-block w-8/12 shadow-xl -top-7 rounded-xl md:absolute right-20 hover:z-10 hover:scale-105 transition duration-500 ease-in-out"
            src="/img2.jpg"
            alt=""
          />
          <div className=" bg-white shadow-xl p-4 md:absolute right-10 rounded-xl -top-10 flex gap-5  flex-col  hover:scale-105 transition duration-500 ease-in-out  md:w-6/12">
            <img class="rounded-xl" src="/img3.jpg" alt="" className="" />
            <div className="flex justify-between p-2">
              <div className="text-gray-400  font-medium text-wrap text-xl">
                Speckled bowl set
                <div className="font-normal  text-wrap text-base">
                  Set of two
                </div>
              </div>
              <div className="text-gray-400  font-medium text-xl">$24.00</div>
            </div>
            <Button
              variant="outlined"
              className=" bg-slate-300 rounded-full py-3 font-medium "
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
