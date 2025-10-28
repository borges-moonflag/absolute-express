"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselCards() {
  const cards = [
    { img: "/background-slides-01.webp" },
    { img: "/background-slides-02.webp" },
    { img: "/background-slides-03.webp" },
    { img: "/background-slides-04.webp" },
    { img: "/background-slides-01.webp" },
    { img: "/background-slides-02.webp" },
    { img: "/background-slides-03.webp" },
    { img: "/background-slides-04.webp" },
  ];

  return (
    <div className="w-full max-w-screen mx-auto py-10 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={18}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={false}
        navigation={false}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <img src={card.img} alt="Nossas estruturas" className="w-[460px] mb-4" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
