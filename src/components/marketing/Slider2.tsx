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

const img1 = "/image/sh/1.png";
const img2 = "/image/sh/2.png";
const img3 = "/image/sh/3.png";
const img4 = "/image/sh/4.png";
const img5 = "/image/sh/5.png";
const img6 = "/image/sh/6.png";
const img7 = "/image/sh/7.png";
const img8 = "/image/sh/8.png";
const img9 = "/image/sh/9.png";
const img10 = "/image/sh/10.png";
const img11 = "/image/sh/11.png";
const img12 = "/image/sh/12.png";
const img13 = "/image/sh/13.png";
const img14 = "/image/sh/14.png";
const img15 = "/image/sh/15.png";
const img16 = "/image/sh/16.png";
const img17 = "/image/sh/17.png";
const img18 = "/image/sh/18.png";
const img19 = "/image/sh/19.png";
const img20 = "/image/sh/20.png";
const img21 = "/image/sh/21.png";
const img22 = "/image/sh/22.png";

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
  img18,
  img19,
  img20,
  img21,
  img22,
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
            xs: "100%",
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
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                
                pauseOnMouseEnter: true,

              }}
              allowTouchMove={true}
              speed={2500}
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
