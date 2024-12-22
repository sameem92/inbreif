import React from "react"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

// Components
import { Swiper, SwiperSlide } from "swiper/react"
import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2"

import { Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import { dynamicBlurDataUrl } from "@/lib"

// Images & Icons
import payment1 from "../../../../public/images/store/payments/payment1.svg"
import payment2 from "../../../../public/images/store/payments/payment2.svg"
import payment3 from "../../../../public/images/store/payments/payment3.svg"
import payment4 from "../../../../public/images/store/payments/payment4.svg"
import payment5 from "../../../../public/images/store/payments/payment5.svg"
import payment6 from "../../../../public/images/store/payments/payment6.svg"
import payment7 from "../../../../public/images/store/payments/payment7.svg"
import payment8 from "../../../../public/images/store/payments/payment8.svg"
import payment9 from "../../../../public/images/store/payments/payment9.svg"
import payment10 from "../../../../public/images/store/payments/payment10.svg"
import payment11 from "../../../../public/images/store/payments/payment11.svg"
import payment12 from "../../../../public/images/store/payments/payment12.svg"
import store from "../../../../public/icons/storeIcon.svg"
import sector from "../../../../public/icons/sectorIcon.svg"
import support from "../../../../public/icons/supportIcon.svg"

const payments = [
  [
    payment1,
    payment2,
    payment3,
    payment4,
    payment5,
    payment6,
    payment7,
    payment8,
    payment9,
    payment10,
    payment11,
    payment12,
  ],
  [
    payment1,
    payment2,
    payment3,
    payment4,
    payment5,
    payment6,
    payment7,
    payment8,
    payment9,
    payment10,
    payment11,
    payment12,
  ],
]

const PaymentSection = () => {
  return (
    <div className="paymentSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="160px 0px"
        sx={{
          padding: "100px 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "100px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "100px 2rem",
            gap: "40px 0px",
          },
        }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
          <div className="info">
            <h3>مدفوعات سهلة و آمنة</h3>
            <h2>حلول بلا حدود ...</h2>
            <p>طرق دفع آمنة، تتيح لعملائك التسوق بثقة وأمان في كل عملية شراء</p>
          </div>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={22}
            slidesPerView={1}
            className="mySwiper-dots"
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            loop={true}
            allowTouchMove={true}
            grabCursor={true}
            speed={3500}
          >
            {payments.map((slides, index) => (
              <SwiperSlide key={index}>
                <Grid container spacing={2} justifyContent="center">
                  {slides.map((item, i) => (
                    <Grid size={{ xs: 3, md: 2 }} key={i}>
                      <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <Box
                          sx={{
                            background:
                              "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "14px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "80px",

                            "&:hover": {
                              border: "1px solid #E0E324",
                            },
                          }}
                        >
                          <Image
                            blurDataURL={dynamicBlurDataUrl}
                            placeholder="blur"
                            src={item}
                            alt="company"
                            loading="lazy"
                          />
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

        <Grid
          size={{ xs: 12 }}
          container
          justifyContent="center"
          sx={{
            "@media (max-width: 480px)": {
              flexDirection: "column",
            },
          }}
        >
          <div className="count">
            <div className="content">
              <div className="icon">
                <Image src={store} alt="store" />
              </div>
              <h4>متاجر</h4>
              <span>+300</span>
            </div>
          </div>
          <div className="count">
            <div className="content">
              <div className="icon">
                <Image src={sector} alt="sectorstore" />
              </div>
              <h4>قطاعات مختلفة</h4>
              <span>+20</span>
            </div>
          </div>
          <div className="count">
            <div className="content">
              <div className="icon">
                <Image src={support} alt="support" />
              </div>
              <h4>دعم فني</h4>
              <span>24 / 7</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default PaymentSection
