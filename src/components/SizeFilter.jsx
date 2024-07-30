import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"];

const SizeFilter = () => {
  return (
    <div className="space-y-[24px]">
      <Accordion type="single" collapsible defaultValue="size" className="w-full">
        <AccordionItem value="size">
          <AccordionTrigger className="font-semibold font-poppin">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-[274px] h-[89px] grid grid-cols-4  ">
              {sizes.map((size) => (
                <div key={size} className="square w-[58px] h-[37px]">
                  <input
                    type="checkbox"
                    className="size-check"
                    name="size[]"
                    id=""
                  />
                  <label
                    className="size-check-label text-center w-[58px] uppercase text-sm font-poppin"
                    htmlFor=""
                  >
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SizeFilter;
