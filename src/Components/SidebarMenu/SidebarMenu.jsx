import React, { useState } from "react";
import { Link } from "react-router-dom";

function SidebarMenu({ url, iconRight, text, iconLeft }) {
  const [hoverIcon, setHoverIcon] = useState("");
  const hoverIconHandler = () => {
    setHoverIcon("animate-bounce");
  };
  const blurIconHandler = () => {
    setHoverIcon("animate-none");
  };

  return (
    <div
      className="p-2 rounded-r-3xl duration-300 md:hover:bg-yellow-200 " onMouseOver={hoverIconHandler} onMouseOut={blurIconHandler}
    >
      <div className="rounded-sm">
        <Link to={url}>
          <span className="flex justify-between items-center">
            <span>
              <span>{iconRight}</span>
              <span className="md:hidden pr-2 xl:inline">{text}</span>
            </span>
            <span className={`md:hidden xl:inline pr-auto ml-2 ${hoverIcon}`}>
              {iconLeft}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarMenu;
