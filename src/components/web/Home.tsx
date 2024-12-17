"use client"

import Image from "next/image"

// Components
import { Box, Grid } from "@mui/material"
import { motion } from "framer-motion"
import Slider from "@/components/tools/slider/Slider"
import Features from "@/components/web/features"
import Work from "@/components/tools/work/work"
import Form from "@/components/tools/form/form"
import Feedback from "@/components/tools/feedback/Feedback"
import Social from "@/components/tools/social/social"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import { dynamicBlurDataUrl } from "@/lib"

// Imgaes
const web = "/image/web.png"

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}))

export default function Home() {
  return (
    <>
      <Social />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-sm add-padding"
        id="goToHome"
      >
        <Box
          sx={{
            width: { xs: "90%", lg: "100%" },

            padding: { xs: "0 2rem", lg: "0 7rem" },
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: { xs: "center", lg: "flex-end" },

                  width: "100%",
                  gap: { xs: "1.6rem", md: "3rem" },
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    // fontFamily: "var(--font-ibm-plex-sans-arabic) !important",
                    fontSize: { xs: "2.6rem", lg: "3.2rem" },
                    fontStyle: "normal",
                    fontWeight: "700",
                    textAlign: { xs: "center", md: "end" },
                    left: { xs: "", md: "-4rem" },
                    top: { xs: "", md: "35%" },

                    lineHeight: "normal",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  تطوير المواقع والمتاجر الإلكترونية
                </Box>
                <motion.h1
                  className="main-title mobile-title"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  معنا،
                  <br />
                  وجودك على الانترنت غير.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="paragrph-another"
                >
                  في InBrief نقدم لك موقعاً تعريفياً أو متجراً إلكترونياً يتناسب مع هويتك التجارية ويزيد سرعة انتشارك
                  وجذب عملائك.
                </motion.p>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} className="hidden-img">
              <Item>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Image
                    src={web}
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur"
                    width={1000} // Arbitrary width for compliance
                    height={750} // Arbitrary height for compliance
                    style={{
                      maxWidth: "100%",
                      maxHeight: "75rem",
                    }}
                    loading="lazy"
                    alt="mobile-apps"
                  />
                </motion.div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
      <Box
        sx={{
          width: "100%",
          mt: { xs: 2, md: "15rem" },
        }}
      >
        <Slider />
      </Box>
      <Box
        sx={{
          width: "95%",
          margin: "auto",
        }}
      >
        <Work />
      </Box>
      <Features />
      <Feedback />
      <Form />
    </>
  )
}
