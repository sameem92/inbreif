/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck
"use client"

import React from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
import { dynamicBlurDataUrl } from "@/lib"

export default function SliderS3({ images }) {
  const isMobile = useMediaQuery("(max-width: 600px)")
  const isTablet = useMediaQuery("(max-width: 900px)")
  const isTablet2 = useMediaQuery("(max-width: 1240px)")
  const isTablet3 = useMediaQuery("(max-width: 1440px)")

  // Define the number of slides per view based on the screen size
  const slidesPerView = isMobile ? 2 : isTablet ? 3 : isTablet2 ? 4 : isTablet3 ? 5 : 6

  return (
    <>
      <Box width={"100%"} paddingBottom={{ xs: "4.5rem", md: "6rem" }}>
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            height: "13rem",
            width: { xs: "98%", md: "100%" },
            margin: "auto",
          }}
        >
          {/* Swiper component */}
          <Swiper
            spaceBetween={10} // Space between slides
            slidesPerView={slidesPerView} // Number of slides visible at once
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause autoplay when hovered
            }}
            allowTouchMove={true}
            speed={2000} // Speed of slide transition
            modules={[Autoplay]} // Add Autoplay module
            grabCursor={true} // Show grab cursor to indicate draggable
            className="mySwiper-x"
          >
            {/* Loop through images */}
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    borderRadius: "1.6rem",
                    background: "#FFFFFF0D",
                    height: "10rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem .4rem",
                    margin: "auto 2px",
                  }}
                  className="fix-x"
                >
                  <Image
                    loading="lazy"
                    width={220}
                    height={85}
                    src={src} // Use the image path from array
                    alt={`company-logo-${index + 1}`}
                    objectFit="cover"
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  )
}
