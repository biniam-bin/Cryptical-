import React, { useState } from "react";
import SideBarLink from "./SideBarLink";

import DashboardIcon from "@mui/icons-material/Dashboard";

import PersonIcon from "@mui/icons-material/Person";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const Links = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleChange = (name) => {
    setActiveItem(name);
  };
  return (
    <div className="mt-20">
      <SideBarLink
        isActive={activeItem === "Shop" ? true : false}
        name={"Shop"}
        path={"/main/shop"}
        Icon={StorefrontRoundedIcon}
        handleChange={(name) => handleChange(name)}
      />
      <SideBarLink
        isActive={activeItem === "Category" ? true : false}
        name={"Category"}
        path={"/main/category"}
        Icon={CategoryRoundedIcon}
        handleChange={(name) => handleChange(name)}
      />
      <SideBarLink
        isActive={activeItem === "Profile" ? true : false}
        name={"Profile"}
        path={"/main/profile"}
        Icon={PersonIcon}
        handleChange={(name) => handleChange(name)}
      />
      <SideBarLink
        isActive={activeItem === "Dashboard" ? true : false}
        name={"Dashboard"}
        path={"/main/dashboard"}
        Icon={DashboardRoundedIcon}
        handleChange={(name) => handleChange(name)}
      />
    </div>
  );
};

export default Links;
