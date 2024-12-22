"use client"
import r from "../../../public/images/rocket.svg"

import React from "react"
import { Box, Container, Grid, Button, useMediaQuery } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import Packages from "@/components/tools/package/packages"
import Design from "@/components/shop/Design"
import Feedback from "@/components/tools/feedback/feedback"
import Social from "@/components/tools/social/social"
import Form from "@/components/tools/form/form"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import { dynamicBlurDataUrl } from "@/lib"

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}))

export default function Home() {
  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <>
      <Social />

      <motion.div
        style={{ paddingTop: "7rem" }}
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
            <Grid
              container
              alignItems="center"
              sx={{
                backgroundColor: "#032932",
                backgroundImage: 'url("/images/store/bg.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "65% center",
                backgroundSize: "45% 100%",
              }}
            >
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
                    باختصار نصل بك إلى هدفك.
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
                    onClick={goToWhatsApp}
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
                      style={{ maxWidth: "100%" }}
                      src={r}
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
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

      <Packages />
      <Design />
      <Feedback />
      <Form />
    </>
  )
}
