import { yellow } from "@mui/material/colors";
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Menu = () => {

  const [isprofiledropdown, setisprofiledropdown] = useState(false);
  const handleprofileclick = () => {
    setisprofiledropdown(!isprofiledropdown);
  }
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) =>

              isActive ? "text-orange-500" : "text-[#424242]"

            }>
              <p >
                Dashboard
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({ isActive }) =>

              isActive ? "text-orange-500" : "text-[#424242]"

            }>
              <p >
                Orders
              </p>
            </NavLink>
          </li>
          <li>

            <NavLink to="/holdings" className={({ isActive }) =>

              isActive ? "text-orange-500" : "text-[#424242]"

            }>
              <p >
                Holdings
              </p>
            </NavLink>
          </li>
          <li>

            <NavLink to="/positions" className={({ isActive }) =>

              isActive ? "text-orange-500" : "text-[#424242]"

            }>
              <p >
                Positions
              </p>
            </NavLink>

          </li>
          <li>

            <NavLink to="/funds" className={({ isActive }) =>

              isActive ? "text-orange-500" : "text-[#424242]"

            }>
              <p >
                Funds
              </p>
            </NavLink>

          </li>
          <li>

            <NavLink to="/apps" className={({ isActive }) =>

              isActive ? "text-orange-500" : "text-[#424242]"

            }>
              <p >
                Apps
              </p>
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleprofileclick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
