import { MdOutlineSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { HiMiniUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import AddToCartSection from "../AddToCartSection";

const menus = [
  "New",
  "Tops",
  "Bottoms",
  "Kids",
  "Accessories",
  "Collections",
  "Sale",
];

const MenuLists = () => {
  return (
    <ul className="flex items-center gap-6">
      {menus.map((menu) => (
        <li
          key={menu}
          className="text-base hover:text-default font-poppin"
        >
          <Link to={"/"}>{menu}</Link>
        </li>
      ))}
    </ul>
  );
};

const Header = ({className}) => {
  
  const { cartItems } = useSelector((state) => state.carts);
  return (
    <header className={`header ${className}`}>
      <div>
        <h1 className="logo">
          <Link to={"/"}>Logo</Link>
        </h1>
      </div>
      <MenuLists />
      <div className="flex items-center gap-4">
        <MdOutlineSearch className="icon" />

        <Sheet>
          <SheetTrigger asChild>
            <div className=" relative cursor-pointer">
              <MdShoppingCart className="icon"/>
              {cartItems?.length ? (
                <div className="cart-count">
                  <h5 className="text-[5px]">{cartItems.length}</h5>
                </div>
              ) : ''}
            </div>
          </SheetTrigger>
          <AddToCartSection/>
        </Sheet>

        <HiMiniUser className="icon" />
      </div>
    </header>
  );
};

export default Header;
