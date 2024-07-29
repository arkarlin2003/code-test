import { IoSend } from "react-icons/io5";

const company = [
  "About Us",
  "Blog",
  "Careers",
  "Our team",
  "Help Center",
  "Outlets",
];

const shop = [
  "Gift Cards",
  "Our Products",
  "My Account",
  "Shipping",
  "Returns",
  "Rewards",
];

const support = [
  "Contact Us",
  "Payment Options",
  "Store Locator",
  "Accessibility",
  "Affiliates",
];

const payments = [
  "https://i.pinimg.com/564x/06/d1/30/06d130890649141a1c96b71bebcbf9a4.jpg",
  "https://i.pinimg.com/564x/93/49/9e/93499e5de836f549ae47dd92597b747c.jpg",
  "https://i.pinimg.com/564x/63/dd/d9/63ddd963a635a1cfe4e06ee149a8bbf9.jpg",
];

const faq = ["Rewards FAQ", "Product Card", "Size Guide"];

const FooterList = ({ lists }) => {
  return (
    <ul className="mt-5 space-y-3">
      {lists.map((list) => (
        <li key={list} className="text-[14px] leading-[21px] font-poppin">
          {list}
        </li>
      ))}
    </ul>
  );
};
const Footer = () => {
  return (
    <footer className="px-[150px]  bg-[#E4E4E4]">
      <div className="flex py-[71px] justify-between">
        <div className="w-[345px]">
          <h1 className="font-bold text-[24px] leading-[29.26px] mb-[30px]">
            Brand
          </h1>
          <h5 className="text-base font-poppin mb-3 font-semibold">
            Subscribe to our Newsletter
          </h5>
          <p className=" text-sm font-poppin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="mt-5 relative inline-block">
            <input
              type="text"
              className="w-[345px] h-[47px] placeholder:text-[14px] placeholder:leading-[21px] py-[13px] px-[11px] rounded-[5px]"
              placeholder="Enter email"
            />
            <div className="bg-default w-[51px] flex justify-center items-center h-[47px] rounded-r-[5px] rounded-l-[5px] absolute top-0 right-0">
              <IoSend className="w-[25px] h-[25px] text-white" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-7">
          <div>
            <h3 className=" font-semibold font-poppin">Company</h3>
            <FooterList lists={company} />
          </div>
          <div>
            <h3 className=" font-semibold font-poppin">Shop</h3>
            <FooterList lists={shop} />
          </div>
          <div>
            <h3 className=" font-semibold font-poppin">Support</h3>
            <FooterList lists={support} />
          </div>
          <div>
            <h3 className=" font-semibold font-poppin">FAQ</h3>
            <FooterList lists={faq} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-8">
        <p className="text-sm font-poppin">
          @2023 All rights reserved. Designed by Brand
        </p>
        <div className="flex space-x-5">
          <p className="text-sm font-poppin">Payment Partners</p>
          <ul className="flex items-center space-x-3">
            {payments.map((payment) => (
              <li key={payment}>
                <img src={payment} className="w-10 h-8" alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
