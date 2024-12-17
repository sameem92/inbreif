"use client"
import { Box, Container, Button } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"
import Feedback from "@/components/tools/feedback/feedback"
import Form from "@/components/tools/form/form"
import Social from "@/components/tools/social/social"
const img1 = "/image/a.png"
const img2 = "/image/img2.png"
const img3 = "/image/img3.png"
import { dynamicBlurDataUrl } from "@/lib"

const IMGS = [img2, img3, img1]

export default function Home() {
  const handleNavigation = () => {
    //http://wa.me/96877276659
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <>
      <Social />

      <motion.div
        style={{ paddingTop: "7rem" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        id="goToHome"
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
              className="main-title-4 text-primary"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              تطبيق عيادة
            </motion.h1>

            <Button
              onClick={() => handleNavigation()}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "6rem",
                padding: "1rem 2rem",
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
              تواصل معنا لتخصيص ما يناسبك
            </Button>
          </Container>

          <Container
            sx={{
              display: "flex",
              gap: { xs: "2.4rem", md: "4.8rem" },
              padding: { xs: "8rem 0", md: "15rem 0" },
              flexDirection: "column",
            }}
            maxWidth="lg"
          >
            {IMGS.map((i, index) => (
              <Box sx={{ width: { xs: "90%", lg: "100%" }, margin: "auto" }} key={index}>
                <Image
                  src={i}
                  alt={`Image ${index + 1}`}
                  layout="responsive"
                  width={100} // Placeholder width
                  height={100} // Placeholder height
                  blurDataURL={dynamicBlurDataUrl}
                  placeholder="blur"
                  className="work-ig"
                  loading="lazy"
                />
              </Box>
            ))}
          </Container>
        </Box>
      </motion.div>

      <Feedback />
      <Form />
    </>
  )
}
