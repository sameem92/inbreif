"use client";

import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

import Image from "next/image";

import SiteHeroImage from "../../../../public/images/siteHero.png";
import Circles from "../../../../public/images/circles.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        id="goToHome"
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "42px",
            padding: "20rem 10rem 100px",
            "@media (max-width: 1024px)": {
              padding: "155px 1rem 100px",
            },
            "@media (max-width: 768px)": {
              padding: "155px 2rem 100px",
            },
            "@media (max-width: 480px)": {
              padding: "155 2rem",
              gap: "22px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "116px",
              "@media (max-width: 480px)": { display: "none" },
            }}
          >
            <Image src={Circles} alt="Circles" />
          </Box>

          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flex: "1",
              width: "100%",
              maxWidth: "780px",
            }}
          >
            <Stack gap={"12px"}>
              <h1>أنشئ موقعك الإلكتروني الآن</h1>
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "16/9",
                  width: "100%",
                }}
              >
                <Image
                  src={SiteHeroImage}
                  fill
                  alt="Site Hero Image"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <p>
                اجعل فكرتك واقعًا رقميًا بسهولة واحترافية <br />
                أنشئ موقعك الإلكتروني وابدأ رحلتك نحو النجاح اليوم!
              </p>

              <Stack
                direction="row"
                spacing={{ xs: 0, sm: 2 }}
                sx={{
                  marginX: "auto",
                  marginTop: "45px",
                  "@media only screen and (max-width: 599px)": {
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  },
                }}
              >
                <Button
                  sx={{
                    width: 168,
                    height: 56,
                    borderRadius: 60,
                    fontWeight: 600,
                    fontSize: 22,
                  }}
                >
                  ابدأ الآن
                </Button>

                <Button
                  sx={{
                    width: 168,
                    height: 56,
                    borderRadius: 60,
                    fontWeight: 600,
                    fontSize: 22,
                    background: "transparent",
                    borderColor: "#e1e42a",
                    color: "#e1e42a",
                    borderWidth: 1,
                    borderStyle: "solid",
                    margin: 0,
                  }}
                >
                  <Link href="/contact-us">تواصل معنا</Link>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </motion.div>
    </div>
  );
};

export default HeroSection;
