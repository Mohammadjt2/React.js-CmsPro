import { Link } from "react-router-dom";
import SidbarLeftUsers from "../SidbarLeftUsers/SidbarLeftUsers";
import RecentActivities from "../RecentActivities/RecentActivities";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Swiper from "../Swiper/Swiper";
import Calendar from "../Calendar/Calendar";

function SidebarLeft() {
  return (
    <>
      <div className="text-black 2xl:w-1/4 2xl:block lg:flex lg:justify-between lg:items-start relative 2xl:mr-3">
        <div className="lg:mt-72 2xl:mt-0 lg:w-96 2xl:w-auto">
          <h3 className="font-black text-xl mr-3">تراکنش ها</h3>
          <SidbarLeftUsers
            img="../../../images/SidbarLeftUsers/1.jpg"
            name="کوین اسپیسی"
            date="6 تیر 1401"
            profit="+159 تومان"
          />
          <SidbarLeftUsers
            img="../../../images/SidbarLeftUsers/2.jpg"
            name="رابرت دنیرو"
            date="2 مهر 1401"
            profit="+71 تومان"
          />
          <SidbarLeftUsers
            img="../../../images/SidbarLeftUsers/3.jpg"
            name="جان تراولتا"
            date="14 آبان 1401"
            profit="+29 تومان"
          />
          <SidbarLeftUsers
            img="../../../images/SidbarLeftUsers/4.jpg"
            name="آرنولد شوایتگز"
            date="16 آذر 1401"
            profit="+411 تومان"
          />
          <SidbarLeftUsers
            img="../../../images/SidbarLeftUsers/5.jpg"
            name="راسل کرو"
            date="11 بهمن 1401"
            profit="+121 تومان"
          />
          <div className="flex justify-center items-stretch">
            <button className="block p-3 w-full mx-3 rounded border-dotted border-2 border-blue-600">
              مشاهده بیشتر
            </button>
          </div>
        </div>
        <div className="lg:mt-72 2xl:mt-0">
          <div className="px-3 2xl:my-3 pb-1 flex justify-between items-center">
            <span className="font-bold">فعالیت های اخیر</span>
            <span className="text-blue-800">
              <Link to="/">بیشتر</Link>
            </span>
          </div>
          <RecentActivities
            img="../../../images/RecentActivities/1.jpg"
            name="دنزل واشینگتون"
            time="07:00 صبح"
            bio="به تیم پیوسته است"
          />
          <RecentActivities
            img="../../../images/RecentActivities/2.jpg"
            name="آرنولد شوایتگز"
            time="07:21 صبح"
            bio="3 عکس جدید اضافه کرد"
          />
          <p className="opacity-75 flex justify-center">12 بهمن</p>
          <RecentActivities
            img="../../../images/RecentActivities/3.jpg"
            name="کیانو ریورز"
            time="07:03 صبح"
            bio="تغییر سونی مستر سریز ای ناین جی قیمت و توضیحات"
          />
          <RecentActivities
            img="../../../images/RecentActivities/4.jpg"
            name="جانی دپ"
            time="06:58 صبح"
            bio="تغییر نیکون ضد توضیحات"
          />
          <div className="lg:absolute 2xl:static top-0 right-0 lg:w-full">
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold">یاداشت های مهم</span>
              <div>
                <span className="border border-neutral-400 p-1 m-1 rounded-lg cursor-pointer">
                  <ChevronRightIcon />
                </span>
                <span className="border border-neutral-400 p-1 m-1 rounded-lg cursor-pointer">
                  <ChevronLeftIcon />
                </span>
              </div>
            </div>
            <div className="bg-blue-100 mx-3 p-3 rounded-md cursor-pointer border border-neutral-400">
              <Swiper />
            </div>
          </div>
        </div>
        <div className="lg:mt-72 2xl:mt-0">
          <div className="px-3 2xl:my-5 flex justify-between items-center">
            <span className="font-bold">برنامه ها</span>
            <span className="text-blue-800">
              <Link to="/">+ افزودن برنامه های جدید</Link>
            </span>
          </div>
          <div className="flex justify-center items-center mt-4 lg:mr-2">
            <Calendar />
          </div>
          <div className="text-center text-xl leading-10 font-bold py-5">
            💖》ℳ๑みสℳℳสの《💖
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarLeft;
