"use client"

import React, { useEffect } from "react"
import Image from "next/image"

// Components
import { Box, Container, Card, CardContent, Typography, Grid } from "@mui/material"
import { motion } from "framer-motion"
import SliderS1 from "@/components/tools/sliders/sliderS1"
import Feedback from "@/components/tools/feedback/feedback"
import Form from "@/components/tools/form/form"
import PackagesSection from "@/components/marketing/packagesSection"
import Design from "@/components/marketing/Design"
import Tabs from "@mui/material/Tabs"

import Social from "@/components/tools/social/social"
import Tab from "@mui/material/Tab"

// Images
const icon1 = "/image/icon5.png"
const icon2 = "/image/icon6.png"
const icon3 = "/image/icon7.png"
const img1 = "/image/sh/1.png"
const img2 = "/image/sh/2.png"
const img3 = "/image/sh/3.png"
const img4 = "/image/sh/4.png"
const img5 = "/image/sh/5.png"
const img6 = "/image/sh/6.png"
const img7 = "/image/sh/7.png"
const img8 = "/image/sh/8.png"
const img9 = "/image/sh/9.png"
const img10 = "/image/sh/10.png"
const img11 = "/image/sh/11.png"
const img12 = "/image/sh/12.png"
const img13 = "/image/sh/13.png"
const img14 = "/image/sh/14.png"
const img15 = "/image/sh/15.png"
const img16 = "/image/sh/16.png"
const img17 = "/image/sh/17.png"
const img18 = "/image/sh/18.png"
const img19 = "/image/sh/19.png"
const img20 = "/image/sh/20.png"
const img21 = "/image/sh/21.png"
const img22 = "/image/sh/22.png"
const img23 = "/image/x1.png"
const img24 = "/image/x2.png"
const img25 = "/image/x3.png"
const img26 = "/image/x4.png"
const img27 = "/image/x5.png"
const img28 = "/image/socail/1.png"
const img29 = "/image/socail/2.png"
const img30 = "/image/socail/3.png"
const img31 = "/image/socail/4.png"
const img32 = "/image/socail/5.png"
const img33 = "/image/socail/6.png"
const img34 = "/image/socail/7.png"
const img35 = "/image/socail/8.png"
const img36 = "/image/socail/9.png"
const img37 = "/image/socail/10.png"
const img38 = "/image/socail/11.png"
const img39 = "/image/socail/12.png"
const img40 = "/image/profile/1.png"
const img41 = "/image/profile/2.png"
const img42 = "/image/profile/3.png"
const img43 = "/image/profile/4.png"
const img44 = "/image/profile/5.png"
const img45 = "/image/profile/6.png"
const img46 = "/image/profile/7.png"
const img47 = "/image/profile/8.png"
const img48 = "/image/profile/9.png"
const img49 = "/image/profile/10.png"
const img50 = "/image/profile/11.png"
const img51 = "/image/profile/12.png"
const img52 = "/image/profile/13.png"
const img53 = "/image/profile/14.png"
const img54 = "/image/profile/15.png"
const img55 = "/image/profile/16.png"
const img56 = "/image/profile/17.png"

const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
]

const visualIdentities = [img23, img24, img25, img26, img27]

const socials = [img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39]

const profiles = [
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
]

// Types
interface TabPanelProps {
  index: number | string
  value: number | string
  children: React.ReactNode
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function CustomTabPanel(props: TabPanelProps) {
  const { value, index, children, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      sx={{
        width: "100%",
        paddingTop: "3rem",
      }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  )
}

const items = [
  {
    icon: icon1,
    title: "تسليم سريع",
  },
  {
    icon: icon2,
    title: " أسعار معقولة",
  },
  {
    icon: icon3,
    title: " تعديلات حتى رضا العميل",
  },
]

export default function Home() {
  const [value, setValue] = React.useState<string | number>(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: string | number) => {
    setValue(newValue)
  }

  useEffect(() => {
    const hash = window.location.href.split("#")[1]
    if (hash) {
      const targetElement = document.getElementById(hash)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }, [])
  return (
    <>
      <Social />

      <motion.div
        style={{ paddingTop: "7rem" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        id="goToHome"
        transition={{ duration: 0.6, ease: "easeOut" }}
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
            <motion.h1
              className="main-secandry-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              التصميم الجرافيك
            </motion.h1>
            <p className="paragrph">
              نسعى لتحقيق التميز والابداع والعصرية لعملائنا في هويتهم البصرية وإعلاناتهم في سوق مليء بالتحديات
            </p>
          </Container>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Container sx={{ display: "flex", justifyContent: "center", gap: "2.4rem" }} maxWidth="lg">
              <Box
                sx={{
                  width: { xs: "90%", lg: "74%" },
                  paddingBottom: { xs: "8rem", lg: "4.8rem" },

                  position: "relative",
                  top: "5.8rem",
                  zIndex: 10,
                  margin: "0 auto",
                }}
              >
                <Grid container spacing={{ xs: 2, md: 4, lg: 6 }}>
                  {items.map((item, index) => (
                    <Grid item key={index} xs={6} sm={6} md={4}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Card
                          sx={{
                            background:
                              "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "2.8rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: { xs: "1.6rem 0.5rem", md: "1rem", lg: "1.1rem" },
                            height: "100%",
                            gap: { xs: ".6rem", md: "1rem", lg: "1.6rem" },

                            "&:hover": {
                              border: "1px solid #E0E324",
                            },
                          }}
                          className="border"
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "1rem",
                            }}
                          >
                            <Image src={item.icon} alt={item.title} width={50} height={50} loading="lazy" />
                            <Typography
                              variant="h6"
                              sx={{
                                // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                                fontSize: {
                                  xs: "2rem",
                                  md: "1.8rem",
                                  lg: "2.4rem",
                                },
                                fontWeight: 400,
                                lineHeight: { xs: "3rem", lg: "3.7rem" },
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                letterSpacing: "-0.03em",
                                color: "#ffffff",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box
          className="tabs"
          sx={{
            width: "100%",
            "& .MuiTabs-flexContainer": {
              gap: "3.2rem",
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              alignItems: "center",
              mt: { xs: 5, md: "15rem" },

              justifyContent: "center",
            }}
          >
            <Tab className="tab" label="شعارات" {...a11yProps(0)} />
            <Tab className="tab" label="هويات بصرية" {...a11yProps(1)} />
            <Tab className="tab" label="  سوشيال ميديا" {...a11yProps(2)} />
            <Tab className="tab" label="بروفايلات ومجلات" {...a11yProps(3)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <SliderS1 images={logos} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <SliderS1 images={visualIdentities} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <SliderS1 images={socials} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <SliderS1 images={profiles} />
          </CustomTabPanel>
        </Box>
      </motion.div>

      <PackagesSection />

      <Design />

      <Feedback />

      <Form />
    </>
  )
}
