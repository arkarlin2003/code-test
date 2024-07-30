import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { currencyFormat, titleToSlug, wordSlice } from "@/lib/utils";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useGetProducts from "@/hooks/useGetProducts";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const products = useGetProducts()
  return (
    <section className="new-arrival-section ">
      <h1 className="title">
        New Arrivals
      </h1>
      <div className="relative">
        <div className="h-[374px] px-[82px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
              clickable: true,
            }}
            className="w-full gap-[20px]"
          >
            {products?.map((product) => (
              <SwiperSlide
                key={product.id}
                className="w-[270px] h-[374px] relative"
              >
                <div className="product-img">
                  <img className="h-full w-full" src={product.image} alt="" />
                  <div className="product-detail-search ">
                    <div className="icon-box">
                      <MdOutlineSearch className="icon" />
                    </div>
                    <div className="icon-box">
                      <FaRegHeart className="icon" />
                    </div>
                  </div>
                </div>
                <div className="mt-[16px]">
                  <h1 className="font-poppin font-semibold text-center">
                    <Link to={`/products/${titleToSlug(product.title)}`}>
                    {wordSlice(product.title)}
                    </Link>
                  </h1>
                  <h1 className="font-poppin font-semibold text-center text-default">
                    {currencyFormat(product.price)}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="navigation">
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
