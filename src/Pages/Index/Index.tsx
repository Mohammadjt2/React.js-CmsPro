import { useState } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
import SidebarSubMenu from "../../Components/SidebarSubMenu/SidebarSubMenu";
import Navbar from "../../Components/Navbar/Navbar";
import SidebarLeft from "../../Components/SidebarLeft/SidebarLeft";
import Content from "../../Components/Content/Content";
import LayersIcon from "@mui/icons-material/Layers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WidgetsIcon from "@mui/icons-material/Widgets";
import InboxIcon from "@mui/icons-material/Inbox";
import FolderIcon from "@mui/icons-material/Folder";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import GroupIcon from "@mui/icons-material/Group";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import WebIcon from "@mui/icons-material/Web";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import DatasetIcon from "@mui/icons-material/Dataset";
import MenuIcon from "@mui/icons-material/Menu";

import "./Index.css";

function Index() {
  const [showMenu, setShowMenu] = useState<string>("hidden");

  const menuHandler = (): void => {
    if (showMenu === "hidden") {
      setShowMenu("block");
    } else {
      setShowMenu("hidden");
    }
  };

  return (
    <div
      dir="rtl"
      className="md:flex md:justify-center md:items-start bg-yellow-500 md:px-8 px-2 md:py-5 py-1 h-full"
    >
      <nav className="xl:w-1/6 text-inherit">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex justify-start items-center text-2xl pt-3 pr-2"
            >
              <LayersIcon fontSize="large" />
              <div className="hidden xl:inline">
                رو
                <span className="font-black">بیک</span>
              </div>
            </Link>
          </div>
          <div className="pt-3 pr-2 inline md:hidden" onClick={menuHandler}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <hr className="my-5 border-yellow-600 md:w-full" />
        <div className={`${showMenu} md:inline`}>
          <SidebarMenu
            url="/"
            iconRight=<HomeIcon fontSize="large" />
            text="داشبرد"
            iconLeft=<ExpandMoreIcon />
          />
          <ul className="bg-yellow-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="نمای شماره یک"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="نمای شماره دو"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="نمای شماره سه"
            />
          </ul>
          <SidebarMenu
            className="md:hover:bg-yellow-200"
            url="/"
            iconRight=<WidgetsIcon fontSize="large" />
            text="چیدمان منو"
            iconLeft=<ExpandMoreIcon />
          />
          <ul className="bg-yellow-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="منو ساده" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="منو بالا" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="منو کنار" />
          </ul>
          <SidebarMenu
            url="/"
            iconRight=<InboxIcon fontSize="large" />
            text="صندوق ورودی"
          />
          <SidebarMenu
            url="/"
            iconRight=<FolderIcon fontSize="large" />
            text="مدیریت فایل"
          />
          <SidebarMenu
            url="/"
            iconRight=<CreditCardIcon fontSize="large" />
            text="نمای فروش"
          />
          <SidebarMenu
            url="/"
            iconRight=<ChatBubbleIcon fontSize="large" />
            text="چت"
          />
          <SidebarMenu
            url="/"
            iconRight=<PostAddIcon fontSize="large" />
            text="پست"
          />
          <SidebarMenu
            url="/"
            iconRight=<CalendarMonthIcon fontSize="large" />
            text="تقویم"
          />
          <hr className="my-5 border-yellow-600" />
          <SidebarMenu
            url="/"
            iconRight=<NoteAltIcon fontSize="large" />
            text="کراد"
            iconLeft=<ExpandMoreIcon />
          />
          <ul className="bg-yellow-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="لیست داده"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="فرم" />
          </ul>
          <SidebarMenu
            url="/"
            iconRight=<GroupIcon fontSize="large" />
            text="کاربران"
            iconLeft=<ExpandMoreIcon />
          />
          <ul className="bg-yellow-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="کاربر یک" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="کاربر دو" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="کاربر سه" />
          </ul>
          <SidebarMenu
            url="/"
            iconRight=<PermContactCalendarIcon fontSize="large" />
            text="پروفایل"
            iconLeft=<ExpandMoreIcon />
          />
          <ul className="bg-yellow-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="نمای کلی یک"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="نمای کلی دو"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="نمای کلی سه"
            />
          </ul>
          <SidebarMenu
            url="/"
            iconRight=<WebIcon fontSize="large" />
            text="صفحات"
            iconLeft=<ExpandMoreIcon />
          />
          <ul className="bg-yellow-400 rounded-lg w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="بلاگ" />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="قیمت گذاری"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="فاکتور" />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="پرسش و پاسخ"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="ورود" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="ثبت نام" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="صفحه خطا" />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="بروزرسانی پروفایل"
            />
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="تغییر رمز عبور"
            />
          </ul>
          <hr className="my-5 border-yellow-600" />
          <SidebarMenu
            url="/"
            iconRight=<BarChartIcon fontSize="large" />
            text="نمودار ها"
          />
          <SidebarMenu
            url="/"
            iconRight=<FormatListNumberedRtlIcon fontSize="large" />
            text="فرم ها"
          />
          <SidebarMenu
            url="/"
            iconRight=<DatasetIcon fontSize="large" />
            text="دیتا ها"
          />
        </div>
      </nav>
      <section className="bg-yellow-200 h-full w-full rounded-3xl text-sm sm:px-5 text-zinc-600">
        <Navbar />
        <div className="border-solid border-t-2 2xl:border-l-2 border-yellow-600 mt-1 px-2 py-6 2xl:flex 2xl:justify-between 2xl:items-start">
          <div className="w-full">
            <Content />
          </div>
          <SidebarLeft />
        </div>
      </section>
    </div>
  );
}

export default Index;
