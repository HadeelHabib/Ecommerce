'use client'
import Link from "next/link"
import Header from "./header"
import { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, ModalContent, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, User } from "@nextui-org/react";
import { navItems } from "@/configs/constants";
import { BiChevronDown } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { BsActivity } from "react-icons/bs";
import { FcFlashAuto } from "react-icons/fc";
import { LiaLightbulb } from "react-icons/lia";
import { SiMoonrepo, SiP5Dotjs } from "react-icons/si";
import { ICONS } from "@/utils/icons";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: <BiChevronDown fill="currentColor" size={16} />,
    scale: <SlCalender className="text-warning" fill="currentColor" size={30} />,
    lock: <SiMoonrepo className="text-success" fill="currentColor" size={30} />,
    activity: <BsActivity className="text-secondary" fill="currentColor" size={30} />,
    flash: <FcFlashAuto className="text-primary" fill="currentColor" size={30} />,
    server: <LiaLightbulb className="text-success" fill="currentColor" size={30} />,
    user: <SiP5Dotjs className="text-danger" fill="currentColor" size={30} />,
  };
  
  return (
    <div className="border-b w-full bg-white">
      <div className="bg-white">
        <Header/>
      </div>
       {/* <div className="flex ">
          {navItems.map((i:any,index:number)=>(
            <div className="px-4 ">
              <Link className='text-[25px]' 
              key={index} 
              href={i.url}>
                {i.title}
                </Link>
            </div>
          ))}
        </div> */}
 

<div className="md:top-[80px] w-full ">
  <Navbar
  
    
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    className="md:h-[48px] md:top-[80px] fixed sm:h-[60px] h-[60px] dark:bg-[#00000089] bg-white"
  >
    <NavbarContent className="md:hidden" justify="start">
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
    </NavbarContent>
    <NavbarContent className="sm:hidden pr-3" justify="center">  
    </NavbarContent>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarBrand>
        <p className="md:hidden font-bold font-Nerko_One text-[25px]">Zoffero</p>
      </NavbarBrand>
      <Dropdown className="">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="md:flex hidden max-w-full m-6 py-6 px-8 bg-[#0989FF] data-[hover=true]:bg-black text-white"
                endContent={icons.chevron}
                radius="none"
                variant="light"
              >
                {ICONS.list}
                All departments
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="All departments"
            className="w-[300px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Headphones"
              startContent={icons.scale}
            >
              Headphones
            </DropdownItem>
            <DropdownItem
              key="Mobile Tablets"
              startContent={icons.activity}
            >
              Mobile Tablets
            </DropdownItem>
            <DropdownItem
              key="CPU Heat Pipes"
              startContent={icons.flash}
            >
              CPU Heat Pipes
            </DropdownItem>
            <DropdownItem
              key="Smart watch"
              startContent={icons.server}
            >
              Smart watch
            </DropdownItem>
            <DropdownItem
              key="Bluetooth"
              startContent={icons.user}
            >
              Bluetooth
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      {navItems.map((i:any,index:number)=>(
            <div className="">
              <NavbarItem>
              <Link className='px-4' 
              key={index} 
              href={i.url}>
                {i.title}
                </Link>
                </NavbarItem>
                </div>
          ))}
       </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className=" lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button className="md:flex hidden hover:bg-[#000]" as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu>
      {navItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={
              index === 2 ? "warning" : index === navItems.length - 1 ? "danger" : "foreground"
            }
            href={item.url}
          >
            {item.title}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  </div>
    </div>
  )
}

export default NavBar
