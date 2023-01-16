import React from "react";
import { Link } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached";

function Content() {
  return (
    <div className="flex justify-between items-center w-full pl-4">
      <h3 className="font-black text-xl">گزارش کلی</h3>
      <div className="text-blue-800">
        <Link to="/">
          <CachedIcon />
          <span>بروز رسانی</span>
        </Link>
      </div>
    </div>
  );
}

export default Content;
