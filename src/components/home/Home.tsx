/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import Image from "next/image"

// Components
import { Box, Container, Card, CardContent, Typography, Grid, Button } from "@mui/material"
import { motion } from "framer-motion" // Import framer-motion
import Feedback from "@/components/tools/feedback/feedback"
import Form from "@/components/tools/form/form"
import Services from "@/components/home/Services"
import Social from "@/components/tools/social/social"
import { dynamicBlurDataUrl } from "@/lib"
import { ReactTyped } from "react-typed"

const items = [
  {
    title: "احترافية عالية",
  },
  {
    title: "خبرة 10+ سنوات",
  },
  {
    title: "موثقة ومرخصة",
  },
  {
    title: "أسعار تنافسية",
  },
]

export default function Home() {
  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <>
      <Social />

      <motion.div
        className="hero"
        id="goToHome"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
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
              justifyContent: "flex-end",
              gap: "4.8rem",
              zIndex: 1,
              position: "relative",
              minHeight: "34rem",
            }}
            maxWidth="lg"
          >
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ReactTyped
                backSpeed={60}
                strings={["المنصة الأقوى في البرمجيات والتسويق في العالم العربي.", "باختصار نصل بك إلى النجاح الرقمي."]}
                typeSpeed={60}
                loop={true}
              />
            </motion.h1>
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "17rem",
                height: "5rem",
                padding: "1rem 2rem",
                gap: "6px",
                borderRadius: "52px",
                background: "#E0E324",
                backdropFilter: "blur(24px)",
                color: "#001014",
                textAlign: "center",
                fontFamily: "Kumbh Sans, sans-serif !important",
                fontSize: "1.6rem",
                fontWeight: 600,
                lineHeight: "1.6rem",
                textDecoration: "none",
              }}
              onClick={goToWhatsApp}
            >
              اطلب استشارة مجانية
            </Button>
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
                  {items.map((item, index) => (
                    <Grid item key={index} xs={12} custom490={6} sm={6} md={3}>
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
                            minWidth: "215px",
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
                            "&:hover": {
                              border: "1px solid #E0E324",
                            },
                            "@media(max-width:991px)": {
                              minWidth: "200px",
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
                              gap: "1.6rem",
                            }}
                          >
                            <Image
                              src={`/image/icon${index + 1}.png`}
                              alt={item.title}
                              width={50}
                              height={50}
                              loading="lazy"
                              blurDataURL={dynamicBlurDataUrl}
                              placeholder="blur"
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: {
                                  xs: "1.8rem",
                                  md: "1.6rem",
                                  lg: "2rem",
                                },
                                fontWeight: 400,
                                lineHeight: { xs: "2rem", lg: "5.6rem" },
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

      <Services />

      <Feedback />

      <Form />
    </>
  )
}
