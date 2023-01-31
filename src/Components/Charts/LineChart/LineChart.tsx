import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function LineChart(): JSX.Element {
  useEffect(() => {
    const data = [
      { ماه: 1, فروش: 3 },
      { ماه: 2, فروش: 10 },
      { ماه: 3, فروش: 36 },
      { ماه: 4, فروش: 15 },
      { ماه: 5, فروش: 28 },
      { ماه: 6, فروش: 22 },
      { ماه: 7, فروش: 32 },
      { ماه: 8, فروش: 28 },
      { ماه: 9, فروش: 44 },
    ];

    new Chart("acquisitions", {
      type: "line",
      data: {
        labels: data.map((row) => row.ماه),
        datasets: [
          {
            label: "میلیون فروش در ماه",
            data: data.map((row) => row.فروش),
          },
        ],
      },
    });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="px-3 border-l-4 border-dotted border-slate-400">
            <div className="text-lg font-bold text-blue-600">44,000</div>
            <span>ماه اخیر</span>
          </div>
          <div className="px-3">
            <div className="text-lg font-bold">72,000</div>
            <span>دو ماه اخیر</span>
          </div>
        </div>
        <div>
          <select className="p-2 text-sm font-bold bg-yellow-300 rounded-md">
            <option value="فیلتر دسته بندی">فیلتر دسته بندی</option>
            <option value="کامپیوتر و لپ تاپ">کامپیوتر و لپ تاپ</option>
            <option value="گوشی هوشمند">گوشی هوشمند</option>
            <option value="الکترونیک">الکترونیک</option>
            <option value="عکاسی">عکاسی</option>
            <option value="ورزشی">ورزشی</option>
          </select>
        </div>
      </div>
      <canvas id="acquisitions"></canvas>
    </>
  );
}

export default LineChart;
