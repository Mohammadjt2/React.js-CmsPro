import React from "react";
import { Link } from "react-router-dom";

function SidebarMenu({ url, iconRight, text, iconLeft }) {
  return (
    <div className="rounded-sm">
      <Link to={url}>
        <span className="">{iconRight}</span>
        <span className="hidden pr-2 xl:inline">{text}</span>
        <div className="hidden xl:inline">{iconLeft}</div>
      </Link>
    </div>
  );
}

export default SidebarMenu;
