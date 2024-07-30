import { MdSearch } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoLocationSharp } from "react-icons/io5";

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="w-[446px] space-y-[26px]">
        <div className="space-y-[16px]">
          <h1 className="text-[32px] leading-[39.01px] font-bold">
            Find a store
          </h1>
          <div className="space-y-[16px]">
            <div className="h-[54px] w-full relative">
              <input
                type="text"
                className="py-[10px] px-[16px] focus:outline-none border h-full w-full font-poppin text-sm text-[#AAA7A7] placeholder:text-[#AAA7A7]"
                placeholder="Enter country, city, address or zip code"
              />
              <div className="w-[73px] cursor-pointer absolute top-0 right-0 h-full bg-default flex items-center justify-center">
                <MdSearch className="w-[25px] h-[25px] text-white" />
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              defaultValue="aboutus"
              className="w-full h-[54px] border px-[16px]"
            >
              <AccordionItem value="aboutus">
                <AccordionTrigger className=" text-sm font-poppin">
                  All Stories
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-[32px] mt-[24px]">
                    <li className="w-full flex space-x-[16px] ">
                      <div>
                        <IoLocationSharp className="w-[20px] h-[20px] text-[#FF9C72]" />
                      </div>
                      <div className="space-y-[16px]">
                        <div className="space-y-[4px]">
                          <h1 className="font-semibold font-poppin">
                            Likeside Center
                          </h1>
                          <h3 className="text-xs font-poppin">
                            740 Idhuh Parkway
                          </h3>
                        </div>
                        <div className="space-y-[4px]">
                          <p className="text-xs font-semibold font-poppin">
                            Phone:{" "}
                            <span className="font-normal">6-146-389-574</span>
                          </p>
                          <p className="text-xs font-semibold font-poppin">
                            Store Hours:{" "}
                            <span className="font-normal">
                              10 am - 10 pm EST, 7 days a week
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="w-full flex space-x-[16px]  ">
                      <div>
                        <IoLocationSharp className="w-[20px] h-[20px] text-[#FF9C72]" />
                      </div>
                      <div className="space-y-[16px]">
                        <div className="space-y-[4px]">
                          <h1 className="font-semibold font-poppin">
                            Scottsdale Fashion Square
                          </h1>
                          <h3 className="text-xs font-poppin">
                            740 Idhuh Parkway
                          </h3>
                        </div>
                        <div className="space-y-[4px]">
                          <p className="text-xs font-semibold font-poppin">
                            Phone:{" "}
                            <span className="font-normal">6-146-389-574</span>
                          </p>
                          <p className="text-xs font-semibold font-poppin">
                            Store Hours:{" "}
                            <span className="font-normal">
                              10 am - 10 pm EST, 7 days a week
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[631px] h-[511px]">
        <img
          className="w-full h-full"
          src="https://s3-alpha-sig.figma.com/img/f430/7d00/46603314c7d1d9d212ca8798445c2ec2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKo1eOesTzaHmtHfYaLIJM6NWz0GuhDHqOfOJ78wrTIlbcfumi5nlA5erRjTMAKkLQBzVt3MWd0ZkezFE3zmAs16c0JMXd~ferhu4GjSEG-Qs726JTBWZnTPEir0olFa25VEetzjbCsv8a2pe~usO~nPWMW67BQzj1yC04yHdvQvqQcpGlfIFS4YfvXut4OchtcOGPgAbleofUr7iVLu~tx22oSTQtorKjUyNBt~mwH1uCfsB~3xhQxp3zfmS1cRCbG0cvy0CkKgWbF1wgySx6zRnnoR-BPAGYYPIS-xDkiWilYkRu~icZ4q27YN9GkfHI4bMYUAITkZ9K0lio0mzg__"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutUs;
