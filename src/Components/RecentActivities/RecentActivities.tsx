import React from "react";

interface IUsers {
  img: string;
  name: string;
  time: string;
  bio: string;
}

function RecentActivities({ img, name, time, bio }: IUsers) {
  return (
    <div className="flex justify-between items-center py-2">
      <img src={img} alt="avatar" className="rounded-full w-14 h-10 m-3" />
      <div className="w-full p-3 mx-3 sm:mr-10 lg:mr-0 cursor-pointer duration-300 bg-blue-100 rounded-sm shadow hover:shadow-xl hover:mx-1 border border-slate-400">
        <div className="flex justify-between items-center">
          <span className="font-bold">{name}</span>
          <span className="opacity-50">{time}</span>
        </div>
        <span className="opacity-75">{bio}</span>
      </div>
    </div>
  );
}

export default RecentActivities;
