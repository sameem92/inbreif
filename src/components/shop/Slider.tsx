"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Box } from "@mui/material";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import { Scrollbar, Autoplay } from "swiper/modules";
import { dynamicBlurDataUrl } from "@/lib";

const img1 = "/image/img1.png";
const img2 = "/image/img2.png";
const img3 = "/image/img3.png";
const img4 = "/image/img1.png";
const img5 = "/image/img2.png";
const img6 = "/image/img3.png";

const IMGS = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

export default function Slider() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let imagesToLoad = IMGS.slice(0, 4)?.length;
    const handleImageLoad = () => {
      imagesToLoad -= 1;
      if (imagesToLoad === 0) {
        setImagesLoaded(true);
      }
    };

    IMGS.forEach((imgSrc) => {
      const img = new window.Image();
      img.src = imgSrc;
      img.onload = handleImageLoad;
    });
  }, []);

  return (
    <div className="noise">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",

          width: {
            xs: "90%",
            lg: "100%",
          },
        }}
      >
        {!imagesLoaded ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
                  <div className="loader"></div> 

          </div>
        ) : (
          <>
            <Swiper
              dir="rtl"
              effect={"fade"}
              modules={[Scrollbar, Autoplay]}
              scrollbar={{ draggable: true, dragSize: 24 }}
              initialSlide={1}
              className="mySwiper"
              slidesPerView={4}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              allowTouchMove={true}
              grabCursor={true}
              speed={2500}
              spaceBetween={20}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {IMGS.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="image-container">
                    <Image
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                      src={img}
                      alt={`Slide ${i}`}
                      className="image-zoom"
                      layout="responsive"
                      width={500}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Box>
    </div>
  );
}
