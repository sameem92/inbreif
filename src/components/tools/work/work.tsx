"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/scrollbar"

import { Box, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"

import img1 from "../../../../public/image/mob/1.png"
import img2 from "../../../../public/image/mob/2.png"
import img3 from "../../../../public/image/mob/3.png"
import img4 from "../../../../public/image/mob/4.png"
import img5 from "../../../../public/image/mob/5.png"
import img6 from "../../../../public/image/mob/6.png"
import img7 from "../../../../public/image/mob/7.png"
import img8 from "../../../../public/image/mob/8.png"
import img9 from "../../../../public/image/mob/9.png"

const list = [
  { image: img1, title: "تطبيق افاق" },
  { image: img2, title: "تطبيق وجيز" },
  { image: img3, title: "تطبيق بيتوتي" },
  { image: img4, title: "تطبيق DR.PHARM" },
  { image: img5, title: "تطبيق صون" },
  { image: img6, title: "تطبيق عدسة" },
  { image: img7, title: "تطبيق نوره" },
  { image: img8, title: "تطبيق HARBI" },
  { image: img9, title: "تطبيق HOMELY" },
]

export default function Slider() {
  const isMobile = useMediaQuery("(max-width:768px)")
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 }
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    if (img1.src !== "") {
      setImagesLoaded(true)
    }
  }, [])
  return (
    <div className="noise">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={animation}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "auto",
            gap: "42px",
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
                speed={3500}
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
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 36,
                  },
                }}
              >
                {list.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1rem",
                        justifyContent: "center",
                        "@media (max-width:1240px)": {
                          ".title-h3": {
                            fontSize: "2.5rem",
                          },
                        },
                        "@media (max-width:480px)": {
                          ".title-h3": {
                            fontSize: "2rem",
                          },
                        },
                      }}
                    >
                      <div className="image-container w-100">
                        <Image src={item.image} className="image-zoom" alt="" />
                      </div>
                      <h3 className="title-h3">{item.title}</h3>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </Box>
      </motion.div>
    </div>
  )
}
