import { IoArrowForwardOutline } from "react-icons/io5";
import { Button } from "./ui/button";

const Collection = () => {
  return (
    <section className="collection-section">
      <div className="text-[54px] px-[150px] z-50 relative pt-[119px] space-y-5 leading-[65.83px] font-bold">
        <h1>
          New <span className=" text-default">2023</span>
        </h1>
        <h1>Clothes Collection</h1>
        <Button className="  w-[176px] h-[46px] rounded space-x-3">
          <span className="font-poppin text-base">Shop Now</span>
          <IoArrowForwardOutline size={22} />
        </Button>
      </div>
    </section>
  );
};

export default Collection;
