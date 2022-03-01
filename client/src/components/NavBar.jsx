import React, { useState } from "react";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";



const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="h-12 flex z-40 justify-between items-center text-gray-200 rounded bg-[#9641c7] shadow-2xl shadow-indigo-700">
      <div className="search-secton bg-red-60 h-12 w-4/5 bg-back justify-center flex items-center">
        <form className="h-8 md:w-2/5 w-10/12 text-black">
          <span className="input-container bg-[#cb6efa]  flex rounded-md">
            <select className="w-22 text-xs text-gray-900 text-center bg-transparent focus:outline-none">
              <option>All</option>
              <option>Games</option>
              <option>Apps</option>
              <option>Templates</option>
            </select>
            <input
              type="text"
              className="rounded-md bg-transparent w-full text-xs px-2 placeholder:text-[#dcc1c1] text-gray-200 focus:outline-none"
              placeholder="Search Here..."
            />
            <span className="text-[#dad7d7] flex items-center">
              <SearchRoundedIcon />
            </span>
          </span>
        </form>
      </div>
      <div className="profile-secton flex items-center justify-center bg-blue-60 h-12 w-1/5">
        <div className="">
          <span
            onClick={() => setDropDown(!dropDown)}
            className="md:flex hidden items-center cursor-pointer hover:bg-[#ac5cda] p-2"
          >
            <span className="items-center hidden md:flex">Biniam Daniel</span>
            <AccountBoxRoundedIcon className="cursor-pointer md:mx-2" />
          </span>
          {dropDown && (
            <div className="dropDown w-[42] z-50 mt rounded-md h-12 md:flex hidden bg-[#cb6efa]">
              <div className="dropDownItem w-full bg-red00 h-12 cursor-pointer flex items-center justify-center hover:bg-[#ac5cda]">
                <LogoutRoundedIcon style={{color: "red"}}/>
                <span className="flex items-center mx-3 " style={{color: "black"}}>Logout</span>
              </div>
            </div>
          )}
        </div>
        <div className="humburger flex items-center lg:hidden">
          <DensityMediumRoundedIcon className="mx-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
