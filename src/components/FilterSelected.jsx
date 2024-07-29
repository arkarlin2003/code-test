import { RxCross2 } from "react-icons/rx";

const Card = ({ name }) => {
  return (
    <div className="filter-selected">
      <h5 className="text-sm font-poppin">{name}</h5>
      <RxCross2 className="w-[15px] h-[15px]" />
    </div>
  );
};

const FilterSelected = () => {
  return (
    <div className="space-y-[16px] pb-[32px] border-b">
      <div className="flex justify-between">
        <h5 className="font-semibold font-poppin">Filter</h5>
        <h5 className="text-sm font-poppin underline text-default">
          Reset All
        </h5>
      </div>
      <div className="flex gap-[8px] flex-wrap">
        <Card name={"Men"} />
        <Card name={"Women"} />
      </div>
    </div>
  );
};

export default FilterSelected;
