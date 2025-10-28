"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselCasesDeSucesso() {
  const cards = [
    { title: "Um cliente em dificuldades financeiras passou por uma auditoria completa conduzida pela nossa equipe. Durante a análise, identificamos que o setor de compras era o ponto crítico que gerava prejuízos. Com nossas orientações estratégicas, o cliente saiu do vermelho, aumentou seu faturamento e conseguiu regularizar suas contas, recuperando estabilidade e confiança para seguir crescendo.", button: "Orientações estratégicas" },
    { title: "Um cliente em dificuldades financeiras passou por uma auditoria completa conduzida pela nossa equipe. Durante a análise, identificamos que o setor de compras era o ponto crítico que gerava prejuízos. Com nossas orientações estratégicas, o cliente saiu do vermelho, aumentou seu faturamento e conseguiu regularizar suas contas, recuperando estabilidade e confiança para seguir crescendo.", button: "Orientações estratégicas" },
    { title: "Um cliente em dificuldades financeiras passou por uma auditoria completa conduzida pela nossa equipe. Durante a análise, identificamos que o setor de compras era o ponto crítico que gerava prejuízos. Com nossas orientações estratégicas, o cliente saiu do vermelho, aumentou seu faturamento e conseguiu regularizar suas contas, recuperando estabilidade e confiança para seguir crescendo.", button: "Orientações estratégicas" },
  ];

  return (
    <div className="w-full max-w-screen mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={18}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={false}
        breakpoints={{
          1024: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-[658px] flex flex-col gap-8 max-[715px]:px-3">
                <p className="font-montserrat text-[16px] font-normal leading-6">{card.title}</p>
                <p className=" font-sora text-[24px] font-bold leading-8 max-[715px]:text-[18px]">{card.button}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}