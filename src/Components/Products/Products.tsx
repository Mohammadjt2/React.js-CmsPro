import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

interface IProducts {
  img?: string;
  name: string;
  group: string;
  number: number;
  status: string;
}

function Products({ img, name, group, number, status }: IProducts) {
  const [statuses, setStatuses] = useState<string>("");
  useEffect(() => {
    if (status === "فعال") {
      setStatuses("text-lime-600");
    } else {
      setStatuses("text-red-600");
    }
  }, []);

  return (
    <div>
      <div className="py-2 flex justify-between items-center bg-blue-100 rounded-lg px-2 duration-300 shadow hover:shadow-xl m-2 hover:mx-0 border border-slate-400">
        <div className="flex justify-between items-center">
          <img
            src={img}
            alt="Products"
            className="w-12 h-12 rounded-lg border-2 border-blue-600"
          />
          <div className="px-5">
            <div className="font-bold sm:w-28">{name}</div>
            <div className="hidden sm:block">{group}</div>
          </div>
          <span className="font-bold ">{number}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`${statuses} cursor-pointer px-1`}>
            <span className="hidden sm:inline">{status}</span>
            <span>
              <CheckCircleOutlineIcon />
            </span>
          </span>
          <span>
            <div className="text-blue-600 cursor-pointer px-1">
              <span className="hidden sm:inline">ویرایش</span>
              <span>
                <EditIcon />
              </span>
            </div>
          </span>
          <span>
            <div className="text-red-600 cursor-pointer px-1">
              <span className="hidden sm:inline">حذف</span>
              <span>
                <DeleteOutlineIcon />
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Products;
