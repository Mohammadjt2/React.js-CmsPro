import React from "react";
import { Link } from "react-router-dom";

function SidebarSubMenu({ url, icon, text }) {
  return (
    <div className="px-2 py-1">
      <Link to={url}>
        {icon}
        <span>{text}</span>
      </Link>
    </div>
  );
}

export default SidebarSubMenu;
