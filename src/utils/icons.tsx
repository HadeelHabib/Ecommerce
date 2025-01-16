
import { BiSearch } from "react-icons/bi";
import { CgOptions, CgProfile } from "react-icons/cg";
import { CiFacebook, CiHeart } from "react-icons/ci";
import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaPlus, FaRegWindowMinimize, FaSkype, FaTwitter, FaVimeoV } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";


export const ICONS = {
heart: <CiHeart size={30} />,
search: <BiSearch className="text-white" size={25} />,
moon : <LuMoonStar />,
sun : <GoSun />,
profile: <CgProfile  size={25}/>,
list: <VscListSelection size={20} />,
arrow: <FaArrowRightLong />,
email:<MdOutlineMailOutline size={20}/>,
locations: <IoLocationOutline size={20}/>,
facebook: <FaFacebookF />,
vimeo: <FaVimeoV />,
linkedin: <FaLinkedinIn />,
twitter: <FaTwitter />,
close: <IoMdClose />,
plus: <FaPlus />,
minus: <FaRegWindowMinimize />,
home:<IoHomeOutline />,
up: <IoIosArrowUp />,
down: <IoIosArrowDown />,
option: <CgOptions />,

};
