/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

import React, { useEffect, useState } from "react"

// Components
import Grid from "@mui/material/Grid2"
import { Box, Button } from "@mui/material"
import { motion } from "framer-motion"
import Image from "next/image"

// Icons
import checked from "../../../public/icons/checkedIcon.svg"

const plans = [
  {
    title: "هوية بصرية",
    USD: "210",
    SAR: "800",
    KD: "65",
    OMR: "80",
    features: [
      "تصميم شعار احترافي - Logo",
      "إعداد هوية بصرية كاملة ( ألوان + خطوط + رموز )",
      "بطاقة العمل - Business Card",
      "تصميم الختم والورق الرسمي و أظرف المراسلات ",
      "تصميم سندات وفواتير رسمية",
      "تصميم الزي للموظفين والمطبوعات",
      "دليل إرشادي متكامل لإستخدامات الهوية بطريقتها الإحترافية",
    ],
  },
  {
    title: "موشن جرافيك",
    USD: "320",
    SAR: "1200",
    KD: "100",
    OMR: "120",
    features: [
      "كتابة المحتوى - Script Writing",
      "إنشاء القصة - Story Boarding",
      "تصميم العناصر البصرية",
      "تصميم رسومات للشخصيات",
      "تضمين النصوص والشعارات",
      "تعليق صوتي احترافي بلغات ولهجات متنوعة",
      "موسيقى خلفيةو تأثيرات صوتية",
    ],
  },
  {
    title: "مونتاج فيديو",
    USD: "135",
    SAR: "500",
    KD: "40",
    OMR: "50",
    features: [
      "كتابة المحتوى - Script Writing",
      "تجميع المواد من فيديوهات وصور",
      "تحرير وتحسين جودة المواد",
      "إضافة التأثيرات البصرية",
      "إضافة نصوص وعناوين متحركة",
      "توفير الصيغ المناسبة لمختلف المنصات",
      "توفير المقاسات مختلفة للمنصات",
    ],
  },
]

const currencyMap = {
  default: { code: "USD", symbol: "دولار" },
  KSA: { code: "SAR", symbol: "ر.س" },
  KW: { code: "KD", symbol: "د.ك" },
  OM: { code: "OMR", symbol: "ر.ع" },
}

const PackagesSection = () => {
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        // Example with `ip-api`
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()

        switch (data.country_code) {
          case "SA": // Saudi Arabia
            setCurrency(currencyMap.KSA)
            break
          case "KW": // Kuwait
            setCurrency(currencyMap.KW)
            break
          case "OM": // Oman
            setCurrency(currencyMap.OM)
            break
          default:
            setCurrency(currencyMap.default) // Default to USD
        }
      } catch (error) {
        console.error("Error fetching user location:", error)
        setCurrency(currencyMap.default)
      }
    }

    fetchUserLocation()
  }, [])

  const goToSite = (link) => {
    window.open(link, "_target")
  }

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
          <h2 className="main-secandry-title">باقات التصميم و الفيديو</h2>
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
            <Grid container columnSpacing={2} rowSpacing={6}>
              {plans?.map((plan, i) => (
                <Grid key={plan.title} size={{ xs: 12, sm: 4 }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "tween",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <div className={`plancard planCardS2 ${i === 1 ? "gold" : ""}`}>
                      <div className="content">
                        <h4>{plan.title}</h4>

                        {currency && (
                          <div className="plan_price">
                            <span>{plan[currency.code]}</span>
                            <span>{currency.symbol}</span>
                          </div>
                        )}

                        <ul>
                          {plan?.features?.map((feature) => (
                            <li key={feature}>
                              <Image src={checked} alt="checked" /> <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          sx={{
                            color: "#001014",
                            background: i === 1 ? "#E0E324" : "transparent",
                            borderColor: i === 1 ? "transparent" : "#e1e42a",
                          }}
                          onClick={() => goToSite("http://wa.me/96877276659")}
                        >
                          اطلب الأن
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default PackagesSection
