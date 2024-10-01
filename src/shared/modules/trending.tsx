"use client";
import { cardItems } from "@/configs/constants";
import React, { useState } from "react";
import Card from "../components/card";

const Trending = () => {
  const [category, setCategory] = useState("New");

  const filteredItems = cardItems.filter(item => item.category === category);

  return (
    <div className="">
      <div className="flex justify-between md:w-[80%] m-auto">
        <h1 className="text-[36px] text-[#021d35] ">Trending Products</h1>
        <div className="flex justify-around gap-x-4">
          <div
            onClick={() => setCategory("New")}
            className={`font-[400] text-[20px] text-[#a0a2a4] cursor-pointer ${
              category === "New" ? "text-[#080101] ease-linear transition-all" : ""
            }`}
          >
            New
          </div>
          <span
            onClick={() => setCategory("Featured")}
            className={`font-[400] text-[20px] text-[#a0a2a4] cursor-pointer ${
              category === "Featured" ? "text-[#080101] ease-linear transition-all" : ""
            }`}
          >
            Featured
          </span>
          <span
            onClick={() => setCategory("TopSellers")}
            className={`font-[400] text-[20px] text-[#a0a2a4] cursor-pointer ${
              category === "TopSellers" ? "text-[#080101] ease-linear transition-all" : ""
            }`}
          >
            Top Sellers
          </span>
        </div>
      </div>
      <div className="md:grid xl:grid-cols-4 md:grid-cols-2 my-10 gap-4 md:w-[80%] mx-auto">
        {filteredItems.map((item, index) => (
          <div key={index} className="">
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
