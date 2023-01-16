import React from "react";
import { Link } from "react-router-dom";

function SidebarSubMenu({ url, icon, text }) {
  return (
    <div className="px-2 py-1 hover:bg-yellow-200">
      <Link to={url}>
        {icon}
        <span className="hidden pr-2 xl:inline">{text}</span>
      </Link>
    </div>
  );
}

export default SidebarSubMenu;
