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
import { AiOutlineQuestionCircle } from "react-icons/ai";


const PaymentCard = () => {
  return (
    <div className="mt-[65px] space-y-[32px]">
      <div className="w-full flex justify-between">
        <h4 className="font-semibold font-poppin">Shipping Method</h4>
      </div>
      <div className="mt-[24px] space-y-[32px]">
        <RadioGroup defaultValue="comfortable">
          <div>
            <div className="flex justify-between py-[16px] px-[24px] border w-full">
              <div className="space-x-[16px] flex items-center">
                <RadioGroupItem value="credit-card" id="credit-card" />
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
            <div className="p-[24px] space-y-[16px]">
              <div>
                <input
                  type="text"
                  className="py-[10px] px-[21px] focus:outline-none border h-[41px] w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                  placeholder="Card Number"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="py-[10px] px-[21px] focus:outline-none border h-[41px] w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                  placeholder="Name on card"
                />
              </div>
              <div className="flex justify-between h-[41px]">
                <Select>
                  <SelectTrigger className="w-[131px] text-sm h-full py-[10px] px-[21px]">
                    <SelectValue
                      className="text-sm placeholder:text-sm"
                      placeholder="January"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[131px] text-sm h-full py-[10px] px-[21px]">
                    <SelectValue
                      className="text-sm placeholder:text-sm"
                      placeholder="2022"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className=" relative">
                  <input
                    type="text"
                    className="py-[10px] px-[21px] pr-[30px] focus:outline-none border h-[41px] w-[131px] font-poppin text-sm  "
                    placeholder="CCV"
                  />
                  <AiOutlineQuestionCircle className="w-[20px] h-[20px] absolute top-[10px] right-2" />
                </div>
              </div>
            </div>
            <div className="flex justify-between py-[16px] px-[24px] border w-full">
              <div className="space-x-[16px] flex items-center">
                <RadioGroupItem value="paypal" id="paypal" />
                <p className="font-semibold font-poppin">Paypal</p>
              </div>
              <div>
                <img
                  className="w-[23px] h-[23.59px]"
                  src='https://i.pinimg.com/564x/10/4f/24/104f249d8b4824276ed9f2892a8fdb6e.jpg'
                  alt=""
                />
              </div>
            </div>
          </div>
        </RadioGroup>
        <div className="flex justify-between w-full">
          <div className="border-[0.5px] py-[8px] px-[14px] ">
            <p className="text-sm font-poppin">Return</p>
          </div>
          <Button className="py-[8px] px-[14px] rounded-none ">
            <p>Continue</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
