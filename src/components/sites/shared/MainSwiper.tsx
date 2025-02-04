"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@mui/material";

import {
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { Swiper as SwiperType } from "swiper/types";

const MainSwiper = ({ images }: { images: StaticImageData[] }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const uniqueId = useId();
  const thumbSwiperRef = useRef<SwiperType | null>(null);

  const totalSlides = images.length;

  useEffect(() => {
    if (thumbSwiperRef.current) {
      thumbSwiperRef.current.update();
    }
  }, []);

  const buttonStyles = (disabled: boolean) => ({
    width: "32px",
    height: "32px",
    minHeight: "32px",
    minWidth: "32px",
    borderRadius: "50%",
    background: !disabled
      ? "#E1E42A"
      : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
    border: !disabled ? "none" : "1px solid #18292D",
    "&:hover": {
      background: !disabled
        ? "#E1E42A"
        : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
      border: !disabled ? "none" : "1px solid #18292D",
      transform: "translateY(0px)",
    },
  });

  return (
    <div className={`section`}>
      <div className="carousel-section">
        {/* Previous Button */}
        <Button
          key={`back-${uniqueId}`}
          title="previous"
          className="prev"
          sx={buttonStyles(isBeginning)}
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1339 0.198409C10.3985 -0.0661363 10.8273 -0.0661363 11.0919 0.198409L17.4145 6.52094C17.5416 6.64793 17.6129 6.82027 17.6129 6.99992C17.6129 7.17957 17.5416 7.35191 17.4145 7.47899L11.0919 13.8016C10.8273 14.0661 10.3985 14.0661 10.1339 13.8016C9.86938 13.537 9.86938 13.1081 10.1339 12.8435L15.3 7.67734L0.67742 7.67734C0.303294 7.67734 0 7.37404 0 6.99992C0 6.6258 0.303294 6.3225 0.67742 6.3225L15.3 6.3225L10.1339 1.15643C9.86938 0.89188 9.86938 0.462965 10.1339 0.198409Z"
              fill={`${isBeginning ? "#fff" : "#001014"}`}
            />
          </svg>
        </Button>

        {/* Swiper Main */}
        <Swiper
          key={`swiper-${uniqueId}`}
          modules={[Navigation, Pagination, Scrollbar, Thumbs, FreeMode]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          thumbs={{ swiper: thumbSwiperRef.current }}
          scrollbar={{ el: `.custom-scrollbar`, draggable: true }}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            setIsBeginning(realIndex === 0);
            setIsEnd(realIndex === totalSlides - 1);
          }}
          style={{
            maxWidth: "420px",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image src={img} alt={`image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <Button
          title="next"
          key={`next-${uniqueId}`}
          className="next"
          sx={buttonStyles(isEnd)}
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.86606 13.8016C7.60151 14.0661 7.17265 14.0661 6.9081 13.8016L0.585505 7.47906C0.458422 7.35207 0.387066 7.17973 0.387066 7.00008C0.387067 6.82043 0.458422 6.64809 0.585505 6.52101L6.9081 0.198415C7.17265 -0.0661411 7.60151 -0.0661411 7.86606 0.198415C8.13062 0.462971 8.13062 0.891914 7.86606 1.15647L2.69996 6.32266L17.3226 6.32266C17.6967 6.32266 18 6.62596 18 7.00008C18 7.3742 17.6967 7.6775 17.3226 7.6775L2.69996 7.6775L7.86606 12.8436C8.13062 13.1081 8.13062 13.537 7.86606 13.8016Z"
              fill={`${isEnd ? "#fff" : "#001014"}`}
            />
          </svg>
        </Button>
      </div>

      {/* Thumbnail Swiper */}
      <div className="swiperThumb">
        <Swiper
          modules={[Thumbs, Navigation, FreeMode]}
          spaceBetween={10}
          watchSlidesProgress
          onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
          slidesPerView="auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image src={img} alt={`image ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scrollbar */}
      <div className={`custom-scrollbar`}></div>
    </div>
  );
};

export default MainSwiper;
