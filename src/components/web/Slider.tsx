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
 
import { useRouter } from "next/navigation";

const IMGS = [
  "/image/hook/1.png",
  "/image/hook/2.png",
  "/image/hook/3.png",
  "/image/hook/4.png",
  "/image/hook/5.png",
  "/image/hook/6.png",
 
   
];

export default function Slider() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };


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
          margin: "auto",

          justifyContent: "center",
          width: {
            xs: "100%",
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
              // slidesPerView={4}
               autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              allowTouchMove={true}
              grabCursor={true}
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
                  <div className="image-container"
                  style={{cursor:'pointer'}}
                    onClick={() => {
                      handleNavigation(`/work/${i + 1}`);
                    }}
                  >
                    <Image
                      src={img}
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
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
