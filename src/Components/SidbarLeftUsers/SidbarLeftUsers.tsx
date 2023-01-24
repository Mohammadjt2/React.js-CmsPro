import React from "react";

interface IUsers {
  img: string;
  name: string;
  date: string;
  profit: string;
}

function SidbarLeftUsers({ img, name, date, profit }: IUsers) {
  return (
    <div className="flex justify-between items-center m-2 px-2 py-2 2xl:p-3 2xl:m-3 cursor-pointer duration-300 bg-yellow-100 rounded-xl shadow hover:shadow-xl hover:mx-1 border border-slate-400 sm:px-6 lg:px-2">
      <div className="flex justify-between items-center">
        <img src={img} alt="avatar" className="rounded-full w-10 h-10" />
        <div className="mr-4 flex justify-between items-center lg:block">
          <h3 className="font-bold">{name}</h3>
          <span className="opacity-75 sm:block mr-5 lg:mr-0">{date}</span>
        </div>
      </div>
      <span className="text-lime-600 text-xs 2xl:text-sm">{profit}</span>
    </div>
  );
}

export default SidbarLeftUsers;
