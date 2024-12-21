import React from "react"
import Image from "next/image"
import Link from "next/link"

// Components
import Grid from "@mui/material/Grid2"

// Images & Icons
import store from "../../../../public/images/store/store.svg"

const HeroSecion = () => {
  return (
    <div className="heroSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "20rem 10rem 10rem",
          "@media (max-width: 1340px)": {
            padding: "2rem 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "1.7rem 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "1.7rem 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <div>
            <h1>أنشئ متجرك الإلكتروني الآن</h1>

            <p>صمم متجرك الإلكتروني الآن من خلال واجهة وخدمات تتيح لك التحكم الكامل من الدفع الى الشحن بكل سلاسة.</p>

            <div className="actions">
              <Link href="" className="bg">
                ابدأ الآن
              </Link>
              <Link href="">تواصل معنا</Link>
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
