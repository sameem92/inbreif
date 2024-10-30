"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Social from "@/components/layout/Social";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}));

export default function Home() {
  return (
    <>
      <Social />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-sm add-padding"
        id="goToHome"
      >
        <Box
          sx={{
            width: { xs: "90%", lg: "100%" },
            padding: { xs: "0 2rem", lg: "0 7rem" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh", // Full height for a coming soon page
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} md={12}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  gap: { xs: "1.6rem", md: "3rem" },
                  textAlign: "center", // Centered text
                }}
              >
                <Box
                  sx={{
                    color: "#e1e42a",
                    fontSize: { xs: "4rem", lg: "6rem" },
                    fontWeight: "bold",
                    lineHeight: "normal",
                    position: "relative",
                    width: "100%",
                    textAlign: "center", // Centering the "ترقبو"
                  }}
                >
                  ترقبوا
                </Box>
                <motion.p
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    color: "white",
                    fontSize: "1.8rem",
                    fontWeight: "500",
                  }}
                >
                  
                  قريباً، نوفر لكم تجربة فريدة على الإنترنت تُحدث فرقاً حقيقياً في تواجدكم الرقمي

                </motion.p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
}
