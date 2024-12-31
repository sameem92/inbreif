"use client"
import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

import { Box } from "@mui/material"
import Image from "next/image"
import { Scrollbar, Autoplay } from "swiper/modules"

const SliderS1: React.FC<{ images: string[] }> = ({ images }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let imagesToLoad = images.slice(0, 4)?.length
    const handleImageLoad = () => {
      imagesToLoad -= 1
      if (imagesToLoad === 0) {
        setImagesLoaded(true)
      }
    }

    images.forEach((imgSrc) => {
      const img = new window.Image()
      img.src = imgSrc
      img.onload = handleImageLoad
    })
  }, [])

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
                620: {
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
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      borderRadius: "16px",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Slide ${i}`}
                      className="image-zoom"
                      width={500}
                      height={300}
                      loading="lazy"
                      style={{ objectFit: "fill" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Box>
    </div>
  )
}

export default SliderS1
