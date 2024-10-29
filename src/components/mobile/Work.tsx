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
 
const img1 = "/image/mob/1.png";
const img2 = "/image/mob/2.png";
const img3 = "/image/mob/3.png";
const img4 = "/image/mob/4.png";
const img5 = "/image/mob/5.png";
const img6 = "/image/mob/6.png";
const img7 = "/image/mob/7.png";
const img8 = "/image/mob/8.png";
const img9 = "/image/mob/9.png";

import { dynamicBlurDataUrl } from "@/lib";

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
          alignItems: "center",
          flexDirection: "column",
          margin: "auto",

          gap: "6rem",
          justifyContent: "center",
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
            <h2 className="secondry-title">بعض أعمالنا</h2>
            <Swiper
              dir="rtl"
              effect={"fade"}
              modules={[Scrollbar, Autoplay]}
              loop={true}
              grabCursor={true}
              scrollbar={{ draggable: true, dragSize: 24 }}
              initialSlide={1}
              className="mySwiper-work"
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              allowTouchMove={true}
              speed={3500}
              
              breakpoints={{
                1: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 36,
                },
              }}
            >
              {IMGS.map((img, i) => (
                <SwiperSlide key={i}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "1rem",
                      justifyContent: "center",
                     }}
                  
                  >
                    <div className="image-container w-100">
                      <Image
                        src={img}
                        alt={`Slide ${i}`}
                        loading="lazy"
                        blurDataURL={dynamicBlurDataUrl}
                        width={100} // Placeholder width
                        height={100} // Placeholder height
                        placeholder="blur"
                        className="image-zoom"
                        layout="responsive"
                      />
                    </div>
                    <h3 className="title-h3">تطبيق أسيست</h3>
                    <p className="p-h3">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص
                      يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                      مولد النص العربى
                    </p>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Box>
    </div>
  );
}
