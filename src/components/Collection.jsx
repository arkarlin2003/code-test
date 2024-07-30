import { IoArrowForwardOutline } from "react-icons/io5";
import { Button } from "./ui/button";

const Collection = () => {
  return (
    <section className="collection-section">
      <div className="title">
        <h1>
          New <span className=" text-default">2023</span>
        </h1>
        <h1>Clothes Collection</h1>
        <Button className="shop-now">
          <span className="font-poppin text-base">Shop Now</span>
          <IoArrowForwardOutline className="icon" />
        </Button>
      </div>
    </section>
  );
};

export default Collection;
