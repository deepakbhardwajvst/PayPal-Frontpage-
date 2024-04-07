import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function ModularSol() {
  return (
    <div className="w-full h-full bg-blue-950 md:py-20 ">
      <div className=" flex max-md:justify-center flex-wrap py-10  gap-10 relative">
        <div className="flex md:mx-8 max-md:mx-10 md:p-2 flex-col md:w-4/12 text-white gap-8 py-8 justify-center">
          <div className="font-medium text-4xl max-md:text-center text-gray-100">
            Our modular solution can grow with you
          </div>
          <div className="text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            numquam fugit tenetur recusandae aliquam nobis nostrum accusamus
          </div>
          <div className="text-blue-600 font-medium flex cursor-pointer">
            <div>Connect with a payments expert</div>
            <div className="m-1.5">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="md:w-6/12">
          <div className=" md:relative  ">
            <table className="w-full shadow-xl table-auto  rounded-md md:absolute   md:p-6 text-sm text-left text-gray-800  ">
              <tbody className="">
                <tr className="bg-white  border-b border-gray-300 ">
                  <th
                    scope="row"
                    className="px-6 py-4  font-bold text-xl  whitespace-nowrap text-gray-700"
                  >
                    Accept payments
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Make payouts
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Manage risk
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Fraud protection
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Reporting
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Compliance
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Developer tools
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Customer support
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                    Pricing and fees
                  </th>

                  <td className="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModularSol;
