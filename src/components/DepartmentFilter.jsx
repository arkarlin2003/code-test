import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const departments = [
  { name: "Men", count: 230 },
  { name: "Kids", count: 45 },
  { name: "Women", count: 102 },
  { name: "Big and Tall", count: 10 },
];
const DepartmentFilter = () => {
  return (
    <div className="space-y-[24px]">
      <Accordion type="single" collapsible  defaultValue="department" className="w-full">
        <AccordionItem value="department">
          <AccordionTrigger className="font-semibold font-poppin">
            Department
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-[12px]">
              {departments.map((department) => (
                <li key={department.name}>
                  <div className="flex justify-between">
                    <div className="flex gap-[8px] items-center">
                      <Checkbox id="terms" />
                      <h5 className="text-sm font-poppin">{department.name}</h5>
                    </div>
                    <h5 className="text-xs font-poppin">{department.count}</h5>
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

export default DepartmentFilter;
