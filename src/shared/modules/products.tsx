'use client'
import { IMGS } from "@/utils/imgs"
import { Image } from "@nextui-org/react"

const Products = () => {

  return (
    <div className="md:my-5">
        <div className="md:flex">
      <span className="custom-bg"><Image src={IMGS.product1} alt="" /> </span>
      <span className="custom-bg"><Image src={IMGS.product2} alt="" /></span>
      <span className="custom-bg"><Image src={IMGS.product3} alt="" /></span>
      <span className="custom-bg"><Image src={IMGS.product4} alt="" /></span>
      <span className="custom-bg"><Image src={IMGS.product5} alt="" /></span>
      </div>
    </div>
  )
}

export default Products
