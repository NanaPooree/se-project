import React from "react";
import Navbarceo from "../Navbar/Navbarceo";

const Statusengforceo = () => {
  return (
    <>
      <div>
        <br />
        <div className="relative overflow-x-auto sm:rounded-lg">
          <Navbarceo />
          <br />

          <div className="flex ">
            <div className=" flex-none w-5"></div>
            <div className="flex-1 w-5  text-center">
              <button className="rounded-lg px-2 py-2 bg-sky-800 mr-4 ">
             สถานะโครงการ
              </button>
            </div>
            <div className="flex-1 h-20 w-full ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-sky-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-sky-500 dark:text-sky-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-auto p-4 ps-10 bg-white text-sm text-sky-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-sky-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ค้นหา"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex ">
            <div className=" flex-none w-10"></div>
            <div className="flex-1 w-64  text-center">
              <div className="relative overflow-x-auto  sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-sky-700 dark:sky-red-700  table-auto">
                  <thead className="text-xs text-sky-700 uppercase bg-sky-700 dark:bg-sky-100 dark:text-sky-800 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                       ชื่องาน
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ชื่อพนักงาน
                      </th>
                      <th scope="col" className="px-6 py-3">
                        สถานะ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        รายละเอียดงาน
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-sky-200 even:bg-gray-50 even:dark:bg-sky-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap dark:text-sky-800"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                     
                    </tr>
                    <tr className="odd:bg-white text-sky-100 odd:dark:bg-sky-200 even:bg-gray-50 even:dark:bg-sky-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$799</td>
                      
                    </tr>
                    <tr className="odd:bg-white text-sky-700 odd:dark:bg-sky-200 even:bg-gray-50 even:dark:bg-sky-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-sky-700"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                
                    </tr>
                    <tr className="odd:bg-white text-sky-100 odd:dark:bg-sky-200 even:bg-gray-50 even:dark:bg-sky-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Google Pixel Phone
                      </th>
                      <td className="px-6 py-4">Gray</td>
                      <td className="px-6 py-4">Phone</td>
                      <td className="px-6 py-4">$799</td>
             
                     
                    </tr>
                  </tbody>
                </table>
                <br />        
              </div>
            </div>
            <div className=" flex-none w-10 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Statusengforceo;
