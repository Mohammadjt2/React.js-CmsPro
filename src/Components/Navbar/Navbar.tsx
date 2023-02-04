import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Navbar() {
  return (
    <div className="sm:flex sm:justify-between sm:items-center px-2">
      <div className="text-blue-800 hidden sm:inline">
        <Link to="/">اپلیکیشن</Link>
        <KeyboardArrowLeftIcon />
        <span>داشبرد</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="sm:bg-blue-300 rounded-3xl sm:pl-2">
          <input
            type="search"
            className="outline-none p-3 bg-blue-300 rounded-3xl hidden sm:inline"
            placeholder="جستجو"
          />
          <Link to="/">
            <SearchIcon />
          </Link>
        </div>
        <div className="p-5 relative mr-auto">
          <NotificationsNoneIcon />
          <span className="absolute top-5 left-6 bg-red-500 rounded-full p-1"></span>
        </div>
        <img
          src="../../../images/Avatar/Mohammadjt2.png"
          alt="avatar"
          className="rounded-full w-10"
        />
      </div>
    </div>
  );
}

export default Navbar;
