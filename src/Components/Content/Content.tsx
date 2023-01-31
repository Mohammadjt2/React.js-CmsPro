import { Link } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached";
import SalesCard from "../SalesCard/SalesCard";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PieChart from "../Charts/PieChart/PieChart";
import DoughnutChart from "../Charts/DoughnutChart/DoughnutChart";
import LineChart from "../Charts/LineChart/LineChart";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function Content() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
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
            arrow={<KeyboardArrowUpIcon fontSize="small" />}
            number={4.71}
            text="مورد فروش"
          />
          <SalesCard
            icon={<CreditCardOutlinedIcon fontSize="large" />}
            percent={31}
            arrow={<KeyboardArrowUpIcon fontSize="small" />}
            number={3.721}
            text="سفارش جدید"
          />
          <SalesCard
            icon={<DesktopWindowsOutlinedIcon fontSize="large" />}
            percent={8}
            arrow={<KeyboardArrowDownIcon fontSize="small" />}
            number={2.149}
            text="محصولات کلی"
          />
          <SalesCard
            icon={<Person2OutlinedIcon fontSize="large" />}
            percent={25}
            arrow={<KeyboardArrowUpIcon fontSize="small" />}
            number={152.04}
            text="بازدیدکننده گان"
          />
        </div>
        <div className="flex justify-between items-start">
          <div className="flex-none w-2/5">
            <div className="flex justify-between items-center p-2">
              <h3 className="font-black text-lg">گزارش فروش</h3>
              <DatePicker
                className="bg-yellow-400 font-bold"
                placeholder="لطفا ماه را وارد کنید"
                onlyMonthPicker
                format="MMMM YYYY"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                style={{
                  color: "black",
                  borderRadius: "15px",
                  border: "1px #0c8af8 solid",
                  padding: " 4px 12px",
                  backgroundColor: "#facc15",
                  height: "22px",
                  boxShadow: "0 0 2px #0074d9",
                }}
              />
            </div>
            <div className="bg-yellow-100 border border-slate-400 m-1 rounded-lg p-2 mx-auto">
              <LineChart />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center px-2 py-1">
              <h3 className="font-black text-sm">فروش بالای هفتگی</h3>
              <Link to="/" className="text-blue-800">
                بیشتر
              </Link>
            </div>
            <div className="bg-yellow-100 border border-slate-400 m-1 rounded-lg p-2">
              <DoughnutChart />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center px-2 py-1">
              <h3 className="font-black text-sm">گزارش فروش</h3>
              <Link to="/" className="text-blue-800">
                بیشتر
              </Link>
            </div>
            <div className="bg-yellow-100 border border-slate-400 m-1 rounded-lg p-2">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
