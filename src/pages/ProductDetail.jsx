import {   titleToSlug } from "@/lib/utils";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import ProductCard from "@/components/ProductCard";
import CustomerReview from "@/components/CustomerReview";
import ProductDetailCard from "@/components/ProductDetailCard";
import ProductDetailAddToCard from "@/components/ProductDetailAddToCard";
import useGetProducts from "@/hooks/useGetProducts";

const ProductDetail = () => {
  const { slug } = useParams();
  const  products  = useGetProducts();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(products?.find((pro) => titleToSlug(pro.title) == slug));
    
  }, [product, products]);
  return (
    <section className="product-detail-section">
      <div className="flex gap-[76px]">
        <div className="deatil">
          <div className="h-[526px] w-full">
            <img src={product?.image} className="w-full h-full object-contain" alt="" />
          </div>
          <ProductDetailCard product={product}/>
        </div>
        <ProductDetailAddToCard product={product}/>
      </div>
      <CustomerReview rating={product?.rating?.rate}/>
      <div className="my-[66px]">
        <h1 className="text-2xl font-bold text-center  mb-10">
          You might also like
        </h1>
        <div className="grid grid-cols-4 gap-[24px] justify-center my-10">
          {products?.map((product, i) => {
            if (i < 4) {
              return <ProductCard key={product.id} product={product} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
