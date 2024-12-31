/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck
"use client"

import React, { useRef, useState } from "react"
import { Container, Button, Box, Card, CardContent, Typography, Grid, useMediaQuery } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import Image from "next/image"
const icon1 = "/image/icon5.png"
const icon2 = "/image/icon6.png"
const icon3 = "/image/icon7.png"
const dummy = "/image/dummy.png"

import { motion } from "framer-motion"

const items = [
  {
    icon: icon1,
    title: "تنوع لهجات التعليق الصوتي",
  },
  {
    icon: icon2,
    title: " 2D / 3D",
  },
  {
    icon: icon3,
    title: "  كتابة سيناريو",
  },
]
export default function Design() {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const isMobile = useMediaQuery("(max-width:768px)")
  const totalSlides = 9

  return (
    <>
      <motion.div
        style={{ paddingTop: "15rem" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
          }}
        >
          <Container
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5rem",
              zIndex: 1,
              position: "relative",
            }}
            maxWidth="lg"
          >
            <motion.h1
              className="main-secandry-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              موشن جرافيك ومونتاج
            </motion.h1>
            <p className="paragrph">نحن نؤمن أن كل لقطة تروي قصة وفريقنا المحترف يجعل قصتك تنبض بالحياة </p>
          </Container>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Container sx={{ display: "flex", justifyContent: "center", gap: "6rem" }} maxWidth="lg">
              <Box
                sx={{
                  width: { xs: "90%", lg: "80%" },
                  paddingBottom: "4.8rem",
                  position: "relative",
                  top: "5.8rem",
                  zIndex: 10,
                  margin: "0 auto",
                }}
              >
                <Grid container spacing={7}>
                  {items.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Card
                          sx={{
                            background:
                              "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "2.8rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: { xs: "1.6rem", md: "1rem", lg: "1.1rem" },
                            height: "100%",
                            gap: "1.6rem",
                            "&:hover": {
                              border: "1px solid #E0E324",
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
                              gap: "1.6rem",
                            }}
                          >
                            <Image src={item.icon} alt={item.title} width={50} height={50} loading="lazy" />
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: {
                                  xs: "1.6rem",
                                  md: "1.8rem",
                                  lg: "2.4rem",
                                },
                                fontWeight: 400,
                                lineHeight: "5.6rem",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                letterSpacing: "-0.03em",
                                color: "#ffffff",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </motion.div>
        </Box>
      </motion.div>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4.8rem",
          padding: { xs: "5.3rem 0", md: "15rem 0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.6rem",
            justifyContent: "space-between",
            width: "100%",
            padding: { xs: "0 2rem" },
          }}
        >
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

              setIsBeginning(realIndex === 0)
              setIsEnd(realIndex === totalSlides - 1)
            }}
            modules={[Navigation]}
            className="mySwiper-video"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: { xs: "95%", md: "100%" },
                    minWidth: { xs: "95%", md: "100%" },
                    minHeight: { xs: 500 },
                    maxHeight: { xs: 600 },
                    borderRadius: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    boxShadow: "none",
                    overflow: "auto",
                    borderRadius: "none",
                    border: "none",
                  }}
                  className="border"
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      padding: "0px !important",
                      "& img": {
                        width: "100% !important",
                        height: "100% !important",
                      },
                    }}
                  >
                    <Image
                      src={dummy}
                      alt="dummy"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      loading="lazy"
                    />
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
    </>
  )
}
