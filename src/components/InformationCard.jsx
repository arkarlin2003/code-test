import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InformationCard = () => {
  return (
    <div className="mt-[65px] space-y-[48px]">
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
              type="text"
              className="py-[10px] px-[16px] border-[0.5px] h-[41px] w-full text-sm placeholder:text-sm focus:outline-0  font-poppin text-[#9B9B9B] placeholder:text-[#9B9B9B]"
              placeholder="Your Email"
            />
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
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className=" text-sm font-poppin">
                  Indonesia
                </AccordionTrigger>
                <AccordionContent className="space-y-[16px]">
                  <div className=" grid grid-cols-2 gap-[20px]">
                    <div>
                      <input
                        type="text"
                        className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                      placeholder="City"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className=" text-sm font-poppin">
                  Province
                </AccordionTrigger>
                <AccordionContent className="space-y-[16px]">
                  <div>
                    <input
                      type="text"
                      className="py-[10px] px-[16px] focus:outline-none border-[0.5px] h-[41px] w-full font-poppin text-sm text-[#9B9B9B] placeholder:text-[#9B9B9B]"
                      placeholder="Postal Code"
                    />
                  </div>
                  <div>
                    <input
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
            <div className="border-[0.5px] py-[8px] px-[14px] ">
                <p className="text-sm font-poppin">Return</p>
            </div>
            <Button className="py-[8px] px-[14px] rounded-none ">
                <p>Continue</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
