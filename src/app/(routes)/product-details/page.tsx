import Products from "@/shared/modules/products";
import { ICONS } from "@/utils/icons";
import Link from "next/link";

const Page = ({data} : {data: trendingPart}) => {
  return (
    <div className="h-[100vh]">
      <div className="mt-[10%] flex items-center">
        <Link href={"/"} className="text-[#55585b] flex items-center">
          {ICONS.home}
          Home
        </Link>
        <span className=" p-[1.5px] mx-1 mt-2 bg-[#a8acb0] rounded-full"></span>
        <span className="text-[#55585b]">Bluetooth</span>
        <span className=" p-[1.5px] mx-1 mt-2 bg-[#a8acb0] rounded-full"></span>
        <span>something</span>
      </div>
      <Products />
    </div>
  );
};

export default Page;
