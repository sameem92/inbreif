import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
  import MenuItem from "@mui/material/MenuItem";
 import { motion, AnimatePresence } from "framer-motion";
import { dynamicBlurDataUrl } from "@/lib";
const images = ["/image/arrow-select.png", "/image/right.png"];
import Image from "next/image";

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
  const [input, setInput] = React.useState("");
  const [inputValid, setInputValid] = React.useState(true); 
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  // Validate email and phone
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone regex (allow international format or simple numbers)
    const phoneRegex = /^\+?[0-9]{10,14}$/;

    // Check if it's either a valid email or a valid phone number
    setInputValid(emailRegex.test(inputValue) || phoneRegex.test(inputValue));  
  };


  const handleSubmit = () => {
    if (inputValid && input) {
      setIsPopupOpen(true);
     }else{
      setInputValid(false)
     }
  };

  const handleClosePopup = () => {
     setIsPopupOpen(false);
  };

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
                  value={input}
                  onChange={handleInputChange}
                  error={!inputValid} // Show error if input is invalid and not empty
                  helperText={!inputValid ? "البيانات المدخلة غير صحيحة" : ""}
  
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
                  onClick={handleSubmit}
                >
                  إرسال
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
      {isPopupOpen && (
          <>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              cursor:'pointer',

            }}
            onClick={handleClosePopup}
          />
          
           <Box
              sx={{
                background:
                  "linear-gradient(137deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                borderRadius: "2.4rem",
                padding: { xs: "2.4rem", md: "3.6rem" },
                textAlign: "center",
                border: "1px solid #22373C",
                backdropFilter: "blur(25px)",
                width: { xs: "90%", sm: "50rem", lg: "56rem" },
                margin: "auto",
                position: "fixed",  // Element is positioned relative to the viewport
                top: '50%',         // Center vertically
                left: '50%',        // Center horizontally
                zIndex: 99999999,   // Keep high z-index for visibility
                transform: 'translate(-50%, -50%)',  // Shift the element by 50% of its own width and height
              

              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flext-start",
                  height: "20px",
                }}
              >
                <Button
                  sx={{
                    background: "transparent",
                    borderRadius: "50%",
                    border: "1px solid  #E1E42A",
                    display: "flex",
                    width: "24px",
                    minWidth: "24px",
                    padding: "0",
                    maxWidth: "24px",

                    height: "24px",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      background: "transparent",
                      border: "1px solid  #E1E42A",
                    },
                  }}
                  onClick={handleClosePopup}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M8.625 3.875L3.375 9.125M3.375 3.875L8.625 9.125"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4.8rem",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={images[1]}
                  alt="right"
                  loading="lazy"
                  className="right"
                  height={120}
                  width={120}
                  blurDataURL={dynamicBlurDataUrl}
                  placeholder="blur"
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    gap: "2.4rem",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "2.4rem",
                      fontStyle: "normal",
                      textAlign: "center",

                      fontWeight: "500",
                      lineHeight: "5.6rem",
                      letterSpacing: " -0.72px",
                      color: "#fff",
                    }}
                  >
                    تم استلام طلبك{" "}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.6rem",
                      fontStyle: "normal",
                      textAlign: "center",

                      fontWeight: "500",
                      color: "#fff",
                      lineHeight: "2.4rem",
                    }}
                  >
                    سيتم الرد عليك خلال ٢٤ ساعة ، شكراً لك.{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
 
           </>
        )}
    </>
  );
}
