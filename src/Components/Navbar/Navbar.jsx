import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-2">
      <div>
        <Link to="/">اپلیکیشن</Link>
        <KeyboardArrowLeftIcon />
        <span>داشبرد</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-yellow-300 rounded-3xl pl-2">
          <input
            type="search"
            className="outline-none p-3 bg-yellow-300 rounded-3xl"
            placeholder="جستجو"
            
          />
          <Link to="/">
            <SearchIcon />
          </Link>
        </div>
        <div className="p-5 relative">
          <NotificationsNoneIcon />
          <span className="absolute top-5 left-6 bg-red-500 rounded-full p-1"></span>
        </div>
        <div>
          <img
            src="../../../images/avatar/Mohammadjt2.png"
            alt="avatar"
            className="rounded-full w-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
