/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck
"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Image from "next/image";

import { MotionGraphicItems } from "@/constants/motion";
import { useLocale, useTranslations } from "next-intl";
import MotionWrapper from "../tools/MotionWrapper";
import VideoSwiper from "./shared/VideoSwiper";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Design() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const t = useTranslations("DesignMotion.MotionSection");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="motion">
      <MotionWrapper
        style={isMobile ? { paddingTop: "8rem" } : { paddingTop: "15rem" }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
          }}
        >
          <Container
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "2rem", md: "5rem" },
              zIndex: 1,
              position: "relative",
            }}
            maxWidth="lg"
          >
            <MotionWrapper
              type="h1"
              className="main-secandry-title"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              {t("title")}
            </MotionWrapper>
            <p className="paragrph">{t("description")}</p>
          </Container>

          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Container
              sx={{ display: "flex", justifyContent: "center", gap: "6rem" }}
              maxWidth="lg"
            >
              <Box
                sx={{
                  width: { xs: "95%", md: "89%", lg: "80%" },
                  paddingBottom: "4.8rem",
                  position: "relative",
                  top: "5.8rem",
                  zIndex: 10,
                  margin: "0 auto",
                }}
              >
                <Grid container spacing={{ xs: 2, lg: 7 }} ref={ref}>
                  {MotionGraphicItems.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <MotionWrapper
                        initial={{
                          y: 100,
                          opacity: 0,
                        }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <MotionWrapper
                          whileHover={{ scale: 1.02 }}
                          transition={{
                            type: "tween",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="hover"
                        >
                          <Card
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: {
                                xs: " 0rem",
                                md: "1rem ",
                                lg: "1.1rem 1.2rem",
                              },
                              height: "100%",
                              minHeight:
                                locale === "ar"
                                  ? "auto"
                                  : { xs: "auto", md: "200px" },
                              gap: {
                                xs: "0.6rem",
                                md: "1rem",
                                lg: "1.6rem",
                              },
                            }}
                            className="content"
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
                              <Image
                                src={item.icon}
                                alt={item.title}
                                width={50}
                                height={50}
                              />
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: {
                                    xs: "1.9rem",
                                    md: "1.8rem",
                                    lg: "2.4rem",
                                  },
                                  fontWeight: 400,
                                  lineHeight: { xs: "3rem", md: "3.7rem" },
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

      <VideoSwiper />
    </div>
  );
}
