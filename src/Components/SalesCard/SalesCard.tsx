import { useEffect, useState } from "react";

interface ISalesCard {
  icon: JSX.Element;
  percent: number;
  arrow: JSX.Element;
  number: number;
  text: string;
}

function SalesCard({ icon, percent, arrow, number, text }: ISalesCard) {
  const [arrows] = useState<string>(
    arrow.type.type.render.displayName
  );
  const [percentBgColor, setPercentBgColor] = useState<string>("");

  useEffect(() => {
    if (arrows === "KeyboardArrowUpIcon") {
      return setPercentBgColor("bg-lime-600");
    } else if (arrows === "KeyboardArrowDownIcon") {
      return setPercentBgColor("bg-red-600");
    }
  },[]);

  return (
    <div className="sm:w-6/12 xl:w-3/12">
      <div className=" my-3 p-4 bg-blue-300 border border-1 border-slate-400 rounded-lg cursor-pointer duration-300 shadow hover:shadow-xl h-48">
        <div className="flex justify-between items-start">
          <span className="text-blue-600">{icon}</span>
          <span
            className={`${percentBgColor} rounded-2xl p-1 text-white`}
            title={`${percent} درصد`}
          >
            <span className="text-xs">
              {percent}
              <span>%</span>
            </span>
            <span>{arrow}</span>
          </span>
        </div>
        <h2 className="font-bold text-2xl mt-16">{number}</h2>
        <span className="opacity-75 text-lg">{text}</span>
      </div>
    </div>
  );
}

export default SalesCard;
