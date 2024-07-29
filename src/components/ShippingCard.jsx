import { currencyFormat, wordSlice } from "@/lib/utils";

const ShippingCard = ({product,qty}) => {
  return (
    <div className="h-[141px] flex space-x-[24px]">
      <img className="w-[141px] h-full object-contain" src={product.image} alt="" />
        <div className="flex flex-col justify-between w-[283px] h-full">
          <div className="w-full flex justify-between">
            <h3 className="font-semibold font-poppin">{wordSlice(product.title)}</h3>
            <h3 className="font-semibold font-poppin">{currencyFormat(product.price * qty)}</h3>
          </div>
          <div className="space-y-[4px]">
            <p className="text-xs font-poppin">Color:Black</p>
            <p className="text-xs font-poppin">Color:Black</p>
          </div>
        </div>
    </div>
  );
};

export default ShippingCard;
