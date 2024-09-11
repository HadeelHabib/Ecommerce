
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";
import { VscListSelection } from "react-icons/vsc";


export const ICONS = {
heart: <CiHeart size={30} />,
search: <BiSearch className="text-white" size={25} />,
moon : <LuMoonStar />,
sun : <GoSun />,
profile: <CgProfile  size={25}/>,
list: <VscListSelection size={20} />,
rightIcon: <IoIosArrowBack size={40} fill="white" className=" cursor-pointer opacity-10 hover:bg-[#ffffff29] rounded-full" />,
leftICON: <IoIosArrowForward size={40} fill="white" className=" cursor-pointer opacity-[0.5px] hover:bg-[#ffffff29] rounded-full" />



};
