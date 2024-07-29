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
          <Button className="  w-[176px] h-[46px] rounded space-x-3">
           <span className="font-poppin text-base">
           Shop Now
           </span>
            <IoArrowForwardOutline size={22}/>
          </Button>
        </div>
      </div>
      <h1 className=" font-bold text-[32px] leading-[39.01px] top-[210.13px] left-[185px] -rotate-[12.48deg] absolute z-10">Mid-Season</h1>
      <h1 className="font-bold text-[300px] leading-[365.7px] absolute text-[#BBBBBA] top-[92px] -left-[137px]">2023</h1>
    </section>
  );
};

export default HeroSection;


