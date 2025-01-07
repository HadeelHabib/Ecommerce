"use client";
import { ICONS } from "@/utils/icons";
import React, { useState } from "react";
import Products from "./products";

const ShowProduct = ({
  open,
  setOpen,
  data,
}: {

  open: boolean;
  setOpen: (open: boolean) => void;
  data: trendingPart;
}) => {
  const [count, setCount] = useState(1);
  const [pic, setImage] = useState("data.img");

  return (
    <div className="relative w-full bg-opacity-75 bg-white shadow-md">
      <div className="float-item ">
        <div className="">
          <div className="px-[20px] pt-[20px] relative">
            <span
              onClick={() => setOpen(!open)}
              className="absolute right-[20px] text-[25px] cursor-pointer"
            >
              {ICONS.close}
            </span>
           <div  
            >
             <Products data={data}/>
           </div>
            
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShowProduct;
