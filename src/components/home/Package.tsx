import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import { dynamicBlurDataUrl } from "@/lib";

import Grid from "@mui/material/Grid";
const packages = [
  {
    recommend: false,
    title: "Enterprise",
    price: "500 $",
    features: [
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
    ],
    desc: "AI chatbot, personalized recommendations",
    buttonText: "اشترك الأن",
  },
  {
    recommend: true,
    title: "Premium",
    price: "500 $",
    features: [
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
    ],
    desc: "AI chatbot, personalized recommendations",
    buttonText: "اشترك الأن",
  },
  {
    recommend: false,
    title: "Basic",
    price: "500 $",
    features: [
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
      "تصميم هوية لعلامتك التجارية",
    ],
    desc: "AI chatbot, personalized recommendations",
    buttonText: "اشترك الأن",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger animation for each card
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Package() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile
  const isT = useMediaQuery("(max-width:1350px)"); // Detect if the screen is mobile
console.log(isT,"isT")
  return (
    <motion.div
      className="package"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
      id="special-offers"
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
        <h2 className="secondry-title mb-4 ">عروض خاصة</h2>
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

            width: { xs: "80%", sm: "80%", md: "80%", lg: "100%", xl: "100%" },
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            {packages.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <motion.div
                  key={index}
                  className={`price ${item.recommend ? "recommend recommend-hover" : "price-h"}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={
                    isMobile ? { once: true } : { once: true, amount: 0.1 }
                  }
                  variants={cardVariants}
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

                      background: item.recommend
                        ? "#E0E324"
                        : "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                      border: item.recommend ? "none" : "1px solid #E0E324",
                      backdropFilter: "blur(24px)",
                      color: item.recommend ? "#001014" : "#fff",
                      textAlign: "center",
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      lineHeight: "1.6rem",
                      "&:hover": {
                        backgroundColor: item.recommend
                          ? "#fff"
                          : "transparent",
                        color: item.recommend ? "#001014" : "#fff",
                        border: item.recommend ? "none" : "1px solid #fff",
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
                          src={"/image/check-h.png"}
                          className="hidden"
                          alt="check"
                          width={24}
                          blurDataURL={dynamicBlurDataUrl}
                          placeholder="blur"
                          height={24}
                          loading="lazy"
                        />
                        <Image
                          src={"/image/check.png"}
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
