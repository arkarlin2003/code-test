import { useSelector } from "react-redux";
import AddToCartCard from "./AddToCartCard";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { currencyFormat } from "@/lib/utils";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import emptyCart from "./empty.json";

const AddToCartSection = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <SheetContent className=" overflow-y-auto">
      <SheetHeader>
        <SheetTitle>
          Shopping Bag{" "}
          <span className="text-base font-poppin font-normal">
            ({carts?.cartItems?.length ?? "0"} Item)
          </span>
        </SheetTitle>
      </SheetHeader>
      {carts?.cartItems?.length ? (
        <>
          <ul className=" space-y-[32px] my-[50px] overflow-y-auto ">
            {carts?.cartItems?.map((cart) => (
              <li key={cart.product.id}>
                <AddToCartCard product={cart.product} qty={cart.qty} />
              </li>
            ))}
          </ul>
          <div className="space-y-[16px] mt-9">
            <div>
              <Button className="h-[58px] rounded-none bg-white border hover:bg-white  border-default text-[#6f6f6f] text-sm font-poppin w-full text-center">
                4-Interest-free payments of $18.75 with{" "}
                <span className="font-bold">Klama</span>.{" "}
                <span className=" underline text-default">Learn more</span>
              </Button>
            </div>
            <div>
              <SheetClose asChild>
                <Link to={"/add-to-carts"}>
                  <Button className="h-[58px] rounded-none font-poppin font-semibold w-full">
                    Check Out - {currencyFormat(carts?.totalPrice)}
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </>
      ) : (
        <Lottie
          animationData={emptyCart}
          className="m-auto"
          play
          style={{ width: 400, height: 400 }}
        />
      )}
    </SheetContent>
  );
};

export default AddToCartSection;
