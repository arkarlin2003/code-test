import { currencyFormat, titleToSlug, wordSlice } from "@/lib/utils";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[240px] h-[374px] relative">
      <div className="product-img">
        <img className="h-full w-full" src={product.image} alt="" />
        <div className="product-detail-search ">
          <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full">
            <MdOutlineSearch className="w-[15px] h-[15px]" />
          </div>
          <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full">
            <FaRegHeart className="w-[15px] h-[15px]" />
          </div>
        </div>
      </div>
      <div className="py-2">
        <h1 className="font-poppin font-semibold text-center">
          <Link to={'/products/'+titleToSlug(product.title)}>{wordSlice(product.title)}</Link>
        </h1>
        <h1 className="font-poppin font-semibold text-center text-default">
          {currencyFormat(product.price)}
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
