/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck
"use client"

import React, { useRef, useState } from "react"
import { Container, Button, Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { Navigation, Autoplay } from "swiper/modules"
import Image from "next/image"
import { dynamicBlurDataUrl } from "@/lib"
import SliderS3 from "../../tools/sliders/sliderS3"

const companies = Array.from({ length: 13 }, (_, i) => `/image/company/${i + 1}.png`)

export default function Feedback() {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const isMobile = useMediaQuery("(max-width:768px)")
  const totalSlides = 10
  const IMGS = [
    "/image/f1.png",
    "/image/f2.png",
    "/image/f3.png",
    "/image/f4.png",
    "/image/f.png",
    "/image/f6.png",
    "/image/f7.png",
    "/image/f8.png",
    "/image/f9.png",
    "/image/f10.png",
  ]

  const items = [
    {
      say: `حبيت أشكركم على خدمتكم الرائعة و الراقية فعلاً تعاملكم جميل جداً مع سرعة الإستجابة في العمل والتواصل من أعلى وأفضل المستويات خدمة
نتمنى لكم مزيداً من التوفيق والنجاح
  `,
      compnay: " مصنع أبواب الفتح الأتوماتيكية",
      location: "المملكة العربية السعودية",
    },
    {
      say: `
شغل ممتاز وتعامل راقي في وقت وجيز بالتوفيق والسداد
  `,
      compnay: "وسيط المزاحمية",
      location: "المملكة العربية السعودية",
    },
    {
      say: `
 عمل وتنفيذ وتصميم أكثر من رائع و مرونة في التعامل
ومرونة في التعامل من قبل الفريق
شكراً لكم من القلب

 
  `,
      compnay: "مركز أوفرسيز الطبي",
      location: "الهند",
    },
    {
      say: `
 للتقييم ممتاز و الشغل جميل و التعامل مرن و راقي لن يكون
آخر تعامل بإذن الله
شكراً لكم
  `,
      compnay: "مشروع بكلة",
      location: "المملكة العربية السعودية",
    },
    {
      say: `
 تعامل راقي و عمل احترافي رائع فعلاً فكرتك بين يديك عملت معهم لجور يلاكس وكان العمل ذو جودة عالية أفكر مستقبلاً أن أعمل معاهم أعمال مستقبلية قادمة
  `,
      compnay: "جو ريلاكس",
      location: "المملكة العربية السعودية",
    },
    {
      say: `
 خدمة رائعة و عمل رائع وأسلوب أكثر من رائع و الالتزام بالوقت وتكلفة بسيطة يعني جد أفضل شركة بتعامل معها لا تقبل بأقل مما تستحق

  `,
      compnay: "مركز رواند",
      location: "المملكة الأردنية الهاشمية",
    },
    {
      say: `
ما يميزكم حسن التعامل و سرعة الإنجاز ووضع أكثر من خيار للعميل و إبداعكم الذي يدل على الإطلاع على أحدث الأعمال المشابهة لأعمالكم وهذه هي التغذية البصرية
أتمنى لكم التوفيق، كونكم ممن يتقنون عملهم فأنا أحب ذلك
  `,
      compnay: "شركة نقلة _ زياد الصعيدي",
      location: "المملكة العربية السعودية",
    },
    {
      say: `
أشكر فريقكم الرائع صراحةً على عملهم الجبار في التصميم وتعاملهم الطيب مع العملاء وأنصح أصحاب المشاريع الصغيرة بالتعامل معكم و أتمنى لكم دوام التوفيق والسداد

  `,
      compnay: "شركة القمر",
      location: "المملكة العربية السعودية",
    },

    {
      say: `
شركة تعاملها راقي و تصاميم مبتكرة و احترافية و الأهم من ذلك كلة السرعة و تحمل تعديلات العميل
للوصول لحد ارضائه

  `,
      compnay: "شركة مكعبات",
      location: "المملكة العربية السعودية",
    },
    {
      say: `
بالنسبة للتقييم ما شاء الله تبارك الله شغل جبار, شغل مميز بوقت قصير أسعار حلوة الله يعطيكم ألف عافية شكراً لجهودكم

  `,
      compnay: "شركة نقلة ـ سليمان الدلالي",
      location: "المملكة العربية السعودية",
    },
  ]

  return (
    <div className="package">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4.8rem",
          padding: { xs: "5.3rem 0", md: "10rem 0" },
        }}
      >
        <h2 className="secondry-title">رأي العملاء</h2>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.6rem",
            justifyContent: "space-between",
            width: "100%",
            padding: { xs: "0 2rem" }, // Responsive padding for mobile
          }}
        >
          {/* Previous Button */}
          {!isMobile && (
            <Button
              ref={prevButtonRef}
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
              }}
              disabled={isBeginning}
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
          )}

          {/* Swiper Component */}
          <Swiper
            navigation={
              isMobile
                ? false
                : {
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                  }
            }
            onBeforeInit={(swiper) => {
              if (!isMobile) {
                swiper.params.navigation.prevEl = prevButtonRef.current
                swiper.params.navigation.nextEl = nextButtonRef.current
                swiper.navigation.update()
              }
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex

              // Check if it's the first or last slide
              setIsBeginning(realIndex === 0)
              setIsEnd(realIndex === totalSlides - 1)
            }}
            loop={true} // Enable looping
            autoplay={{
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause autoplay when hovered
            }}
            speed={1000} // Speed of slide transition (1 second)
            modules={[Navigation, Autoplay]} // Add Autoplay module
            className="mySwiper2"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: { xs: "92%", md: 484, lg: 582 },
                    minWidth: { xs: "92%", md: 484, lg: 582 },
                    minHeight: { xs: "auto", md: 284 },
                    maxHeight: { xs: "auto", md: 300 },
                    borderRadius: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    "@media (max-width: 768px)": {
                      overflow: "auto",
                    },
                  }}
                  className="border"
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: { xs: "1rem", md: "3.2rem" },
                      gap: "3.6rem",
                    }}
                  >
                    <Typography
                      gutterBottom
                      sx={{
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        lineHeight: "26px",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      {item.say}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.2rem",
                      }}
                    >
                      <Image
                        loading="lazy"
                        width={50}
                        height={50}
                        src={IMGS[index]}
                        alt="f"
                        blurDataURL={dynamicBlurDataUrl}
                        placeholder="blur"
                        objectFit="contain"
                      />
                      <span className="company">{item.compnay}</span>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: ".6rem",
                        }}
                      >
                        <Image
                          loading="lazy"
                          src={"/image/lo.png"}
                          className="location"
                          alt="location"
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          width={20}
                          height={20}
                        />
                        <span className="place">{item.location}</span>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && (
            <Button
              ref={nextButtonRef}
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
              disabled={isEnd}
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
          )}
        </Box>
      </Container>

      <SliderS3 images={companies} />
    </div>
  )
}
