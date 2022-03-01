import React from "react";
import Links from "./Links";


const SideBar = () => {
  return (
    <div className="h overflow-hidden bg-[#8a36bb] lg:block hidden flex-ato w-72 rounded-lg">
      <div className="Logo h-24 flex items-center justify-center bg-[#8a36bb]">
        <h1 className="bg-[#993eda] w-full text-center flex items-center justify-center rounded-2xl shadow-2xl shadow-indigo-700  text-white">
          CYPE
        </h1>
      </div>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default SideBar;
