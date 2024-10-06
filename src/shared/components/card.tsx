import { ICONS } from "@/utils/icons";
import Ratings from "@/utils/ratings";
import { SVGS } from "@/utils/svgs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ data }: { data: trendingPart }) => {
  return (
    <div className="bg-[#fff] border border-[#f4f7f9] radius-[8px]">
      <div className="img-hover h-auto object-cover">
        <Image className="w-full h-auto" src={data.img} alt="" />
        <div className="absolute shadow-md border rounded-[4px] bottom-0 py-3 px-2 right-0">
          <Link className="" title="Add to cart" href={""}>
            {SVGS.vehicle}
          </Link>{" "}
          <hr/>
          <Link className="p-[2px]" title="Quick view" href={""}>
            {SVGS.eye}
          </Link>{" "}
          <Link title="Add to wishlist" href={""}>
            {SVGS.heart}
          </Link>
        </div>
      </div>
      <div className="px-[30px] pt-[10px] pb-[20px]">
        <span className="font-[500] text-[12px] hover:text-[#0989ff] text-[#55585b]">
          {data.type}
        </span>
        <h2>{data.description}</h2>
        <div className="flex items-center">
          <Ratings rating={data.rating} />
          <span className="font-[500] text-[12px] ">
            {/* i know using this ")" is wrong but i don't know the code for it */}
            ({data.reviews} Review )
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-[#55585b] text-[12px] line-through font-[500]">
            {data.previewsPrice}$
          </span>
          <span className="font-[700] text-[15px] text-[#0989ff] px-1 pb-1">
            {data.newPrice}$
          </span>
          <span className="font-[500] text-[12px] tracking-tight">
            ({data.reviews} Review ){" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
