"use client";
import { ICONS } from "@/utils/icons";
import { IMGS } from "@/utils/imgs";
import { SVGS } from "@/utils/svgs";
import { Rating } from "@mui/material";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  ScrollShadow,
  Slider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [value, setValue] = React.useState([0, 1199]);
  const [option, setOption] = useState("Default Sorting");
  const [open, setOpen] = useState(true)

  return (
    <div className="md:w-[80%] mx-auto">
      <div className="pb-[50px]">
        <h1 className="mt-[200px] font-jost font-[500] text-[44px] leading-[1] mb-[16px] ">
          Shop Grid
        </h1>
        <Link href={"/"} className="text-[#55585b]">
          Home
        </Link>
        <span className="inline-block p-[1.5px] mx-1 mt-2 bg-[#a8acb0] rounded-full"></span>
        <span className="text-[#55585b] ">Shop Grid</span>
      </div>
      <div className="flex ">
      <div className="md:flex items-center justify-between ">
        <div className="">
          <Slider
            className="w-[200px]  mb-[14px] text-[15px] font-[500]"
            formatOptions={{ style: "currency", currency: "USD" }}
            label="Price filter"
            maxValue={2000}
            minValue={0}
            step={10}
            radius="none"
            size="sm"
            onChange={() => setValue}
            hideValue
          />
          <p className="text-default-500 font-medium text-small">
            {Array.isArray(value) && value.map((b) => `${b}`).join(" – ")}
            <button className="float-end font-[400] text-[14px] py-[2px] px-[21px] bg-[#f5f5f5]">
              Filter
            </button>
          </p>
          <div className="mt-[20px] mb-[50px]">
            <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
              Product Status
            </h3>
            <CheckboxGroup
              radius="none"
              defaultValue={["On sale"]}
              label="Select cities"
            >
              <Checkbox value="On sale">On sale</Checkbox>
              <Checkbox value="In Stock">In Stock</Checkbox>
            </CheckboxGroup>
          </div>
          <div className="mt-[20px] mb-[50px]">
            <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
              Categories
            </h3>
            <div className="my-2">
              <ScrollShadow className="w-[300px] h-[200px] pr-2" size={20}>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4 ">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Headphones
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    3
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Mobile Tables
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    3
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    CPU Heat Pipes
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    2
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Smart Watch
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    1
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Bluetooth
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    2
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Clothing
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    4
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Bags
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    2
                  </span>
                </div>
                <div className="group cursor-pointer hover:text-[#0989FF] transition duration-[600ms] my-4">
                  <span className="  inline-block p-[3px] mx-2 mt-2 mb-[1px] bg-[#e7e7e7] rounded-full group-hover:bg-[#0989FF]"></span>
                  <span className="font-[500] text-[15px] group-hover:text-[#0989FF] text-[#000000bf]">
                    Shoes
                  </span>
                  <span className="float-end p-2 rounded-[8px] border border-[#eaeaea] group-hover:text-[#fff] group-hover:bg-[#0989FF] hover:text-[#fff] text-[12px] px-[6px] pt-[5px] pb-[3px] leading-[1] font-[500]">
                    2
                  </span>
                </div>
              </ScrollShadow>
            </div>
            <div className="mt-[20px] mb-[50px]">
              <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
                Top Rated Products
              </h3>
              <div className="flex items-center my-[25px]">
                <Image
                  className="w-[70px] h-[70px] object-cover bg-[#f2f2f2]"
                  src={IMGS.headphone1}
                  alt=""
                />
                <div className="ml-6">
                  <Rating value={4} />
                  <Link href={"/"} className="text-[#010f1c] block">
                    HeadPhones Wireless...
                  </Link>
                  <span className="text-[#55585b] text-[14px]">$120.000</span>
                </div>
              </div>
              <div className="flex items-center mb-[20px]">
                <Image
                  className="w-[70px] h-[70px] object-cover bg-[#f2f2f2]"
                  src={IMGS.mobile5}
                  alt=""
                />
                <div className="ml-6">
                  <Rating value={4} />
                  <Link href={"/"} className="text-[#010f1c] block">
                    Iphone 14 pro...
                  </Link>
                  <span className="text-[#55585b] text-[14px]">$120.000</span>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
                Reset Filter
              </h3>
              <button className="font-jost text-[16px] font-[400] py-[9px] px-[26px] border border-[#010f1c] text-[#fff] bg-[#010f1c] hover:bg-[#fff] hover:text-[#010f1c] transition duration-[600ms]">
                Reset Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[20px] flex items-start w-[70%]">
        <button className="hover:text-[#000] transition duration[600.s] hover:border-[#000] w-[40px] pl-[10px] h-[40px] text-center text-[18px] border border-[#010F1C1A] text-[#010f1c6a] rounded-none">
          {SVGS.option1}
        </button>
        <button className="hover:text-[#000]  transition duration[600.s] hover:border-[#000] w-[40px] pl-[10px] ml-[12px] !pr-[6px] h-[40px] text-center text-[18px] border text-[#010f1c6a] border-[#010F1C1A] rounded-none">
          {SVGS.option2}
        </button>
        <div className="relative left-[70%] flex items-center gap-2">
        <Dropdown >
      <DropdownTrigger>
        <Button onClick={()=>setOpen(!open)} variant="bordered" className="!rounded-none border-[#010F1C1A]  border px-[30px] bg-[#F9F9F9]">{option}{" "}{open === true ? ICONS.up : ICONS.down}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
        <DropdownItem onClick={()=>setOption("Default Sorting")} key="Default sorting">Default Sorting</DropdownItem>
        <DropdownItem onClick={()=>setOption("Low To High")} key="Low To High">Low To High</DropdownItem>
        <DropdownItem onClick={()=>setOption("New Added")} key="New Added">Edit file</DropdownItem>
        <DropdownItem onClick={()=>setOption("On Sale")} key="On Sale" >On Sale</DropdownItem>
      </DropdownMenu>
    </Dropdown>
   <button className="bg-[#0b0c0c] text-white hover:text-[#010f1c] hover:bg-[white] border border-[#010f1c] px-[30px] py-[8px]"><span className="flex items-center">{ICONS.option}Filter</span></button>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
