'use client'
import { IMGS } from "@/utils/imgs"
import Image from "next/image"
import Link from "next/link"

const Products = () => {

//lg:1024  ,sm:640 ,xl:1280  ,md:768  ,2xl:1536


  return (
    <div className="md:my-10 my-20">
        <div className="grid md:w-[80%] mx-auto gap-5 xl:grid-cols-5 sm:grid-cols-3 grid-cols-1">
          <div className="text-center">
          <span className="custom-bg"><Image className="img-hover" src={IMGS.product1} alt="" /> </span>
          <Link className="hover:text-[#0989FF] font-[650] text-[18px] transition-all " href={""} >Headphones</Link>
          <p className="text-[#55585b] font-[400] text-[14px]"> 3 Products</p>
          </div>
          <div className="text-center">
          <span className="custom-bg"><Image className="img-hover" src={IMGS.product2} alt="" /></span>
          <Link className="hover:text-[#0989FF] font-[650] text-[18px] transition-all " href={""} >Mobile Tablets</Link>
          <p className="text-[#55585b] font-[400] text-[14px]"> 3 Products</p>
          </div>
          <div className="text-center">
          <span className="custom-bg"><Image className="img-hover" src={IMGS.product3} alt="" /></span>
          <Link className="hover:text-[#0989FF] font-[650] text-[18px] transition-all " href={""} >CPU Heat Pipes</Link>
          <p className="text-[#55585b] font-[400] text-[14px]"> 2 Products</p>
          </div>
          <div className="text-center">
          <span className="custom-bg"><Image className="img-hover" src={IMGS.product4} alt="" /></span>
          <Link className="hover:text-[#0989FF] font-[650] text-[18px] transition-all " href={""} >Smart Watch</Link>
          <p className="text-[#55585b] font-[400] text-[14px]"> 3 Products</p>
          </div>
          <div className="text-center">
          <span className="custom-bg"><Image className="img-hover" src={IMGS.product5} alt="" /></span>
          <Link className="hover:text-[#0989FF] font-[650] text-[18px] transition-all " href={""} >Bluetooth</Link>
          <p className="text-[#55585b] font-[400] text-[14px]"> 2 Products</p>
          </div>
      </div>
    </div>
  )
}

export default Products
