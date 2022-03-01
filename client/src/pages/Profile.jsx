import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const Profile = () => {
  return (
    <div className="  flex justify-center ">
      <div className="profile-erapper bg-[#9641c7] shadow-2xl shadow-indigo-700 w-11/12 rounded-md mt-2 h-32  items-center flex justify-between flex-wrap md:flex-nowrap">
        <div className="personal-profile  w-full flex items-center">
          <img
            src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk="
            alt=""
            className="h-28 object-cover rounded-md"
          />
          <div className="flex items-start flex-col w-full b h-4/5 pl-4">
            <h3 className="font-bold text-xl">Biniam Daniel</h3>
            <p className="font-light text-xs text-gray-300">
              the higher you go the wider u see
            </p>
            <p className="bg-indigo-600 w-32 px-5 flex items-center justify-around font-bold rounded-full cursor-pointer h-32">Edit<EditRoundedIcon/></p>
          </div>
        </div>
        <div className="personal-analytics bg-blue800 w-full py-8 flex justify-center">
          <div className="analytics-container bg-rd-700 w-3/5 round  flex">
            <div className="uploads h-auto w-full  flex flex-col items-center py-2">
              <h2 className="text-lg text-white font-extrabold">21</h2>
              <p className="text-sm font-extralight text-gray-400">Uploads</p>
            </div>
            <div className="uploads h-auto w-full flex flex-col items-center py-2">
              <h2 className="text-lg text-white font-extrabold">5.4k</h2>
              <p className="text-sm font-extralight text-gray-400">Likes</p>
            </div>
            <div className="uploads h-auto w-full  flex flex-col items-center py-2">
              <h2 className="text-lg text-white font-extrabold">1.2k</h2>
              <p className="text-sm font-extralight text-gray-400">Follower</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
