import { Alert, Container, useMediaQuery } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useState } from "react"

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
}

export default function Form() {
  const isMobile = useMediaQuery("(max-width:768px)")
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 }
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const showSuccess = () => {
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
  }

  const handleSubmit = async () => {
    setLoading(true)

    await emailjs
      .send(
        "service_xznqpsf",
        "inbrief_dz2f8nw",
        {
          name: value,
          [`${value.includes("@") ? "email" : "phone"}`]: value,
        },
        "RoVHFVDjpZcFQSnv8"
      )
      .then(
        () => {
          setLoading(false)
          setValue("")
          showSuccess()
        },
        () => {
          setLoading(false)
        }
      )
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
        padding: "100px 10rem 100px",
        "@media (max-width: 1340px)": {
          padding: "100px 10rem",
        },
        "@media (max-width: 992px)": {
          padding: "100px 2rem",
        },
        "@media (max-width: 480px)": {
          padding: "5rem 2rem",
        },
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
        initial={{ opacity: 0 }} // Initial state
        whileInView={{ opacity: 1 }} // Animate when in view
        transition={{ duration: 0.4, ease: "easeIn" }}
        viewport={animation} // Trigger animation when 30% of the box is visible
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.6rem",
            justifyContent: "space-between",
            width: { xs: "100%" },
          }}
        >
          <Box
            className="border contact-email-phone"
            sx={{
              width: "100%",
              gap: "4.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "4.8rem",
              padding: { xs: "8rem 2.4rem", lg: "12rem 0" },
              background: "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "3.6rem",
                fontWeight: 700,
                lineHeight: "5.4rem",
                textAlign: "center",
                color: "white",
                "@media (max-width: 992px)": {
                  fontSize: "3rem",
                },
                "@media (max-width: 480px)": {
                  fontSize: "2.5rem",
                },
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
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="قم بإدخال رقم الهاتف أو عنوان البريد الالكتروني"
                fullWidth
                type="text"
                sx={textStyle}
              />
              <Button
                onClick={handleSubmit}
                disabled={loading}
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
            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                viewport={animation}
                style={{ width: "60%", margin: "0 auto" }}
              >
                <Alert severity="success" style={{ borderRadius: "52px" }}>
                  تم استلام رسالتك بنجاح
                </Alert>
              </motion.div>
            )}
          </Box>
        </Box>
      </motion.div>
    </Container>
  )
}
