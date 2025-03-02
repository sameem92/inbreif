"use client";

import { HeroList } from "@/constants/page";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import MotionWrapper from "../tools/MotionWrapper";
import ConsultBtn from "./shared/ConsultBtn";
import MainTitle from "./shared/MainTitle";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MotionWrapper
      className="hero"
      id="goToHome"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Box
        className="home"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          gap: "4.8rem",
        }}
      >
        <Container
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "4.8rem",
            zIndex: 1,
            position: "relative",
            minHeight: "34rem",
          }}
          maxWidth="lg"
        >
          <MainTitle />
          <ConsultBtn />
        </Container>

        <MotionWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <Container
            sx={{ display: "flex", justifyContent: "center", gap: "2.4rem" }}
            maxWidth="lg"
          >
            <Box
              sx={{
                paddingBottom: "4.8rem",
                position: "relative",
                top: "5.8rem",
                zIndex: 10,
                margin: "0 auto",
              }}
            >
              <Grid
                container
                spacing={{
                  xs: 3, // Spacing for extra small screens
                  lg: 6, // Spacing for large screens
                }}
              >
                {HeroList.map((item, index) => (
                  <Grid
                    ref={ref}
                    item
                    key={index}
                    xs={6}
                    sm={6}
                    md={3}
                    component="div" // Add the required component prop
                  >
                    <MotionWrapper
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                      }
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                    >
                      <MotionWrapper
                        drag
                        dragConstraints={{
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                        dragElastic={0.9}
                        dragTransition={{
                          bounceStiffness: 600,
                          bounceDamping: 20,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileDrag={{ scale: 1.05 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="hover"
                      >
                        <Card
                          className="content"
                          sx={{
                            borderRadius: "2.8rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minWidth: { sm: "215px" },
                            padding: {
                              xs: ".6rem",
                              md: "1rem 0.5rem",
                              lg: "1.1rem 2rem",
                            },
                            height: "100%",
                            gap: {
                              xs: "0.6rem",
                              md: "1rem",
                              lg: "1.6rem",
                            },
                            "@media(max-width:991px)": {
                              minWidth: "200px",
                            },
                            "@media(min-width:900px)": {
                              minHeight: "240px",
                            },
                            "@media(max-width:460px)": {
                              minWidth: "150px",
                            },
                          }}
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
                            <Box
                              sx={{
                                width: "40px",
                                height: "40px",
                                img: {
                                  height: "100%",
                                  width: "100%",
                                },
                              }}
                            >
                              <Image src={item.icon} alt={item.title} />
                            </Box>
                            <Typography
                              variant="h2"
                              sx={{
                                fontSize: {
                                  xs: locale === "de" ? "1.6rem" : "1.8rem",
                                  md: locale !== "ar" ? "1.4rem" : "1.6rem",
                                  lg: locale !== "ar" ? "1.6rem" : "2rem",
                                },
                                fontWeight: 400,
                                lineHeight: {
                                  xs: "2rem",
                                  lg: locale === "ar" ? "2.6rem" : "2rem",
                                },
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                letterSpacing: "-0.03em",
                                color: "#ffffff",
                              }}
                            >
                              {t(item.title)}
                            </Typography>
                          </CardContent>
                        </Card>
                      </MotionWrapper>
                    </MotionWrapper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </MotionWrapper>
      </Box>
    </MotionWrapper>
  );
};

export default HeroSection;
