"use client"

import { Box, Container, List, ListItem, ListItemText, Typography, Grid, useMediaQuery, Grid2 } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import Social from "@/components/tools/social/social"
import Form from "@/components/tools/form/form"
import Feedback from "@/components/tools/feedback/feedback"
import { dynamicBlurDataUrl } from "@/lib"
import distinguishes from "../../../public/images/about/distinguishes.svg"
import values from "../../../public/images/about/values.svg"

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <>
      <Social />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Box
          className="home"
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            gap: "4.8rem",
            padding: "10px 10rem 100px",
            "@media (max-width: 1340px)": {
              padding: "10px 2rem 100px",
            },
            "@media (max-width: 1240px)": {
              padding: "10px 1rem 100px",
            },
            "@media (max-width: 992px)": {
              padding: "10px 2rem 100px",
            },
          }}
        >
          {/* Main Title */}
          <Container
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.9rem",
              zIndex: 1,
              position: "relative",
            }}
            maxWidth="lg"
          >
            <motion.h1
              className="main-title-2 text-primary"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              مرحبًا بكم في شركة InBrief!
            </motion.h1>
            <motion.p
              className="title-h3-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              نحن شركة مرخصة رسمياً و رائدة في مجال البرمجة وتطوير التطبيقات والمواقع الإلكترونية والتسويق الإلكتروني،
              حيث نركز على تلبية احتياجات السوق الخليجي. بفضل مكاتبنا المنتشرة في السعودية والكويت وسلطنة عمان، نتمكن من
              تقديم حلول مبتكرة ترتقي بتجربة عملائنا وتجعلهم في مقدمة المنافسة.
            </motion.p>
          </Container>

          {/* Features Section */}
          <Container
            sx={{
              display: "flex",
              gap: { xs: "5rem", lg: "10rem" },
              flexDirection: "column",
            }}
            maxWidth="lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Grid2 container alignItems="center" justifyContent="space-between" gap="20px">
                <Grid2 size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: "2rem", lg: "3.6rem" },
                      marginTop: "140px",
                      "@media(max-width:1100px)": {
                        marginTop: "120px",
                      },
                      "@media(max-width:991px)": {
                        marginTop: "100px",
                      },
                      "@media(max-width:900px)": {
                        marginTop: "0px",
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "2.8rem", lg: "3.6rem" },
                        fontWeight: 600,
                        lineHeight: "5.6rem",
                        letterSpacing: "-1.44px",
                        color: "#E1E42A",
                      }}
                    >
                      ما يميزنا
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "2rem", lg: "2.7rem" },
                        fontWeight: 400,
                        lineHeight: "3.7rem",
                        color: "#fff",
                      }}
                    >
                      نسعى لأن نكون الوجهة الأولى للعملاء الذين يبحثون عن حلول رقمية متكاملة. نؤمن بقوة التكنولوجيا في
                      تحسين الأعمال وتحقيق النجاح، ونعمل بجد لتوفير كل ما يلزم لتحقيق رؤى عملائنا.
                    </Typography>
                  </Box>
                </Grid2>

                {/* Image */}
                <Grid2
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={distinguishes}
                      style={{
                        maxWidth: "55rem",
                        width: "100%",
                        height: "auto",
                      }}
                      loading="lazy"
                      alt="one"
                      blurDataURL={dynamicBlurDataUrl}
                      placeholder="blur"
                    />
                  </motion.div>
                </Grid2>
              </Grid2>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Grid2 container alignItems="center" justifyContent="space-between" gap="20px">
                <Grid2
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    order: { xs: 2, md: 1 },
                  }}
                >
                  <Image
                    src={values}
                    style={{
                      maxWidth: "55rem",
                      width: "100%",
                      height: "auto",
                    }}
                    loading="lazy"
                    alt="two"
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur"
                  />
                </Grid2>

                {/* Values Text */}
                <Grid2
                  size={{ xs: 12, md: 5 }}
                  sx={{
                    order: { xs: 1, md: 2 },
                    marginTop: "150px",
                    "@media(max-width:1100px)": {
                      marginTop: "120px",
                    },
                    "@media(max-width:991px)": {
                      marginTop: "100px",
                    },
                    "@media(max-width:900px)": {
                      marginTop: "0px",
                    },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: { xs: "2rem", lg: "3.6rem" },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "2.8rem", lg: "3.6rem" },
                          fontWeight: 600,
                          lineHeight: "4rem",
                          letterSpacing: "-1.44px",
                          color: "#E1E42A",
                        }}
                      >
                        قيمنا
                      </Typography>
                      <List
                        sx={{
                          listStyleType: "disc",
                          listStylePosition: "inside",
                        }}
                      >
                        <ListItem sx={{ padding: "0" }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontSize: { xs: "2rem", lg: "2.7rem" },
                                  fontWeight: 400,
                                  lineHeight: "3.7rem",
                                  color: "#fff",
                                  position: "relative",
                                  marginInlineStart: "20px",
                                  "&:before": {
                                    position: "absolute",
                                    content: '""',
                                    left: "-20px",
                                    flexShrink: 0,
                                    display: "block",
                                    height: "8px",
                                    width: "8px",
                                    borderRadius: "45%",
                                    background: "#e1e42a",
                                    marginTop: "12px",
                                  },
                                }}
                              >
                                <span style={{ color: "#E1E42A", flexShrink: 0 }}>الابتكار :</span>
                                نسعى دائمًا لتقديم أفكار جديدة وحلول مبتكرة.
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem sx={{ padding: "0" }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontSize: { xs: "2rem", lg: "2.7rem" },
                                  fontWeight: 400,
                                  lineHeight: "3.7rem",
                                  color: "#fff",
                                  position: "relative",
                                  marginInlineStart: "20px",
                                  "&:before": {
                                    position: "absolute",
                                    content: '""',
                                    left: "-20px",
                                    flexShrink: 0,
                                    display: "block",
                                    height: "8px",
                                    width: "8px",
                                    borderRadius: "45%",
                                    background: "#e1e42a",
                                    marginTop: "12px",
                                  },
                                }}
                              >
                                <span style={{ color: "#E1E42A", flexShrink: 0 }}>الجودة :</span>
                                نلتزم بتقديم أعلى معايير الجودة.
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem sx={{ padding: "0" }}>
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontSize: { xs: "2rem", lg: "2.7rem" },
                                  fontWeight: 400,
                                  lineHeight: "3.7rem",
                                  color: "#fff",
                                  position: "relative",
                                  marginInlineStart: "20px",
                                  "&:before": {
                                    position: "absolute",
                                    content: '""',
                                    left: "-20px",
                                    flexShrink: 0,
                                    display: "block",
                                    height: "8px",
                                    width: "8px",
                                    borderRadius: "45%",
                                    background: "#e1e42a",
                                    marginTop: "12px",
                                  },
                                }}
                              >
                                <span style={{ color: "#E1E42A", flexShrink: 0 }}>الشفافية :</span>
                                نؤمن ببناء علاقات قائمة على الثقة مع عملائنا.
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </motion.div>
                </Grid2>
              </Grid2>
            </motion.div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{
                width: "100%",
              }}
            >
              <Box
                className="border"
                sx={{
                  width: { xs: "100%" },
                  margin: "0 auto",
                  gap: { xs: "2rem", lg: "3.6rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  borderRadius: "4.8rem",
                  padding: {
                    xs: "5rem 2rem",
                    lg: "8rem 5rem",
                    xl: "10rem 5rem",
                  },
                  background:
                    "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.8rem", lg: "3.6rem" },
                    fontWeight: 600,
                    lineHeight: "5.6rem",
                    textAlign: "center",
                    color: "#E1E42A",
                    letterSpacing: "-1.44px",
                  }}
                >
                  فريق العمل
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "2rem", lg: "2.7rem" },
                    fontWeight: 600,
                    lineHeight: "3.7rem",
                    textAlign: "center",
                    color: "#fff",
                    width: { xs: "100%", lg: "85%" },
                  }}
                >
                  يتكون فريقنا من مجموعة من المحترفين ذوي الخبرة، الذين يجمعهم شغف التكنولوجيا والإبداع. نحن نعمل كفريق
                  واحد لتحقيق أهداف عملائنا وتقديم الدعم اللازم في كل خطوة.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </motion.div>

      {/* Feedback and Form Components */}
      <Feedback />
      <Form />
    </>
  )
}
