import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { currencyFormat } from "@/lib/utils";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";


const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"];
const ProductDetailAddToCard = ({ product }) => {
  return (
    <div className="w-[400px] h-[812px] space-y-[24px]">
      <div className="space-y-[8px]">
        <h5 className="text-xs font-semibold font-poppin">
          {product?.category}
        </h5>
        <h1 className="text-[32px] leading-[39.01px] font-bold">
          {product?.title}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-[20px] items-center">
          <h4 className="text-xs font-poppin">
            {currencyFormat(product?.price)}
          </h4>
          <h4 className="font-poppin font-semibold text-default ">
            {currencyFormat(product?.price)}
          </h4>
        </div>
        <div className="flex items-center space-x-[8px]">
          <FaCheck className="w-[18px] h-[18px] text-green-500" />
          <p className="font-poppin">In Stock</p>
        </div>
      </div>
      <div className="py-[24px] space-y-[16px] ">
        <h1 className="font-semibold font-poppin">
          Color <span className=" font-light">(Black)</span>
        </h1>
        <div className=" flex gap-[24px] ">
          <div className="round">
            <input
              type="radio"
              className="color-check-black"
              name="color[]"
              id="checkbox-black"
            />
            <label
              className="color-check-black-label"
              htmlFor="checkbox-black"
            ></label>
          </div>
          <div className="round">
            <input
              type="radio"
              className="color-check-white"
              name="color[]"
              id="checkbox-white"
            />
            <label
              className="color-check-white-label"
              htmlFor="checkbox-white"
            ></label>
          </div>
          <div className="round">
            <input
              type="radio"
              className="color-check-gray"
              name="color[]"
              id="checkbox-gray"
            />
            <label
              className="color-check-gray-label"
              htmlFor="checkbox-gray"
            ></label>
          </div>
        </div>
      </div>
      <div className="py-[24px] space-y-[16px] ">
        <div className="flex justify-between">
          <h1 className="font-semibold font-poppin">Size </h1>
          <h4 className="text-xs font-poppin text-default underline">
            Size Guide
          </h4>
        </div>
        <div className="gap-[24px] h-[76px] w-full  grid  grid-cols-4">
          {sizes.map((size) => (
            <div key={size} className="square w-[93px]">
              <input
                type="checkbox"
                className="size-check"
                name="size[]"
                id=""
              />
              <label className="size-check-label uppercase text-sm font-poppin" htmlFor="">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[40px] flex justify-between items-center ">
        <h1 className="font-semibold font-poppin">Quantity </h1>
        <div className="flex items-center h-full">
            <div className="add-to-cart-qty cursor-pointer">
            <FiMinus className="w-[10px] h-[21px]"/>
            </div>
            <div className="add-to-cart-qty">
                <p className="text-sm font-poppin">1</p>
            </div>
            <div className="add-to-cart-qty cursor-pointer">
            <FiPlus className="w-[10px] h-[21px]"/>
            </div>
        </div>
      </div>
      <div className="py-[8px] px-[16px] border border-[#E4E4E4]">
        <p className="text-xs font-poppin">
          4-interest free payments of $18.75 with{" "}
          <span className="font-bold">Klama</span>.{" "}
          <Link className="text-default underline" to={"/"}>
            Learn More
          </Link>{" "}
        </p>
      </div>
      <div className="space-y-[16px]">
        <Button className=" w-full  rounded-none text-sm font-poppin">
          Add to Cart
        </Button>
        <Button className="bg-white  w-full hover:text-white text-black border space-x-[10px] rounded-none text-sm font-poppin">
          <FaRegHeart className="w-[20px] h-[20px]" />
          <p>Favourite</p>
        </Button>
      </div>
      <div className="flex gap-[16px]">
        <div className="w-[192px] h-[106px] bg-[#F3EDFF] py-[20px] px-[17px]">
          <div className="flex gap-[8px] mb-[13px] items-center">
            <IoLocationSharp className="w-[20px] h-[20px] text-[#F62C8D]" />
            <h1 className="text-sm font-poppin">Find in Store</h1>
          </div>
          <p className="text-xs font-poppin">
            Lorem Ipsum is simply dummy text of the printin
          </p>
        </div>
        <div className="w-[192px] h-[106px] bg-[#F3EDFF] py-[20px] px-[17px]">
          <div className="flex gap-[8px] mb-[13px] items-center">
            <IoMdHome className="w-[20px] h-[20px] text-[#F62C8D]" />
            <h1 className="text-sm font-poppin">Delivery to Home</h1>
          </div>
          <p className="text-xs font-poppin">
            Lorem Ipsum is simply dummy text of the printin
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAddToCard;
