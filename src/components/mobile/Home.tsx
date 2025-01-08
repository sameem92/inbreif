"use client"

import { Box } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import Grid from "@mui/material/Grid2"
import Social from "@/components/tools/social/social"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Work from "@/components/tools/work/work"

import style from "./styles/mobileComponent.module.scss"

// Images
import mobile from "../../../public/images/mobHero.png"
import FeaturesSection from "./featuresSection"

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}))

export default function Home() {
  return (
    <div className={style.mobileComponent}>
      <Social />

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="add-padding"
        transition={{ duration: 0.4, ease: "easeIn" }}
        id="goToHome"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "20rem 10rem 10rem",
            backgroundImage: 'url("/images/store/bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "65% 90%",
            gap: "50px 0px",
            "@media (max-width: 1340px)": {
              padding: "20rem 2rem 10rem",
            },
            "@media (max-width: 1240px)": {
              padding: "15rem 1rem 7rem",
            },
            "@media (max-width: 992px)": {
              padding: "15rem 2rem 6rem",
            },
            "@media (max-width: 900px)": {
              padding: "0rem 2rem 6rem",
            },
            "@media (max-width: 768px)": {
              backgroundPosition: "50% 75%",
              backgroundSize: "contain",
              gap: "0px",
            },
          }}
        >
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              "@media (min-width:480px) and (max-width: 768px)": {
                marginBottom: "4rem",
              },
            }}
          >
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: { xs: "center", lg: "flex-start" },
                margin: "auto",
                gap: { xs: "1.6rem", md: "3rem" },
                "@media (max-width:991px)": {
                  ".main-secandry-title": { lineHeight: "normal" },
                },
              }}
            >
              <Box
                className="main-secandry-title"
                sx={{
                  textAlign: { xs: "center", sm: "start", xl: "end" },
                  position: "relative",
                  left: { xs: "", lg: "45%" },
                  top: { xs: "", lg: "-4rem" },
                  width: "100%",
                }}
              >
                تطوير تطبيقات الجوال
              </Box>
              <Box
                sx={{
                  "@media (max-width:1240px)": {
                    ".mobile-title": { textAlign: "center" },
                    ".paragrph-another": { textAlign: "center", maxWidth: "90%", margin: "0 auto" },
                  },
                  "@media (max-width:767px)": {
                    ".mobile-title": { marginTop: "0px" },
                  },
                }}
              >
                <h1 className="main-title mobile-title">معنا، تتحول الأفكار إلى واقع</h1>
                <p className="paragrph-another">
                  في InBrief، نلتزم بتقديم تطبيقات متميزة تجمع بين الوظائف الفعالة والتصميم العصري. نحن هنا لمساعدتكم في
                  تحقيق أهدافكم الرقمية.
                </p>
              </Box>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Item>
              <div style={{ textAlign: "center" }}>
                <Image
                  src={mobile}
                  style={{
                    maxWidth: "500px",
                    maxHeight: "528px",
                  }}
                  alt="mobile-apps"
                />
              </div>
            </Item>
          </Grid>
        </Grid>
      </motion.div>

      <Box
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
          background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
        }}
      >
        <Work />
      </Box>

      <FeaturesSection />
    </div>
  )
}
