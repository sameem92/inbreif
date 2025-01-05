import React from "react"
import Image from "next/image"

// Components
import Grid from "@mui/material/Grid2"
import { Button, useMediaQuery } from "@mui/material"

// Images & Icons
import checked from "../../../../public/icons/checkedIcon.svg"
import available from "../../../../public/icons/availableIcon.svg"

const features = [
  "عدد المنتجات",
  "عدد الطلبات",
  "عدد العملاء",
  "فريق المتجر",
  "بوابات الدفع",
  "الشحن والتوصيل",
  "بوابات التقسيط",
  "اللغات",
  "تخصيص واجهة",
  "انشاء صفحة مخصصة",
  "قسائم شراء",
  "السلات المتروكة",
  "تفعيل الخصومات",
  "دعم محركات البحث",
  "التسويق بالعمولة",
  "ربط جوجل انالتيكس",
  "ربط البيكسل كود",
  "التحليلات",
  "ادارة الفرع",
  "السعر حسب المنطقة",
  "استيراد / تصدير المنتجات",
  "خصم لعملاء التطبيق",
  "خصم الشحن المجاني",
  "تتبع الاوردرات",
  "ادارة المخزون",
  "ادوات حماية المتجر",
  "اصدار وطباعة الفواتير",
  "الدعم واتساب",
]

const packages = [
  {
    title: "الفضية",
    features: [
      "لا محدود",
      "لا محدود",
      "لا محدود",
      "1",
      "checked",
      "checked",
      "checked",
      "لغة واحدة",
      "",
      "3 صفحات",
      "checked",
      "checked",
      "checked",
      "checked",
      "",
      "checked",
      "checked",
      "checked",
      "فرع واحد",
      "",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "أوقات الدوام",
    ],
  },
  {
    title: "الذهبية",
    features: [
      "لا محدود",
      "لا محدود",
      "لا محدود",
      "3",
      "checked",
      "تعدد البوابات",
      "checked",
      "لغتين",
      "checked",
      "حتى 10 صفحات",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "3 فروع",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "٢٤ ساعة",
    ],
  },
]

const FeaturesSection = () => {
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <div className="featuresSection" id="features">
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
        <Grid size={{ xs: 12 }}>
          <div style={{ margin: "0 auto" }}>
            <div className="sectionHead">
              <h2>أهم المزايا والخدمات</h2>
              <p>المزايا المتوفرة في المتجر الإلكتروني الخاص بك والخدمات التي تحتاجها لدعم نشاطك</p>
            </div>
          </div>
        </Grid>

        <Grid
          size={{ xs: 12 }}
          container
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{
            "@media (max-width: 992px)": {
              justifyContent: "center",
              gap: "25px",
            },
            "@media (max-width: 767px)": {
              justifyContent: "center",
              gap: "10px",
            },
          }}
        >
          <Grid size={{ xs: 4 }}>
            <div>
              <div className="featuresCard">
                <h3>المميزات</h3>

                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <Image src={checked} alt="checked" /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>

          {packages.map((item) => (
            <Grid key={item.title} size={{ xs: 4 }}>
              <div>
                <div className={`features`}>
                  <div className="content">
                    <div className="packageHead">
                      <h4>{item.title}</h4>

                      <Button
                        sx={{
                          color: "#e1e42a",
                          background: "transparent",
                          borderColor: "#e1e42a",
                        }}
                      >
                        الاشتراك الآن
                      </Button>
                    </div>

                    <ul>
                      {item.features.map((feature) => (
                        <li key={feature}>
                          {feature !== "checked" ? feature : <Image src={available} alt="available" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default FeaturesSection
