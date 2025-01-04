import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// Images & Icons
import delivery from "../../../../public/images/store/delivery.png"
import SliderS3 from "@/components/tools/sliders/sliderS3"

import company1 from "../../../../public/images/store/companies/company1.svg"
import company2 from "../../../../public/images/store/companies/company2.svg"
import company3 from "../../../../public/images/store/companies/company3.svg"
import company4 from "../../../../public/images/store/companies/company4.svg"
import company5 from "../../../../public/images/store/companies/company5.svg"
import company6 from "../../../../public/images/store/companies/company6.svg"
import company7 from "../../../../public/images/store/companies/company7.svg"
import company8 from "../../../../public/images/store/companies/company8.svg"
import company9 from "../../../../public/images/store/companies/company9.svg"

const companies = [company1, company2, company3, company4, company5, company6, company7, company8, company9]

const DeliverySection = () => {
  return (
    <div className="deliverySection package">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 12 }}
          justifyContent="center"
          alignItems="center"
          gap="115px"
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
            },
            "@media (max-width: 480px)": {
              padding: "5rem 2rem",
            },
          }}
        >
          <Grid size={{ xs: 12 }} container justifyContent="space-between" alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <div className="delivery_img">
                <Image src={delivery} alt="الشحن والتوصيل" />
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <div className="info">
                <h2>الشحن والتوصيل</h2>
                <p>وفر لعملائك خيارات متعددة للشراء والشحن سواء كان شحناً سريعاًمحلياً دولياً.</p>

                <p>إدارة فعالة لعمليات الشحن والتوصيل لجميع أنواع المنتجات.</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <SliderS3 images={companies} className="swiper-y" />
      </motion.div>
    </div>
  )
}

export default DeliverySection
