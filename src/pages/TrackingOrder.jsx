import { IoCopyOutline } from "react-icons/io5";
import { FaFedex } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const TrackingOrder = () => {
  return (
    <section className="tracking-order-section">
      <div className="w-[415px]">
        <div>
          <h1 className="text-[32px] leading-[39.01px] font-bold text-center">
            Tracking Order
          </h1>
          <div className="mt-[27px]">
            <div className="border w-full py-[16px] px-[22px] flex justify-between">
              <h3 className="text-sm font-poppin">25Vbrki32b2</h3>
              <IoCopyOutline className="w-[20px] h-[20px]" />
            </div>
            <div className="p-[22px] border flex justify-between">
              <div className="space-y-[12px]">
                <h2 className="font-semibold font-poppin">Standard Shipping</h2>
                <h4 className="text-xs font-poppin">
                  Delivery in 5 - 7 working days
                </h4>
              </div>
              <FaFedex className="w-[32px] h-[32px] text-default" />
            </div>
          </div>
        </div>
        <div className="mt-[64px]">
            <ul className="">
                <li className="flex pb-[40px] justify-between relative  after:absolute after:content-[''] after:z-20 after:top-1 after:left-[13px] after:border after:h-full after:border-[#FF9C72]">
                    <div className="w-[30px] relative z-30 h-[30px] flex items-center py-[8px] px-[14px] justify-center bg-[#FF9C72] rounded-full">
                        <p className="font-semibold font-poppin text-white">4</p>
                    </div>
                    <div className="w-[356px] flex justify-between">
                        <div className="space-y-[8px]">
                            <h3 className="font-semibold font-poppin">Ready to Pickup</h3>
                            <h4 className="text-xs font-poppin">Order #25Vbrki32b2 from Logo</h4>
                        </div>
                        <p className="text-xs font-poppin">11:10 pm</p>
                    </div>
                </li>
                <li className="flex pb-[40px] justify-between relative  after:absolute after:content-[''] after:z-20 after:top-1 after:left-[13px] after:border after:h-full after:border-[#FF9C72]">
                    <div className="w-[30px] relative z-30 bg-white h-[30px] flex items-center  justify-center border-[0.5px] border-[#FF9C72] rounded-full">
                        <FiCheck className="text-[#FF9C72] w-[24px] h-[24px]"/>
                    </div>
                    <div className="w-[356px] flex justify-between">
                        <div className="space-y-[8px]">
                            <h3 className="font-semibold font-poppin">Oder Processed</h3>
                            <h4 className="text-xs font-poppin">We are preparing your order.</h4>
                        </div>
                        <p className="text-xs font-poppin">11:10 pm</p>
                    </div>
                </li>
                <li className="flex pb-[40px] justify-between relative  after:absolute after:content-[''] after:z-20 after:top-1 after:left-[13px] after:border after:h-full after:border-[#FF9C72]">
                    <div className="w-[30px] relative z-30 bg-white h-[30px] flex items-center  justify-center border-[0.5px] border-[#FF9C72] rounded-full">
                        <FiCheck className="text-[#FF9C72] w-[24px] h-[24px]"/>
                    </div>
                    <div className="w-[356px] flex justify-between">
                        <div className="space-y-[8px]">
                            <h3 className="font-semibold font-poppin">Oder Processed</h3>
                            <h4 className="text-xs font-poppin">We are preparing your order.</h4>
                        </div>
                        <p className="text-xs font-poppin">11:10 pm</p>
                    </div>
                </li>
                <li className="flex pb-[40px] justify-between relative ">
                    <div className="w-[30px] relative z-30 bg-white h-[30px] flex items-center  justify-center border-[0.5px] border-[#FF9C72] rounded-full">
                        <FiCheck className="text-[#FF9C72] w-[24px] h-[24px]"/>
                    </div>
                    <div className="w-[356px] flex justify-between">
                        <div className="space-y-[8px]">
                            <h3 className="font-semibold font-poppin">Oder Processed</h3>
                            <h4 className="text-xs font-poppin">We are preparing your order.</h4>
                        </div>
                        <p className="text-xs font-poppin">11:10 pm</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default TrackingOrder;
