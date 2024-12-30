/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use client"
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"

// Components
import { Box, Button, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"

import { Scrollbar, Navigation, EffectCoverflow } from "swiper/modules"

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

// Images & Icons
import star from "../../../../public/icons/starIcon.svg"

export default function SlideS2({ products }) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const isTablet = useMediaQuery("(max-width:1024px)")
  const totalSlides = 10
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    setImagesLoaded(true)
  }, [])

  return (
    <div className="noise">
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
            padding: { sm: "0 2rem" },
            "@media (max-width: 900px)": {
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: "row-reverse",
            },
          }}
        >
          <Button
            className="prev"
            sx={{
              width: "6rem",
              height: "6rem",
              minHeight: "6rem",
              minWidth: "6rem",
              borderRadius: "50%",
              background: !isBeginning
                ? "#E1E42A"
                : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
              border: !isBeginning ? "none" : "1px solid #18292D",
              "&:hover": {
                background: !isBeginning
                  ? "#E1E42A"
                  : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: !isBeginning ? "none" : "1px solid #18292D",
                transform: "translateY(0px)",
              },
              "&:hover svg": {
                marginRight: "1rem",
              },
              "@media (max-width: 900px)": {
                order: "2",
              },
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1339 0.198409C10.3985 -0.0661363 10.8273 -0.0661363 11.0919 0.198409L17.4145 6.52094C17.5416 6.64793 17.6129 6.82027 17.6129 6.99992C17.6129 7.17957 17.5416 7.35191 17.4145 7.47899L11.0919 13.8016C10.8273 14.0661 10.3985 14.0661 10.1339 13.8016C9.86938 13.537 9.86938 13.1081 10.1339 12.8435L15.3 7.67734L0.67742 7.67734C0.303294 7.67734 0 7.37404 0 6.99992C0 6.6258 0.303294 6.3225 0.67742 6.3225L15.3 6.3225L10.1339 1.15643C9.86938 0.89188 9.86938 0.462965 10.1339 0.198409Z"
                fill={`${isBeginning ? "#fff" : "#001014"}`}
              />
            </svg>
          </Button>

          <Swiper
            modules={[Navigation, EffectCoverflow, Scrollbar]}
            scrollbar={{ draggable: true, dragSize: 24 }}
            effect="coverflow"
            className="mySwiper"
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={60}
            grabCursor={true}
            allowTouchMove={true}
            loop={true}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex
              setIsBeginning(realIndex === 0)
              setIsEnd(realIndex === totalSlides - 1)
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: isTablet ? 123 : 38.6,
              modifier: 3.25,
              slideShadows: false,
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.title}>
                <div className="product">
                  <div className="content">
                    <div className="img">
                      <Image src={product.image} alt={product.title} />
                    </div>
                    <h4>{product.title}</h4>
                    <ul>
                      <li>
                        <Image src={star} alt="star" />
                      </li>
                      <li>
                        <Image src={star} alt="star" />
                      </li>
                      <li>
                        <Image src={star} alt="star" />
                      </li>
                      <li>
                        <Image src={star} alt="star" />
                      </li>
                      <li>
                        <Image src={star} alt="star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            className="next"
            sx={{
              width: "6rem",
              height: "6rem",
              minHeight: "6rem",
              minWidth: "6rem",
              borderRadius: "50%",
              background: !isEnd
                ? "#E1E42A"
                : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
              border: !isEnd ? "none" : "1px solid #18292D",
              "&:hover": {
                background: !isEnd
                  ? "#E1E42A"
                  : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: !isEnd ? "none" : "1px solid #18292D",
                transform: "translateY(0px)",
              },
              "&:hover svg": {
                marginLeft: "1rem",
              },
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.86606 13.8016C7.60151 14.0661 7.17265 14.0661 6.9081 13.8016L0.585505 7.47906C0.458422 7.35207 0.387066 7.17973 0.387066 7.00008C0.387067 6.82043 0.458422 6.64809 0.585505 6.52101L6.9081 0.198415C7.17265 -0.0661411 7.60151 -0.0661411 7.86606 0.198415C8.13062 0.462971 8.13062 0.891914 7.86606 1.15647L2.69996 6.32266L17.3226 6.32266C17.6967 6.32266 18 6.62596 18 7.00008C18 7.3742 17.6967 7.6775 17.3226 7.6775L2.69996 7.6775L7.86606 12.8436C8.13062 13.1081 8.13062 13.537 7.86606 13.8016Z"
                fill={`${isEnd ? "#fff" : "#001014"}`}
              />
            </svg>
          </Button>
        </Box>
      )}
    </div>
  )
}
