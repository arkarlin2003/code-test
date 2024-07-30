import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { currencyFormat, toastSuccess } from "@/lib/utils";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cartSlice";
import { useState } from "react";
import useCheckProduct from "@/hooks/useCheckProduct";

const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"];
const ProductDetailAddToCard = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const added = useCheckProduct(product?.id)

  const increaseQty = () => {
    setQty((pre) => pre + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((pre) => pre - 1);
    }
  };

  const setAddToCart = () => {
    dispatch(addToCart({ product, qty }))
    toastSuccess('Added')
  }

  return (
    <div className="addtocard-section">
      <div className="space-y-[21px]">
        <div className="space-y-[8px]">
          <h5 className="category-title">{product?.category}</h5>
          <h1 className="product-title">{product?.title}</h1>
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
                  id="size-check"
                />
                <label
                  className="size-check-label w-[93px] uppercase text-sm font-poppin"
                  htmlFor="size-check"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[40px] flex justify-between items-center ">
          <h1 className="font-semibold font-poppin">Quantity </h1>
          <div className="flex items-center h-full">
            <div
              className="add-to-cart-qty cursor-pointer"
              onClick={decreaseQty}
            >
              <FiMinus className="w-[10px] h-[21px]" />
            </div>
            <div className="add-to-cart-qty">
              <p className="text-sm font-poppin">{qty}</p>
            </div>
            <div
              className="add-to-cart-qty cursor-pointer"
              onClick={increaseQty}
            >
              <FiPlus className="w-[10px] h-[21px]" />
            </div>
          </div>
        </div>
        <div className="py-[8px] select-none px-[16px] border border-[#E4E4E4]">
          <p className="text-xs font-poppin ">
            4-interest free payments of $18.75 with {" "}
            <span className="font-bold"> Klama</span>.{" "}
            <Link className="text-default underline" to={"/"}>
              Learn More
            </Link>{" "}
          </p>
        </div>
        <div className="space-y-[16px]">
          <Button
            onClick={setAddToCart}
            disabled={added}
            className={`${added && 'bg-default/70'} w-full  rounded-none text-sm font-poppin`}
          >
            {
              added ? 'Added' : 'Add to Cart'
            }
          </Button>
          <Button className="bg-white  w-full hover:bg-white text-black border space-x-[10px] rounded-none text-sm font-poppin">
            <FaRegHeart className="w-[20px] h-[20px]" />
            <p>Favourite</p>
          </Button>
        </div>
      </div>
      <div className="flex gap-[16px]">
        <Link to={"/about-us"}>
          <div className="w-[192px] h-[106px] bg-[#F3EDFF] py-[20px] px-[17px]">
            <div className="flex gap-[8px] mb-[13px] items-center">
              <IoLocationSharp className="w-[20px] h-[20px] text-[#F62C8D]" />
              <h1 className="text-sm font-poppin">Find in Store</h1>
            </div>
            <p className="text-xs font-poppin">
              Lorem Ipsum is simply dummy text of the printin
            </p>
          </div>
        </Link>

        <Link to={"/tracking-order"}>
          <div className="w-[192px] h-[106px] bg-[#F3EDFF] py-[20px] px-[17px]">
            <div className="flex gap-[8px] mb-[13px] items-center">
              <IoMdHome className="w-[20px] h-[20px] text-[#F62C8D]" />
              <h1 className="text-sm font-poppin">Delivery to Home</h1>
            </div>
            <p className="text-xs font-poppin">
              Lorem Ipsum is simply dummy text of the printin
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailAddToCard;
