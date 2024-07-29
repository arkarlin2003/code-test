import ShippingCard from "@/components/ShippingCard";
import ShippingStep from "@/components/ShippingStep";
import { Button } from "@/components/ui/button";
import { currencyFormat } from "@/lib/utils";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Shipping = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <section className="px-[150px] my-[50px] flex justify-between gap-24">
      <div className="w-[557px] space-y-[32px]">
        <ShippingStep/>
      </div>
      <div className="w-[513px] p-[32px] space-y-[24px] bg-[#F4F4F4]">
        <div>
          <h1 className="font-bold text-lg">
            Shipping Bag{" "}
            <span className="text-sm font-normal font-poppin">({carts?.cartItems.length} item)</span>
          </h1>
        </div>
        <hr />
        <ul className="space-y-[24px]">
          {carts?.cartItems.map((cart) => (
            <li key={cart.product.id}>
              <ShippingCard product={cart.product } qty={cart.qty} />
            </li>
          ))}
        </ul>
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
            <Link to={"/shipping"}>
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
          <p className="text-2xl font-bold">
            {currencyFormat(carts?.totalPrice)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
