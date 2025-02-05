"use client";
import { ICONS } from "@/utils/icons";
import { IMGS } from "@/utils/imgs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  return (
    <div className="w-full mt-[15%] bg-[#FFFFFF] dark:bg-black font-jost">
      <div className="text-center mb-10 ">
        <h1 className="font-[500] w-[90%] dark:text-white text-[44px] mx-auto mb-[6px] text-[#000000e6]">
          Keep In Touch With Us
        </h1>
        <Link href={"/"} className="">
          Home
        </Link>
        <span className="inline-block p-[1.5px] mx-1 mt-2 bg-[#a8acb0]"></span>
        <span>Contact</span>
      </div>
      <div className="mt-5 form-wrapper relative w-[80%] mx-auto pt-[50px] px-5 sm:px-10 pb-[70px] bg-[#fff]  dark:bg-[#040708] mb-[40px]">
        <div className="md:flex items-first gap-x-[10%]">
          <div className="">
            <h1 className="font-[500]  text-[30px] mb-[4px] font-jost">
              Send Message
            </h1>
            <div className="relative mt-10 py-[20px]">
              <p className="absolute top-[10px] left-[10px] text-[14px] leading-[1] bg-white dark:bg-[#040708] px-3">
                Your Name
              </p>
              <input
                className="p-4 border w-full mb-10 text-[14px] "
                type="name"
                placeholder="Hadeel habib"
              />
              <p className="absolute  left-[10px] text-[14px] leading-[1] dark:bg-[#040708]  bg-white px-3">
                Your email
              </p>
              <input
                className="p-4 border w-full mb-10 text-[14px] "
                type="email"
                placeholder="Zoffero@mail.com"
              />
              <p className="absolute left-[10px] text-[14px] leading-[1] dark:bg-[#040708]  bg-white px-3">
                Subject
              </p>
              <input
                className="p-4 border w-full mb-10 text-[14px] "
                type="text"
                placeholder="Zoffero@mail.com"
              />
              <p className="absolute  left-[10px] text-[14px] leading-[1] dark:bg-[#040708]  bg-white px-3">
                Your Message
              </p>
              <textarea
                className="p-4 border w-full mb-10 text-[14px] h-[165px] leading-[1.4] py-[17px] "
                placeholder="Write your message here"
              />
              <div className="flex items-center justify-between mt-4 ">
                <div className="flex">
                  <input className=" relative left-0" type="checkbox" />
                  <span className="pl-1 text-[#55585b] dark:text-white text-[15px]">
                    Save my name, email, and website in this browser for the
                    next time i comment.
                  </span>
                </div>
              </div>
            </div>
            <Button className="bg-[#000] text-[16px] !-none text-[#fff]  py-[25px] hover:bg-[#0989FF]">
              Send Message
            </Button>
          </div>
          <div className="flex flex-col gap-20 mt-[9%] sm:w-[25%] sm:mx-0 mx-auto ">
            <div className="">
              <Image className="mb-[20px] " src={IMGS.contact1} alt="" />
              <p className="text-[#55585b] dark:text-white font-jost">contact@shofy.com</p>
              <p className="font-[600] text-[19px] leading-[1.44] dark:text-white text-[#010f1c]">
                +670 413 90 762
              </p>
            </div>
            <div className="">
              <Image className="mb-[20px] " src={IMGS.contact2} alt="" />
              <p className="font-[500] text-[18px] leading-[1.44] dark:text-white text-[#010f1c]">
                84 sleepy hollow st. <br />
                jamaika, New York 1432
              </p>
            </div>
            <div className="">
              <Image className="mb-[20px] " src={IMGS.contact3} alt="" />
              <div className="font-[500] text-[18px] leading-[1.44] dark:text-white text-[#010f1c]">
                <p>Find on social media</p>
                <div className=" flex items-center mt-2">
                  <Link
                    href={"#"}
                    className="p-2 border-[0.5px] shadow-sm hover:shadow-md text-[14px]"
                  >
                    {ICONS.facebook}
                  </Link>
                  <Link
                    href={"#"}
                    className="p-2 border-[0.5px] shadow-sm hover:shadow-md text-[14px]"
                  >
                    {ICONS.twitter}
                  </Link>
                  <Link
                    href={"#"}
                    className="p-2 border-[0.5px] shadow-sm hover:shadow-md text-[14px]"
                  >
                    {ICONS.linkedin}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[5%]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.4743873356833!2d-80.12135612476251!3d25.95247787723259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e0!3m2!1sen!2s!4v1710599138055!5m2!1sen!2s"
       style={{border:0,width:"80%",height:"500px",borderRadius:"10px", margin:"auto"}}

       loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  );
};

export default Page;
