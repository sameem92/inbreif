"use client"

import { Box } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import Grid from "@mui/material/Grid2"
import Feedback from "@/components/tools/feedback/feedback"
import Form from "@/components/tools/form/form"
import Social from "@/components/tools/social/social"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Work from "@/components/tools/work/work"

import style from "./styles/mobileComponent.module.scss"

// Images
import mobile from "../../../public/images/mobHero.svg"
import ServicesSection from "./servicesSection"

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
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="add-padding"
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="goToHome"
      >
        <Grid
          container
          spacing={{ xs: 6, md: 12 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "20rem 10rem 10rem",
            backgroundImage: 'url("/images/store/bg.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "65% 90%",
            "@media (max-width: 1340px)": {
              padding: "20rem 2rem",
            },
            "@media (max-width: 1240px)": {
              padding: "15rem 1rem",
            },
            "@media (max-width: 992px)": {
              padding: "12rem 2rem",
            },
            "@media (max-width: 768px)": {
              backgroundPosition: "50% 75%",
              backgroundSize: "contain",
            },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: { xs: "center", lg: "flex-start" },
                margin: "auto",
                gap: { xs: "1.6rem", md: "3rem" },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  fontSize: { xs: "2.6rem", lg: "3.2rem" },
                  fontStyle: "normal",
                  fontWeight: "700",
                  textAlign: { xs: "center", lg: "end" },
                  lineHeight: "normal",
                  position: "relative",
                  left: { xs: "", lg: "12%" },
                  top: { xs: "", lg: "-4rem" },
                  width: "100%",
                }}
              >
                تطوير تطبيقات الموبايل
              </Box>
              <motion.h1
                className="main-title mobile-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                معنا، تتحول الأفكار إلى واقع
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="paragrph-another"
              >
                في InBrief، نلتزم بتقديم تطبيقات متميزة تجمع بين الوظائف الفعالة والتصميم العصري. نحن هنا لمساعدتكم في
                تحقيق أهدافكم الرقمية.
              </motion.p>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Item>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={mobile}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "75rem",
                    }}
                    loading="lazy"
                    alt="mobile-apps"
                  />
                </div>
              </motion.div>
            </Item>
          </Grid>
        </Grid>
      </motion.div>

      <Box
        sx={{
          paddingTop: { xs: "5.3rem", md: "10rem" },
          background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
        }}
      >
        <Work />
      </Box>

      <ServicesSection />

      <Feedback />

      <Form />
    </div>
  )
}
