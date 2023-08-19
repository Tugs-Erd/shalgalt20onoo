import React from "react";
import "./Test3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

const Test3 = () => {
  return (
    <section className="section container Slider">
      <Swiper
        className="Slider-container"
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{ 576: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
        spaceBetween={24}
        modules={[Pagination]}
      >

          return (
            <SwiperSlide className="testimonial-card">
            <img src="https://img.freepik.com/free-photo/transparent-vivid-autumn-leaves_23-2148239689.jpg"></img>
            </SwiperSlide>
          );

      </Swiper>
    </section>
  );
};

export default Test3;