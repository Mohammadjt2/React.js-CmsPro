import { Link } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached";
import SalesCard from "../SalesCard/SalesCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Content() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center pl-4">
          <h3 className="font-black text-xl">گزارش کلی</h3>
          <div className="text-blue-800">
            <Link to="/">
              <CachedIcon />
              <span>بروز رسانی</span>
            </Link>
          </div>
        </div>
        <div className="sm:flex-wrap sm:flex sm:justify-center sm:items-center">
          <SalesCard
            icon={<ShoppingCartOutlinedIcon fontSize="large" />}
            percent={22}
            arrow={<KeyboardArrowUpIcon fontSize="small"/>}
            number={4.71}
            text="مورد فروش"
          />
          <SalesCard
            icon={<CreditCardOutlinedIcon fontSize="large" />}
            percent={31}
            arrow={<KeyboardArrowUpIcon fontSize="small"/>}
            number={3.721}
            text="سفارش جدید"
          />
          <SalesCard
            icon={<DesktopWindowsOutlinedIcon fontSize="large" />}
            percent={8}
            arrow={<KeyboardArrowDownIcon fontSize="small"/>}
            number={2.149}
            text="محصولات کلی"
          />
          <SalesCard
            icon={<Person2OutlinedIcon fontSize="large" />}
            percent={25}
            arrow={<KeyboardArrowUpIcon fontSize="small"/>}
            number={152.04}
            text="بازدیدکننده گان"
          />
        </div>
      </div>
    </>
  );
}

export default Content;
