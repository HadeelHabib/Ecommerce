import Link from "next/link";
import React from "react";
import { ICONS } from "@/utils/icons";

const Footer = () => {
  return (
    <div className="bg-[#F4F7F9] pt-[20px] mt-4 dark:bg-[#13232830] dark:text-white">
    <div className="xl:w-[80%]  w-[90%] text-left md:mt-5  mx-auto grid md:grid-cols-4 sm:grid-cols-2 justify-between mt-[30px]">
      <div className="">
        <h1 className="font-[500] text-[34px] font-Nerko_One ">Zoffero.</h1>
        <p className="text-[#55585b] dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Consectetur maxime quisquam dolor no
        </p>
        <div className=" flex items-center my-8 gap-3">
            < Link href={"#"} className="p-2 border-[0.5px] shadow-sm hover:shadow-md rounded-[5px]">{ICONS.facebook}</Link>
            < Link href={"#"} className="p-2 border-[0.5px] shadow-sm hover:shadow-md rounded-[5px]">{ICONS.vimeo}</Link>
            < Link href={"#"} className="p-2 border-[0.5px] shadow-sm hover:shadow-md rounded-[5px]">{ICONS.linkedin}</Link>
            < Link href={"#"} className="p-2 border-[0.5px] shadow-sm hover:shadow-md rounded-[5px]">{ICONS.twitter}</Link>
        </div>
      </div>
      <div className="">
        <h1 className="font-[700] text-[20px] text-[#010f1c] dark:text-white mb-[10px]">
          My Account
        </h1>
        <ul className="text-[#55585b] dark:text-white">
          <li>
            <Link href={"#"}>Track Orders</Link>
          </li>
          <li>
            <Link href={"#"}>Shopping</Link>
          </li>
          <li>
            <Link href={"#"}>Order History</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-[700] text-[20px] text-[#010f1c] dark:text-white mb-[10px]">
          Informations
        </h1>
        <ul className="text-[#55585b] dark:text-white">
          <li>
            <Link href={"#"}>Our story</Link>
          </li>
          <li>
            <Link href={"#"}>Privacy policy</Link>
          </li>
          <li>
            <Link href={"#"}>Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-[700] text-[20px] text-[#010f1c] dark:text-white mb-[10px]">
          Talk To Us
        </h1>
        <span className="text-[#55585b] dark:text-white">
          Got Quistions?
          <br /> Call us
        </span>
        <div className="flex items-center gap-2">
          <span>{ICONS.email}</span>
          <h3 className="inline-block">Zoffero@support.com</h3>
        </div>
        <div className="flex items-center gap-2">
          <span>{ICONS.locations}</span>
          <h3>79 Lattakia Syria</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
