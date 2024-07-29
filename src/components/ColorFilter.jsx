import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const colors = [
  { name: "Black", code: "bg-[#000]" },
  { name: "White", code: "bg-[#fff]" },
  { name: "Pink", code: "bg-[#F26060]" },
  { name: "Blue", code: "bg-[#556FF6]" },
  { name: "Purple", code: "bg-[#7C3FFF]" },
  { name: "Green", code: "bg-[#37BC7C]" },
  { name: "Orange", code: "bg-[#E09A32]" },
  { name: "Gray", code: "bg-[#B2B2B2]" },
  { name: "Red", code: "bg-[#FF0000]" },
  { name: "Yellow", code: "bg-[#F0F364]" },
];
const ColorFilter = () => {
  return (
    <div className="space-y-[24px] ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold font-poppin">
            Color
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full h-[85px] flex flex-wrap gap-[20px] ">
              {colors.map((color) => (
                <div key={color.name} className="round">
                  <input
                    type="radio"
                    className="color-check-black"
                    name="color[]"
                    id="checkbox-black"
                  />
                  <label
                    className={`color-check-label ${color.code}`}
                    htmlFor="checkbox-black"
                  ></label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ColorFilter;
