import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import useGetCategories from "@/hooks/useGetCategories";


const CategoryFilter = () => {
    const categories = useGetCategories()
  return (
    <div className="space-y-[24px]">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold font-poppin">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-[12px]">
              {categories?.map((category) => (
                <li key={category}>
                  <div className="flex justify-between">
                    <div className="flex gap-[8px] items-center">
                      <Checkbox id="terms" />
                      <h5 className="text-sm font-poppin">{category}</h5>
                    </div>
                    <h5 className="text-xs font-poppin">10</h5>
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryFilter;
