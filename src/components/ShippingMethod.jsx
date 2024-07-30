import { useFormik } from "formik";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShippingMethod } from "@/services/features/cartSlice";

const shippingMethods = [
  {
    title: "Free Shipping",
    des: "Delivery in 5-7 working days",
    price: "Free",
  },
  {
    title: "Local Pickup from store",
    des: "Delivery in 5-7 working days",
    price: "$8.00",
  },
  {
    title: "Standard Shipping",
    des: "Delivery in 1-2 working days",
    price: "$11.00",
  },
  {
    title: "Express Shipping",
    des: "Delivery in 3-5 working days",
    price: "$18.00",
  },
  {
    title: "Same-Day Shipping",
    des: "-",
    price: "$34.00",
  },
];

const ShippingMethod = () => {
  const dispatch = useDispatch();
  const [method, setMethod] = useState("Standard Shipping");
  const formik = useFormik({
    initialValues: {
      shippingMethod: method,
    },
    onSubmit: async (values) => {
      dispatch(setShippingMethod(values));
    },
  });

  return (
    <div className="mt-[65px] space-y-[32px]">
      <div className="w-full flex justify-between">
        <h4 className="font-semibold font-poppin">Shipping Method</h4>
      </div>
      <div className="mt-[24px] ">
        <form onSubmit={formik.handleSubmit} className="w-full space-y-[32px]">
          <RadioGroup defaultValue={`${method}`}>
            {shippingMethods.map((method) => (
              <div
                key={method.title}
                className="py-[16px] px-[24px] border flex justify-between"
              >
                <div className="space-x-[16px] flex">
                  <RadioGroupItem
                    value={method.title}
                    name="shippingMethod"
                    onClick={() => {
                      setMethod(method.title);
                      formik.values.shippingMethod = method.title;
                    }}
                  />
                  <div className="space-y-[8px]">
                    <p className="text-xs font-poppin">{method.title}</p>
                    <p className="text-xs font-poppin">{method.des}</p>
                  </div>
                </div>
                <p className="  font-bold font-poppin">{method.price}</p>
              </div>
            ))}
          </RadioGroup>
          <div className="flex justify-between w-full">
            <Link to={"/add-to-carts"}>
              <Button className="py-[8px] px-[14px] rounded-none hover:bg-white border bg-white text-black ">
                <p className="text-sm font-poppin">Return</p>
              </Button>
            </Link>
            <Button type="submit" className="py-[8px] px-[14px] rounded-none ">
              <p>Continue</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingMethod;
