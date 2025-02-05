"use client";
import { ICONS } from "@/utils/icons";
import { SVGS } from "@/utils/svgs";
import React, { useState } from "react";
import SideBar from "@/shared/components/sideBar";
import Card from "@/shared/components/card";
import { cardItems } from "@/configs/constants";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, useDisclosure } from "@nextui-org/react";

const Page = () => {
  const [option, setOption] = useState("Default Sorting");
  const [open, setOpen] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto">
      <div className="pb-[50px]">
        <h1 className="md:mt-[200px] mt-[100px] font-jost md:font-[500] font-[600] md:text-[44px] text-[50px] leading-[1] mb-[16px] ">
          Shop Grid
        </h1>
        <Link href={"/"} className="text-[#55585b] dark:text-white">
          Home
        </Link>
        <span className="inline-block p-[1.5px] mx-1 mt-2 bg-[#a8acb0] rounded-full"></span>
        <span className="text-[#55585b] dark:text-white">Shop Grid</span>
      </div>

      <div className="lg:flex justify-between">
        <div className="lg:flex lg:w-[200px] w-full items-center justify-between ">
          <SideBar />
        </div>
        <div className="lg:ml-[120px] flex  ">
          <button className="hover:text-[#000] dark:text-white dark:border-white transition duration[600.s] hover:border-[#000] w-[40px] pl-[10px] h-[40px] text-center text-[18px] border border-[#010F1C1A] text-[#010f1c6a] rounded-none">
            {SVGS.option1}
          </button>
          <button className="hover:text-[#000] dark:text-white dark:border-white transition duration[600.s] hover:border-[#000] w-[40px] pl-[10px] ml-[12px] !pr-[6px] h-[40px] text-center text-[18px] border text-[#010f1c6a] border-[#010F1C1A] rounded-none">
            {SVGS.option2}
          </button>
        </div>
          <div className="lg:absolute my-4 left-[70%] flex items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  onClick={() => setOpen(!open)}
                  variant="bordered"
                  className="!rounded-none border-[#010F1C1A]  border px-[30px] dark:text-black bg-[#F9F9F9]"
                >
                  {option} {open === true ? ICONS.up : ICONS.down}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Example with disabled actions"
                disabledKeys={["edit", "delete"]}
              >
                <DropdownItem
                  onClick={() => setOption("Default Sorting")}
                  key="Default sorting"
                >
                  Default Sorting
                </DropdownItem>
                <DropdownItem
                  onClick={() => setOption("Low To High")}
                  key="Low To High"
                >
                  Low To High
                </DropdownItem>
                <DropdownItem
                  onClick={() => setOption("New Added")}
                  key="New Added"
                >
                  Edit file
                </DropdownItem>
                <DropdownItem
                  onClick={() => setOption("On Sale")}
                  key="On Sale"
                >
                  On Sale
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            <Button
              onPress={onOpen}
              className="bg-[#0b0c0c] text-white dark:bg-[#A0A2A4] hover:text-[#010f1c] hover:bg-[white] border border-[#010f1c] px-[30px] py-[8px] rounded-none transition duration[600.s]">
              <span className="flex items-center">{ICONS.option}Filter</span>
            </Button>
            <div className="">
              <div className="w-[77%] ml-auto cursor-wait"></div>
            <Drawer isOpen={isOpen} className="lg:w-[23%]" placement="left" onOpenChange={onOpenChange}>
           <DrawerContent>
           {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
              <DrawerBody>
                <div className="mt-[25px]"><SideBar/></div> 
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
           )}
              </DrawerContent>
             </Drawer>
             </div>
            {/*  */}
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between mt-[10%] gap-4">
            {cardItems.map((item: trendingPart, index: number) => (
              <div key={index} className="my-2">
                <Card data={item} />
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default Page;
