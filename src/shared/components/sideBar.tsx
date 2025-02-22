import { IMGS } from '@/utils/imgs'
import { Rating } from '@mui/material'
import { Checkbox, CheckboxGroup, ScrollShadow, Slider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    const [value, setValue] = React.useState([0, 1199]);

  return (
    <div>
      <div className="w-full">
            <Slider
              className="  mb-[14px] text-[15px] font-[500]"
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
              <button className="float-end font-[400] text-[14px] py-[2px] px-[21px] bg-[#f5f5f5] dark:text-[#000]">
                Filter
              </button>
            </p>
            <div className="mt-[20px] mb-[50px]">
              <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
                Product Status
              </h3>
              <CheckboxGroup
                radius="none"
                defaultValue={["On sale"]}>
                <Checkbox value="On sale">On sale</Checkbox>
                <Checkbox value="In Stock">In Stock</Checkbox>
              </CheckboxGroup>
            </div>
            <div className="mt-[20px] mb-[50px]">
              <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
                Categories
              </h3>
              <div className="my-2">
                <ScrollShadow className="lg:w-[300px] h-[200px] pr-2" size={15}>
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
                    <Link href={"/"} className="text-[#010f1c] dark:text-white block">
                      HeadPhones Wireless...
                    </Link>
                    <span className="text-[#55585b] dark:text-white text-[14px]">$120.000</span>
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
                    <Link href={"/"} className="text-[#010f1c] dark:text-white block">
                      Iphone 14 pro...
                    </Link>
                    <span className="text-[#55585b] text-[14px] dark:text-white">$120.000</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="font-[500] text-[18px] border-b border-[#eee] pb-[5px] mb-[25px]">
                  Reset Filter
                </h3>
                <button className="font-jost dark:bg-[#A0A2A4] text-[16px] font-[400] py-[9px] px-[26px] border border-[#010f1c] text-[#fff] bg-[#010f1c] hover:bg-[#fff] hover:text-[#010f1c] transition duration-[600ms]">
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SideBar
