"use client";
import React from "react";
import { Box, Button, Container, useMediaQuery } from "@mui/material";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion"; // Import framer-motion
import { dynamicBlurDataUrl } from "@/lib";

const Item = styled(Paper)({
  textAlign: "center",
  boxShadow: "none",
});

const arrow = "/image/arrow.png";
const firstService = [
  {
    title: "تطبيقات الموبايل",
  },
  {
    title: "مواقع ومتاجر إلكترونية",
  },
  {
    title: "نظام محاسبي ومبيعات",
  },
];
const secService = [
  {
    title: "هويات بصرية و شعارات",
  },
  {
    title: " تصميم إعلانات و بروفايلات",
  },
  {
    title: " موشن جرافيك ومونتاج",
  },
  {
    title: " حملات تسويقية",
  },
  {
    title: "  إدارة حسابات التواصل الاجتماعي",
  },
  {
    title: " إعداد خطط تسويقية",
  },
];

const fromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
export default function Services() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };
  return (
    <>
      <div className="hero">
        <motion.div
          className="hero"
          initial="hidden"
          whileInView="visible"
          variants={fromLeft}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={animation}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4.8rem",
              padding: { xs: "8rem 0", md: "15rem 0" },

              zIndex: 1,
              position: "relative",
            }}
          >
            <h1 className="secondry-title">الخدمات البرمجية</h1>

            <Box
              sx={{
                width: "100%",
                padding: { xs: "0 2rem", lg: "0 10rem" },
              }}
            >
              <Grid container spacing={{ xs: 3 }}>
                {firstService.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
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
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "3.2rem",
                          "& .service-img-scale": {
                            transform: "scale(1.3)",

                            "@media (max-width: 1240px)": {
                              maxWidth: "220px",
                            },
                          },
                        }}
                        className="service-box border service-box-hover"
                      >
                        <Image
                          src={`/image/service${index + 1}.png`}
                          alt={item.title}
                          loading="lazy"
                          objectFit="cover"
                          width={
                            index == 0 ? 279.563 : index == 1 ? 210 : 354.295
                          }
                          height={210}
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          className="service-img-scale"
                        />
                        <h3>{item.title}</h3>
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
                            loading="lazy"
                            blurDataURL={dynamicBlurDataUrl}
                            placeholder="blur"
                            height={24}
                            className="arrow-icon" // Add class to the arrow icon
                          />
                          <span>اعرف أكثر</span>
                        </Button>
                      </Item>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </motion.div>
        <motion.div
          className="hero"
          initial="hidden"
          whileInView="visible"
          variants={fromRight}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={animation}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
              paddingBottom: { xs: "8rem", md: "15rem" },
            }}
          >
            <h1 className="secondry-title">خدمات التصميم والتسويق </h1>

            <Grid
              container
              columnSpacing={{ xs: 6, md: 4, xl: 0 }}
              rowSpacing={{ xs: 6, md: 4, xl: 10 }}
            >
              {secService.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.2rem !important",
                        transition: "all 0.3s ease",
                        "&:hover h3": {
                          color: "#E0E327",
                        },

                        "&:hover .service-box-sm": {
                          border: "1px solid #E0E327 ",
                        },
                        "&:hover .arrow-icon": {
                          opacity: 1,
                        },
                        "& .service-img-sm-scale": {
                          transform: "scale(1.3)",
                          "@media (max-width: 1240px)": {
                            transform: "scale(1)",
                            maxWidth: "218px",
                          },
                          "@media (max-width: 600px)": {
                            transform: "scale(1)",
                          },
                        },
                      }}
                    >
                      <Item
                        sx={{ mb: 2 }}
                        className="service-box service-box-sm"
                      >
                        <Image
                          src={`/image/service${index + 4}.png`}
                          alt={item.title}
                          objectFit="cover"
                          width={252}
                          height={218}
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          loading="lazy"
                          className="service-img service-img-sm-scale"
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
                          width={24}
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          loading="lazy"
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
          </Container>
        </motion.div>
      </div>
    </>
  );
}
