import { ICONS } from "@/utils/icons";
import { IMGS } from "@/utils/imgs";
import Link from "next/link";
import React from "react";

const ShopNow = () => {
  return (
    <div className="lg:flex w-[85%] mx-auto justify-around items-center my-10 ">
      <div className="product-bunner-1 dark:text-[#000] lg:w-[60%] my-5">
        <div className="content px-[40px] py-[60px]">
          <span className="text-[16px] inline-block mb-[5px]">
            Sale 20% off all store
          </span>
          <h3 className="font-[500] hover:text-[#0989FF] hover:transition-all text-[30px] leading-[1.29] mb-[22px]">
            SmartPhone <br />
            BLU G91 Pro 2022
          </h3>
          <Link href={"/shop"} className="flex items-center gap-3">
            Shop Now{" "}
            <span className=" hover:translate-x-2 ease-linear trandition-all">
              {ICONS.arrow}
            </span>
          </Link>
        </div>
      </div>
      <div className="product-bunner-2 lg:w-[30%] my-5">
        <div className="py-[60px] px-[40px]">
          <h3 className="text-[20px] font-[600] hover:text-[#0989FF] hover:transition-all my-5 leading-7 mb-[5px] text-[#010f1c]">
            HyperX Cloud || <br /> Wireless
          </h3>
          <span className="font-[500] my-5 text-[16px] text-[#010f1c]">
            Sale 35% off
          </span>
          <Link href={"/shop"} className="flex items-center gap-3 mt-[22px]">
            Shop Now{" "}
            <span className=" hover:translate-x-2 ease-linear trandition-all">
              {ICONS.arrow}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
