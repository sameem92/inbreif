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
import { Button } from "@mui/material"

const features = [
  {
    icon: feature1,
    title: "تصميم الشعار الخاص بمشروعك",
  },
  {
    icon: feature2,
    title: "برمجة التطبيق ولوحة التحكم بتقنيات حديثة",
  },
  {
    icon: feature3,
    title: "موقع تعريفي خاص بمشروعك",
  },
  {
    icon: feature4,
    title: "استضافة ودومين مجاني لمدة عام",
  },
  {
    icon: feature5,
    title: "تسجيل مشروعك على جوجل ماب",
  },
  {
    icon: feature6,
    title: "شهادة حماية SSL",
  },
  {
    icon: feature7,
    title: "الربط مع شحن محلي أو دولي",
  },
  {
    icon: feature8,
    title: "٢٠ بريد إلكتروني رسمي",
  },
  {
    icon: feature9,
    title: "الربط مع بوابة الرسائل لخدمة OTP و التسويق",
  },
  {
    icon: feature10,
    title: "تصميم احترافي من إختيارك",
  },
  {
    icon: feature11,
    title: "متوافق مع كافة الشاشات",
  },
  {
    icon: feature12,
    title: "متوافق مع محركات البحث SEO",
  },
  {
    icon: feature13,
    title: "الربط مع بوابات التقسيط",
  },
  {
    icon: feature14,
    title: "الربط مع بوابة دفع",
  },
  {
    icon: feature15,
    title: "دعم فني مجاني لمدة سنة",
  },
  {
    icon: feature16,
    title: "تعدد اللغات",
  },
]

const FeaturesSection = () => {
  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target")
  }

  return (
    <div className="featuresSection">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="42px"
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
        <Grid size={{ xs: 12 }} container rowSpacing={{ xs: 2, lg: 3 }} columnSpacing={{ xs: 2, lg: 3 }}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 6, sm: 3 }}>
              <motion.div
                style={{ height: "100%", width: "100%" }}
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
        <Grid size={{ xs: 12 }}>
          <Button onClick={goToWhatsApp}>اطلب الأن تطبيقك</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default FeaturesSection
