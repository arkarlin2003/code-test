import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { FiMinus } from "react-icons/fi";

const PriceRangeFilter = () => {
  return (
    <div className="space-y-[24px] ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold font-poppin">
            Price
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-[24px]">
              <div className="space-y-[16px]">
                <div className="flex">
                  <div>
                    <input type="text" className="w-[115px] px-[8px] py-[12px]  focus:ring-0 outline-none h-[45px] border border-[#E4E4E4] text-sm font-poppin" />
                  </div>
                  <div className="w-[35px] flex items-center justify-center">
                    <FiMinus size={20}/>
                  </div>
                  <div>
                    <input type="text" className="w-[115px] px-[8px] py-[12px]  focus:ring-0 outline-none h-[45px] border border-[#E4E4E4] text-sm font-poppin" />
                  </div>
                </div>
                <div>
                  <Button className=" rounded-none w-full border text-default text-sm font-poppin border-default bg-white">Save</Button>
                </div>
              </div>
              <ul>

              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PriceRangeFilter;
