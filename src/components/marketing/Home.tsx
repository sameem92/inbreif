"use client"

import React from "react"
import Image from "next/image"

// Components
import { Box, Container, Card, CardContent, Typography, Grid } from "@mui/material"
import { motion } from "framer-motion"
import Slider from "@/components/tools/slider/slider"
import Package from "@/components/tools/package/package"
import Feedback from "@/components/tools/feedback/feedback"
import Form from "@/components/tools/form/form"
import Profile from "@/components/marketing/Profile"
import ADS from "@/components/marketing/ADS"
import Slider2 from "@/components/marketing/Slider2"
import Design from "@/components/marketing/Design"
import Tabs from "@mui/material/Tabs"
import { dynamicBlurDataUrl } from "@/lib"
import Social from "@/components/tools/social/social"
import Tab from "@mui/material/Tab"

// Images
const icon1 = "/image/icon5.png"
const icon2 = "/image/icon6.png"
const icon3 = "/image/icon7.png"

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
                        whileHover={{ scale: 1.05 }}
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
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={50}
                              blurDataURL={dynamicBlurDataUrl}
                              placeholder="blur"
                              height={50}
                              loading="lazy"
                            />
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
          <Tab className="tab" label=" هويات بصرية" {...a11yProps(1)} />
          <Tab className="tab" label="  سوشيال ميديا" {...a11yProps(2)} />
          <Tab className="tab" label="بروفايلات ومجلات" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Slider2 />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Slider />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <ADS />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Profile />
        </CustomTabPanel>
      </Box>

      <Package />
      <Design />
      <Feedback />
      <Form />
    </>
  )
}
