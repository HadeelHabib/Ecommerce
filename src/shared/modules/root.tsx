import Products from "./products";
import Hero from "./hero";
import Features from "./features";
import Trending from "./trending";
import ShopNow from "./shopNow";
import NewArrival from "./newArrival";
import NewsLetters from "./newsletters";



const Root = () => {
  return (
    <div className="bg-[rgb(231,241,250)] dark:bg-[#1323289c]">
    <Hero/>
    <Products/>
    <Features/>
    <Trending/>
    <ShopNow/>
    <NewArrival/>
    <NewsLetters/>
    </div>
  );
};

export default Root;
