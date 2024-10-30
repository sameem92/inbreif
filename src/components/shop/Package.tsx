import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
const check = "/image/check.png";
const checkH = "/image/check-h.png";
import { motion } from "framer-motion"; // Import framer-motion
import { dynamicBlurDataUrl } from "@/lib";

import Grid from "@mui/material/Grid";
const packages = [
  {
    title: "باقة الهوية",
    price: "500 $",
    features: [
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
    ],
    desc: "قم بتصميم شعار شركتك الخاص ",
    buttonText: "اطلب الآن",
  },
  {
    title: "باقة الشعارات",
    price: "500 $",
    features: [
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
    ],
    desc: "قم بتصميم شعار شركتك الخاص ",
    buttonText: "اطلب الآن",
  },
  {
    title: "باقة السوشيال ميديا",
    price: "500 $",
    features: [
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
    ],
    desc: "قم بتصميم شعار شركتك الخاص ",
    buttonText: "اطلب الآن",
  },
];

export default function Package() {
  const cardVariants = (isMobile) => ({
    hidden: { opacity: 0, y: isMobile ? 20 : 50 }, // Adjust animation height for mobile
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * (isMobile ? 0.1 : 0.2), // Faster stagger on mobile
        duration: isMobile ? 0.5 : 0.8, // Faster animations on mobile
        ease: "easeOut",
      },
    }),
  });
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile
  const isT = useMediaQuery("(max-width:1350px)"); // Detect if the screen is mobile

  return (
    <motion.div
      className="package"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          padding: { xs: "5.3rem 0", md: "10rem 0" },
        }}
      >
        <h2 className="secondry-title  ">باقات التصميم والتسويق</h2>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.4rem",
            margin: "0 auto",
            marginTop: { xs: "0 ", md: "4rem" },

            width: { xs: "69%",sm:'90%' ,custom992: "90%", lg: "100%", xl: "100%" },
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {packages.map((item, index) => (
              <Grid item xs={12}  sm={6}   custom992={4} lg={4} key={index}>
                <motion.div
                  key={index}
                  className={`price`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={
                    isMobile ? { once: true } : { once: true, amount: 0.1 }
                  }
                  variants={cardVariants(isMobile)}
                   whileHover={isT ? { scale: 1.01}: { scale: 1.05 }} // Add this line to scale on hover
                  style={{ transition: "transform 0.3s ease" }}
                >
                  <div>
                    <h3 className="price-title">{item.title}</h3>
                    <h4 className="price-price">{item.price}</h4>
                    <p className="price-paragraph">{item.desc}</p>
                  </div>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "5rem",
                      padding: "1rem 2rem",

                      gap: "6px",
                      borderRadius: "52px",

                      background:
                        "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                      border: "1px solid #E0E324",
                      backdropFilter: "blur(24px)",
                      color: "#fff",
                      textAlign: "center",
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      lineHeight: "1.6rem",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #fff",
                      },
                    }}
                  >
                    {item.buttonText}
                  </Button>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      gap: "4px",
                    }}
                  >
                    {item.features.map((feature, index) => (
                      <div className="price-li" key={index}>
                        <Image
                          src={checkH}
                          className="hidden"
                          alt="check"
                          width={24}
                          height={24}
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          loading="lazy"
                        />
                        <Image
                          src={check}
                          className="blocked"
                          alt="check"
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          width={24}
                          height={24}
                          loading="lazy"
                        />
                        <span className="price-li-p">{feature}</span>
                      </div>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
}
/* Pricing block */
