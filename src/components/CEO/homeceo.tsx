import Navbarceo from "../Navbar/Navbarceo";
import React from "react";

const HomeCEO = () => {
  return (
    <div>
      <br />
      <div className="relative overflow-x-auto sm:rounded-lg">
        <Navbarceo />
        <br />
        <br />
        <br />
        <div className="flex  flex-col  items-center justify-center space-y-6 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <div className=" space-x-4 text-center w-full max-w-sm overflow-hidden rounded-lg bg-sky-200  duration-300 ">
            <div className="space-x-4 bg-sky-700 py-4 text-center">
              <h1 className="mt-2 text-center text-2xl font-bold  text-white">
                ทีมฝ่ายขาย
              </h1>
            </div>
            <br />
            <button className="inline-block w-80 rounded-md bg-sky-100 px-10 py-2 font-semibold text-lg text-sky-700 shadow-md duration-75 hover:bg-sky-400 hover:shadow-xl">
              รายงานการเข้าพบลูกค้า
            </button>
            <br />
            <div className="py-5">
              <button className="inline-block w-80 rounded-md bg-sky-100 px-10 py-2 font-semibold text-lg text-sky-700 shadow-md duration-75 hover:bg-sky-400 hover:shadow-xl">
                รายงานการเดินทาง
              </button>
            </div>
          </div>

          <div className=" space-x-4 text-center w-full max-w-sm overflow-hidden rounded-lg bg-sky-200 shadow-md duration-300  hover:shadow-xl">
            <div className="space-x-4 bg-sky-700 py-4 text-center">
              <h1 className="mt-2 text-center text-2xl font-bold  text-white">
                ทีมฝ่ายวิศวกร
              </h1>
            </div>
            <br />
            <div className="py-3">
              <button className="inline-block w-80 rounded-md bg-sky-100 px-10 py-2 font-semibold text-lg text-sky-700 shadow-md duration-75 hover:bg-sky-400 hover:shadow-xl">
                รายงานโครงการ
              </button>
            </div>
            <div className="py-3">
              <button className="inline-block w-80 rounded-md bg-sky-100 px-10 py-2 font-semibold text-lg text-sky-700 shadow-md duration-75 hover:bg-sky-400 hover:shadow-xl">
                สถานะโครงการ
              </button>
            </div>

            <div className="py-3">
              <button className="inline-block w-80 rounded-md bg-sky-100 px-10 py-2 font-semibold text-lg text-sky-700 shadow-md duration-75 hover:bg-sky-400 hover:shadow-xl">
                รายงานการเดินทาง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCEO;
