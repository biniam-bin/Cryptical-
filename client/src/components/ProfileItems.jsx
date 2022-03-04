import React from 'react'
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";



const ProfileItems = () => {
  return (
    <div
      style={{ width: "50rem" }}
      className=" h-auto sm:w-full my-2  bg-[#9641c7] shadow-2xl shadow-blue-800 sm:mx-0 rounded-md md:mx-3 self-start flex-col"
    >
      <div className="info-section flex justify-between h-auto">
        <img
          src="https://picsum.photos/300/200"
          className="h-36 w-2/5 rounded-md"
          alt=""
        />
        <div className="text-info  w-full items-center justify-center text-center h-36 flex flex-col">
          <h2 className="text-white font-bold m-3">Game Title</h2>
          <p className="text-gray-200 font-extralight text-sm  -mt-8 mx-2 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
            saepe!
          </p>
        </div>
      </div>

      <div className=" w-full h-14 flex items-end justify-evenly ">
        <div className="md:w-20 w-0"></div>
        <div className="view-btn flex items-end hover:bg-[#3e57e6] bg-indigo-500 cursor-pointer h-auto p-1 mb-1 px-3 rounded-md justify-between w-24 text-sm">
          View <RemoveRedEyeRoundedIcon style={{ fontSize: "20" }} />
        </div>
        <div className="view-btn flex items-end hover:bg-[#3e57e6] bg-indigo-500 cursor-pointer h-auto p-1 mb-1 px-3 rounded-md justify-between w-24 text-sm">
          Edit <EditRoundedIcon style={{ fontSize: "20" }} />
        </div>
        <div className="view-btn flex items-end hover:bg-[#3e57e6] bg-indigo-500 cursor-pointer h-auto p-1 mb-1 px-3 rounded-md justify-between w-24 text-sm">
          Remove{" "}
          <DeleteOutlinedIcon style={{ fontSize: "20", color: "#ff0800" }} />
        </div>
      </div>
    </div>
  );
}

export default ProfileItems