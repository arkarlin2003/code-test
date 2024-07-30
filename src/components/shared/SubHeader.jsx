import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const menus = ["Shipping", "FAQ", "Contact"];

const MenuLists = () => {
  return (
    <ul className="flex items-center space-x-6">
      {menus.map((menu) => (
        <li key={menu} className="text-[14px]">
          <Link to={"/"}>{menu}</Link>
        </li>
      ))}
      <Select>
        <SelectTrigger className="lang-select">
          <SelectValue
            className="text-sm placeholder:text-sm"
            placeholder="Eng | S"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="eng">English</SelectItem>
            <SelectItem value="my">Myanmar</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </ul>
  );
};

const SubHeader = () => {
  return (
    <header className="sub-header">
      <h4 className="text-sm font-poppin">Support (00) 33 169 7720</h4>
      <h4 className="text-sm font-poppin">
        Free US shipping an all orders $100+{" "}
        <Link to={"/"} className=" underline">
          Learn more
        </Link>
      </h4>
      <MenuLists />
    </header>
  );
};

export default SubHeader;
