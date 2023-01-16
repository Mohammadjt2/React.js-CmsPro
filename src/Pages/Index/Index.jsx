import React from "react";
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
import MenuIcon from '@mui/icons-material/Menu';

import "./Index.css";

function Index() {
  return (
    <div dir="rtl" className="md:flex bg-yellow-500 px-8 py-5 h-full">
      <nav className="xl:w-60 text-inherit">
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
          <div className="pt-3 pr-2 inline md:hidden">
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <hr className="my-5 border-yellow-600 md:w-full" />
        <div className="hidden md:inline">
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<HomeIcon fontSize="large" />
              text="داشبرد"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-yellow-600 rounded w-11/12 mr-2 hidden">
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
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<WidgetsIcon fontSize="large" />
              text="چیدمان منو"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-yellow-600 rounded w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="منو ساده" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="منو بالا" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="منو کنار" />
          </ul>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<InboxIcon fontSize="large" />
              text="صندوق ورودی"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<FolderIcon fontSize="large" />
              text="مدیریت فایل"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<CreditCardIcon fontSize="large" />
              text="نمای فروش"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<ChatBubbleIcon fontSize="large" />
              text="چت"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<PostAddIcon fontSize="large" />
              text="پست"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<CalendarMonthIcon fontSize="large" />
              text="تقویم"
            />
          </div>
          <hr className="my-5 border-yellow-600" />
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<NoteAltIcon fontSize="large" />
              text="کراد"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-yellow-600 rounded w-11/12 mr-2 hidden">
            <SidebarSubMenu
              url="/"
              icon=<ElectricBoltIcon />
              text="لیست داده"
            />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="فرم" />
          </ul>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<GroupIcon fontSize="large" />
              text="کاربران"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-yellow-600 rounded w-11/12 mr-2 hidden">
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="کاربر یک" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="کاربر دو" />
            <SidebarSubMenu url="/" icon=<ElectricBoltIcon /> text="کاربر سه" />
          </ul>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<PermContactCalendarIcon fontSize="large" />
              text="پروفایل"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-yellow-600 rounded w-11/12 mr-2 hidden">
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
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<WebIcon fontSize="large" />
              text="صفحات"
              iconLeft=<ExpandMoreIcon />
            />
          </div>
          <ul className="bg-yellow-600 rounded w-11/12 mr-2 hidden">
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
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<BarChartIcon fontSize="large" />
              text="نمودار ها"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<FormatListNumberedRtlIcon fontSize="large" />
              text="فرم ها"
            />
          </div>
          <div className="py-2 pr-2 rounded-r-3xl md:ml-4 duration-300 hover:bg-yellow-200">
            <SidebarMenu
              url="/"
              iconRight=<DatasetIcon fontSize="large" />
              text="دیتا ها"
            />
          </div>
        </div>
      </nav>
      <section className="bg-yellow-200 h-full w-full rounded-3xl text-sm px-5 text-zinc-600">
        <Navbar />
        <div className="border-solid border-t-2 2xl:border-l-2 border-yellow-600 mt-1 px-2 py-6 flex justify-between items-center">
          <Content />
          <SidebarLeft />
        </div>
      </section>
    </div>
  );
}

export default Index;
