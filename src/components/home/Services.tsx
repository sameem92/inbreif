"use client"
import React from "react"
import { Box, Button, Container, Grid2 } from "@mui/material"

import Image from "next/image"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { motion } from "framer-motion" // Import framer-motion
import { useRouter } from "next/navigation"
import { dynamicBlurDataUrl } from "@/lib"

const Item = styled(Paper)({
  textAlign: "center",
  boxShadow: "none",
})

const arrow = "/image/arrow.png"
import service1 from "../../../public/image/service1.svg"
import service2 from "../../../public/image/service2.svg"
import service3 from "../../../public/images/services/service1.svg"
import service4 from "../../../public/images/services/service2.svg"
import service5 from "../../../public/images/services/service3.svg"
import service6 from "../../../public/images/services/service4.svg"
import service7 from "../../../public/images/services/service5.svg"
import service8 from "../../../public/images/services/service6.svg"

const secService = [
  {
    img: service3,
    title: "هويات بصرية و شعارات",
    href: "/design-and-marketing",
  },
  {
    img: service4,
    title: "تصميم إعلانات و بروفايلات",
    href: "/design-and-marketing",
  },
  {
    img: service5,
    title: "موشن جرافيك ومونتاج",
    href: "/design-and-marketing",
  },
  {
    img: service6,
    title: "حملات تسويقية",
    href: "/design-and-marketing",
  },
  {
    img: service7,
    title: "إدارة حسابات التواصل الاجتماعي",
    href: "/design-and-marketing",
  },
  {
    img: service8,
    title: "إعداد خطط تسويقية",
    href: "/design-and-marketing",
  },
]

