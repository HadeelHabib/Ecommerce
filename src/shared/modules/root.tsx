import Products from "./products";
import Hero from "./hero";
import Features from "./features";
import Trending from "./trending";
import ShopNow from "./shopNow";
import NewArrival from "./newArrival";
import NewsLetters from "./newsletters";



const Root = () => {
  return (
    <>
    <Hero/>
    <Products/>
    <Features/>
    <Trending/>
    <ShopNow/>
    <NewArrival/>
    <NewsLetters/>
    </>
  );
};

export default Root;
