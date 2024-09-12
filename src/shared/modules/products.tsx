'use client'
import { IMGS } from "@/utils/imgs"

const Products = () => {
    
  return (
    <div className="md:my-5">

      <span className="custom-bg">{IMGS.product1}</span>
      <span className="custom-bg">{IMGS.product2}</span>
      <span className="custom-bg">{IMGS.product3}</span>
      <span className="custom-bg">{IMGS.product4}</span>
      <span className="custom-bg">{IMGS.product5}</span>
    </div>
  )
}

export default Products