export default function Services() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }
  return (
    <Container
      sx={{
        padding: "100px 10rem 100px",
        "@media (max-width: 1340px)": {
          padding: "100px 2rem",
        },
        "@media (max-width: 1240px)": {
          padding: "100px 1rem",
        },
        "@media (max-width: 992px)": {
          padding: "100px 2rem",
        },
      }}
    >
      <div>
        <Grid2
          maxWidth="lg"
          container
          sx={{
            margin: "0 auto",
            justifyContent: "center",
            gap: "4.8rem",
          }}
        >
          <Grid2>
            <h1 className="secondry-title">الخدمات البرمجية</h1>
          </Grid2>

          <Grid2
            container
            size={{ xs: 12 }}
            display="flex"
            justifyContent="center"
            sx={{
              gap: "100px",
              "@media (max-width: 900px)": {
                gap: "50px",
              },
            }}
          >
            <Grid2 size={{ xs: 12, sm: 5 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                <Item
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3.2rem",
                    cursor: "pointer",
                    maxWidth: "424px",
                    margin: "0 auto",
                    "& .service-img-scale": {
                      "@media (max-width: 1240px)": {
                        transform: "scale(1.05)",
                      },
                      "@media (max-width: 1024px)": {
                        maxWidth: "220px",
                        transform: "scale(1.2)",
                      },
                      "@media (max-width: 900px)": {
                        maxWidth: "240px",
                        transform: "scale(1.2)",
                      },
                      "@media (max-width: 600px)": {
                        maxWidth: "220px",
                        transform: "scale(1.4)",
                      },
                    },
                  }}
                  onClick={() => handleNavigation("/mobile-apps")}
                  className="service-box border service-box-hover"
                >
                  <div>
                    <Image
                      src={service1}
                      alt="تطبيقات الموبايل"
                      loading="lazy"
                      objectFit="cover"
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                    />
                  </div>
                  <h3>تطبيقات الموبايل</h3>

                  <Button
                    variant="text"
                    sx={{
                      color: "#E0E327",
                      backgroundColor: "transparent",
                      fontFamily: "Kumbh Sans, sans-serif !important",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      transition: "all 0.2s ease",

                      "&:hover": {
                        color: "#E0E327",
                        backgroundColor: "transparent",
                        transform: "translateY(0px)",
                      },
                      span: {
                        transition: "all 0.2s ease",
                      },
                      ".arrow-icon": {
                        display: "none",
                      },
                      "&:hover .arrow-icon": {
                        display: "block",
                      },
                      "&:hover span": {
                        marginLeft: "1rem",
                      },
                    }}
                  >
                    <Image
                      src={arrow}
                      alt="arrow"
                      width={24}
                      height={24}
                      loading="lazy"
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                      className="arrow-icon"
                    />
                    <span>اعرف أكثر</span>
                  </Button>
                </Item>
              </motion.div>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 5 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                <Item
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "32px",
                    cursor: "pointer",
                    maxWidth: "424px",
                    margin: "0 auto",
                    "& .service-img-scale": {
                      transform: "scale(1.3)",
                      "@media (max-width: 1240px)": {
                        transform: "scale(1.05)",
                      },
                      "@media (max-width: 1024px)": {
                        maxWidth: "220px",
                        transform: "scale(1.2)",
                      },
                      "@media (max-width: 900px)": {
                        maxWidth: "240px",
                        transform: "scale(1.2)",
                      },
                      "@media (max-width: 600px)": {
                        maxWidth: "220px",
                        transform: "scale(1.4)",
                      },
                    },
                  }}
                  onClick={() => handleNavigation("/web-apps")}
                  className="service-box border service-box-hover"
                >
                  <div>
                    <Image
                      src={service2}
                      alt="متاجر إلكترونية"
                      loading="lazy"
                      objectFit="cover"
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                    />
                  </div>
                  <h3>متاجر إلكترونية</h3>

                  <Button
                    variant="text"
                    sx={{
                      color: "#E0E327",
                      backgroundColor: "transparent",
                      fontFamily: "Kumbh Sans, sans-serif !important",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      transition: "all 0.2s ease",

                      "&:hover": {
                        color: "#E0E327",
                        backgroundColor: "transparent",
                        transform: "translateY(0px)",
                      },
                      span: {
                        transition: "all 0.2s ease",
                      },
                      ".arrow-icon": {
                        display: "none",
                      },
                      "&:hover .arrow-icon": {
                        display: "block",
                      },
                      "&:hover span": {
                        marginLeft: "1rem",
                      },
                    }}
                  >
                    <Image
                      src={arrow}
                      alt="arrow"
                      width={24}
                      height={24}
                      loading="lazy"
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                      className="arrow-icon"
                    />
                    <span>اعرف أكثر</span>
                  </Button>
                </Item>
              </motion.div>
            </Grid2>
          </Grid2>
        </Grid2>
      </div>

      <div>
        <Container>
          <h1 className="secondry-title" style={{ margin: "84px auto 4.6rem" }}>
            خدمات التصميم والتسويق
          </h1>
          <Box
            sx={{
              width: { xs: "90%", lg: "100%" },
              margin: "auto",
            }}
          >
            <Grid container columnSpacing={{ xs: 2, md: 3, xl: 0 }} rowSpacing={{ xs: 6, md: 4, xl: 10 }}>
              {secService.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} custom992={4} lg={4} key={index}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <Box
                      onClick={() => handleNavigation(item.href)}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: { xs: "1.4rem !important", lg: "1.2rem !important" },
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        "&:hover h3": {
                          color: "#E0E327",
                        },
                        "&:hover .service-box": {
                          border: "1px solid #E0E327 ",
                        },
                        "&:hover .arrow-icon": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Item sx={{ mb: 2, padding: "0 !important" }} className="service-box">
                        <Image
                          src={item.img}
                          alt={item.title}
                          objectFit="cover"
                          loading="lazy"
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          width={292}
                          height={260}
                          style={{ maxWidth: "100%" }}
                          className="service-img"
                        />
                      </Item>

                      <h3 className="third-title">{item.title}</h3>
                      <Button
                        variant="text"
                        sx={{
                          color: "#E0E327",
                          backgroundColor: "transparent",
                          fontFamily: "Kumbh Sans, sans-serif !important",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "1.6rem",
                          lineHeight: "2rem",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          transition: "all 0.2s ease",

                          "&:hover": {
                            color: "#E0E327",
                            backgroundColor: "transparent",
                            transform: "translateY(0px)",
                          },

                          ".arrow-icon": {
                            opacity: 0,
                          },
                        }}
                      >
                        <Image
                          src={arrow}
                          alt="arrow"
                          loading="lazy"
                          width={24}
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          height={24}
                          className="arrow-icon" // Add class to the arrow icon
                        />
                        <span>اعرف أكثر</span>
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </Container>
  )
}
