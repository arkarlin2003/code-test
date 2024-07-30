import { useFormik } from "formik";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInformation } from "@/services/features/cartSlice";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";

const InformationSchema = Yup.object().shape({
  contactEmail: Yup.string().required("email required"),
  shippingAddress:Yup.object().shape({
    firstName: Yup.string().required("first name required"),
    lastName: Yup.string().required("last name required"),
    address: Yup.string().required("address required"),
    city: Yup.string().required("city required"),
  }),
});

const InformationCard = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      contactEmail: "",
      shippingAddress: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
      },
    },
    validationSchema: InformationSchema,
    onSubmit: async (values) => {
      dispatch(setInformation(values));
    },
  });

  return (
    <div className="mt-[65px]">
      <form onSubmit={formik.handleSubmit} className="space-y-[48px] w-full">
        <div className="space-y-[16px]">
          <div className="space-y-[16px]">
            <div className="w-full flex justify-between">
              <h4 className="font-semibold font-poppin">Contact Information</h4>
              <h5 className="text-sm font-poppin">
                Already have an account?{" "}
                <span className="text-default">Log in</span>
              </h5>
            </div>
            <div>
              <input
                onChange={formik.handleChange}
                value={formik.values.contactEmail}
                name="contactEmail"
                type="text"
                className="py-[10px] px-[16px] border-[0.5px] h-[41px] w-full text-sm placeholder:text-sm focus:outline-0  font-poppin text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                placeholder="Your Email"
              />
              <ErrorMessage message={formik.errors.contactEmail} />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <Checkbox />
            <label className="text-sm font-poppin">
              Email me with news and offers
            </label>
          </div>
        </div>
        <div>
          <h1 className="font-semibold font-poppin">Shipping address</h1>
          <div className="mt-[24px] space-y-[32px]">
            <div>
              <Accordion
                type="single"
                collapsible
                defaultValue="indonesia"
                className="w-full"
              >
                <AccordionItem value="indonesia">
                  <AccordionTrigger className=" text-sm font-poppin">
                    Indonesia
                  </AccordionTrigger>
                  <AccordionContent className="space-y-[16px]">
                    <div className=" grid grid-cols-2 gap-[20px]">
                      <div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.shippingAddress.firstName}
                          name="shippingAddress.firstName"
                          type="text"
                          className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                          placeholder="First name"
                        />
                        <ErrorMessage message={formik.errors.shippingAddress?.firstName} />
                      </div>
                      <div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.shippingAddress.lastName}
                          name="shippingAddress.lastName"
                          type="text"
                          className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                          placeholder="Last name"
                        />
                        <ErrorMessage message={formik.errors.shippingAddress?.lastName} />
                      </div>
                    </div>
                    <div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.address}
                        name="shippingAddress.address"
                        type="text"
                        className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                        placeholder="Address"
                      />
                      <ErrorMessage message={formik.errors.shippingAddress?.address} />
                    </div>
                    <div>
                      <input
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.city}
                        name="shippingAddress.city"
                        className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                        placeholder="City"
                      />
                      <ErrorMessage message={formik.errors.shippingAddress?.city} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="province">
                  <AccordionTrigger className=" text-sm font-poppin">
                    Province
                  </AccordionTrigger>
                  <AccordionContent className="space-y-[16px]">
                    <div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.postalCode}
                        name="shippingAddress.postalCode"
                        type="text"
                        className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                        placeholder="Postal Code"
                      />
                    </div>
                    <div>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.phone}
                        name="shippingAddress.phone"
                        type="text"
                        className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                        placeholder="Phone"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex justify-between w-full">
              <Link to={"/add-to-carts"}>
                <Button className="py-[8px] px-[14px] rounded-none hover:bg-white border bg-white text-black ">
                  <p className="text-sm font-poppin">Return</p>
                </Button>
              </Link>
              <Button
                type="submit"
                className="py-[8px] px-[14px] rounded-none "
              >
                <p>Continue</p>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InformationCard;
