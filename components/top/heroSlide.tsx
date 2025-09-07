"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full py-4">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1.4}  // 👈 少しはみ出して表示
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-5xl mx-auto"
      >
        {["1.png","2.png", "3.png", "4.png", "5.png","6.png"].map((s, idx) => (
          <SwiperSlide
            key={idx}
            className=""
          >
            <div className="pb-8">
                <Image
                    src={`/sutamon.site/heroSlides/${s}`}
                    alt={`アプリ画面${idx + 1}`}
                    width={400}
                    height={400}
                    className="w-[90vw] h-auto rounded-xl shadow-lg"
                    />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
