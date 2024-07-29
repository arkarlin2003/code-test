import { IoIosStar } from "react-icons/io";
import ReviewCard from "./ReviewCard";
import { Button } from "./ui/button";

const RatingRange = () => {
  return (
    <ul className="space-y-[8px]">
      {[1, 2, 3, 4, 5]
        .sort(function (a, b) {
          return b - a;
        })
        .map((rate) => (
          <li
            key={rate}
            className="flex gap-[24px] justify-between items-center"
          >
            <div className="flex gap-[4px] items-center">
              <IoIosStar className="w-[16.67px] h-[15.83px]  text-yellow-500" />
              <p className="text-sm font-poppin">{rate}</p>
            </div>
            <div></div>
            <h5 className="text-sm font-poppin">23</h5>
          </li>
        ))}
    </ul>
  );
};

const CustomerReview = ({rating}) => {
  return (
    <div className="my-[86px]">
      <div className="flex justify-between">
        <h1 className="text-[32px] leading-[39.01px] font-bold">
          Customer Reviews
        </h1>
        <div className="flex gap-[16px] items-center text-sm font-poppin">
          <h4>Sort by</h4>
          <h4>Newest</h4>
        </div>
      </div>
      <div className="my-12 flex justify-between space-x-10">
        <div className="w-[541px]">
          <ul className="space-y-[16px] w-full">
            <li>
              <ReviewCard />
            </li>
            <li>
              <ReviewCard />
            </li>
            <li>
              <ReviewCard />
            </li>
            <li>
              <ReviewCard />
            </li>
            <li>
              <ReviewCard />
            </li>
          </ul>
          <div className="w-full mt-12">
            <Button className="text-sm font-poppin text-default hover:text-white bg-[#F3EDFF] rounded-none w-full">Load more...</Button>
          </div>
        </div>

        <div className="w-[486px] h-[314px] p-[30px] border space-y-[24px]">
          <div className="space-y-[16px]">
            <h4 className="text-sm font-poppin">Overall Rating</h4>
            <div className="flex  items-center gap-[29px]">
              <div className="flex items-center space-x-2">
                <IoIosStar className="w-[30px] h-[27.73px]  text-yellow-500" />
                <h1 className="text-[54px] leading-[65.83px] font-bold">{rating}</h1>
              </div>
              <div>
                <p className="font-poppin font-semibold">30 out of 32 (98%)</p>
                <p className="text-xs font-poppin">
                  Customers recommended this product
                </p>
              </div>
            </div>
          </div>
          <RatingRange />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
