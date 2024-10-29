"use client";
import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Social from "@/components/layout/Social";
import Form from "@/components/home/Form";
import Feedback from "@/components/home/Feedback";
import { dynamicBlurDataUrl } from "@/lib";
import one from "@/assets/img/1.png";
import two from "@/assets/img/2.png";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile

  return (
    <>
      <Social />

      {/* Hero Section */}
      <motion.div
        style={{ paddingTop: "7rem" }}
        initial={{ opacity: 0, y: 100 }}
        id="goToHome"
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
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              مرحبًا بكم في شركة InBrief!
            </motion.h1>
            <motion.p
              className="title-h3-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              نحن شركة مرخصة رسمياً و رائدة في مجال البرمجة وتطوير التطبيقات
              والمواقع الإلكترونية والتسويق الإلكتروني، حيث نركز على تلبية
              احتياجات السوق الخليجي.
            </motion.p>
          </Container>

          {/* Features Section */}

          <Container
            sx={{
              display: "flex",
              gap: { xs: "6rem",  lg: "15rem" },
              padding: { xs: "6rem 0", md: "10rem 0", xl: "15rem 0" },
              flexDirection: "column",
            }}
            maxWidth="lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }} // Ensure animation triggers when in view
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  margin: "0 auto",
                  width: { xs: "86%", md: "92%", lg: "100%" },
                }}
              >
                <Grid
                  container
                  spacing={6}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: "2rem", lg: "3.6rem" },
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
                        المميزات
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
                        نسعى لأن نكون الوجهة الأولى للعملاء الذين يبحثون عن حلول
                        رقمية متكاملة.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Image */}
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={
                        isMobile ? { once: true } : { once: true, amount: 0.3 }
                      } // Ensure animation triggers when in view
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={one}
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
                  </Grid>
                </Grid>
              </Box>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }} // Ensure animation triggers when in view
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  margin: "0 auto",
                  width: { xs: "86%", md: "92%", lg: "100%" },
                }}
              >
                <Grid
                  container
                  spacing={6}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      order: { xs: 2, sm: 1 } // Switch order for mobile view
                    }}
                    
                  >
                    <Image
                      src={two}
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
                  </Grid>

                  {/* Values Text */}
                  <Grid item xs={12} sm={6}
                    sx={{ 
                      order: { xs: 1, sm: 2 } // Switch order for mobile view
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={
                        isMobile ? { once: true } : { once: true, amount: 0.3 }
                      } // Ensure animation triggers when in view
                      transition={{ duration: 0.6 }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
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
                            color: "#fff",
                          }}
                        >
                          قيمنا
                        </Typography>
                        <Box>
                          <Box>
                            <List
                              sx={{
                                listStyleType: "disc",
                                listStylePosition: "inside",
                              }}
                            >
                              {/* Innovation */}
                              <ListItem sx={{ padding: "0" }}>
                                <ListItemText
                                  primary={
                                    <Typography
                                      sx={{
                                        fontSize: { xs: "2rem", lg: "2.7rem" },

                                        fontWeight: 400,
                                        lineHeight: "3.7rem",
                                        color: "#fff",
                                      }}
                                    >
                                      <span style={{ color: "#E1E42A" }}>
                                        <span className="pl-2">•</span>
                                        الابتكار :
                                      </span>
                                      &nbsp;نسعى دائمًا لتقديم أفكار جديدة وحلول
                                      مبتكرة .
                                    </Typography>
                                  }
                                />
                              </ListItem>

                              {/* Quality */}
                              <ListItem sx={{ padding: "0" }}>
                                <ListItemText
                                  primary={
                                    <Typography
                                      sx={{
                                        fontSize: { xs: "2rem", lg: "2.7rem" },
                                        fontWeight: 400,
                                        lineHeight: "3.7rem",
                                        color: "#fff",
                                      }}
                                    >
                                      <span style={{ color: "#E1E42A" }}>
                                        <span className="pl-2">•</span>
                                        الجودة :
                                      </span>
                                      &nbsp;نلتزم بتقديم أعلى معايير الجودة في
                                      كل ما نقوم به.
                                    </Typography>
                                  }
                                />
                              </ListItem>

                              {/* Transparency */}
                              <ListItem sx={{ padding: "0" }}>
                                <ListItemText
                                  primary={
                                    <Typography
                                      sx={{
                                        fontSize: { xs: "2rem", lg: "2.7rem" },
                                        fontWeight: 400,
                                        lineHeight: "3.7rem",
                                        color: "#fff",
                                      }}
                                    >
                                      {" "}
                                      <span style={{ color: "#E1E42A" }}>
                                        <span className="pl-2">•</span>
                                        الشفافية :
                                      </span>
                                      &nbsp;نؤمن بأهمية بناء علاقات قائمة على
                                      الثقة مع عملائنا.
                                    </Typography>
                                  }
                                />
                              </ListItem>
                            </List>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }} // Ensure animation triggers when in view
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
              }}
            >
              <Box
                className="border"
                sx={{
                  width: { xs: "90%", lg: "100%" },
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
                  فريق العمل{" "}
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
                  يتكون فريقنا من مجموعة من المحترفين ذوي الخبرة، الذين يجمعهم
                  شغف التكنولوجيا والإبداع. نحن نعمل كفريق واحد لتحقيق أهداف
                  عملائنا وتقديم الدعم اللازم في كل خطوة.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </motion.div>

      {/* Feedback and Form Components (No Animations) */}
      <Feedback />
      <Form />
    </>
  );
}
