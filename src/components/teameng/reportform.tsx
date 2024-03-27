import React from "react";
import Navbar from "../Navbar/Navbareng";

const Reportform = () => {
  return (
    <>
      <div>
        <br />
        <div className="relative overflow-x-auto sm:rounded-lg">
          <Navbar />
          <br />
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  ring-2  lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-red-700 ">
                รายงานโครงการ
              </h1>
              <form className="mt-6">
                <div className="mb-2">
                  <label
                    htmlFor="datemeet"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    วันที่เข้าพบ
                  </label>
                  <input
                    type="date"
                    className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-indigo-400 focus:-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="chackin"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    การเช็คอิน
                  </label>
                  <label className=" text-sm font-semibold text-red-700">
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-indigo-400 focus:-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <button className="block py-2 mt-2 h-10 px-6 font-semibold rounded-md text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                  เริ่มต้น
                  </button>
                  </label>
                  
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="chackin"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    การเช็คเอาท์
                  </label>
                  <label className=" text-sm font-semibold text-red-700">
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-indigo-400 focus:-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <button className="block py-2 mt-2 h-10 px-6 font-semibold rounded-md text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                  สิ้นสุด
                  </button>
                  </label>
                  
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="distance"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    ระยะทาง
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-ted-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="expenses"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    ค่าใช้จ่าย
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-ted-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                  <div className="flex-auto flex space-x-4">
                    <button className="h-10 px-6 font-semibold rounded-md text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                      บันทึก
                    </button>
                  </div>
                  <div className="mt-0">
                    <button className="h-10 px-6 font-semibold rounded-md tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                      ลบ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reportform;
