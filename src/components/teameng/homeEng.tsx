import React from "react";
import Navbar from "../Navbar/Navbareng";

const HomeSale = () => {
  return (
    <>
      <div>
        <br />
        <div className="relative overflow-x-auto sm:rounded-lg">
          <Navbar />
          <br />

          <div className="flex ">
            <div className=" flex-none w-5"></div>
            <div className="flex-1 w-5  text-center">
              <button className="rounded-lg px-2 py-2 bg-red-800 mr-4 ">
                รายงานโครงการ
              </button>
            </div>
            <div className="flex-1 h-20 w-10 text-right">
              <button className="rounded-lg  bg-red-800 py-2 px-2 mr-4 ">
                +สร้าง
              </button>
            </div>
          </div>

          <div className="flex ">
            <div className=" flex-none w-10"></div>
            <div className="flex-1 w-64  text-center">
              <div className="relative overflow-x-auto  sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-red-700  table-auto">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        วันที่เข้าพบ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ชื่อลูกค้า
                      </th>
                      <th scope="col" className="px-6 py-3">
                        เลขที่โครงการ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        รายละเอียดงาน
                      </th>
                      <th scope="col" className="px-6 py-3">
                        เวลาเริ่ม - เวลาสิ้นสุด
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ระยะทาง
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ค่าใช้จ่าย
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Google Pixel Phone
                      </th>
                      <td className="px-6 py-4">Gray</td>
                      <td className="px-6 py-4">Phone</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">$799</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" flex-none w-10 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSale;
