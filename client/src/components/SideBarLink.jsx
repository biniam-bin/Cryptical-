import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SideBarLink = ({ isActive, name, path, handleChange, Icon }) => {
  return (
    // <Router>
    <div
      style={
        isActive
          ? {
              backgroundColor: "#b03ec7",
              boxShadow: "0.1px 0px 5px 5px #6441e0",
            color: "#eee",
              zIndex: 100
            }
          : {}
      }
      className="text-gray-400 bg-[#8a36bb] cursor-pointer h-14 mt-1 flex items-center justify-start pl-6 rounded-lg"
      onClick={(e) => handleChange(name)}
    >
      <Link to={path} className="flex items-center w-full">
        <Icon />
        <span
          className="mx-3 items-center flex"
          style={{ fontFamily: "Fredoka", fontSize: 18 }}
        >
          {name}
        </span>
      </Link>
    </div>
    // </Router>
  );
};

export default SideBarLink;
