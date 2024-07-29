import ProductCard from "./ProductCard";
import useGetProducts from "@/hooks/useGetProducts";

const BestSeller = () => {
  const  products  = useGetProducts();

  return (
    <section className="px-[150px] my-[56px] border-y-[1px] pt-[35px]">
      <div className="space-y-[24px] ">
        <h5 className=" uppercase text-xs font-semibold font-poppin text-default text-center">
          Top selling
        </h5>
        <h2 className="text-[32px] leading-[39.01px] font-bold text-center">
          Best Weekend Sellers
        </h2>
      </div>
      <div className=" flex flex-wrap gap-[20px] justify-center my-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
