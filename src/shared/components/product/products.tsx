"use client";
import { ICONS } from "@/utils/icons";
import Ratings from "@/utils/ratings";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Products = ({ data }: { data: trendingPart }) => {
  const [count, setCount] = useState(1);
  const [pic, setImage] = useState("data.img");
  return (
    <div>
      <div className="sticky top-[120px] mr-[20px] lg:flex items-start gap-4 ">
        <div className="flex lg:flex-col gap-x-4 lg:gap-y-3 lg:h-[400px] mb-4 items-start mr-4">
          <button
            onClick={() => setImage("data.secondImg")}
            className="bg-[#f4f5f7] "
          >
            <Image src={data.secondImg} alt="" />
          </button>
          <button
            onClick={() => setImage("data.secondImg")}
            className="bg-[#f4f5f7] "
          >
            <Image src={data.secondImg} alt="" />
          </button>
        </div>
        <div className="bg-[#f5f6f8] object-cover">
          <Image src={data.img} alt="" className="lg:w-full w-[80%] mx-auto" />
        </div>
        <div className="">
          <span className="text-[16px] leading-1">{data.category}</span>
          <h3 className="sm:text-[32px] text-[18px]  font-[500] leading-1 mb-[15px] font-jost">
            {data.description}
          </h3>
          <span className="flex my-3">
            <Ratings rating={data.rating} />({data.rating} Reviews)
          </span>
          <p className="text-[#55585b] dark:text-white my-4 font-jost">{data.explain}</p>
          <span className="font-[400] text-[16px] line-through text-[#767a7d] mr-2">
            ${data.previewsPrice}
          </span>
          <span className=" font-[500] text-[24px]">${data.newPrice}</span>
          <h3 className="my-4">Quantity</h3>
          <div className="sm:flex justify-between gap-x-6 my-3">
            <div className="mb-[20px]  bg-[#f3f5f6] flex items-center justify-between ">
              <Button
                className="bg-transparent text-[#000] hover:text-[#2295FF] text-[13px]"
                onClick={() => setCount(count + 1)}
              >
                {ICONS.plus}
              </Button>
              <span className="text-[16px]">{count}</span>
              <Button
                className="bg-transparent text-[#000] pb-2 hover:text-[#2295FF] text-[13px]"
                onClick={() => setCount(count - 1)}
              >
                {ICONS.minus}
              </Button>
            </div>
            <Button className=" w-full dark:bg-[#A0A2A4] text-[#010f1cc7] text-[17px] py-4 mb-4 hover:text-[#fff] hover:bg-[#010f1c] rounded-none bg-transperant border border-[#55585bc8] font-jost">
              {" "}
              Add to cart
            </Button>
          </div>
          <Link
            href={"/cart"}
            className="bg-[#0989FF] my-4 text-[#fff] !w-[100px] lg:px-[195px] sm:px-[180px] px-[50px]  py-4 hover:text-white !text-center hover:bg-[#010f1c] "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
