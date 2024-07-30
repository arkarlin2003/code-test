import { Button } from "./ui/button";
import { IoArrowForwardOutline } from "react-icons/io5";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="w-[271px] h-[224px] relative z-50 space-y-6 ">
        <div className=" relative ">
          <img src="/images/pngwing.svg" className="w-[157px] h-[154px]" alt="" />
          <h4 className="text-[53px] text-white absolute top-10 left-6 w-[246px] font-bold">50% <span className="text-[#ff3f90]">OFF</span></h4>
        </div>
        <div>
          <Button className="shop-now">
           <span className="font-poppin text-base">
           Shop Now
           </span>
            <IoArrowForwardOutline className="icon"/>
          </Button>
        </div>
      </div>
      <h1 className="mid-season">Mid-Season</h1>
      <h1 className="year">2023</h1>
    </section>
  );
};

export default HeroSection;


