"use client";
import { cardItems } from "@/configs/constants";
import React, { useState } from "react";
import Card from "../components/card";

const Trending = () => {
  const [category, setCategory] = useState("New");

  const filteredItems = cardItems.filter(item => item.category === category);

  return (
    <div className="">
      <div className="md:flex justify-between w-[80%] mx-auto my-4">
        <h1 className="text-[34px] font-[500] text-[#021d35] dark:text-white">Trending Products</h1>
        <div className="md:my-0 my-8 flex justify-around gap-x-4">
          <div
            onClick={() => setCategory("New")}
            className={`font-[400] text-[20px]  cursor-pointer ${
              category === "New" ? "text-[#080101] dark:text-[#8f9192] ease-linear transition-all" : "text-[#a0a2a4] dark:text-white"
            }`}
          >
            New
          </div>
          <span
            onClick={() => setCategory("Featured")}
            className={`font-[400] text-[20px]  cursor-pointer ${
              category === "Featured" ? "text-[#080101] dark:text-[#a0a2a4] ease-linear transition-all" : "text-[#a0a2a4] dark:text-white"
            }`}
          >
            Featured
          </span>
          <span
            onClick={() => setCategory("TopSellers")}
            className={`font-[400] text-[20px] cursor-pointer ${
              category === "TopSellers" ? "text-[#080101] dark:text-[#a0a2a4] ease-linear transition-all" : "text-[#a0a2a4] dark:text-white"
            }`}
          >
            Top Sellers
          </span>
        </div>
      </div>
      <div className="md:grid xl:grid-cols-4 md:grid-cols-2 my-10 gap-4 w-[80%] mx-auto">
        {filteredItems.map((item, index) => (
          <div key={index} className="md:my-0 my-8">
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
