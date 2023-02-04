import React from "react";
import Products from "../Products/Products";

function TopProducts() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">محصولات برتر ماه</span>
        <div>
          <input
            type="button"
            value="خروجی Exl"
            className="text-black block sm:inline p-2 bg-blue-400 rounded-lg font-bold my-4 cursor-pointer mx-1"
          />
          <input
            type="button"
            value="خروجی Pdf"
            className="text-black block sm:inline p-2 bg-blue-400 rounded-lg font-bold my-4 cursor-pointer mx-1 "
          />
        </div>
      </div>
      <div className="italic font-semibold flex justify-between items-center mx-3 text-xs">
      <div className="hidden sm:block">
          <span className="px-3">تصویر</span>
          <span className="px-3">محصول </span>
          <span className="sm:px-16">موجودی </span>
        </div>
        <div className="hidden sm:block">
          <span className="px-4">وضعیت </span>
          <span className="px-4">ویرایش </span>
          <span className="px-4">حذف </span>
        </div>
      </div>
      <div>
        <Products
          img="../../../images/Products/1.jpg"
          name="لپتاپ Dell"
          group="لپتاپ"
          number={110}
          status="فعال"
        />
        <Products
          img="../../../images/Products/2.jpg"
          name="آیفون 13"
          group="گوشی"
          number={113}
          status="فعال"
        />
        <Products
          img="../../../images/Products/3.jpg"
          name="دوربین A3"
          group="عکاسی"
          number={0}
          status="غیرفعال"
        />
        <Products
          img="../../../images/Products/4.jpg"
          name="لپتاپ Hp"
          group="لپتاپ"
          number={152}
          status="فعال"
        />
        <Products
          img="../../../images/Products/5.jpg"
          name="کفش Nike"
          group="ورزشی"
          number={140}
          status="فعال"
        />
      </div>
    </div>
  );
}

export default TopProducts;
