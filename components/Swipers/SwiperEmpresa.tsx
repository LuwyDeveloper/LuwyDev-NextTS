"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {logos} from "@/assets/imagenes";

const stylesSwiperSlide = "xl:px-5 lg:px-4";
const stylesSwiperSlidediv = "opacity-30 hover:opacity-100 transition-all duration-300";

export const SwiperEmpresa = () => {
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          990: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
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
            <a
              href="https://www.somosbelcorp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.BelcorpLogo}
                className="mx-auto"
                alt="Logo Belcorp"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://luwydev.com/jjm/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logo_jjmining}
                className="mx-auto"
                alt="Logo JJ Mining"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://floreriabenavides.com.pe/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logo_floreria_benavides}
                className="mx-auto"
                alt="Logo Florería Benavides"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.grubbasport.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logo_grubbasport}
                className="mx-auto"
                alt="Logo Grubbasport"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://yateperu.pe/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.Yate_Peru_logo}
                className="mx-auto"
                alt="Logo Yate Peru"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://muebleriabianely.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logoBianely_light}
                className="mx-auto"
                alt="Logo Bianely"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.yanbal.com/mx//corporate/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.Yanbal_logo}
                className="mx-auto"
                alt="Logo Yanbal"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.removex.pe/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.removex_logo}
                className="mx-auto"
                alt="Logo Removex"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.somosbelcorp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.BelcorpLogo}
                className="mx-auto"
                alt="Logo Belcorp"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://luwydev.com/jjm/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logo_jjmining}
                className="mx-auto"
                alt="Logo JJ Mining"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://floreriabenavides.com.pe/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logo_floreria_benavides}
                className="mx-auto"
                alt="Logo Florería Benavides"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.grubbasport.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logo_grubbasport}
                className="mx-auto"
                alt="Logo Grubbasport"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://yateperu.pe/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.Yate_Peru_logo}
                className="mx-auto"
                alt="Logo Yate Peru"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://muebleriabianely.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.logoBianely_light}
                className="mx-auto"
                alt="Logo Bianely"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.yanbal.com/mx//corporate/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.Yanbal_logo}
                className="mx-auto"
                alt="Logo Yanbal"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={stylesSwiperSlide}>
          <div className={stylesSwiperSlidediv}>
            <a
              href="https://www.removex.pe/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={logos.removex_logo}
                className="mx-auto"
                alt="Logo Removex"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
