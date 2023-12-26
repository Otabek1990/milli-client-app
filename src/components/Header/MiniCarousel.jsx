import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MiniStyle.css";
import Carousel2 from "./Carousel2";

const MiniCarousel = ({ adsProducts }) => {
  // bg-gray-lightlyGray
  return (
    <div className="bg-white-whites md:h-[400px] sm:h-48 h-36 md:px-7 px-5 w-full flex flex-col items-center">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {adsProducts?.map((item,ind) => (
        <SwiperSlide className="" key={ind}>
          <Carousel2 carusel={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default MiniCarousel;
