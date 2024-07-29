import InformationCard from "./InformationCard";
import PaymentCard from "./PaymentCard";
import Step from "./shared/Step";
import Stepper from "./shared/Stepper";
import ShippingMethod from "./ShippingMethod";



const ShippingStep = () => {
  return (
    <div className="w-full">
      <Stepper>
        <Step checked={true} current={false} title={"My bag"} count={1} />
        <Step checked={false} current={true} title={"Information"} count={2} />
        <Step checked={false} current={false} title={"Shipping"} count={3} />
        <Step checked={false} current={false} title={"Payment"} count={4} />
      </Stepper>

     {/* <InformationCard/> */}
     {/* <ShippingMethod/> */}
     <PaymentCard/>
    </div>
  );
};

export default ShippingStep;
