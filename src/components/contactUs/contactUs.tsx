"use client";

import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, memo } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import MotionWrapper from "../tools/MotionWrapper";
import FormTitle from "./shared/FormTitle";
import FieldWrapper from "./shared/FieldWrapper";

const images = ["/image/arrow-select.png", "/image/right.png"];

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
};

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
};

const ContactUsComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const t = useTranslations("ContactUs");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(emailValue));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhone(phone);
    const valid = phone.trim().length >= 8;
    setPhoneValid(valid);
  };

  const handleSubmit = async () => {
    setLoading(true);
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
          setLoading(false);
          setIsPopupOpen(true);
        },
        () => {
          setLoading(false);
          console.log("Failed to send message. Please try again.");
        }
      );
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setMessage("");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div style={{ height: "9.6rem", width: "100%" }} id="goToHome" />
      <MotionWrapper
        className="hero"
        id="goToHome"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
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
            background: "#032932",
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
            <FormTitle />
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
                background:
                  "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <FieldWrapper title={t("field1")}>
                <TextField
                  placeholder={t("write_your_name")}
                  fullWidth
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={textStyle}
                />
              </FieldWrapper>
              <FieldWrapper title={t("field2")}>
                <TextField
                  placeholder={t("enter_phone_number")}
                  fullWidth
                  value={phone}
                  onChange={handlePhoneChange}
                  helperText={
                    !phoneValid && phone !== ""
                      ? t("phone_number_min_length")
                      : ""
                  }
                  sx={textStyle}
                />
              </FieldWrapper>
              <FieldWrapper title={t("field3")}>
                <TextField
                  placeholder="demo@gmail.com"
                  fullWidth
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={!emailValid && email !== ""}
                  helperText={
                    !emailValid && email !== "" ? t("invalid_email") : ""
                  }
                  sx={textStyle}
                />
              </FieldWrapper>
              <FieldWrapper title={t("field4")}>
                <Select
                  defaultValue={t("other_inquiries")}
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
                          {t("other_inquiries")}
                        </Typography>
                      );
                    }
                    return value;
                  }}
                  variant="outlined"
                  IconComponent={({ className }) => (
                    <Image
                      className={`arrow-icon-2 ${className}`}
                      width={24}
                      height={24}
                      src={images[0]}
                      alt="arrowSelect"
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
                    borderRadius: "7rem",
                    color: "#fff",
                    "& .arrow-icon-2": {
                      top: "32%",
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
                          borderImageSource:
                            "linear-gradient(81.07deg, #22373C 53.33%, #18292D 93.73%)",
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
                  <MenuItem value={t("mobile_app_development")}>
                    {t("mobile_app_development")}
                  </MenuItem>
                  <MenuItem value={t("website_development")}>
                    {t("website_development")}
                  </MenuItem>
                  <MenuItem value={t("e_commerce")}>{t("e_commerce")}</MenuItem>
                  <MenuItem value={t("graphic_design")}>
                    {t("graphic_design")}
                  </MenuItem>
                  <MenuItem value={t("motion_graphic")}>
                    {t("motion_graphic")}
                  </MenuItem>
                  <MenuItem value={t("content_marketing")}>
                    {t("content_marketing")}
                  </MenuItem>
                  <MenuItem value={t("other_inquiries")}>
                    {t("other_inquiries")}
                  </MenuItem>
                </Select>
              </FieldWrapper>
              <FieldWrapper title={t("field5")}>
                <TextField
                  placeholder={t("write_message")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={4}
                  maxRows={8}
                  sx={textStyleTextare}
                />
              </FieldWrapper>

              <Button
                onClick={handleSubmit}
                disabled={(!emailValid && !phoneValid) || loading}
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
                {t("submit")}
              </Button>
            </Box>
          </Container>
        </Box>
      </MotionWrapper>

      <AnimatePresence>
        {isPopupOpen && (
          <>
            <MotionWrapper
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
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
            >
              <div></div>
            </MotionWrapper>

            <Box
              sx={{
                background:
                  "linear-gradient(137deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                borderRadius: "2.4rem",
                padding: { xs: "2.4rem", md: "3.6rem" },
                textAlign: "center",
                border: "1px solid #22373C",
                backdropFilter: "blur(25px)",
                width: { xs: "85%", sm: "50rem", lg: "56rem" },
                margin: "auto",
                position: "fixed",
                top: "50%",
                left: "50%",
                zIndex: 99999999,
                transform: "translate(-50%, -50%)",
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "2rem", sm: "4.8rem" },
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={images[1]}
                  alt="right"
                  className="right"
                  height={120}
                  width={120}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "1.2rem", sm: "2.4rem" },
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
                    {t("request_received")}
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
                    {t("response_time")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(ContactUsComponent);
