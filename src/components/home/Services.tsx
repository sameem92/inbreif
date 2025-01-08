"use client"
import React from "react"
import { Box, Button, Container, useMediaQuery } from "@mui/material"

import Image from "next/image"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const Item = styled(Paper)({
  textAlign: "center",
  boxShadow: "none",
})

const arrow = "/image/arrow.png"
import service1 from "../../../public/image/service1.png"
import service2 from "../../../public/image/service2.png"
import service3 from "../../../public/images/services/service1.png"
import service4 from "../../../public/images/services/service2.png"
import service5 from "../../../public/images/services/service3.png"
import service6 from "../../../public/images/services/service4.png"
import service7 from "../../../public/images/services/service5.png"
import service8 from "../../../public/images/services/service6.png"

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
    href: "/design-and-marketing#motion",
  },
  {
    img: service6,
    title: "حملات تسويقية",
    href: "/marketing-and-campaigns",
  },
  {
    img: service7,
    title: "إدارة حسابات التواصل الاجتماعي",
    href: "/marketing-and-campaigns",
  },
  {
    img: service8,
    title: "إعداد خطط تسويقية",
    href: "/marketing-and-campaigns",
  },
]

export default function Services() {
  const router = useRouter()
  const isMobile = useMediaQuery("(max-width:768px)")
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 }

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={animation}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <Container>
            <h1 className="secondry-title" style={{ margin: "84px auto 4.6rem" }}>
              الخدمات البرمجية
            </h1>
            <Box
              sx={{
                width: { xs: "90%", lg: "100%" },
                margin: "auto",
              }}
            >
              <Grid container columnSpacing={{ xs: 2, md: 3, xl: 0 }} rowSpacing={{ xs: 6, md: 4, xl: 10 }}>
                <Grid item xs={12} sm={6} md={6} custom992={4} lg={4}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "tween", stiffness: 300, damping: 10 }}>
                    <Box
                      onClick={() => handleNavigation("/mobile-apps")}
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
                      <Item
                        sx={{
                          height: "260px",
                          width: "292px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          padding: "0 !important",
                        }}
                        className="service-box"
                      >
                        <Image
                          height={200}
                          width={200}
                          src={service1}
                          alt="تطبيقات الجوال"
                          style={{ maxWidth: "100%" }}
                        />
                      </Item>

                      <h2 className="third-title">تطبيقات الجوال</h2>
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
                          width={24}
                          height={24}
                          className="arrow-icon" // Add class to the arrow icon
                        />
                        <span>اعرف أكثر</span>
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={12} sm={6} md={6} custom992={4} lg={4}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "tween", stiffness: 300, damping: 10 }}>
                    <Box
                      onClick={() => handleNavigation("/web-apps")}
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
                      <Item
                        sx={{
                          height: "260px",
                          width: "292px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          padding: "0 !important",
                        }}
                        className="service-box"
                      >
                        <Image
                          height={200}
                          width={200}
                          src={service2}
                          alt="متاجر إلكترونية"
                          style={{ maxWidth: "100%" }}
                        />
                      </Item>

                      <h2 className="third-title">متاجر إلكترونية</h2>
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
                          width={24}
                          height={24}
                          className="arrow-icon" // Add class to the arrow icon
                        />
                        <span>اعرف أكثر</span>
                      </Button>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={animation}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
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
                        <Item
                          sx={{
                            height: "260px",
                            width: "292px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                            padding: "0 !important",
                          }}
                          className="service-box"
                        >
                          <Image
                            src={item.img}
                            alt={item.title}
                            style={{ height: "100%", maxWidth: "100%", objectFit: "contain" }}
                            className="service-img"
                          />
                        </Item>

                        <h2 className="third-title">{item.title}</h2>
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
                            width={24}
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
        </motion.div>
      </div>
    </Container>
  )
}
