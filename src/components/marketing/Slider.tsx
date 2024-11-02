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
import img1 from "@/assets/img/x1.png";
import img2 from "@/assets/img/x2.png";
import img3 from "@/assets/img/x3.png";
import img4 from "@/assets/img/x4.png";
import img5 from "@/assets/img/x5.png";
import { dynamicBlurDataUrl } from "@/lib";

const IMGS = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

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
      img.src = imgSrc.src;
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
              modules={[ Autoplay ,Scrollbar]}
              scrollbar={{ draggable: true, dragSize: 20 }}
              loop={true}
              allowTouchMove={true}
              grabCursor={true}
              spaceBetween={20}
              initialSlide={1}
              className="mySwiper mySwiper-auto"
               autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
             
              }}
              speed={3500}

             
              breakpoints={{
                1: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // 992: {
                //   slidesPerView: 3,
                //   spaceBetween: 20,
                // },
                // 1280: {
                //   slidesPerView: 3,
                //   spaceBetween: 20,
                // },
              }}
            >
              {IMGS.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="image-container">
                    <Image
                      src={img}
                      alt={`Slide ${i}`}
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                      className="image-zoom"
                      layout="responsive"
                      width={800}
                      style={{ width: "100%", height: "auto" }}
                      height={500}
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
