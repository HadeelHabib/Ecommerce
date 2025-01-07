"use client";
import { ICONS } from "@/utils/icons";
import { IMGS } from "@/utils/imgs";
import { Button, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="md:w-[80%] w-[95%] mx-auto h-[100vh] ">
      <div className="pb-[50px]">
        <h1 className="mt-[200px] font-[500] text-[44px] leading-[1] mb-[16px] font-jost">
          Shopping Cart
        </h1>
        <Link href={"/"} className="text-[#55585b]">
          Home
        </Link>
        <span className="inline-block p-[1.5px] mx-1 mt-2 bg-[#a8acb0] rounded-full"></span>
        <span className="text-[#55585b]">Shopping Cart</span>
      </div>
      <div className="flex gap-20 items-start">
        <table className="w-[65%] mx-[auto]">
          <thead className="bg-[#f1f3f4] caption-bottom !p-[20px] ">
            <th colSpan={2} className="!pl-0 align-middle">
              Product
            </th>
            <th className="!pl-[30px]">Price</th>
            <th className="pl-[30px] ">Quantity</th>
            <th className="!pl-[30px]"></th>
          </thead>
          <tbody>
            <tr className="border-b ">
              <td className="!pt-[30px] bg-[#F2F3F5] inline">
                <Image className="p-4" src={IMGS.product2} alt="" />
              </td>
              <td>HeadPhones Wireless</td>
              <td>480$</td>
              <td>
                <div className=" flex items-center  border border-[dadce0] text-[14px] py-[6px] px-[6px] bg-[#fff] rounded-[20px] w-[110px] cursor-pointer">
                  <span
                    className="bg-transparent text-[#000] hover:text-[#2295FF] "
                    onClick={() => setCount(count + 1)}
                  >
                    {ICONS.plus}
                  </span>
                  <span className="px-[30px]">{count}</span>
                  <span
                    className=" text-[#000] pb-2  hover:text-[#2295FF]"
                    onClick={() => setCount(count - 1)}
                  >
                    {ICONS.minus}
                  </span>
                </div>
              </td>
              <td>
                <button className="flex items-center transition duration-[500ms] text-[#818487] hover:text-[#ff1826]">
                  {ICONS.close} Remove
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
        <div className="p-4 shadow-md w-[25%]">
          <div className="flex justify-between items-center text-[#010f1c] text-[20px] font-[550] pb-3">
            <span className="font-jost">Subtotal</span>
            <span>$</span>
          </div>
          <hr className="my-4" />
          <h4 className="mb-[7px] font-[500] text-[15px]">Shipping</h4>
          <div className="mt-4 text-[#161c2d] text-[14px] font-[400]">
            <Checkbox className="!block" radius="full">
              Flat rate : <span></span>
            </Checkbox>
            <Checkbox className="!block" radius="full">
              Local pickup: <span></span>
            </Checkbox>
            <Checkbox className="!block" radius="full">
              Free shipping :
            </Checkbox>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center text-[#010f1c] text-[20px] font-[550] pb-3">
            <span className="font-jost">Total</span>
            <span>$</span>
          </div>
          <Button
            radius="none"
            fullWidth
            className=" !font-[16px] !py-4 !bg-[#010f1c] text-white hover:bg-[#0989FF]"
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
