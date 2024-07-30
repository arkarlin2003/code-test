import { useSelector } from "react-redux";
import InformationCard from "./InformationCard";
import PaymentCard from "./PaymentCard";
import Step from "./shared/Step";
import Stepper from "./shared/Stepper";
import ShippingMethod from "./ShippingMethod";
import { useState } from "react";

const ShippingStep = () => {
  const carts = useSelector((state) => state.carts);
  const information = carts?.information?.contactEmail;
  const shipping = carts?.shippingMethod;
  const payment = carts?.paymentMethod?.type;

  return (
    <div className="w-full">
      <Stepper>
        <Step checked={true} current={false} title={"My bag"} count={1} />
        <Step
          checked={information ? true : false}
          current={information ? false : true}
          title={"Information"}
          count={2}
        />
        <Step
          checked={information && shipping ? true : false}
          current={information && !shipping ? true : false}
          title={"Shipping"}
          count={3}
        />
        <Step
          checked={information && shipping && payment ? true : false}
          current={information && shipping && !payment ? true : false}
          title={"Payment"}
          count={4}
        />
      </Stepper>
      {!information && <InformationCard />}
      {information && !shipping && <ShippingMethod />}
      {information && shipping && !payment && <PaymentCard />}
    </div>
  );
};

export default ShippingStep;
