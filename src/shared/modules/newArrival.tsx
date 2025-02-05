import { cardItems } from "@/configs/constants"
import Card from "../components/card"

const NewArrival = () => {
  return (
    <div className="w-[80%] mx-auto ">
        <h1 className="text-[36px] font-[600] text-[#021d35] dark:text-white">New Arrivals</h1>
        <div className="md:grid xl:grid-cols-4 md:grid-cols-2 my-10 gap-4 mx-auto">
        {cardItems.map((item: trendingPart, index: number) => (
          <div key={index} className="">
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewArrival
