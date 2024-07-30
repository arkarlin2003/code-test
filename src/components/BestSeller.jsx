import ProductCard from "./ProductCard";
import useGetProducts from "@/hooks/useGetProducts";

const BestSeller = () => {
  const  products  = useGetProducts();

  return (
    <section className="best-seller-section">
      <div className="space-y-[24px] ">
        <h5 className="sub-title">
          Top selling
        </h5>
        <h2 className="title">
          Best Weekend Sellers
        </h2>
      </div>
      <div className=" grid grid-cols-4 gap-[24px]">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
