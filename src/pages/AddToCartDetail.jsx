import AddToCartCard from "@/components/AddToCartCard";
import { Button } from "@/components/ui/button";
import { currencyFormat } from "@/lib/utils";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCartDetail = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <section className="px-[150px] my-[60px] gap-24 flex justify-between">
      <div className="w-[555px] space-y-[32px]">
        <div className="bg-[#F5F5F5] border-[#E4E4E4] flex justify-center  w-full h-[40px] border py-[8px] space-x-2">
          <div className="w-[15px] h-[15px] bg-[#F26060]"></div>
          <h1 className=" font-semibold font-poppin">
            You’re 35.00 Away from free Shipping
          </h1>
        </div>
        <ul className="space-y-[32px]">
          {carts?.cartItems.map((cart) => (
            <AddToCartCard
              key={cart.product.id}
              product={cart.product}
              qty={cart.qty}
            />
          ))}
        </ul>
      </div>
      <div className="w-[512px] bg-[#F4F4F4] h-[373px] p-[32px] space-y-[24px]">
        <div className="space-y-[16px]">
          <h1 className=" font-semibold font-poppin">
            Gift card or discount code
          </h1>
          <div className="flex items-center w-full">
            <input
              type="text"
              className="border-[0.5px] w-full py-[14px] px-[16px] border-[#E4E4E4] text-sm font-poppin placeholder:text-[#929292] text-[#929292]"
              placeholder="Enter gift card or discount code"
            />
            <Link to={'/shipping'}>
            <Button className="w-[108px] h-[49px] text-white rounded-none font-poppin">
              Apply
            </Button>
            </Link>
          </div>
        </div>
        <hr />
        <ul className="space-y-[16px] text-sm font-poppin">
          <li>
            <div className="flex justify-between w-full">
              <p>Subtotal</p>
              <p>{currencyFormat(carts?.itemsPrice)}</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between w-full">
              <p>Tax</p>
              <p>$0.00</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between w-full">
              <p>Shipping</p>
              <p>$0.00</p>
            </div>
          </li>
        </ul>
        <hr />
        <div className="flex w-full justify-between">
            <p className="text-sm font-semibold font-poppin">Total</p>
            <p className="text-2xl font-bold">{currencyFormat(carts?.totalPrice)}</p>
        </div>
      </div>
    </section>
  );
};

export default AddToCartDetail;
