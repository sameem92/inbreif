"use client";
import React from "react";
import { Box, Button, Container } from "@mui/material";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion"; // Import framer-motion
import { useRouter } from "next/navigation";
import { dynamicBlurDataUrl } from "@/lib";

const Item = styled(Paper)({
  textAlign: "center",
  boxShadow: "none",
});

const arrow = "/image/arrow.png";
const firstService = [
  {
    img: "/image/service1.png",
    title: "تطبيقات الموبايل",
    href: "/mobile-apps",
  },
  {
    img: "/image/service2.png",
    title: "مواقع ومتاجر إلكترونية",
    href: "/web-apps",
  },
  {
    img: "/image/service3.png",
    title: "نظام محاسبي ومبيعات",
    href: "/mobile-apps",
    soon:true
  },
];
const secService = [
  {
    img: "/image/service4.png",
    title: "هويات بصرية و شعارات",
    href: "/design-and-marketing",
  },
  {
    img: "/image/service5.png",
    title: " تصميم إعلانات و بروفايلات",
    href: "/design-and-marketing",
  },
  {
    img: "/image/service6.png",
    title: " موشن جرافيك ومونتاج",
    href: "/design-and-marketing",
  },
  {
    img: "/image/service7.png",
    title: " حملات تسويقية",
    href: "/design-and-marketing",
  },
  {
    img: "/image/service8.png",
    title: "  إدارة حسابات التواصل الاجتماعي",
    href: "/design-and-marketing",
  },
  {
    img: "/image/service9.png",
    title: " إعداد خطط تسويقية",
    href: "/design-and-marketing",
  },
];

export default function Services() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <div className="hero">
        <div className="hero">
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
                width: {xs:'90%',sm:'100%',md:'100%',lg:'100%'},
                margin:'auto',
                padding: { xs: "0 2rem" , sm:'0 6rem', md:'0 8rem', lg: "0 10rem" },
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
                          position:'relative',
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "3.2rem",
                          cursor:'pointer',
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
                        onClick={() => handleNavigation(item.href)}

                        className="service-box border service-box-hover"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          objectFit="cover"
                          width={
                            index == 0 ? 279.563 : index == 1 ? 210 : 354.295
                          }
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          height={210}
                          className="service-img-scale"
                        />
                        <h3>{item.title}</h3>
                        {item.soon && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "#E0E327",
                            color: "#000",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            padding: "0.5rem 1rem",
                            borderRadius: "5px",
                            textTransform: "uppercase",
                          }}
                        >
                          قريباً
                        </Box>
                      )}

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
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </div>
        <div>
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
<Box  sx={{
                width: {xs:'90%',lg:'100%'},
                margin:'auto',

              }}
              >
            <Grid
              container
              columnSpacing={{ xs: 6, md: 4, xl: 0 }}
              rowSpacing={{ xs: 6, md: 4, xl: 10 }}
             
            >
              {secService.map((item, index) => (
                <Grid item xs={12} sm={6} md={6}  custom992={4} lg={4} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
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
                        gap: {xs:'1.4rem !important' , lg:'1.2rem !important'},
                        transition: "all 0.3s ease",
                        cursor:'pointer',

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
                             transform: "scale(1.2)",

                            maxWidth: "230px",
                          },
                          "@media (max-width: 992px)": {
                            transform: "scale(1.2)",

                         },
                         "@media (max-width: 750px)": {
                          transform: "scale(1.05)",

                       },
                          "@media (max-width: 600px)": {
                             transform: "scale(1.4)",

                          },
                        },
                      }}
                    >
                      <Item
                        sx={{ mb: 2 }}
                        className="service-box service-box-sm"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          objectFit="cover"
                          loading="lazy"
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          width={252}
                          height={218}
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
      </div>
    </>
  );
}
