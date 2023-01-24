import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ISidebarMenu {
  className?: string;
  url: string;
  iconRight: JSX.Element;
  text: string;
  iconLeft?: JSX.Element;
}

function SidebarMenu({ url, iconRight, text, iconLeft }: ISidebarMenu) {
  const [hoverIcon, setHoverIcon] = useState<string>("");
  const hoverIconHandler = (): void => {
    setHoverIcon("animate-bounce");
  };
  const blurIconHandler = (): void => {
    setHoverIcon("animate-none");
  };

  return (
    <div
      className="p-2 rounded-r-3xl duration-300 md:hover:bg-yellow-200 hover:cursor-pointer"
      onMouseOver={hoverIconHandler}
      onMouseOut={blurIconHandler}
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
