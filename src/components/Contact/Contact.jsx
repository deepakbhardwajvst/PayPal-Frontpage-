import React from "react";
import img2 from "../../assets/img2.jpg";

function Contact() {
  return (
    <div className="bg-gray-100 w-full h-full md:mt-48 max-md:mt-20">
      <div className="md:mx-10 max-md:mx-4 flex max-md:flex-wrap gap-4 justify-evenly py-16">
        <div class=" bg-white border  border-gray-200 rounded-lg shadow  ">
          <img
            className="rounded p-4  w-full h-64 object-cover"
            src={img2}
            alt="img2"
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800  ">
              Contact our sales team
            </h5>

            <p class="mb-3 font-semibold text-gray-600  ">
              Learn how payments can be leveraged as a catalyst for growth
            </p>
            <button class="  items-center px-5 text-sm font-medium text-center py-4  text-white bg-blue-600 rounded-full hover:bg-blue-700  ">
              Contact sales
            </button>
          </div>
        </div>
        <div class=" bg-white border  border-gray-200 rounded-lg shadow  ">
          <img
            className="rounded p-4  w-full h-64 object-cover"
            src={img2}
            alt="img2"
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800  ">
              Explore Developer documentation
            </h5>

            <p class="mb-3 font-semibold text-gray-600 text-wrap ">
              Learn how payments can be leveraged as a catalyst for growth
            </p>
            <button class="  items-center px-5 text-sm font-medium text-center py-4  text-white bg-blue-700 rounded-full hover:bg-blue-800  ">
              Visit Developer Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
