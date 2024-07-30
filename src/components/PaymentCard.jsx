import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, setPaymentMethod } from "@/services/features/cartSlice";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";
const months = ["January", "February", "March"];
const years = ["2024", "2023", "2022", "2021", "2020"];

const PaymentSchema = Yup.object().shape({
  paymentMethod: Yup.object().shape({
    type: Yup.string().required("method required"),
    cardNumber: Yup.number().required("card number required"),
    nameOnCard: Yup.string().required("name on card required"),
    year: Yup.string().required("year required"),
    month: Yup.string().required("month required"),
    ccv: Yup.number().required("ccv required"),
  }),
});
const PaymentCard = () => {
  const dispatch = useDispatch();
  const [method, setMethod] = useState("credit-card");
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      paymentMethod: {
        type: method,
        cardNumber: "",
        nameOnCard: "",
        year: "2024",
        month: "January",
        ccv: "",
      },
    },
    validationSchema: PaymentSchema,
    onSubmit: async (values) => {
      dispatch(setPaymentMethod(values));
      dispatch(clearCart());
      nav("/purchase-complete");
    },
  });
  return (
    <div className="mt-[65px] ">
      <form onSubmit={formik.handleSubmit} className="space-y-[32px]">
        <div className="w-full flex justify-between">
          <h4 className="font-semibold font-poppin">Shipping Method</h4>
        </div>
        <div className="mt-[24px] space-y-[32px]">
          <RadioGroup defaultValue={method}>
            <div>
              <Accordion
                type="single"
                collapsible
                defaultValue="credit-card"
                className="w-full"
              >
                <AccordionItem value="credit-card" className="border-b-0">
                  <AccordionTrigger hide={true}>
                    <div className="flex justify-between py-[16px] px-[24px] border w-full">
                      <div className="space-x-[16px] flex items-center">
                        <RadioGroupItem
                          onClick={() => {
                            setMethod("credit-card");
                            formik.values.paymentMethod.type = "credit-card";
                          }}
                          value="credit-card"
                          id="credit-card"
                        />
                        <p className="font-semibold font-poppin">Credit Card</p>
                      </div>
                      <div className="flex h-[20px] space-x-[8px]">
                        <img
                          className="w-[20px] h-[15.55px]"
                          src="https://i.pinimg.com/564x/ca/0c/70/ca0c7039ddcf224cb6b075cb59e4677e.jpg"
                          alt=""
                        />
                        <img
                          className="w-[20px] h-[20px]"
                          src="https://i.pinimg.com/736x/43/ed/1d/43ed1d4685a1e776836cf19557cfca73.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-[24px] space-y-[16px]">
                      <div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.paymentMethod.cardNumber}
                          name="paymentMethod.cardNumber"
                          type="number"
                          className="py-[10px] px-[21px] focus:outline-none border h-[41px] w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                          placeholder="Card Number"
                        />
                        <ErrorMessage
                          message={formik.errors.paymentMethod?.cardNumber}
                        />
                      </div>
                      <div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.paymentMethod.nameOnCard}
                          name="paymentMethod.nameOnCard"
                          type="text"
                          className="py-[10px] px-[21px] focus:outline-none border h-[41px] w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                          placeholder="Name on card"
                        />
                        <ErrorMessage
                          message={formik.errors.paymentMethod?.nameOnCard}
                        />
                      </div>
                      <div className="flex justify-between h-[41px]">
                        <Select
                          defaultValue={formik.values.paymentMethod.month}
                          onValueChange={(value) =>
                            (formik.values.paymentMethod.month = value)
                          }
                        >
                          <SelectTrigger className="w-[131px] text-sm h-full py-[10px] px-[21px]">
                            <SelectValue
                              className="text-sm placeholder:text-sm"
                              placeholder="January"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {months?.map((month) => (
                                <SelectItem
                                  key={month}
                                  value={month}
                                  name="paymentMethod.month"
                                >
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Select
                          defaultValue={formik.values.paymentMethod.year}
                          onValueChange={(value) =>
                            (formik.values.paymentMethod.year = value)
                          }
                        >
                          <SelectTrigger className="w-[131px] text-sm h-full py-[10px] px-[21px]">
                            <SelectValue
                              className="text-sm placeholder:text-sm"
                              placeholder="2022"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {years?.map((year) => (
                                <SelectItem
                                  key={year}
                                  onChange={() =>
                                    (formik.values.paymentMethod.year = year)
                                  }
                                  value={year}
                                  name="paymentMethod.year"
                                >
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className=" relative">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.paymentMethod.ccv}
                            name="paymentMethod.ccv"
                            type="number"
                            className="py-[10px] px-[21px] pr-[30px] focus:outline-none border h-[41px] w-[131px] font-poppin text-sm  "
                            placeholder="CCV"
                          />
                          <AiOutlineQuestionCircle className="w-[20px] h-[20px] absolute top-[10px] right-2" />
                          <ErrorMessage
                            message={formik.errors.paymentMethod?.ccv}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="paypal" className="border-b-0">
                  <AccordionTrigger hide={true}>
                    <div className="flex justify-between py-[16px] px-[24px] border w-full">
                      <div className="space-x-[16px] flex items-center">
                        <RadioGroupItem
                          onClick={() => {
                            setMethod("paypal");
                            formik.values.paymentMethod.type = "paypal";
                          }}
                          value="paypal"
                          id="paypal"
                        />
                        <p className="font-semibold font-poppin">Paypal</p>
                      </div>
                      <div>
                        <img
                          className="w-[23px] h-[23.59px]"
                          src="https://i.pinimg.com/564x/10/4f/24/104f249d8b4824276ed9f2892a8fdb6e.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-[24px] space-y-[16px]">
                      <div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.paymentMethod.cardNumber}
                          name="paymentMethod.cardNumber"
                          type="number"
                          className="py-[10px] px-[21px] focus:outline-none border h-[41px] w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                          placeholder="Card Number"
                        />
                        <ErrorMessage
                          message={formik.errors.paymentMethod?.cardNumber}
                        />
                      </div>
                      <div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.paymentMethod.nameOnCard}
                          name="paymentMethod.nameOnCard"
                          type="text"
                          className="py-[10px] px-[21px] focus:outline-none border h-[41px] w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                          placeholder="Name on card"
                        />
                        <ErrorMessage
                          message={formik.errors.paymentMethod?.nameOnCard}
                        />
                      </div>
                      <div className="flex justify-between h-[41px]">
                        <Select
                          defaultValue={formik.values.paymentMethod.month}
                          onValueChange={(value) =>
                            (formik.values.paymentMethod.month = value)
                          }
                        >
                          <SelectTrigger className="w-[131px] text-sm h-full py-[10px] px-[21px]">
                            <SelectValue
                              className="text-sm placeholder:text-sm"
                              placeholder="January"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {months?.map((month) => (
                                <SelectItem
                                  key={month}
                                  value={month}
                                  name="paymentMethod.month"
                                >
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Select
                          defaultValue={formik.values.paymentMethod.year}
                          onValueChange={(value) =>
                            (formik.values.paymentMethod.year = value)
                          }
                        >
                          <SelectTrigger className="w-[131px] text-sm h-full py-[10px] px-[21px]">
                            <SelectValue
                              className="text-sm placeholder:text-sm"
                              placeholder="2022"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {years?.map((year) => (
                                <SelectItem
                                  key={year}
                                  onChange={() =>
                                    (formik.values.paymentMethod.year = year)
                                  }
                                  value={year}
                                  name="paymentMethod.year"
                                >
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className=" relative">
                          <input
                            onChange={formik.handleChange}
                            value={formik.values.paymentMethod.ccv}
                            name="paymentMethod.ccv"
                            type="number"
                            className="py-[10px] px-[21px] pr-[30px] focus:outline-none border h-[41px] w-[131px] font-poppin text-sm  "
                            placeholder="CCV"
                          />
                          <AiOutlineQuestionCircle className="w-[20px] h-[20px] absolute top-[10px] right-2" />
                          <ErrorMessage
                            message={formik.errors.paymentMethod?.ccv}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
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
        </div>
      </form>
    </div>
  );
};

export default PaymentCard;
