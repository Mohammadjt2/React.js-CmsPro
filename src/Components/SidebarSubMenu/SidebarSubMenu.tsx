import { Link } from "react-router-dom";

interface ISidebarSubMenu {
  url: string;
  icon: JSX.Element;
  text: string;
}

function SidebarSubMenu({ url, icon, text }: ISidebarSubMenu) {
  return (
    <div className="px-2 py-1 rounded-r-3xl md:hover:bg-yellow-200 hover:cursor-pointer">
      <Link to={url}>
        {icon}
        <span className="md:hidden pr-2 xl:inline">{text}</span>
      </Link>
    </div>
  );
}

export default SidebarSubMenu;
