import { currencyFormat, wordSlice } from "@/lib/utils";
import { addToCart, deleteCart } from "@/services/features/cartSlice";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";

const AddToCartCard = ({ product, qty }) => {
  const [updateQty, setUpdateQty] = useState(qty);
  const dispatch = useDispatch();

  const increaseQty = () => {
    setUpdateQty((pre) => pre + 1);
    dispatch(addToCart({ product, qty: updateQty+1 }));
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setUpdateQty((pre) => pre - 1);
      dispatch(addToCart({ product, qty: updateQty-1 }));
    }
  };
  return (
    <div className="h-[220px] w-full flex gap-[32px]">
      <div className="w-[200px] h-full">
        <img
          className="h-full w-full"
          src={product.image}
          alt=""
        />
      </div>
      <div className="w-[301px] h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">{wordSlice(product.title )}</h2>
          <h2 className="text-2xl font-bold">
            {currencyFormat(product.price * updateQty)}
          </h2>
        </div>
        <div className="space-y-[16px]">
          <h4 className="text-sm font-poppin">Black / XL</h4>
          <div className="h-[40px] flex justify-between">
            <div className="flex items-center h-full">
              <div
                className="add-to-cart-qty cursor-pointer"
                onClick={decreaseQty}
              >
                <FiMinus className="w-[10px] h-[21px]" />
              </div>
              <div className="add-to-cart-qty">
                <p className="text-sm font-poppin">{updateQty}</p>
              </div>
              <div
                className="add-to-cart-qty cursor-pointer"
                onClick={increaseQty}
              >
                <FiPlus className="w-[10px] h-[21px]" />
              </div>
            </div>
            <div className="add-to-cart-qty cursor-pointer" onClick={()=> dispatch(deleteCart(product.id))}>
              <FaTrashCan className="w-[16px] h-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartCard;
