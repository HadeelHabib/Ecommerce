"use client";
import { IMGS } from "@/utils/imgs";
import { SVGS } from "@/utils/svgs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mt-[15%] bg-[#FFFFFF] font-jost">
      <Image
        src={IMGS.login1}
        alt=""
        className="absolute hidden lg:inline xl:left-[300px] lg:left-[90px]"
      />
      <Image
        src={IMGS.login2}
        alt=""
        className="absolute hidden lg:inline bottom-[50px] xl:left-[400px] lg:left-[150px]"
      />
      <Image
        src={IMGS.login3}
        alt=""
        className="absolute hidden lg:inline xl:left-[75%] lg:left-[90%]"
      />
      <Image
        src={IMGS.login4}
        alt=""
        className="absolute hidden lg:inline xl:left-[75%] lg:left-[83%] bottom-[-80px]"
      />
      <div className="text-center mb-10">
        <h1 className="font-[500] text-[44px] mb-[6px] text-[#000000e6]">
          Sign up
        </h1>
        <Link href={"/"} className="">
          Home
        </Link>
        <span className="inline-block p-[1.5px] mx-1 mt-2 bg-[#a8acb0] rounded-full"></span>
        <span>Sign up</span>
      </div>
      <div className="mt-5 form-wrapper relative xl:w-[40%] md:w-[60%] w-full mx-auto pt-[50px] px-5 sm:px-10 pb-[70px] bg-[#fff] text-center mb-[40px]">
        <h1 className="font-[500] text-[30px] mb-[4px]">
          Sign up to <span className="font-Nerko_One text-[35px]">Zoffero.</span>
        </h1>
        <p className="mb-[40px]">
          Already have account{" "}
          <Link href={"/login"} className="text-[#0998FF] hover:underline">
            Login
          </Link>
        </p>
        <div className="relative ">
          <hr />
          <p className="absolute top-[-10px] left-[50%] translate-x-[-50%] bg-white px-3">
            or Sign up with Email
          </p>
        </div>
        <div className="relative mt-10 py-[20px]">
        <p className="absolute top-[10px] left-[10px] text-[14px] leading-[1] bg-white px-3">
            Your Name
          </p>
          <input
            className="p-4 border w-full mb-10 text-[14px] "
            type="text"
            placeholder="Hadeel Habib"
          />
          <p className="absolute left-[10px] bottom-[200px] text-[14px] leading-[1] bg-white px-3">
            Your Email
          </p>
          <input
            className="p-4 border w-full mb-10 text-[14px] "
            type="email"
            placeholder="Zoffero@mail.com"
          />
          <p className="absolute left-[10px] bottom-[105px] text-[14px] leading-[1] bg-white px-3">
            Password
          </p>
          <input
            className="p-4 border w-full text-[14px]"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 6 character"
          />
          <span
            className="cursor-pointer absolute outline-none from-transparent right-[20px] bottom-[80px] text-[#00000091]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? SVGS.eye : SVGS.closeEye}{" "}
          </span>
            <div className="flex mt-4">
              <input className=" relative left-0" type="checkbox" />
              <span className="pl-1">I accept the terms of the service & Privacy policy.</span>
            </div>
          
          
        </div>
        <Button className="bg-[#000] text-[22px] !rounded-none text-[#fff] w-full py-[25px] hover:bg-[#0989FF]">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Page;
