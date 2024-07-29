import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

const ReviewCard = () => {
  return (
    <div className="flex gap-[16px] w-full h-[187px]">
      <img
        className="w-[60px] h-[60px] rounded-full"
        src="https://s3-alpha-sig.figma.com/img/8cd3/a15a/399358b52b9f30c47cfc87f3b1b784e0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hf5JlGXa7QzvyaSeUa8LC18mv8vHkMghy1v3SeW7ioq9mjOUFeOvzMLluhtK8f-F1K-IqEw7O4glACFfuTFnUKsMhwWNgZIpLd9X-1aH3daK26JTunTQzwlezKcbDyLYYF8ZwQWB8aveaSecylbZ~FVrl89KpivrOrzLfoU-VESUsyrB8J9IuLC3Q7-CfieeUJeHhO1ACnzqZXms9Rtiy0R4dr5vjBTk7jYf~yoyyTLGDZDKIURqPHKUKuc4DHpYS2GNYVB0-y6Ksh~HU~gcjPbpa3wlqcHYoQkjrtiQlY6DmKR5RhlnIm0A7IBsMt1OpccxPiXid3RdmehX0fGSWw__"
        alt=""
      />
      <div className="space-y-[16px] ">
        <div className="flex justify-between items-center">
          <div className="space-y-[4px]">
            <h3 className="font-semibold font-poppin">Lolla Smith</h3>
            <h4 className="text-sm font-poppin">30 July 2022</h4>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <div className="flex">
            <IoIosStar className="w-[16.67px] h-[15.83px] text-yellow-500" />
            <IoIosStar className="w-[16.67px] h-[15.83px] text-yellow-500" />
            <IoIosStar className="w-[16.67px] h-[15.83px] text-yellow-500" />
            <IoIosStar className="w-[16.67px] h-[15.83px] text-yellow-500" />
            <IoIosStar className="w-[16.67px] h-[15.83px] text-yellow-500" />
          </div>
          <h5 className="text-xs font-poppin">Very good</h5>
        </div>
        <p className="text-sm font-poppin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-[8px] items-center">
            <AiFillLike className="w-[15px] h-[15px]" />
            <p className="text-[10px] font-poppin">12 person helped</p>
          </div>
          <p className="text-[10px] font-poppin">View Reply</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
