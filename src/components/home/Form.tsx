import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion"; // Import framer-motion

const textStyle = {
  "&.MuiTextField-root": {
    "& .MuiInputLabel-outlined": {
      height: "6rem",
      padding: "0 2.4rem",
      color: "#737373",
    },
    "& .MuiOutlinedInput-root": {
      background: "#fff",
      boxShadow: "0px 0px 12px 0px rgba(255, 255, 255, 0.20) inset",
      backdropFilter: "blur(24px)",
      borderRadius: "5.2rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      background: "transparent",
      color: "#737373",
      border: "1px solid #BFBFBF",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #BFBFBF",
    },
    "& .MuiFormHelperText-contained": {
      color: "error.main",
      margin: 0,
    },
  },
};

export default function Form() {
  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if the screen is mobile
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          padding: { xs: "8rem 0", md: "10rem 0", lg: "15rem 0" },
          zIndex: "1",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4rem",
            width: "100%",
          }}
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={animation} // Trigger animation when 30% of the box is visible
        >
          {/* Keep the existing responsive styling for this Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1.6rem",
              justifyContent: "space-between",
              width: { xs: "81%", md: "90%", lg: "100%" }, // Responsive width
            }}
          >
            <Box
              className="border contact-email-phone"
              sx={{
                width: "100%",
                gap:{xs:'3.6rem', lg: "4.8rem"},
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "4.8rem",
                padding: { xs: "8rem 2.4rem", lg: "12rem 0" },
                background:
                  "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {xs:'2rem' ,md:'3rem',lg:"3.6rem"},
                  fontWeight: 700,
                   lineHeight: {xs:'3.7rem' ,md:'4.8rem',lg:"5.4rem"},

                  textAlign: "center",
                  color: "white",
                }}
              >
                هل تريد البدء في مشروع جديد؟
              </Typography>
              <Box
                sx={{
                  width: { xs: "100%", md: "90%", lg: "60%" },
                  gap: "1.6rem",
                  height: { xs: "auto", md: "6rem" },
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "70% 30%",
                    lg: "85% 25%",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <TextField
                  placeholder="قم بإدخال رقم الهاتف أو عنوان البريد الالكتروني"
                  fullWidth
                  type="text"
                  sx={textStyle}
                />
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem 2rem",
                    height: "6rem",
                    gap: "6px",
                    borderRadius: "52px",
                    background: "#E0E324",
                    backdropFilter: "blur(24px)",
                    color: "#001014",
                    textAlign: "center",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    lineHeight: "1.6rem",
                  }}
                >
                  إرسال
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
