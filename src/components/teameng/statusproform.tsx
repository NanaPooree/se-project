import React from "react";
import Navbar from "../Navbar/Navbareng";

const Statusform = () => {
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
                สถานะโครงการ
              </h1>
              <form className="mt-6">
                <div className="mb-2">
                  <label
                    htmlFor="Nameproject"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    ชื่องาน
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-indigo-400 focus:-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="statuspro"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    ความคืบหน้า
                  </label>
                  <label className=" text-lg font-semibold text-red-700">
                    <input type="radio" name="options" value="option1" />
                    25%
                  </label>

                  <label className=" pl-10 text-lg  font-semibold text-red-700">
                    <input type="radio" name="options" value="option2" />
                    50%
                  </label>

                  <label className=" pl-10 font-semibold text-red-700">
                    <input type="radio" name="options" value="option3" />
                    75%
                  </label>
                  <label className=" pl-10 text-lg font-semibold text-red-700">
                    <input type="radio" name="options" value="option3" />
                    100%
                  </label>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="detailjob"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    รายละเอียดงาน
                  </label>
                  <input
                    type="textarea"
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
export default Statusform;
