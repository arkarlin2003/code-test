import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PurchaseComplete = () => {
  return (
    <section className="purchase-complete-section">
      <div className="space-y-[32px] flex flex-col items-center w-full">
        <div>
          <img
            className="w-[180px] h-[157px]"
            src="https://s3-alpha-sig.figma.com/img/7403/1bfb/0412c81e40b30a4df554db7ef27d637d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfxWol25NcCF8hQqR9JZ8~OGwxej-WQBShLwGU2eMKpzJzyjTwkUUDgsYIlXxXWJIdbI9mPZjU2GToxVWOJCXMaeOZ~Cfklhcnx6bok~NU3w3YqKwPZ~ytmp6OeXykcqZF5jmFAj4mygzHum2O46kpzSJtjcwdKUBd8MrpNGHlwEimzhRjvRMN-gy8GfPnZLeZ63rYNQxK1uU5oT4pY-l3Ix8PsT145kqNnZijUnbtbkG7icKlk5N7Sz2owt0dUTCmEzRFbusv20WZyKNg-xCbXuTtcLBZyapPJfZBEvSPhgd4XF2o0tb6KjQS8tmU83rZVhRTn-NMboruGrCR2sTw__"
            alt=""
          />
        </div>
        <div className="w-[740px] text-center space-y-[24px]">
          <h4 className="text-[32px] leading-[39.01px] font-bold">
            Thank you for your order!
          </h4>
          <p className="text-sm font-poppin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="h-[53px] w-[740px] flex justify-between">
          <Link to="/categories">
            <Button className="h-full bg-white text-black border-[#E4E4E4] border hover:bg-white rounded-none py-[16px] px-[21px] text-sm font-poppin">
              Go back shopping
            </Button>
          </Link>
          <Link to="/tracking-order">
            <Button className="h-full rounded-none py-[16px] px-[21px] text-sm font-poppin">
              Go to Tracking Order
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PurchaseComplete;
