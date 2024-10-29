"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Box } from "@mui/material";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import { Autoplay, Scrollbar } from "swiper/modules";
import { dynamicBlurDataUrl } from "@/lib";

const img1 = "/image/profile/1.png";
const img2 = "/image/profile/2.png";
const img3 = "/image/profile/3.png";
const img4 = "/image/profile/4.png";
const img5 = "/image/profile/5.png";
const img6 = "/image/profile/6.png";
const img7 = "/image/profile/7.png";
const img8 = "/image/profile/8.png";
const img9 = "/image/profile/9.png";
const img10 = "/image/profile/10.png";
const img11 = "/image/profile/11.png";
const img12 = "/image/profile/12.png";
const img13 = "/image/profile/13.png";
const img14 = "/image/profile/14.png";
const img15 = "/image/profile/15.png";
const img16 = "/image/profile/16.png";
const img17 = "/image/profile/17.png";

const IMGS = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
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
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: {
            xs: "90%",
            lg: "100%",
          },
          margin: "auto",
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
              modules={[Autoplay, Scrollbar]}
              loop={true}
              grabCursor={true}
              scrollbar={{ draggable: true, dragSize: 24 }}
              initialSlide={1}
              className="mySwiper"
               allowTouchMove={true}
              speed={2500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
                      src={img}
                      alt={`Slide ${i}`}
                      className="image-zoom"
                      layout="responsive"
                      width={500}
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
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
