"use client"

<<<<<<< HEAD
import React from "react"
=======
import React, { useState } from "react"
>>>>>>> 476c981bc55ccbd2c81ce2acba121f15d5de6896
import { Box, Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Button from "@mui/material/Button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { dynamicBlurDataUrl } from "@/lib"
import emailjs from "@emailjs/browser"
const images = ["/image/arrow-select.png", "/image/right.png"]

const textStyle = {
  "& .MuiInputBase-root": {
    color: "white",
  },
  "&.MuiTextField-root": {
    "& .MuiInputLabel-outlined": {
      height: "5.6rem",
      padding: "0 1.6rem",
      background: "transparent",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      background: "transparent",
      borderRadius: "7rem",
      border: "1px solid rgba(255, 255, 255, 0.20)",
      boxShadow: "0px 1px 2px 0px rgba(18, 18, 23, 0.05)",
      color: "#fff",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
    },
    "& .MuiFormHelperText-contained": {
      color: "error.main",
      margin: 0,
    },
  },
}
const textStyleTextare = {
  "& .MuiInputBase-root": {
    color: "white",
  },
  "&.MuiTextField-root": {
    color: "#FFF",

    "& .MuiInputLabel-outlined": {
      padding: "0 1.6rem",
      background: "transparent",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      background: "transparent",
      borderRadius: "2.4rem",
      border: "1px solid rgba(255, 255, 255, 0.20)",
      boxShadow: "0px 1px 2px 0px rgba(18, 18, 23, 0.05)",
      color: "#FFF",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
    },
    "& .MuiFormHelperText-contained": {
      color: "error.main",

      margin: 0,
    },
  },
}

export default function SpecialOffers() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [emailValid, setEmailValid] = React.useState(false)
  const [service, setService] = React.useState("استفسارات اخري")
  const [message, setMessage] = React.useState("")
  const [loading, setLoading] = useState(false)

  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value
    setEmail(emailValue)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setEmailValid(emailRegex.test(emailValue))
  }

  const handleSubmit = async () => {
    setLoading(true)
    await emailjs
      .send(
        "service_xznqpsf",
        "inbrief_dz2f8nw",
        {
          name: name,
          phone: phone,
          email: email,
          service: service,
          message: message,
        },
        "RoVHFVDjpZcFQSnv8"
      )
      .then(
        () => {
          setLoading(false)
          setIsPopupOpen(true)
        },
        () => {
          setLoading(false)
          console.log("Failed to send message. Please try again.")
        }
      )
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }
  return (
    <>
      <div
        style={{
          height: "9.6rem",
          width: "100%",
        }}
        id="goToHome"
      />
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: { xs: "3.6rem", md: "4.8rem" },
          padding: { xs: "5rem 0 5rem 0", md: "5rem 0 15rem 0" },
          width: "100%",
        }}
      >
        <Container
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "3.6rem", md: "4.8rem" },
          }}
          maxWidth="md"
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3.6rem", md: "4rem" },
              fontWeight: 700,
              lineHeight: "6rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            املأ الاستمارة ،
            <br />
            وسيقوم فريقنا بالاتصال بك.
          </Typography>
          <Box
            className="border contact-us"
            sx={{
              width: "100%",
              gap: "2.4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "4.8rem",
              padding: { xs: "2rem 3rem", md: "6.6rem 5.6rem " },
              paddingBottom: { xs: "5rem", lg: "5rem" },

              background: "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: ".6rem", md: "1.6rem" },
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  lineHeight: "2.4rem",
                  color: "#fff",
                }}
              >
                الاسم
              </Typography>

              <TextField
                placeholder="اكتب اسمك"
                fullWidth
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={textStyle}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: { xs: ".6rem", md: "1.6rem" },
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  lineHeight: "2.4rem",
                  color: "#fff",
                }}
              >
                رقم الجوال
              </Typography>

              <TextField
                placeholder="اكتب رقم الجوال"
                fullWidth
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={textStyle}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: ".6rem", md: "1.6rem" },
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  lineHeight: "2.4rem",
                  color: "#fff",
                }}
              >
                بريد إلكتروني
              </Typography>

              <TextField
                placeholder="demo@gmail.com"
                fullWidth
                type="email"
                value={email}
                onChange={handleEmailChange}
                error={!emailValid && email !== ""} // Show error if email is invalid and not empty
                helperText={!emailValid && email !== "" ? "البريد الإلكتروني غير صالح" : ""}
                sx={textStyle}
              />
            </Box>
            <Box
              className="select"
              sx={{
                display: "flex",
                gap: { xs: ".6rem", md: "1.6rem" },
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  lineHeight: "2.4rem",
                  color: "#fff",
                }}
              >
                نوع الخدمة
              </Typography>
              <Select
                defaultValue="استفسارات اخري "
                displayEmpty
                value={service}
                onChange={(e) => setService(e.target.value)}
                renderValue={(value) => {
                  if (!value) {
                    return (
                      <Typography
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: 400,
                          lineHeight: "2.4rem",
                          color: "#fff",
                        }}
                      >
                        استفسارات اخري
                      </Typography>
                    )
                  }
                  return value
                }}
                variant="outlined"
                IconComponent={() => (
                  <Image
                    width={24}
                    height={24}
                    className="arrow-icon-2"
                    src={images[0]}
                    alt="arrowSelect"
                    loading="lazy"
                    blurDataURL={dynamicBlurDataUrl}
                    placeholder="blur"
                  />
                )}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid rgba(255, 255, 255, 0.20)",
                    boxShadow: "0px 1px 2px 0px rgba(18, 18, 23, 0.05)",
                    padding: "0 1.6rem",
                  },
                  width: "100%",
                  height: "5.6rem",
                  marginRight: 15,

                  borderRadius: "7rem",
                  color: "#fff",
                  "& .arrow-icon-2": {
                    position: "relative",
                    right: "1.8rem",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      minWidth: 180,
                      background:
                        "linear-gradient(137.34deg, rgba(2, 5, 4, 0.16) 23.98%, rgba(35, 36, 56, 0.16) 65.73%)",
                      backdropFilter: "blur(100px)",
                      borderRadius: "11px",
                      marginTop: 1,
                      color: "white",
                      "& .MuiMenu-list": {
                        padding: "1.2rem",
                        gap: "4px",
                        border: "1px solid ",
                        borderImageSource: "linear-gradient(81.07deg, #22373C 53.33%, #18292D 93.73%)",
                      },
                      "& li": {
                        "&:hover": {
                          background: "#FFFFFF0F",
                          color: "#E0E324",
                        },
                        background: "transparent",
                        color: "white",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "4rem",
                        fontSize: "1.4rem",
                        height: "4rem",
                        marginBottom: "1rem",
                        borderRadius: "4px",
                      },
                      "& .Mui-selected": {
                        background: "#FFFFFF0F",
                        color: "#ffff",
                        "&:hover": {
                          background: "#FFFFFF0F",
                          color: "#ffff",
                        },
                      },
                      "& .MuiMenuItem-root": {
                        "&:active": {
                          background: "#FFFFFF0F",
                          color: "#ffff",
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value={"برمجة تطبيقات موبايل"}>برمجة تطبيقات موبايل</MenuItem>
                <MenuItem value={"تطوير مواقع"}>تطوير مواقع</MenuItem>
                <MenuItem value={"متاجر إلكترونية"}>متاجر إلكترونية</MenuItem>
                <MenuItem value={"تصميم جرافيك"}>تصميم جرافيك</MenuItem>
                <MenuItem value={"موشن جرافيك"}>موشن جرافيك</MenuItem>
                <MenuItem value={"محتوى وحملات تسويقية"}>محتوى وحملات تسويقية</MenuItem>
                <MenuItem value={"استفسارات أخرى"}>استفسارات أخرى</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: ".6rem", md: "1.6rem" },
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  lineHeight: "2.4rem",
                  color: "#fff",
                }}
              >
                رسالتك
              </Typography>
              <TextField
                placeholder="اكتب رسالة لنا"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                maxRows={8}
                sx={textStyleTextare}
              />
            </Box>

            <Button
              onClick={handleSubmit}
              disabled={!emailValid || loading}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem 2rem",
                height: "6rem",
                gap: "6px",
                width: "17rem",
                marginTop: "2.4rem",
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
        </Container>
      </Box>
      <AnimatePresence>
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
                cursor: "pointer",
              }}
              onClick={handleClosePopup}
            />

            <Box
              sx={{
                background: "linear-gradient(137deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                borderRadius: "2.4rem",
                padding: { xs: "2.4rem", md: "3.6rem" },
                textAlign: "center",
                border: "1px solid #22373C",
                backdropFilter: "blur(25px)",
                width: { xs: "90%", sm: "50rem", lg: "56rem" },
                margin: "auto",
                position: "fixed", // Element is positioned relative to the viewport
                top: "50%", // Center vertically
                left: "50%", // Center horizontally
                zIndex: 99999999, // Keep high z-index for visibility
                transform: "translate(-50%, -50%)", // Shift the element by 50% of its own width and height
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
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
                    تم استلام طلبك
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
                    سيتم الرد عليك خلال ٢٤ ساعة ، شكراً لك.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
