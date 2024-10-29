"use client";
import r from "@/assets/img/r.png";

import React from "react";
import { Box, Container, Grid, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Package from "@/components/shop/Package";
import Design from "@/components/shop/Design";
import Feedback from "@/components/home/Feedback";
import Form from "@/components/home/Form";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { dynamicBlurDataUrl } from "@/lib";

import Social from "@/components/layout/Social";
const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}));

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile

  return (
    <>
      <Social />

      <motion.div
        style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="goToHome"
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
              justifyContent: "center",
              gap: "4rem",
              zIndex: 1,
              position: "relative",
            }}
            maxWidth="lg"
          >
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <Item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    justifyContent: { xs: "center", md: "flex-start" },
                    width: "100%",
                    gap: { xs: "2rem", md: "5rem" },
                  }}
                >
                  <motion.h1
                    className="main-title mobile-title text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    التسويق معنا غير
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="paragrph-another"
                  >
                    باختصار نصل بك إلى هدفك.{" "}
                  </motion.p>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "5rem",
                      padding: "1rem 2rem",
                      gap: "6px",
                      borderRadius: "52px",
                      background: "#E0E324",
                      backdropFilter: "blur(24px)",
                      color: "#001014",
                      textAlign: "center",
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      lineHeight: "1.6rem",
                    }}
                  >
                    اطلب استشارة مجانية
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={r}
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                      style={
                        isMobile
                          ? {
                              maxWidth: "100%",
                              width: "100%",
                              height: "auto",
                            }
                          : {
                              maxWidth: "100%",
                              width: "100%",
                              height: "auto",
                              position: "relative",
                              left: "-10%",
                              top: "-2%",
                            }
                      }
                      loading="lazy"
                      alt="mobile-apps"
                    />
                  </motion.div>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      <Package />
      <Design />
      <Feedback />
      <Form />
    </>
  );
}
