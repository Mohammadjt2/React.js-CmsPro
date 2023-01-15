import React from "react";
import { Link } from "react-router-dom";

function SidebarMenu({ url, iconRight, text, iconLeft }) {
  return (
    <div className="rounded-sm">
      <Link to={url}>
        {iconRight}
        <span>{text}</span>
        {iconLeft}
      </Link>
    </div>
  );
}

export default SidebarMenu;
