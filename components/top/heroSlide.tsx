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
        // slidesPerView={1.2} // ←左右が少し見える
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-5xl mx-auto"
        autoHeight={true}
      >
        {["1.png","2.png","3.png","4.png","5.png","6.png"].map((s, idx) => (
          <SwiperSlide key={idx} className="flex max-w-5xl items-center justify-center">
            <div className="w-[90vw] aspect-[16/9] max-w-5xl relative">
              <Image
                src={`/heroSlides/${s}`}
                alt={`アプリ画面${idx + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
