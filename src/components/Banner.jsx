import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BANNER_IMAGES } from "../constants/bannerImages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Banner() {
  return (
    <section className="h-[180px] w-full lg:h-[450px] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        className="h-full"
      >
        {BANNER_IMAGES.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="h-full w-full banner-img-desktop object-bottom object-cover"
              src={image}
              alt={`Banner ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-custom-pagination flex justify-center absolute bottom-[8px] gap-[4px] left-0 right-0 z-10 sm:bottom-[20px] sm:gap-[12px]" />
    </section>
  );
}

export default Banner;
