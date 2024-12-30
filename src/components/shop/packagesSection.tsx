import React from "react"

// Components
import Grid from "@mui/material/Grid2"
import { Box } from "@mui/material"

// Icons
import Packages from "../tools/package/packages"

// Types

const plans = [
  {
    title: "البرونزية",
    price: "1500",
    label: "بداية نجاح",
    features: [
      "خطة محتوى شهرية",
      "غلاف شهري للمنصات",
      "15 تصميم",
      "كتابة 15 محتوى إبداعي",
      "تصميم 15 ستوري",
      "دراسة المنافسين",
      "تهيئة الحساب الإعلاني",
      "تصميم 4 فيديو - Reels",
      "بناء الرد الترحيبي الآلي في الحسابات",
      "الرد والتعليق والتفاعل مع الجمهور",
      "متابعة الهاشتاجات والترندات",
      "تقرير شهري بالأداء",
    ],
  },
  {
    title: "الذهبية",
    price: "3500",
    label: "لأداء أقوى",
    features: [
      "خطة محتوى شهرية",
      "غلاف شهري للمنصات",
      "35 تصميم",
      "كتابة 35 محتوى إبداعي",
      "تصميم 35 ستوري",
      "دراسة المنافسين",
      "تهيئة الحساب الإعلاني",
      "إدارة الحملات الإعلانية",
      "تصميم 15 فيديو - Reels",
      "بناء الرد الترحيبي الآلي في الحسابات",
      "تثبيت الموقع على خرائط جوجل",
      "الرد والتعليق والتفاعل مع الجمهور",
      "متابعة الهاشتاجات والترندات",
      "أدوات تحليلية وتسويقية",
      "تقرير شهري بالأداء",
    ],
  },
  {
    title: "الفضية",
    price: "2500",
    label: "وصول أسرع",
    features: [
      "خطة محتوى شهرية",
      "غلاف شهري للمنصات",
      "20 تصميم",
      "كتابة 20 محتوى إبداعي",
      "تصميم 20 ستوري",
      "دراسة المنافسين",
      "تهيئة الحساب الإعلاني",
      "تصميم 8 فيديو - Reels",
      "بناء الرد الترحيبي الآلي في الحسابات",
      "تثبيت الموقع على خرائط جوجل",
      "الرد والتعليق والتفاعل مع الجمهور",
      "متابعة الهاشتاجات والترندات",
      "أدوات تحليلية وتسويقية",
      "تقرير شهري بالأداء",
    ],
  },
]

const PackagesSection = () => {
  return (
    <div className="package" id="packages">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="80px"
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
        <Grid size={{ xs: 12 }}>
          <h2 className="main-secandry-title">باقات تسويق حسابات التواصل الاجتماعي</h2>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              width: "100%",
              "& .MuiTabs-flexContainer": {
                gap: "3.2rem",
              },
            }}
          >
            <Grid container columnSpacing={2} rowSpacing={2} alignItems="flex-end">
              <Packages
                plans={plans}
                className="withMinHeight"
                more={false}
                buttonText="الاشتراك الآن"
                link="http://wa.me/96877276659"
              />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default PackagesSection
