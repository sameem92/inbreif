import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"

// Images & Icons
import store from "../../../../public/images/store/store.svg"
import { Button } from "@mui/material"

const HeroSecion = () => {
  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages")
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="heroSection" id="goToHome">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "20rem 10rem 0px",
          "@media (max-width: 1340px)": {
            padding: "20rem 7.5rem 0px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "15rem 7.5rem 0px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "12rem 7.5rem 0px 2rem",
          },

          "@media (max-width: 480px)": {
            padding: "12rem 2rem 0px",
          },
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <div>
            <h1>أنشئ متجرك الإلكتروني الآن</h1>

            <p>صمم متجرك الإلكتروني الآن من خلال واجهة وخدمات تتيح لك التحكم الكامل من الدفع الى الشحن بكل سلاسة.</p>

            <div className="actions">
              <Button onClick={scrollToPackages}>ابدأ الآن</Button>
              <Button onClick={goToWhatsApp} sx={{ background: "transparent" }} className="transparent">
                تواصل معنا
              </Button>
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <div className="store_img">
            <Image src={store} alt="store" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSecion
