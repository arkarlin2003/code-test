import BrandFilter from "@/components/BrandFilter";
import CategoryFilter from "@/components/CategoryFilter";
import ColorFilter from "@/components/ColorFilter";
import DepartmentFilter from "@/components/DepartmentFilter";
import FilterSelected from "@/components/FilterSelected";
import PriceRangeFilter from "@/components/PriceRangeFilter";
import ProductCard from "@/components/ProductCard";
import SizeFilter from "@/components/SizeFilter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategoryProductsQuery, useGetProductsQuery } from "@/services/api/productApi";
import { useEffect, useState } from "react";
import { RiLayoutGrid2Fill, RiLayoutGridFill } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";

const Category = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const nav = useNavigate()
  const [filterCategory, setFilterCategory] = useState(searchParams.get("search"));
  const {data:getproducts} = useGetProductsQuery()
  const {data:filterProducts} = useGetCategoryProductsQuery(filterCategory);
 
  const filterCategoryProducts =(category) => {
    setFilterCategory(category)
    if(category){
      nav(`/categories?search=${category}`)
    }else{
      nav(`/categories`)
    }
  }

  const resetAllFilter = () => {
    setFilterCategory("")
    nav(`/categories`)
  }

  useEffect(() => {
    if(filterCategory){
      if(filterProducts){
        setProducts(filterProducts)
      }
    }else{
      setProducts(getproducts)
    }
  }, [products, filterCategory,filterProducts,getproducts]);

  const [layout, setLayout] = useState("grid-cols-3");
  const changeLayout = (value) => {
    setLayout(value);
  };
  return (
    <section>
      <div className="category-hero-section">
        <div className="text-white w-[533px] space-y-[16px]">
          <h3 className="text-[32px] leading-[39.01px] font-bold">
            New Arrivals
          </h3>
          <h5 className="text-sm font-poppin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </h5>
        </div>
      </div>
      <div className="category-hero-filter-section">
        <div className="w-[273px] space-y-[20px]">
          <FilterSelected filterCategory={filterCategory} filterCategoryProducts={filterCategoryProducts} resetAllFilter={resetAllFilter} />
          <DepartmentFilter />
          <CategoryFilter filterCategory={filterCategory} filterCategoryProducts={filterCategoryProducts}/>
          <SizeFilter />
          <ColorFilter />
          <BrandFilter />
          <PriceRangeFilter />
        </div>
        <div className="  w-[778px] space-y-[24px]">
          <div className="flex w-full justify-between ">
            <h5 className="text-sm font-poppin">Home/New Arrivals</h5>
            <div className=" space-x-[32px] flex items-center">
              <div className="flex items-center">
                <div className="p-[3px] border-[0.5px]">
                  <RiLayoutGridFill
                    onClick={() => changeLayout("grid-cols-2")}
                    className={` ${
                      layout == "grid-cols-2"
                        ? "text-default"
                        : "text-[#E4E4E4]"
                    } cursor-pointer w-[20px] h-[20px]`}
                  />
                </div>
                <div className="p-[3px] border-[0.5px]">
                  <RiLayoutGrid2Fill
                    onClick={() => changeLayout("grid-cols-3")}
                    className={`${
                      layout == "grid-cols-3"
                        ? "text-default"
                        : "text-[#E4E4E4]"
                    } cursor-pointer w-[20px] h-[20px]`}
                  />
                </div>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[175px] focus:ring-0">
                    <SelectValue
                      className="text-sm placeholder:text-sm placeholder:font-poppin"
                      placeholder="Sort By: Featured"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className={`grid ${layout} gap-[24px]`}>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
