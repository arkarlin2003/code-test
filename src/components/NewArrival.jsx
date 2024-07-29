import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { currencyFormat, wordSlice } from "@/lib/utils";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useGetProducts from "@/hooks/useGetProducts";

const NewArrival = () => {
  const products = useGetProducts()
  return (
    <section className="mt-[75px]  ">
      <h1 className="text-[32px] leading-[39.01px] font-bold text-center">
        New Arrivals
      </h1>
      <div className=" relative">
        <div className="my-14 px-[150px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
              clickable: true,
            }}
          >
            {products?.map((product) => (
              <SwiperSlide
                key={product.id}
                className="w-[270px] h-[374px] relative"
              >
                <div className="product-img">
                  <img className="h-full w-full" src={product.image} alt="" />
                  <div className="product-detail-search ">
                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full">
                      <MdOutlineSearch className="w-[15px] h-[15px]" />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full">
                      <FaRegHeart className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="font-poppin font-semibold text-center">
                    {wordSlice(product.title)}
                  </h1>
                  <h1 className="font-poppin font-semibold text-center text-default">
                    {currencyFormat(product.price)}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex px-[70px]  w-full justify-between absolute z-50 top-1/3">
          <div className="w-[50px] btn-prev h-[50px] cursor-pointer flex items-center justify-center shadow rounded-full">
            <IoIosArrowBack className="w-[24px] h-[24px]" />
          </div>

          <div className="w-[50px] btn-next h-[50px] cursor-pointer flex items-center justify-center shadow rounded-full">
            <IoIosArrowForward className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
