"use client"

import { Box, Grid } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import Features from "@/components/tools/features/features"
import Feedback from "@/components/tools/feedback/feedback"
import Form from "@/components/tools/form/form"
import mobile from "@/assets/img/mobile.png"
import Social from "@/components/tools/social/social"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Work from "@/components/tools/work/work"

import imagMob from "@/assets/img/imagMob.png"

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
        className="add-padding"
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="goToHome"
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: { xs: "center", lg: "flex-start" },
                width: { xs: "90%", lg: "100%" },
                position: "relative",
                margin: "auto",

                left: { xs: "", lg: "17%" },
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
                تحقيق أهدافكم الرقمية.{" "}
              </motion.p>
            </Item>
          </Grid>
          <Grid item className="hidden-img" xs={12} md={6}>
            <Item>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Image
                  src={mobile}
                  placeholder="blur"
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
      </motion.div>

      <Box
        sx={{
          paddingTop: { xs: "5.3rem", md: "10rem" },
          background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
        }}
      >
        <Work />
      </Box>

      <Features imgPath={imagMob} />
      <Feedback />
      <Form />
    </>
  )
}
