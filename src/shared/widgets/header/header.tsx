import { ICONS } from "@/utils/icons";
import { ThemeSwitcher } from "@/utils/themeswitcher";
import { Badge } from "@mui/material";
import { Navbar } from "@nextui-org/react";
import { BiHeart } from "react-icons/bi";

const Header = () => {
  // const [search,setSearch] = useState("");
  // const router = useRouter()

  // const handleSearch = () => {
  //  if(search === ""){
  //   return
  //  }else{
  //   router.push(`/courses?title=${search}`);
  //  }
  // }
  return (
      <div className=" h-[80px] bg-white py-4 border-b md:block hidden">
        <div className="md:flex hidden w-full m-auto justify-around items-center fixed">
          <h1 className="font-[500] text-[34px] font-Nerko_One ">Zoffero.</h1>
          <div className="h-[45px] bg-transparent relative">
            <input
              type="search"
              placeholder="Search for products..."
              // onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border border-[var(--blue-light)] dark:border-none dark:bg-[#575757] dark:placeholder:text-[var(--gray-light)] px-8 w-full h-full text-[#0000004e] outline-[#0989FF] dark:text-[#ffffffe6] text-[18px] font-[400]"
            />
            <div
              className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[45px] right-0 top-0 bg-[#0989FF] "
              // onClick={handleSearch}
            >
              {ICONS.search}
            </div>
          </div>
          <div className="flex justify-around items-center">
            <span className=" pr-4 ease-linear cursor-pointer">
              <Badge badgeContent={1} color="error">
                <BiHeart size={25} color="action"/>
              </Badge>
            </span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
     

  );
};

export default Header;
