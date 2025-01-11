import React from "react"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

// Components
import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2"

import { motion } from "framer-motion"

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
]

const PaymentSection = () => {
  return (
    <div className="paymentSection">
      <div>
        <Grid
          container
          spacing={{ xs: 6, md: 12 }}
          justifyContent="center"
          alignItems="center"
          gap="160px 40px"
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
              gap: "40px",
            },
            "@media (max-width: 480px)": {
              padding: "5rem 2rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="info">
              <h3>مدفوعات سهلة و آمنة</h3>
              <h2>حلول بلا حدود ...</h2>
              <p>طرق دفع آمنة، تتيح لعملائك التسوق بثقة وأمان في كل عملية شراء</p>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6 }}
            container
            spacing={2}
            sx={{
              height: "100%",
            }}
            display="flex"
            alignItems="center"
            height="100%"
          >
            {payments.map((item, i) => (
              <Grid size={{ xs: 3, sm: 4, lg: 2 }} key={i}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "tween",
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <Box className="hover rd-sm">
                    <div
                      className="content"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80px",
                      }}
                    >
                      <Image src={item} alt="company" />
                    </div>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Grid
            size={{ xs: 12 }}
            container
            justifyContent="center"
            sx={{
              "@media (max-width: 767px)": {
                columnGap: "14px",
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "tween",
                stiffness: 400,
                damping: 10,
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
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "tween",
                stiffness: 400,
                damping: 10,
              }}
            >
              <div className="count">
                <div className="content">
                  <div className="icon">
                    <Image src={sector} alt="sectorstore" />
                  </div>
                  <h4>قطاعات مختلفة</h4>
                  <span>+20</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "tween",
                stiffness: 400,
                damping: 10,
              }}
            >
              <div className="count">
                <div className="content">
                  <div className="icon">
                    <Image src={support} alt="support" />
                  </div>
                  <h4>دعم فني</h4>
                  <span>24 / 7</span>
                </div>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default PaymentSection
