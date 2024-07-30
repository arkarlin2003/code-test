import { RxCross2 } from "react-icons/rx";

const Card = ({ name,filterCategoryProducts }) => {
  return (
    <div className="filter-selected">
      <h5 className="text-sm font-poppin">{name}</h5>
      <RxCross2 className="w-[15px] h-[15px] cursor-pointer" onClick={()=> filterCategoryProducts('')} />
    </div>
  );
};

const FilterSelected = ({filterCategory,filterCategoryProducts,resetAllFilter}) => {
  return (
    <div className="space-y-[16px] pb-[32px] border-b">
      <div className="flex justify-between">
        <h5 className="font-semibold font-poppin">Filter</h5>
        <h5 onClick={resetAllFilter} className="text-sm font-poppin underline cursor-pointer text-default">
          Reset All
        </h5>
      </div>
      <div className="flex gap-[8px] flex-wrap">
        {
          filterCategory && (
            <Card name={filterCategory} filterCategoryProducts={filterCategoryProducts}/>
          )
        }
      </div>
    </div>
  );
};

export default FilterSelected;
