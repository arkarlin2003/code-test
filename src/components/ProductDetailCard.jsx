import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCheck } from "react-icons/fa6";

const ProductDetailCard = ({product}) => {
  return (
    <div className="mt-[54px]">
      <Tabs defaultValue="des" className="w-full">
        <TabsList className="w-full grid grid-cols-5 ">
          <TabsTrigger value="des">Description</TabsTrigger>
          <TabsTrigger value="size-fit">Size & Fit</TabsTrigger>
          <TabsTrigger value="shipping-return">Shipping & Return</TabsTrigger>
        </TabsList>
        <TabsContent value="des">
          <p className="text-sm font-poppin">{product?.description}</p>
          <ul className="mt-[26px] space-y-1 text-sm font-poppin">
            <li className="flex items-center gap-4">
              <FaCheck className="w-[18px] h-[18px]" />
              <p>100% pima cotton</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck className="w-[18px] h-[18px]" />
              <p>Made In Peru</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck className="w-[18px] h-[18px]" />
              <p>Breathable Pima cotton pique</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck className="w-[18px] h-[18px]" />
              <p>Rib knit crewneck</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck className="w-[18px] h-[18px]" />
              <p>Embroidered Bunny logo at chest</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheck className="w-[18px] h-[18px]" />
              <p>Knit stripes at cuffs</p>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="size-fit">
          <p className="text-sm font-poppin">Size & Fit</p>
        </TabsContent>
        <TabsContent value="shipping-return">
          <p className="text-sm font-poppin">Shipping & Return</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailCard;
