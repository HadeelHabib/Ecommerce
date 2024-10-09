import { ICONS } from "@/utils/icons";
import React from "react";

const ShowProduct = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className="relative w-full bg-opacity-75 bg-white shadow-md">
      <div className="float-item flex">
        <div className="">
          <span onClick={() => setOpen(!open)} className="absolute right-[20px] text-[25px] cursor-pointer">
            {ICONS.close}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
