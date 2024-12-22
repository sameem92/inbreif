import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion"

// Icons
import feature1 from "../../../public/images/features/feature1.svg"
import feature2 from "../../../public/images/features/feature2.svg"
import feature3 from "../../../public/images/features/feature3.svg"
import feature4 from "../../../public/images/features/feature4.svg"
import feature5 from "../../../public/images/features/feature5.svg"
import feature6 from "../../../public/images/features/feature6.svg"
import feature7 from "../../../public/images/features/feature7.svg"
import feature8 from "../../../public/images/features/feature8.svg"
import feature9 from "../../../public/images/features/feature9.svg"
import feature10 from "../../../public/images/features/feature10.svg"
import feature11 from "../../../public/images/features/feature11.svg"
import feature12 from "../../../public/images/features/feature12.svg"
import feature13 from "../../../public/images/features/feature13.svg"
import feature14 from "../../../public/images/features/feature14.svg"
import feature15 from "../../../public/images/features/feature15.svg"
import feature16 from "../../../public/images/features/feature16.svg"

const features = [
  {
    icon: feature1,
    title: "ربط مع واتساب بيزنس",
  },
  {
    icon: feature2,
    title: "الرسائل النصية (SMS)",
  },
  {
    icon: feature3,
    title: "الشات بوت",
  },
  {
    icon: feature4,
    title: "نظام نقاط البيع (POS)",
  },
  {
    icon: feature5,
    title: "نظام إدارة السائقين",
  },
  {
    icon: feature6,
    title: "إنشاء تطبيق للمتجر",
  },
  {
    icon: feature7,
    title: "استشاري إدارة المتجر",
  },
  {
    icon: feature8,
    title: "إضافة المحتوى",
  },
  {
    icon: feature9,
    title: "تحسين محركات البحث",
  },
  {
    icon: feature10,
    title: "استشاري تسويق المتجر",
  },
  {
    icon: feature11,
    title: "نظام حجز الطاولات",
  },
  {
    icon: feature12,
    title: "متجر متعدد التجار",
  },
  {
    icon: feature13,
    title: "نظام حجز الطاولات",
  },
  {
    icon: feature14,
    title: "متجر متعدد التجار",
  },
  {
    icon: feature15,
    title: "نظام حجز الطاولات",
  },
  {
    icon: feature16,
    title: "متجر متعدد التجار",
  },
]

const featuresSection = () => {
  return (
    <div className="featuresSection">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="82px"
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
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div className="sectionHead">
            <h2>المميزات</h2>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }} container rowSpacing={3} columnSpacing={3}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, md: 4, lg: 3 }}>
              <motion.div
                style={{ width: "100%" }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <div className="feature">
                  <div className="content">
                    <div className="img">
                      <Image src={feature.icon} alt={feature.title} />
                    </div>
                    <h4>{feature.title}</h4>
                  </div>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default featuresSection
