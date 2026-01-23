"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {logos} from "@/assets/imagenes";

const stylesSwiperSlide = "xl:px-5 lg:px-4";
const stylesSwiperSlidediv = "opacity-30 hover:opacity-100 transition-all duration-300";

export const SwiperProyecto = () => {
  return (
    <div className="swiper pb-2 sm:pb-9">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          990: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.angular_logo}
              className="mx-auto tech"
              alt="Logo Angular"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.react_logo}
              className="mx-auto tech"
              alt="Logo React"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.next_logo}
              className="mx-auto tech"
              alt="Logo Nextjs"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.vite_logo}
              className="mx-auto tech"
              alt="Logo Vite"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.tailwind_logo}
              className="mx-auto tech"
              alt="Logo Tailwind"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.materialUI_logo}
              className="mx-auto tech"
              alt="Logo Material UI"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.wordpress_logo}
              className="mx-auto tech"
              alt="Logo Wordpress"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.figma_logo}
              className="mx-auto tech"
              alt="Logo Figma"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.angular_logo}
              className="mx-auto tech"
              alt="Logo Angular"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.react_logo}
              className="mx-auto tech"
              alt="Logo React"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.next_logo}
              className="mx-auto tech"
              alt="Logo Nextjs"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.vite_logo}
              className="mx-auto tech"
              alt="Logo Vite"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.tailwind_logo}
              className="mx-auto tech"
              alt="Logo Tailwind"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.materialUI_logo}
              className="mx-auto tech"
              alt="Logo Material UI"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.wordpress_logo}
              className="mx-auto tech"
              alt="Logo Wordpress"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <Image
              height={80}
              src={logos.figma_logo}
              className="mx-auto tech"
              alt="Logo Figma"
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
