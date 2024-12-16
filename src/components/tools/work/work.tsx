"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

import { Box } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Autoplay } from "swiper/modules"

const img1 = "/image/mob/1.png"
const img2 = "/image/mob/2.png"
const img3 = "/image/mob/3.png"
const img4 = "/image/mob/4.png"
const img5 = "/image/mob/5.png"
const img6 = "/image/mob/6.png"
const img7 = "/image/mob/7.png"
const img8 = "/image/mob/8.png"
const img9 = "/image/mob/9.png"

import { dynamicBlurDataUrl } from "@/lib"

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
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let imagesToLoad = list.slice(0, 4)?.length
    const handleImageLoad = () => {
      imagesToLoad -= 1
      if (imagesToLoad === 0) {
        setImagesLoaded(true)
      }
    }

    list.forEach((imgSrc) => {
      const img = new window.Image()
      img.src = imgSrc.image
      img.onload = handleImageLoad
    })
  }, [])

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
                    }}
                  >
                    <div className="image-container w-100">
                      <Image
                        src={item.image}
                        alt={`Slide ${i}`}
                        blurDataURL={dynamicBlurDataUrl}
                        width={100} // Placeholder width
                        height={100} // Placeholder height
                        placeholder="blur"
                        className="image-zoom"
                        layout="responsive"
                      />
                    </div>
                    <h3 className="title-h3">{item.title}</h3>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Box>
    </div>
  )
}
