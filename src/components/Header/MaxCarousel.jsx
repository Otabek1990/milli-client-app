import React, { useEffect, useState } from "react";
// import { caruselData } from "./data";
import Carousel from "./Carousel";
import { Pagination, Navigation } from "swiper/modules";
import { BackgroundBanner } from "../../Assets";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Header.css";

const MaxCarousel = ({ banners }) => {
  const bannerss = banners.map((item) => {
    return { ...item, background: BackgroundBanner };
  });
  return (
    <div className="md:h-[400px] sm:h-48 h-36 rounded-md w-full ">
      <Swiper
        autoplay={true}
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
        {bannerss?.map((item) => (
          <SwiperSlide key={item.id}>
            <Carousel carusel={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MaxCarousel;
